import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Page des détails d’un produit
export default function ProductDetails() {
  const { id } = useParams(); // Récupère l’ID dans l’URL
  const [product, setProduct] = useState(null);

  // Charger les infos du produit depuis l’API
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  // Si le produit n’est pas encore chargé
  if (!product) return <p>Chargement...</p>;

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} width="150" />
      <p>{product.description}</p>
      <p>
        <strong>Prix :</strong> {product.price} $
      </p>
    </div>
  );
}
