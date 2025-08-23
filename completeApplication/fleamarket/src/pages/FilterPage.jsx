
import { useNavigate } from 'react-router-dom';
import FilterItem from '../components/FilterItem';
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
            <div>
                <h2>categories</h2>
                <FilterItem></FilterItem>
            </div>
            <div>
                <h2>price range</h2>
                <div></div>
            </div>
            <div>
                <h2>condition</h2>
                <div>          
                    new

                    excellent

                    good

                    fair
                </div>
            </div>

            <div>location</div>
        </div>
    </>
    )
}

export default FilterPage


// changing "advanced link" to <Link to={"/"}>