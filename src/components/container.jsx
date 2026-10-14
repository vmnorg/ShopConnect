import React from "react";

// Composant simple servant à contenir d'autres éléments avec un fond gris clair
export default function Container({ children }) {
  return (
    <div
      style={{
        padding: "20px", // marge interne
        backgroundColor: "#f7f7f7", // couleur de fond douce
        minHeight: "100vh", // prend toute la hauteur visible
      }}
    >
      {children}
    </div>
  );
}
