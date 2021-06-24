import logo from '../img/logo_B&B.jpg';
import {CartWidget} from "./CartWidget";

const NavBar = () => {
        return (
            <div className="container">
                <nav className="nav-mobile">
                    <a href="#"><img src={logo} className="logo" alt="Logo" /></a>
                    <CartWidget/>
                </nav>
            </div>
        );
}

export {NavBar};