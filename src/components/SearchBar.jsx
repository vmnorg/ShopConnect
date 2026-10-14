import React, { useRef } from "react";

// Barre de recherche avec focus automatique
export default function SearchBar() {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} placeholder="Tapez pour rechercher..." />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}
