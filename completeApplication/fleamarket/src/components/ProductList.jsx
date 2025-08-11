
import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/Demo/products")
      .then(response => response.json())
      .then(data => {
        console.log("Produkte:", data);
        setProducts(data);
      })
      .catch(error => console.error("Fehler beim Laden der Produkte:", error));
  }, []);

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>Keine Produkte gefunden.</p>
      ) : (
        products.map(product => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Preis: {product.price} €</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
