import App from "../App";
import ExitIcon from "../svg/exit";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

function CartItem({onItemClick}){
  return(
    <>
      <div className="popUp-container">
        <div className="popUp-content">
          <div onClick={() => onItemClick(false)}>
            <ExitIcon ></ExitIcon>
          </div>
          <h1>CART IS OPENED</h1>
          <div>hallo mein name ist zusanne</div>
        </div>
      </div>
    </>
  );
}

export default CartItem