import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login2";
import Catalogue from "./Catalogue";
import ProductCard from "./ProductCard";
import "./Studies.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Login2" element={<Login />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/product/:id" element={<ProductCard />} />{" "}
        {/* Updated name */}
      </Routes>
    </Router>
  );
}
