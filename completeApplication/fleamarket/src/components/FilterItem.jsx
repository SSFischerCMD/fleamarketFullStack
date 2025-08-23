import { useState, useEffect } from "react";
import CategoryList from "./CategoryList";

function FilterItem() {
    const [categoryObject, setCategoryObject] = useState([]);
    const [priceObject, setPriceObject] = useState([]);

    useEffect(() => {

        fetchData();
        function fetchData() {
            fetchCategories();
            //fetchPriceRange();
            //fetchCondition();
        }

        async function fetchCategories(){
            try {
                const response = await fetch('http://localhost:8080/Demo/categories');
                const CategoryData = await response.json();
                setCategoryObject(CategoryData);
            } 
            catch (error) {
                console.error("Kategorie-Fehler:", error);
                alert("Fehler beim Laden der Kategorien");
            }
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
