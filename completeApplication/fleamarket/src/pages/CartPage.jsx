import App from "../App";
import ExitIcon from "../svg/exit";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

function CartPage(){
  return(
    <>
      <div className="popUp-container">
        <div className="popUp-content">
          <Link to={"/"}>
            <ExitIcon ></ExitIcon>
          </Link>
          <h1>CART IS OPENED</h1>
          <div>hallo mein name ist zusanne</div>
        </div>
      </div>
    </>
  );
}

export default CartPage