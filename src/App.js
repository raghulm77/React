import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./styles.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState("home");

  return (
    <Router>
      <div className={darkMode ? "app dark" : "app light"}>
        <nav>
          <Link to="#" onClick={() => setActivePage("home")}>
            Home
          </Link>
          <Link to="#" onClick={() => setActivePage("about")}>
            About
          </Link>
          <Link to="#" onClick={() => setActivePage("contact")}>
            Contact
          </Link>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </nav>
        <div className="content">
          {activePage === "home" && <Home />}
          {activePage === "about" && <About />}
          {activePage === "contact" && <Contact />}
        </div>
      </div>
    </Router>
  );
}