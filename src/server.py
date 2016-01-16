from flask import Flask, request, jsonify
app = Flask(__name__)

def get_args():
  num1 = request.args.get("num1")
  num2 = request.args.get("num2")
  return (int(num1), int(num2))

@app.route("/")
def index():
	return app.send_static_file('index.html')

@app.route('/<path:path>')
def static_files(path):
  return app.send_static_file(path)

##################################################

@app.route("/add/")
def add():
  a, b = get_args()
  return jsonify(result = a+b)

##################################################

if __name__ == "__main__":
    app.run()