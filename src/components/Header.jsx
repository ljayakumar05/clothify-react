 import React from 'react';
 import "./Header.css";

 function Header() {
    return (
        <header className="header">
            
            {/* Logo */}
            <div className="logo">
                CLOTHIFY
            </div>

            {/* Navigation Links */}
            <nav className="nav-links">
                <a href="/">Home</a>
                <a href="/men">Men</a>
                <a href="/women">Women</a>
                <a href="/kids">Kids</a>
                <a href="/about">About</a>
            </nav>

            {/* Search Bar */}
            <div className="search">
                <input type="text" placeholder="Search for products..." />
                <button>Search</button>
            </div>

            {/* Header Icons */}
            <div className="header-icons">
                <button>Account</button>
                <button>Wishlist</button>
                <button>Bag (0)</button>
            </div>
        </header>
    )
 }

 export default Header;