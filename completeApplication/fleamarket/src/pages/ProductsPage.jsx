import React from 'react';
import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";
function ProductPage() {
  const { searchTerm } = useParams();

  return (
    <>
    
      <ProductList searchTerm={searchTerm} />
      <p>----------------------------------</p>
       <ProductList searchTerm={""} />

    </>
  );
}

export default ProductPage;
