from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
import requests

app = Flask(__name__)

# Configure MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'test'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'circlesdb'

mysql = MySQL(app)

@app.route('/')
def hello_world():
    return 'Hello, World! This Flask server is running.'

# Function to handle GET request
@app.route('/submit_data', methods=['GET'])
def get_data():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM submitted_data")
    data = cur.fetchall()
    cur.close()
    return jsonify(data)

# Endpoint to handle submitting data from the app
@app.route('/submit_data', methods=['POST'])
def submit_data():
    if request.method == 'POST':
        data = request.json

        # Example of inserting data into a MySQL table
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO submitted_data (concerns, goals, cash_flow, portfolio, legacy, names_of) VALUES (%s, %s, %s, %s, %s, %s)", 
                    (data['concerns'], data['goals'], data['cash_flow'], data['portfolio'], data['legacy'], data['names_of']))
        mysql.connection.commit()
        cur.close()

        return jsonify({'message': 'Data submitted successfully'}), 200
    
# Function to handle PUT request for updating data by ID
@app.route('/submit_data/<int:id>', methods=['PUT'])
def update_data(id):
    data = request.json
    cur = mysql.connection.cursor()
    cur.execute("UPDATE submitted_data SET concerns=%s, goals=%s, cash_flow=%s, portfolio=%s, legacy=%s, names_of=%s WHERE id=%s",
                (data['concerns'], data['goals'], data['cash_flow'], data['portfolio'], data['legacy'], data['names_of'], id))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Data updated successfully'})

# Function to handle DELETE request for deleting data by ID
@app.route('/submit_data/<int:id>', methods=['DELETE'])
def delete_data(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM submitted_data WHERE id=%s", (id,))
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Data with ID {} deleted successfully'.format(id)})

if __name__ == '__main__':
    app.run(debug=True)
