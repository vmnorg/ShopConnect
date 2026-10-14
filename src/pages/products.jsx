import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

// Composant page "Produits"
export default function Products() {
  //  Déclaration de l'état (state)
  // products : contient la liste complète
  // filteredProducts : contient la liste après filtrage
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //  États pour les filtres
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  //  Charger les produits depuis l’API (simule un backend Laravel)
  useEffect(() => {
    // Bedelna l'lien mn FakeStoreAPI l'API locale dyal Laravel
    fetch("http://127.0.0.1:8000/api/products") 
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error("Erreur API :", error));
  }, []);

  //  Fonction de filtrage
  const handleFilter = () => {
    let result = products;

    // Filtrage par recherche texte
    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filtrage par prix minimum
    if (minPrice !== "") {
      result = result.filter((p) => p.price >= Number(minPrice));
    }

    // Filtrage par prix maximum
    if (maxPrice !== "") {
      result = result.filter((p) => p.price <= Number(maxPrice));
    }

    // Mise à jour de la liste filtrée
    setFilteredProducts(result);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2> Nos Produits</h2>

      {/* Zone de filtres */}
      <div
        style={{
          marginBottom: "20px",
          backgroundColor: "#f0f0f0",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <h4> Filtres</h4>
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Prix min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          style={{ marginRight: "10px", width: "90px" }}
        />
        <input
          type="number"
          placeholder="Prix max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          style={{ marginRight: "10px", width: "90px" }}
        />
        <button onClick={handleFilter}>Filtrer</button>
      </div>

      {/* Liste des produits filtrés */}
      {filteredProducts.length > 0 ? (
        <ul>
          {filteredProducts.map((p) => (
            <li key={p.id} style={{ marginBottom: "10px" }}>
              <Link to={`${p.id}`}>
                {p.name} — {p.price} $
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun produit trouvé.</p>
      )}

      {/* Affichage des détails d’un produit */}
      <Outlet />
    </div>
  );
}

