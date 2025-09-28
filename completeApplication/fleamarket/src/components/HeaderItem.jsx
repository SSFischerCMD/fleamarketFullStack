import { useState } from "react";
import StatisticItem from "./StatisticItem.jsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CartPage from "./CartItem.jsx";
import FilterPage from "../pages/FilterPage.jsx";
import UserIcon from "../svg/UserIcon.jsx";
import CartIcon from "../svg/CartIcon.jsx";
import ProductList from "./ProductList.jsx";
import MagnifyingGlass from "../svg/MagnifyingGlass.jsx";
import { useNavigate } from "react-router-dom";
import SearchItem from "./SearchItem.jsx";
import { useLocation } from 'react-router-dom';
import LoginItem from "./LoginItem.jsx";
import CartItem from "./CartItem.jsx";
import { Outlet } from 'react-router-dom';


function HeaderItem() {

    const location = useLocation();
    const isHomePage =  location.pathname === '/home' || location.pathname === '/home/' || 
                        location.pathname === '/home/filters' || location.pathname === '/home/filters/';


    const [showLogin, setShowLogin] = useState(false);
    const [showCart, setShowCart] = useState(false);

    function handleLoginChange(){
        setShowLogin(true);    
    }     
    function handleCartChange(){
        setShowCart(true);    
    }    
    function handleLoginItemClick(closing) {
      setShowLogin(closing);
    }
    function handleCartItemClick(closing) {
      setShowCart(closing);
    }
    return (
        <>
        <header>
            <Link to={"/home"}>
                <div className="logo">FleatMarket</div>  
            </Link>   
            {!isHomePage ? <SearchItem id="headerSearchItem" /> : null}

            <div className="menu">           
                    <div className="menu-item" onClick={handleLoginChange}>
                        <div className="menuItem-text">Sign In</div>
                        <div className="menuItem-icon">
                            <UserIcon></UserIcon>
                        </div>    
                    </div>
                
                    <div className="menu-item" onClick={handleCartChange}>
                        <div className="menuItem-text">Cart</div>
                        <div className="menuItem-icon">
                            <CartIcon></CartIcon>
                        </div>    
                    </div>
            </div>
        </header>
        {showLogin ? <LoginItem onItemClick={handleLoginItemClick} /> : null}
        {showCart  ? <CartItem  onItemClick={handleCartItemClick} /> : null}

        </>
    );
}

export default HeaderItem;
