import React from "react"; // Import de React
import ReactDOM from "react-dom/client"; // Import du module pour afficher l'app
import App from "./App"; // Import du composant principal App

// Création de la racine React (liaison avec index.html)
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendu du composant principal App dans la page
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
