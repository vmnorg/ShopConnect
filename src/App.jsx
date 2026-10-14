import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact"; // Tâche pratique 3
import { ThemeContext } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Router>
        <div>
          <nav
            style={{
              backgroundColor: "#333",
              color: "white",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            <Link to="/" style={{ color: "white", marginRight: "15px" }}>
              Accueil
            </Link>
            <Link to="/about" style={{ color: "white", marginRight: "15px" }}>
              À propos
            </Link>
            <Link to="/products" style={{ color: "white", marginRight: "15px" }}>
              Produits
            </Link>
            {/* Tâche pratique 3 - Le lien f navbar */}
            <Link to="/contact" style={{ color: "white" }}>
              Contact
            </Link>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />}>
              <Route path=":id" element={<ProductDetails />} />
            </Route>
            {/* Tâche pratique 3 - La route dyal l'page */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}