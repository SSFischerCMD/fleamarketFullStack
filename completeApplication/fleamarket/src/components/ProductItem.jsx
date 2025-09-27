import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductItem({ thisProduct, onItemClick }) {

  return (
    <div>

        <div className="product-item" onClick={() => onItemClick(thisProduct)}  >
          <img src={thisProduct.images[0]} alt={thisProduct.name}></img>
          <h3>{thisProduct.title}</h3>
          <p>{thisProduct.description}</p>
          <p><b>{thisProduct.price} €</b></p>
          <p className="subtitle">{thisProduct.condition}</p>
          <div>{thisProduct.id}</div>
        </div>
    </div> 
  );
}

export default ProductItem;

