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
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import SearchItem from "../components/SearchItem.jsx";
function HomePage() {

  return (
    <>
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
        <div className="stats">
            <StatisticItem headline={"Sellers"} statInfo={"1000+ Active Sellers"}></StatisticItem>
            <StatisticItem headline={"Items"} statInfo={"50k+ Items listed"}></StatisticItem>
            <StatisticItem headline={"Rating"} statInfo={"1000+ Average Rating"}></StatisticItem>
            <StatisticItem headline={"head"} statInfo={"1000+ Active Sellers"}></StatisticItem>
        </div>  
    </>
  );
}

export default HomePage;
