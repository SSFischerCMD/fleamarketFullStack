import React, { useEffect, useState } from "react";
import { FleamarketControllerApi } from "../api/api.ts";

function ProductList({ searchTerm }) {

  const api = new FleamarketControllerApi();
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
Grundprinzip von .then()
Wenn du eine Funktion hast, die ein Promise zurückgibt, kannst du mit .then() festlegen, was passieren soll, wenn das Promise erfolgreich abgeschlossen wurde.

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



*/