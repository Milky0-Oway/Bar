import React from "react";
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} className='logo' alt=""/>
        </div>
    );
}

export default Navbar;