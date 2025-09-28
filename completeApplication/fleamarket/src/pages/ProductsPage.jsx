import React from 'react';
import ProductList from "../components/ProductList";
import { useParams } from "react-router-dom";
import HeaderItem from '../components/HeaderItem';
function ProductPage() {
  const { searchTerm } = useParams();

  return (
    <>
      <HeaderItem></HeaderItem>
      <ProductList searchTerm={searchTerm} />
      <p>----------------------------------</p>
       <ProductList searchTerm={""} />

    </>
  );
}

export default ProductPage;
