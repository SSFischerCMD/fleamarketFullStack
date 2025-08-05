import App from "../App";
import ExitIcon from "../svg/exit";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

function CartPage(){
  return(
    <>
      <div className="cartContainer">
        <div className="cartContainer-content">
          <Link to={"/"}>
            <ExitIcon ></ExitIcon>
          </Link>
          <h1>CART IS OPENED</h1>
          <div>hallo mein name ist zusanne</div>
        </div>
          <Routes>
            <Route path="/" element={<App/>}/>
          </Routes>
      </div>
    </>
  );
}

export default CartPage