from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
import numpy as np
import cv2
import mediapipe as mp
import pickle
import os

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(BASE_DIR, '..', 'models', 'model.pkl')

try:
    with open(model_path, 'rb') as file:
        model = pickle.load(file)
except Exception as e:
    model = None

mp_hands = mp.solutions.hands

# --- FIX: Initialize Hands ONCE as a module-level singleton ---
# Previously, a new Hands() instance was created on every /predict request,
# causing mediapipe to accumulate memory and exceed limits.
hands_detector = mp_hands.Hands(
    static_image_mode=True,
    max_num_hands=2,
    min_detection_confidence=0.5
)

@app.route('/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({'error': 'Model not loaded'}), 500

    try:
        if 'frame' not in request.form:
            return jsonify({'error': 'No frame in request'}), 400

        image_data = request.form['frame']
        if not image_data:
            return jsonify({'error': 'Received empty image data'}), 400

        # Strip data URL prefix if present (e.g. "data:image/jpeg;base64,...")
        if ',' in image_data:
            image_data = image_data.split(',', 1)[1]

        image_bytes = base64.b64decode(image_data)
        nparr = np.frombuffer(image_bytes, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        if img is None:
            return jsonify({'error': 'Failed to decode image'}), 400

        # Resize to reduce memory usage on large frames
        max_dim = 640
        h, w = img.shape[:2]
        if max(h, w) > max_dim:
            scale = max_dim / max(h, w)
            img = cv2.resize(img, (int(w * scale), int(h * scale)))

        img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        # Reuse the singleton hands_detector instead of creating a new one each time
        results = hands_detector.process(img_rgb)

        if not results.multi_hand_landmarks:
            return jsonify({'prediction': ''})

        data = []
        for hand_landmarks in results.multi_hand_landmarks:
            for point in mp_hands.HandLandmark:
                landmark = hand_landmarks.landmark[point]
                data.extend([landmark.x, landmark.y, landmark.z])

        if len(data) != model.n_features_in_:
            return jsonify({'error': 'Incorrect input size for model'})

        prediction = model.predict([data])[0]
        return jsonify({'prediction': prediction})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    # Use threaded=False to avoid race conditions on the shared hands_detector
    # (mediapipe is not thread-safe for shared instances)
    app.run(debug=False, threaded=False)
