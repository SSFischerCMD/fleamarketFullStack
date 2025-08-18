import { useState } from "react";
import StatisticItem from "./StatisticItem.jsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';
import MagnifyingGlass from "../svg/MagnifyingGlass.jsx";

function SearchItem(){
        const [searchTerm, setsearchTerm] = useState([]);
    
        const handleChange = (event) => {
            setsearchTerm(event.target.value);
        };
    
    
    return (
        <>
        <div className="inputWindow">
            <MagnifyingGlass></MagnifyingGlass>
            <input value={searchTerm} onChange={handleChange} type="text" placeholder="What treasure are you looking for?"></input>
        </div>
        </>
    )
}

export default SearchItem