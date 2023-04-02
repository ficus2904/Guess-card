from flask import Flask, render_template, Response, url_for, request

app = Flask(__name__)

@app.route("/")
def index():
    context = {'1':'Evangelion', '2':'Harry Potter', '3':'Fullmetal Alchemist','4':'Lord of the Rings'}
    return render_template("index.html",context=context)

@app.route("/game")
def game():
    return render_template("game.html")

if __name__ == "__main__":
    app.run(debug=False)
