import { useState } from "react";
import StatisticItem from "./components/StatisticItem.jsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CartPage from "./pages/CartPage.jsx";
import UserIcon from "./svg/UserIcon.jsx";
import CartIcon from "./svg/CartIcon.jsx";

function App() {
  return (
    <>
      <body>  
        <header>
          <div className="logo">FleatMarket</div>
          <div className="menu">
            <div className="menu-item">
              <div className="menuItem-text">Sign In</div>
              <div className="menuItem-icon">
                <UserIcon></UserIcon>
              </div>    
            </div>
            <Link to={"/Cart"}>
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
          <Routes>
              <Route path="/Cart" element={<CartPage/>}/>
            </Routes>
          <h1><span className="highlighted-text">Discover Hidden Treasures</span></h1>
          <p className="subtitle">
              Your online flea market where every item has a story. Find unique vintage pieces, antiques, and collectibles from sellers around the world.
          </p>

          <div className="search-bar-container">
              <input type="text" placeholder="What treasure are you looking for?"></input>
              <div>
                <button>Search Treasures</button>
              </div>
              
          </div>

          <div className="stats">
              <StatisticItem headline={"Sellers"} statInfo={"1000+ Active Sellers"}></StatisticItem>
              <StatisticItem headline={"Items"} statInfo={"50k+ Items listed"}></StatisticItem>
              <StatisticItem headline={"Rating"} statInfo={"1000+ Average Rating"}></StatisticItem>
              <StatisticItem headline={"head"} statInfo={"1000+ Active Sellers"}></StatisticItem>
          </div>
        </main>
      </body>
    </>
  );
}

export default App;
