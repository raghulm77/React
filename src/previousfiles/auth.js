import React, { useState } from "react";
import "./auth.css";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = () => {
    if (!email || !password) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Simulate authentication logic
    if (isLogin) {
      if (email === "user@example.com" && password === "password") {
        setErrorMessage("");
        alert("Login successful!");
      } else {
        setErrorMessage("Invalid credentials.");
      }
    } else {
      alert("Registration successful!");
      setErrorMessage("");
      setIsLogin(true); // Switch to login mode after successful registration
    }
  };

  return (
    <div>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!isLogin && (
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      )}
      <button onClick={handleSubmit}>{isLogin ? "Login" : "Register"}</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <p
        onClick={() => setIsLogin(!isLogin)}
        style={{ cursor: "pointer", color: "blue" }}
      >
        {isLogin
          ? "Need an account? Register here."
          : "Already have an account? Login here."}
      </p>
    </div>
  );
};

export default AuthForm;
