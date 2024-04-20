import React, { createContext, useState } from 'react';

// Create a new context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  // State to store authentication data
  const [authData, setAuthData] = useState({
    username: '',
    password: '',
    id: null,
  });

  // Function to update authentication data
  const updateAuthData = (username, password, id) => {
    setAuthData({ username, password, id });
  };

  return (
    <AuthContext.Provider value={{ authData, updateAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
