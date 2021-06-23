import {CartWidget} from "./CartWidget";

const NavBar = () => {
        return (
            <div className="container">
                <nav className="nav-mobile">
                    <CartWidget/>
                    <a href="#"><i className="fas fa-shopping-cart"></i></a>
                </nav>
            </div>
        );
}

export {NavBar};