import { useState } from "react";
import MagnifyingGlass from "../svg/MagnifyingGlass.jsx";
import { Link } from "react-router-dom";

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
                    <button className="searchBTN" >
                <Link to={`/products/${searchTerm}`}>
                     Search Treasures
                </Link>
            </button>
        </>
    )
}

export default SearchItem