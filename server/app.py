from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
import numpy as np
import cv2
import mediapipe as mp
import pickle
import os
import threading

app = Flask(__name__)
CORS(app)

# ── Model load ────────────────────────────────────────────────────────────────
BASE_DIR   = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, '..', 'models', 'model.pkl')
try:
    with open(model_path, 'rb') as f:
        model = pickle.load(f)
    print(f"[startup] Model loaded. Expects {model.n_features_in_} features.")
except Exception as e:
    model = None
    print(f"[startup] WARNING: model not loaded — {e}")

# ── MediaPipe ─────────────────────────────────────────────────────────────────
mp_hands = mp.solutions.hands
hands_detector = mp_hands.Hands(
    static_image_mode=True,
    max_num_hands=1,        # was 2 — halves processing time on free CPU
    min_detection_confidence=0.5,
)

# ── Busy guard ────────────────────────────────────────────────────────────────
# Prevents the single Gunicorn worker from queuing multiple heavy frames.
# If a prediction is already running, immediately return 503 so the client
# skips this frame instead of piling up work that causes timeouts.
_lock = threading.Lock()

# ── Health / wake-up endpoint ─────────────────────────────────────────────────
@app.route('/', methods=['GET'])
def health():
    return jsonify({'status': 'ok', 'model': model is not None}), 200

# ── Prediction endpoint ───────────────────────────────────────────────────────
@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({'error': 'Model not loaded'}), 500

    # If already processing a frame, tell the client to skip this one.
    if not _lock.acquire(blocking=False):
        return jsonify({'prediction': '', 'skipped': True}), 503

    try:
        # ── Get frame ────────────────────────────────────────────────────────
        image_data = request.form.get('frame', '')
        if not image_data:
            return jsonify({'error': 'No frame in request'}), 400

        # Strip the data-URL prefix if present ("data:image/jpeg;base64,...")
        if ',' in image_data:
            image_data = image_data.split(',', 1)[1]

        # ── Decode image ─────────────────────────────────────────────────────
        try:
            image_bytes = base64.b64decode(image_data)
        except Exception:
            return jsonify({'error': 'Invalid base64'}), 400

        nparr = np.frombuffer(image_bytes, np.uint8)
        img   = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        if img is None:
            return jsonify({'error': 'Failed to decode image — check JPEG encoding'}), 400

        # ── Resize to max 320px (was 640) — 4× faster mediapipe on free CPU ─
        max_dim = 320
        h, w = img.shape[:2]
        if max(h, w) > max_dim:
            scale = max_dim / max(h, w)
            img = cv2.resize(img, (int(w * scale), int(h * scale)),
                             interpolation=cv2.INTER_AREA)

        # ── MediaPipe hand detection ──────────────────────────────────────────
        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        results = hands_detector.process(img_rgb)

        if not results.multi_hand_landmarks:
            return jsonify({'prediction': ''})   # no hands visible

        # ── Build feature vector ──────────────────────────────────────────────
        data = []
        for hand_landmarks in results.multi_hand_landmarks:
            for point in mp_hands.HandLandmark:
                lm = hand_landmarks.landmark[point]
                data.extend([lm.x, lm.y, lm.z])

        expected = model.n_features_in_
        if len(data) < expected:
            # Pad with zeros if only one hand detected but model expects two
            data.extend([0.0] * (expected - len(data)))
        elif len(data) > expected:
            data = data[:expected]

        # ── Predict ───────────────────────────────────────────────────────────
        prediction = model.predict([data])[0]
        print(f"[predict] → {prediction}")
        return jsonify({'prediction': str(prediction)})

    except Exception as e:
        print(f"[predict] ERROR: {e}")
        return jsonify({'error': str(e)}), 500

    finally:
        _lock.release()


if __name__ == '__main__':
    app.run(debug=False, threaded=False, host='0.0.0.0', port=5000)
