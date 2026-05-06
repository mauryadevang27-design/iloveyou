from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def home():
    # Ye index.html ko templates folder se uthayega
    return render_template('index.html')


@app.route('/no.html')
def no_page():
    return render_template('no.html')

@app.route('/no1.html')
def no1_page():
    return render_template('no1.html')

@app.route('/no2.html')
def no2_page():
    return render_template('no2.html')

@app.route('/yes.html')
def yes_page():
    return render_template('yes.html')
    
# Render ke liye port handling
if __name__ == "__main__":
    # Render environment variable se port uthata hai, default 5000
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)