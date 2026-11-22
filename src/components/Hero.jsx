 import React from "react";
 import "./Hero.css";
 import heroImage from "../assets/hero_image.png";

 function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h4 className="hero-subtitle">New Arrivals Only</h4>
                <h1 className="hero-title">New Collections for everyone</h1>
                <button className="hero-button">Latest Collections</button>
            </div>
            <div className="hero-image">
                <img src={heroImage} className="hero-img" alt="Hero" />
            </div>        
        </section>
    )
 }
 
 export default Hero;