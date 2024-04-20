import React, { useState } from 'react';
import '../App.css'; // Import app.css
import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';


function Login() {
  // const { authData, updateAuthData } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Mock authentication logic
    if (username === 'a' && password === 'a') {
      setLoggedIn(true);
      setError('');
    } else {
      setLoggedIn(false);
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className="center"> {/* Apply center class */}
      {loggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <button><Link to={`/`}>form</Link></button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      )}
    </div>
  );
}

export default Login;
