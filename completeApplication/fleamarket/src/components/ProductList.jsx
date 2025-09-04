import React, { useEffect, useState } from "react";
import { DemoControllerApi } from "../api/api.ts";

function ProductList({ searchTerm }) {

  const api = new DemoControllerApi();
  const [products, setProducts] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    api.searchProducts(searchTerm)
      .then(data => {
        console.log(data);
        setProducts(data);
      })
      .catch(error => {
        console.error(error);
        setError("Unable to load products.");
      });
  }, [searchTerm]);

  return (
    <div id="thisOne" className="product-list">
      {products.data?.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.images[0]} alt={product.name}></img>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p><b>{product.price} €</b></p>
          <p className="subtitle">{product.condition}</p>
        </div>
      ))}  
      {error && <p className="error">{error}</p>}
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