import {Link} from 'react-router-dom';

const CartWidget = () => {
    return (
        <>
            <Link to={'/#'}><i className="fas fa-shopping-cart"></i></Link>
        </>
    );
}

export {CartWidget};