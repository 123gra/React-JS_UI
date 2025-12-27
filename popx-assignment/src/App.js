import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./screens/WelcomeScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import LoginScreen from "./screens/LoginScreen";
import AccountSettingsScreen from "./screens/AccountSettingsScreen";
import LayoutWithComments from "./screens/LayoutWithComments"; 
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutWithComments>
              <WelcomeScreen />
            </LayoutWithComments>
          }
        />
        <Route
          path="/create-account"
          element={
            <LayoutWithComments>
              <CreateAccountScreen />
            </LayoutWithComments>
          }
        />
        <Route
          path="/login"
          element={
            <LayoutWithComments>
              <LoginScreen />
            </LayoutWithComments>
          }
        />
        <Route
          path="/account-settings"
          element={
            <LayoutWithComments>
              <AccountSettingsScreen />
            </LayoutWithComments>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
