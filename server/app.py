from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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
    cur.execute("SELECT concerns, goals, cash_flow, portfolio, legacy, names_of FROM submitted_data")
    data = cur.fetchall()
    cur.close()

    # Splitting the fetched data into separate arrays
    concerns = [item[0] for item in data]
    goals = [item[1] for item in data]
    cash_flow = [item[2] for item in data]
    portfolio = [item[3] for item in data]
    legacy = [item[4] for item in data]
    names_of = [item[5] for item in data]

    return jsonify({
        'concerns': concerns,
        'goals': goals,
        'cash_flow': cash_flow,
        'portfolio': portfolio,
        'legacy': legacy,
        'names_of': names_of
    })


# Function to handle GET request for fetching data based on ID
@app.route('/submit_data/<int:id>', methods=['GET'])
def get_data_by_id(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT concerns, goals, cash_flow, portfolio, legacy, names_of FROM submitted_data WHERE id = %s", (id,))
    data = cur.fetchone()
    cur.close()

    if data:
        # Extracting values from the fetched data
        concerns = data[0]
        goals = data[1]
        cash_flow = data[2]
        portfolio = data[3]
        legacy = data[4]
        names_of = data[5]

        return jsonify({
            'id': id,
            'concerns': concerns,
            'goals': goals,
            'cash_flow': cash_flow,
            'portfolio': portfolio,
            'legacy': legacy,
            'names_of': names_of
        })
    else:
        return jsonify({'message': 'Data not found for the given ID'}), 404


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
