import React, { useEffect, useState } from "react";
import { FleamarketControllerApi } from "../api/api.ts";
import { useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem.jsx";
import { Link } from "react-router-dom";
import ProductItemInfo from "./ProductItemInfo.jsx";

function ProductList({ searchTerm }) {
  const api = new FleamarketControllerApi();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([null]);
  
  const [selected, setSelected] = useState([false]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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

    function handleItemClick(thisProduct) {
      setSelected(true);
      setProduct(thisProduct);
    }
    function handleInfoItemClick(){
      setSelected(false);
    }
     
  return (
    <div id="thisOne" className="product-list">
      {products.data?.map(product => (
        <ProductItem onItemClick={handleItemClick} key={product.id} thisProduct={product}/>    
      ))}  
      {error && <p className="error">{error}</p>}
      {selected == true ? <ProductItemInfo thisProduct={product} onItemClick={handleInfoItemClick} /> : null}
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