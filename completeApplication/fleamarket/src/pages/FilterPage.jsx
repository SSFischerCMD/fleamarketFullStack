
import { useNavigate } from 'react-router-dom';

function FilterPage(){
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    };

    return(
    <>
        <div className="search-bar-filter">
            <button onClick={handleClick}>advanced filters</button>;
        </div>
        <div className="filterContainer">
            <div>category</div>
            <div>price</div>
            <div>location</div>
            <div>condition</div>
        </div>
    </>
    )
}

export default FilterPage


// changing "advanced link" to <Link to={"/"}>