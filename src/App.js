import React, { Suspense, useState } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./styles.css";

// Lazy load the components
const About = React.lazy(() => import("./About"));
const Contact = React.lazy(() => import("./Contact"));

const Home = () => {
  const { theme, toggleTheme } = useTheme();
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className={`container ${theme}`}>
      <h1>Welcome to the {theme} theme!</h1>
      <button className="toggle-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <button className="show-btn" onClick={() => setShowAbout(!showAbout)}>
        Show About
      </button>
      <button className="show-btn" onClick={() => setShowContact(!showContact)}>
        Show Contact
      </button>

      {showAbout && (
        <Suspense fallback={<div className="loading">Loading About...</div>}>
          <About />
        </Suspense>
      )}

      {showContact && (
        <Suspense fallback={<div className="loading">Loading Contact...</div>}>
          <Contact />
        </Suspense>
      )}
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<div className="loading">Loading App...</div>}>
        <Home />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
