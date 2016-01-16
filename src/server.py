from flask import Flask, request, jsonify
app = Flask(__name__)

def get_args():
  num1 = request.args.get("num1")
  num2 = request.args.get("num2")
  return (int(num1), int(num2))

def result(num):
  return jsonify(result = num)

@app.route("/")
def index():
	return app.send_static_file('index.html')

@app.route('/<path:path>')
def static_files(path):
  return app.send_static_file(path)

##### Business logic
##################################################

@app.route("/add/")
def add():
  a, b = get_args()
  return result(a+b)

@app.route("/subtract/")
def subtract():
  a, b = get_args()
  return result(a-b)

##################################################

if __name__ == "__main__":
    app.run()