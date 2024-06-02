from flask import Flask, render_template, request, redirect
import mysql.connector

app = Flask(__name__)

# Konfigurasi koneksi MySQL
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="mySQL27",
    database="mydatabase",
    # port=3307
)

@app.route('/')
def index():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    return render_template('index.html', users=users)

@app.route('/add', methods=['POST'])
def add_user():
    name = request.form['name']
    email = request.form['email']
    cursor = db.cursor()
    cursor.execute("INSERT INTO users (name, email) VALUES (%s, %s)", (name, email))
    db.commit()
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
