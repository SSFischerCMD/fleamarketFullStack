import React from 'react';
import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";

function ProductPage() {
  const { searchTerm } = useParams();

  return (
    <>
      <p>SUCHE: {searchTerm}</p>

      <ProductList searchTerm={searchTerm} />
    </>
  );
}

export default ProductPage;
