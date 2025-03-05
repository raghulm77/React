import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Studies.css";
import Login from "./Login1";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}
