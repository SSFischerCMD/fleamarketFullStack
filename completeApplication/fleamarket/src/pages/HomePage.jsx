import { useState } from "react";
import StatisticItem from "../components/StatisticItem.jsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CartPage from "../components/CartItem.jsx";
import LoginPage from "../components/LoginItem.jsx";
import FilterPage from "./FilterPage.jsx";
import UserIcon from "../svg/UserIcon.jsx";
import CartIcon from "../svg/CartIcon.jsx";
import ProductList from "../components/ProductList.jsx";
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import SearchItem from "../components/SearchItem.jsx";
import HeaderItem from "../components/HeaderItem.jsx";
function HomePage() {
  return (
    <>
    <HeaderItem></HeaderItem>
    <main>
        <h1><span className="highlighted-text">Discover Hidden Treasures</span></h1>
        <p className="subtitle">
            Your online flea market where every item has a story. Find unique vintage pieces, antiques, and collectibles from sellers around the world.
        </p>
        <div className="search-bar-container">
            <SearchItem></SearchItem>
        <div>
            <Outlet /> {}
        </div> 
        </div>
        <div className="productView">
        </div>

    </main>
    </>
  );
}

export default HomePage;
