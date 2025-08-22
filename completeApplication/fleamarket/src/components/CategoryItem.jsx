import { useState, useEffect } from "react";

function CategoryItem() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:8080/Demo/categories');
                const existingCategories = await response.json();
                setCategories(existingCategories);
            } catch (error) {
                console.error("Kategorie-Fehler:", error);
                alert("Fehler beim Laden der Kategorien");
            }
        }

        fetchData();
    }, []);

    return (
        <>
            {categories.map((category, index) => (
                <div key={index}>{category}</div>
            ))}
        </>
    );
}

export default CategoryItem;
