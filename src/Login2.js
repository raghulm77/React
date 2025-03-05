import { useNavigate } from "react-router-dom";
import "./Studies.css";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/catalogue");
  };

  return (
    <div className="login-container">
      <h1>Welcome to ShopEase</h1>
      <div className="login-box">
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button onClick={handleLogin}>Login</button>
        <p className="guest-option" onClick={handleLogin}>
          Continue as Guest
        </p>
      </div>
    </div>
  );
}
