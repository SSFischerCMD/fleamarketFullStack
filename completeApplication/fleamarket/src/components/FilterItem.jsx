import { useState, useEffect } from "react";
import CategoryList from "./CategoryList";
import { FleamarketControllerApi } from "../api/api.ts";

function FilterItem() {
    const [categoryObject, setCategoryObject] = useState([]);
    const [priceObject, setPriceObject] = useState([]);
    const api = new FleamarketControllerApi();
    useEffect(() => {

        fetchData();
        function fetchData() {
            fetchCategories();
            //fetchPriceRange();
            //fetchCondition();
        }

        function fetchCategories(){
            api.searchCategories()
                .then(
                    data => {
                    setCategoryObject(data)})
                .catch(
                    error => {
                    alert("kategorien fehler")});
        }

        async function fetchPriceRange(){
                try {
                    const response = await fetch('http://localhost:8080/Demo/price');
                    const priceData = await response.json();
                    setPriceObject(priceData);
                    
                } 
                catch (error) {
                    console.error("Preis-Fehler:", error);
                    alert("Fehler beim Laden der Preise");
                }
        }

    }, []);

    return (
        <>
            <CategoryList categories={categoryObject}></CategoryList>

         </>
    );
}

export default FilterItem;
