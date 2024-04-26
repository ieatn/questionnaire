import React, { useState } from "react";
import App1 from "./App1";
import Login from "./auth/Login";
import SubmittedBox from "./components/SubmittedBox";
import { FormProvider } from "./contexts/FormContext"; // Import the FormProvider
import { AuthProvider } from "./contexts/AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

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
      <Auth0Provider
        domain="dev-ttxzeczaiblwyk42.us.auth0.com"
        clientId="U5NDooTASDX1Wv1rIQhIW5uTNikx5sd7"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <FormProvider>
          <RouterProvider router={router} />
        </FormProvider>
      </Auth0Provider>
    </>
  );
}

export default App;
