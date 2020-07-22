import time
from flask import Flask
from datetime import datetime

app = Flask(__name__)


@app.route('/api/time')
def get_current_time():
    return {'time': str(datetime.now())}
