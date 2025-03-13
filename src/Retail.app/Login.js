// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./studies.css";

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5000/users");
      const user = response.data.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setAuth(true);
        localStorage.setItem("isAuthenticated", "true");
        navigate("/retail");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Error connecting to the server.");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <button className="signup-btn" onClick={() => navigate("/signup")}>
        Sign Up
      </button>
    </div>
  );
};

export default Login;
