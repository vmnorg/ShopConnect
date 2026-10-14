import React from "react";
// Jbnahom mn App.jsx l hna bach nkhdmo bihom f page d'accueil
import Card from "../components/card"; 
import Container from "../components/container";

export default function Home() {
  return (
    <Container>
      <h1>🛍️ ShopConnect</h1>
      {/* Tâche pratique 1 */}
      <p>Réalisé par Med Amine Aatiq Le 14/10/2026</p>
      <p>Bienvenue sur ShopConnect, votre boutique de vêtements en ligne !</p>

      {/* Les cartes dyal Partie 2 */}
      <Card title="Nos produits">
        <p>Découvrez une variété de vêtements tendance à petits prix.</p>
      </Card>

      <Card title="Nos services">
        <ul>
          <li>Livraison rapide</li>
          <li>Support client 24/7</li>
          <li>Paiement sécurisé</li>
        </ul>
      </Card>

      {/* Tâche pratique 2 */}
      <Card title="Contact">
        <p>Email : amineprcsp@gmail.com</p>
      </Card>
    </Container>
  );
}