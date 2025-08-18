
import { useNavigate } from 'react-router-dom';

function NoFilterPage(){
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('filters');
    };

    return(
        <>
            <div className="search-bar-filter">
                <button onClick={handleClick}>advanced filters</button>;
            </div>
        </>
    )
}

export default NoFilterPage
