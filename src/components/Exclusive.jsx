import React from "react";
import "./Exclusive.css";
import exclusive from "../assets/exclusive_image.png";

function Exclusive() {
    return (
        <div className="exclusive_section">
        <div className="exclusive">
            <div className="exclusive_content">
                <h1>Exclusive Offers For You</h1>
                <p>Only on Best sellers products</p>
                <button>Check now</button>
            </div>
            <div className="exclusive_image">
                <img src={exclusive} className="exclusiveImage" alt="exclusive" />
            </div>
        </div>
        </div>
    )
}

export default Exclusive;