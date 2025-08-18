import { useState } from "react";
import MagnifyingGlass from "../svg/MagnifyingGlass.jsx";
import { useNavigate } from "react-router-dom";

function SearchItem(){
            const navigate = useNavigate();
            const handleClick = () => {
            navigate(`/products/${searchTerm}`);
    };


        const [searchTerm, setsearchTerm] = useState("");
        const handleChange = (event) => {
            setsearchTerm(event.target.value);
        };

        function handleKeyDown(event){
        if (event.key === 'Enter') {
            navigate(`/products/${searchTerm}`);
        }
        };


    
    return (
        <>
        <div className="inputWindow">
            <MagnifyingGlass></MagnifyingGlass>
            <input value={searchTerm} onKeyDown={handleKeyDown} onChange={handleChange} type="text" placeholder="What treasure are you looking for?"></input>
        </div>
            <button onClick={handleClick} className="searchBTN" >         
                     Search Treasures            
            </button>
        </>
    )
}

export default SearchItem