import { useState } from "react";


function CategoryItem(){

    const [data, setData] = useState([]);
    fetchCategories();
    async function fetchCategories(){
        try{
             const response = await fetch('http://localhost:8080/Demo/categories');
             const existingCategories = await response.json();
             setData(existingCategories);
        }
        catch(error){
            alert("Fehler bei der Datenbank-Verbindung:"+ console.error());
        }
       
    }
    return (
        <>
            <div>{data[0]}</div>
            <div>{data[1]}</div>
            <div>{data[2]}</div>
            <div>{data[3]}</div>
            <div>{data[4]}</div>
        </>
    );
}

export default CategoryItem