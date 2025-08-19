import { useState } from "react";
import StatisticItem from "../components/StatisticItem.jsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CartPage from "./CartPage.jsx";
import LoginPage from "./LoginPage.jsx";
import FilterPage from "./FilterPage.jsx";
import UserIcon from "../svg/UserIcon.jsx";
import CartIcon from "../svg/CartIcon.jsx";
import ProductList from "../components/ProductList.jsx";
import MagnifyingGlass from "../svg/MagnifyingGlass.jsx";
import { useNavigate } from "react-router-dom";
import SearchItem from "../components/SearchItem.jsx";
import { useLocation } from 'react-router-dom';


import { Outlet } from 'react-router-dom';


function FrameWork() {

    const location = useLocation();
    const isHomePage =  location.pathname === '/home' || location.pathname === '/home/' || 
                        location.pathname === '/home/filters' || location.pathname === '/home/filters/';


    const [inputValue, setInputValue] = useState([]);
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };


  return (
    <>
    <header>
        <Link to={"/home"}>
            <div className="logo">FleatMarket</div>  
        </Link>   
        {!isHomePage && <SearchItem id="headerSearchItem" />}
        <div className="menu">
            <Link to={"/login"}>
                <div className="menu-item">
                <div className="menuItem-text">Sign In</div>
                <div className="menuItem-icon">
                    <UserIcon></UserIcon>
                </div>    
                </div>
            </Link>
            <Link to={"/cart"}>
                <div className="menu-item">
                <div className="menuItem-text">Cart</div>
                <div className="menuItem-icon">
                    <CartIcon></CartIcon>
                </div>    
                </div>
            </Link>
        </div>
    </header>
    <main>
        <Outlet /> {}      
    </main>
    </>
  );
}

export default FrameWork;
