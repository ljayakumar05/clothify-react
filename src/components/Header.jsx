 import React from 'react';
 import "./Header.css";
 import logo from "../assets/logo.png";

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
                <button>Login</button>
                <button>Wishlist</button>
                <button>Bag (0)</button>
            </div>
        </header>
    )
 }

 export default Header;