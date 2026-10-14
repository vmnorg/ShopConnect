import React from "react";

// Définition du composant Card qui reçoit deux props : title et children
export default function Card({ title, children }) {
  return (
    // Conteneur principal avec un style simple
    <div
      style={{
        border: "1px solid #ddd", // Bordure grise
        borderRadius: "10px", // Coins arrondis
        padding: "15px", // Espacement interne
        margin: "10px", // Espacement externe
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)", // Ombre légère
        backgroundColor: "white", // Fond blanc
      }}
    >
      {/* Si un titre est fourni, on l'affiche */}
      {title && <h3>{title}</h3>}

      {/* Affichage du contenu passé entre les balises <Card> ... </Card> */}
      {children}
    </div>
  );
}
