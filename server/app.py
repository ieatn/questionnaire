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
@app.route('/submit_data/<string:user>', methods=['GET'])
def get_data_by_user(user):
    cur = mysql.connection.cursor()
    cur.execute("SELECT id, concerns, goals, cash_flow, portfolio, legacy, names_of FROM submitted_data WHERE user = %s", (user,))
    data = cur.fetchone()
    cur.close()

    if data:
        # Extracting values from the fetched data
        id = data[0]
        concerns = data[1]
        goals = data[2]
        cash_flow = data[3]
        portfolio = data[4]
        legacy = data[5]
        names_of = data[6]

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
        return jsonify({'message': 'Data not found for the given user'}), 404
# Endpoint to handle submitting data from the app
@app.route('/submit_data', methods=['POST'])
def submit_data():
    if request.method == 'POST':
        data = request.json

        # Extract user from data
        user = data.get('user', None)

        # Check if user is provided in the data
        if user is None:
            return jsonify({'error': 'User parameter is missing'}), 400

        # Check if a record with the same user already exists
        cur = mysql.connection.cursor()
        cur.execute("SELECT id FROM submitted_data WHERE user = %s", (user,))
        existing_record = cur.fetchone()
        cur.close()

        if existing_record:
            # Return a response indicating that a record with the user already exists
            return jsonify({'message': 'A record has already been submitted for this user'}), 409

        # Example of inserting data into a MySQL table
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO submitted_data (concerns, goals, cash_flow, portfolio, legacy, names_of, user) VALUES (%s, %s, %s, %s, %s, %s, %s)", 
                    (data['concerns'], data['goals'], data['cash_flow'], data['portfolio'], data['legacy'], data['names_of'], user))
        mysql.connection.commit()
        cur.close()

        return jsonify({'message': 'Data submitted successfully'}), 200

# Function to handle PUT request for updating data by ID
@app.route('/submit_data/<string:user>', methods=['PUT'])
def update_data(user):
    data = request.json
    cur = mysql.connection.cursor()

    # Update the record with matching user
    cur.execute("UPDATE submitted_data SET concerns=%s, goals=%s, cash_flow=%s, portfolio=%s, legacy=%s, names_of=%s WHERE user=%s",
                (data['concerns'], data['goals'], data['cash_flow'], data['portfolio'], data['legacy'], data['names_of'], user))
    
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Data updated successfully'})

# Function to handle DELETE request for deleting data by ID
@app.route('/submit_data/<string:user>', methods=['DELETE'])
def delete_data(user):
    cur = mysql.connection.cursor()

    # Delete the record with matching user
    cur.execute("DELETE FROM submitted_data WHERE user=%s", (user,))
    
    mysql.connection.commit()
    cur.close()
    return jsonify({'message': 'Data with user {} deleted successfully'.format(user)})

if __name__ == '__main__':
    app.run(debug=True)
