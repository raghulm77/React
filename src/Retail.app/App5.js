// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignupForm from "../SignUpForm";
import RetailPage from "../RetailPage";

const App = () => {
  const [isAuthenticated, setAuth] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route
          path="/retail"
          element={
            isAuthenticated ? (
              <RetailPage setAuth={setAuth} />
            ) : (
              <Login setAuth={setAuth} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
