import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Studies.css";
import Login from "./Login2";
import Catalogue from "./Catalogue";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </Router>
  );
}
