import React, { useState, useMemo } from "react";

// Petit composant de calcul
export default function Cart() {
  const [price] = useState(100); // prix fixe
  const [qty, setQty] = useState(1);

  // useMemo évite de recalculer inutilement
  const total = useMemo(() => price * qty, [price, qty]);

  return (
    <div>
      <h3> Calcul du total</h3>
      <p>Prix unitaire : {price} $</p>
      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
      />
      <p>Total : {total} $</p>
    </div>
  );
}

