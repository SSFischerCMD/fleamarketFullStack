
import React, { useEffect, useState } from "react"; //kann man react weglassen 

function ProductList() {
  // React Hook für die Verwaltung des states
  const [products, setProducts] = useState([]);

  //React Hook zum managen der „Nebenwirkungen“ (jede Aktion, die außerhalb der Funktion selbst etwas verändert oder mit der Außenwelt interagiert)
  useEffect(() => {
    fetch("http://localhost:8080/Demo/products")
    //.then = was soll passieren wenn das Promise von fetch (response) erfolgreich abgeschlossen wurde
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
            <img src={product.images[0]} alt={product.name} />
            <p>{product.description}</p>
            <p>Preis: {product.price} €</p>
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
*/