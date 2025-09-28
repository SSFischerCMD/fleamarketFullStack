import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
 import ExitIcon from '../svg/exit';


function ProductItemInfo({thisProduct, onItemClick}) {
  return (
    <div>
         <div className="popUp-container">
        <div className="popUp-content">
        <div className="exitDiv"  onClick={() => onItemClick(false)} >
          <ExitIcon />
        </div>
        <h1>{thisProduct.title}</h1>
        <p>{thisProduct.description}</p>
        <p><b>{thisProduct.price} €</b></p>
        <p>{thisProduct.condition}</p>
        <p>{thisProduct.available}</p>
        <p><b>{thisProduct.category} </b></p>
        <p>{thisProduct.id}</p>
        <img src={thisProduct.images[0]} alt={thisProduct.name}></img>
        <p><b>{thisProduct.location}</b></p>
        <p>{thisProduct.name}</p>
        <p>{thisProduct.userId}</p>
        <p><b>{thisProduct.category} </b></p>
        <p>{thisProduct.id}</p>
      </div>
    </div>


        
    </div> 
  );
}

export default ProductItemInfo;
