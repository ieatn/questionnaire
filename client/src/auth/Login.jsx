import React from 'react';
import { Button } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import { Link } from 'react-router-dom';

function Login() {
  const { isAuthenticated } = useAuth0(); // Check authentication status with useAuth0 hook

  return (
    <div className="flex-column-center"> {/* Apply flex-column-center class */}
      {isAuthenticated ? (
        <React.Fragment>
          <LogoutButton />
          <Profile />
          <Link to={"/"}>Return</Link>
        </React.Fragment>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}

export default Login;
