import {Link} from 'react-router-dom';

const CartWidget = () => {
    return (
        <>
            <Link to={'/cart'}><i className="fas fa-shopping-cart"></i></Link>
        </>
    );
}

export {CartWidget};