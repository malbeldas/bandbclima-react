import logo from '../img/logo_B&B.jpg';
import {Link} from 'react-router-dom';

import {CartWidget} from "./CartWidget";
import {CategoriesNavBar} from './CategoriesNavBar';

const NavBar = () => {
        return (
            <div className="container">
                <nav className="nav-responsive">
                    <Link to={'/'}><img src={logo} className="logo" alt="Logo" /></Link>                    
                    <CategoriesNavBar/>
                    <CartWidget/>
                </nav>
            </div>
        );
}

export {NavBar};