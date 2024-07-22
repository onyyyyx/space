from flask import *

app = Flask(__name__)

@app.route("/")
def root():
  return "Hello World"
  
app.run("localhost","8000")