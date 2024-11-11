from flask import Flask, render_template

app = Flask(__name__)

# Главная страница
@app.route('/')
def index():
    return render_template('index.html')

# Страница матчей
@app.route('/matches')
def matches():
    return render_template('matches.html')

# Страница с таблицей
@app.route('/standings')
def standings():
    return render_template('standings.html')

if __name__ == "__main__":
    app.run(debug=True)
