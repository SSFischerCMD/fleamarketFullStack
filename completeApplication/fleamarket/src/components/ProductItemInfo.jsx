import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
 import ExitIcon from '../svg/exit';


function ProductItemInfo({thisProduct, onItemClick}) {
  return (
    <div>
        <div className="popUp-container">
            <div className="exitDiv"  onClick={() => onItemClick(false)} >
                <ExitIcon />
            </div>
            <div className="popUp-content">
                <h1>{thisProduct.title}</h1>
                <p>{thisProduct.description}</p>
                <div className="productInfos"><b>price </b>{thisProduct.price} €</div>
                <div className="productInfos"><b>condition </b>{thisProduct.condition}</div>
                <div className="productInfos"><b>location: </b>{thisProduct.location}</div>

                <p>{thisProduct.available}</p>
                <img src={thisProduct.images[0]} alt={thisProduct.name}></img>
                <p>{thisProduct.name}</p>
                <p>{thisProduct.userId}</p>
                <button className="productBTN">add to cart</button>
                <button className="productBTN">contact seller</button>
                <div >
                  <p className="footer">{thisProduct.category} </p>
                  <p className="footer">{thisProduct.id}</p>
                </div>
            </div>            
        </div>     
    </div> 
  );
}

export default ProductItemInfo;
