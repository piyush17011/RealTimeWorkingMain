import multiprocessing

# Use only 1 worker — free Render has 512MB RAM, mediapipe alone uses ~300MB.
# Two workers = OOM = SIGKILL. One worker handles requests sequentially which
# is fine since we gate concurrent requests on the client side.
workers = 1

# gevent allows the single worker to handle multiple connections without
# blocking — the worker won't timeout while waiting on mediapipe.
worker_class = "gevent"

# How long a *single request* can take before Gunicorn kills it.
# mediapipe on a cold frame can take 5-10s on free CPU. Set to 120s to be safe.
timeout = 120

# How long the server has to start up before Gunicorn gives up.
graceful_timeout = 30

# Keep-alive for persistent connections.
keepalive = 5

# Bind to the port Render injects via $PORT env var.
import os
bind = f"0.0.0.0:{os.environ.get('PORT', '10000')}"

# Log to stdout so Render's log viewer picks it up.
accesslog = "-"
errorlog  = "-"
loglevel  = "info"
