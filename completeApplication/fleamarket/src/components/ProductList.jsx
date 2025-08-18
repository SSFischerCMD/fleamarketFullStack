import React, { useEffect, useState } from "react";

function ProductList({ searchTerm }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/Demo/products?search=${encodeURIComponent(searchTerm)}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      })
      .catch(error => {
        console.error("Fehler beim Abrufen der Produkte:", error);
      });
  }, [searchTerm]); // <- nur neu laden, wenn sich searchTerm ändert

  return (
    <div className="product-list">
      
<p>Aktueller Suchbegriff: {searchTerm}</p>

      {products.length === 0 ? (
        <p>Keine Produkte gefunden. {searchTerm}</p>
      ) : (
        products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.images[0]} alt={product.name} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><b>{product.price} €</b></p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;


/* 
Der Befehl .then() ist ein zentraler Bestandteil der Promise-Programmierung in JavaScript. 
Er wird verwendet, um asynchrone Operationen zu verarbeiten – also solche, die nicht sofort abgeschlossen sind, 
wie z. B. das Laden von Daten von einem Server.

Grundprinzip von .then()
Wenn du eine Funktion hast, die ein Promise zurückgibt, kannst du mit .then() festlegen, was passieren soll, 
wenn das Promise erfolgreich abgeschlossen wurde.

alternative:
useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Fehler beim Laden:", error);
    }
  }

  fetchData();
}, []);



import { useState } from "react";

function MyComponent() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Eingegebener Text:", inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>Absenden</button>
    </div>
  );
}

*/