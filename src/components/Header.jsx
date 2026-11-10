 import React from 'react';
 import "./Header.css";
 import logo from "../assets/logo.png";
 import bagIcon from "../assets/cart_icon.png";

 function Header() {
    return (
        <header className="header">
            
            {/* Logo */}
            <div className="logo">
                <img src={logo} alt="Logo"  className='logoImg'/>
                <p className='logoText'>CLOTHIFY</p>
            </div>

            {/* Navigation Links */}
            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/men">Men</a>
                <a href="/women">Women</a>
                <a href="/kids">Kids</a>
            </nav>

            {/* Header Icons */}
            <div className="header-icons">
                <button className="login-btn">Login</button>
                <button className="bag-btn"><img src={bagIcon} alt="Bag" className="bag-icon"/></button>
            </div>
        </header>
    )
 }

 export default Header;