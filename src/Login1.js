import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="page-container">
      <h1>Welcome to Our Website</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>

      <div className="content-section">
        <h2>Home</h2>
        <p>Discover our platform and explore the best features we offer.</p>

        <h2>About</h2>
        <p>Learn more about our mission, vision, and what drives us forward.</p>

        <h2>Services</h2>
        <p>
          We provide top-notch solutions, including web development and SEO
          optimization.
        </p>
      </div>
    </div>
  );
}
