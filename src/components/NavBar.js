import React, { Component } from 'react';
import logo from '../img/logo_B&B.jpg';

function NavBar() {
        return (
            <div className="container">
                <nav className="nav-mobile">
                    <a href="#"><img src={logo} className="logo" alt="Logo" /></a>
                    <a href="#"><i className="fas fa-shopping-cart"></i></a>
                </nav>
            </div>
        );
}

export default NavBar;