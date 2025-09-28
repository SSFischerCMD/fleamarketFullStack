import { useState } from "react";
import StatisticItem from "./components/StatisticItem.jsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CartPage from "./components/CartItem.jsx";
import LoginPage from "./components/LoginItem.jsx";
import FilterPage from "./pages/FilterPage.jsx";
import UserIcon from "./svg/UserIcon.jsx";
import CartIcon from "./svg/CartIcon.jsx";
import ProductList from "./components/ProductList.jsx";
import MagnifyingGlass from "./svg/MagnifyingGlass.jsx";
import { useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NoFilterPage from "./pages/NoFilterPage.jsx";
import ProductPage from "./pages/ProductsPage.jsx";
function App() {
  return (
    <>
      <div className="myApp">  
          <Routes>      
             
                <Route path="home"  element={<HomePage />}>
                  <Route index element={<NoFilterPage />} />
                  <Route path="filters" element={<FilterPage />} />
                  <Route path="Cart" element={<CartPage/>}/>
                </Route>
                <Route path="products" element={<ProductPage/>}/>
                <Route path="products/:searchTerm" element={<ProductPage />} />

              
          </Routes>       
      </div>
    </>
  );
}

export default App;

