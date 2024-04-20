import React, { useState } from 'react';
import App1 from './App1';
import Login from './auth/Login';
import SubmittedBox from './components/SubmittedBox';
import { FormProvider } from './contexts/FormContext'; // Import the FormProvider
import { AuthProvider } from './contexts/AuthContext';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App1 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/submitted",
    element: <SubmittedBox />,
  },
]);


function App() {

  return (
    <>
      <AuthProvider>
        <FormProvider> 
          <RouterProvider router={router} />
        </FormProvider>
      </AuthProvider>
    </>
  );
}

export default App;
