 import React from "react";
 import "./ProductGrid.css";
 import product1 from "../assets/product_1.png";
 import product2 from "../assets/product_2.png";
 import product3 from "../assets/product_3.png";
 import product4 from "../assets/product_4.png";

 function ProductGrid() {
    return (
        <div className="productList">
            <h1 className="productTitle">Popular in women</h1>
            <div className="listContainer">
                <div className="listWrapper">
                    <img src={product1} className="productImage" alt="test"/>
                    <p className="imageContent">Striped Flutter Sleeve Overlap collar pepium Hem Blouse</p>
                    <div className="productPrice">
                        <p>$80</p>
                        <p className="productAmount">$120</p>
                    </div>
                </div>
                <div className="listWrapper">
                    <img src={product2} className="productImage" alt="test"/>
                    <p className="imageContent">Striped Flutter Sleeve Overlap collar pepium Hem Blouse</p>
                    <div className="productPrice">
                        <p>$80</p>
                        <p className="productAmount">$120</p>
                    </div>
                </div>
                <div className="listWrapper">
                    <img src={product3} className="productImage" alt="test"/>
                    <p className="imageContent" >Striped Flutter Sleeve Overlap collar pepium Hem Blouse</p>
                    <div className="productPrice">
                        <p>$80</p>
                        <p className="productAmount">$120</p>
                    </div>
                </div>
                <div className="listWrapper">
                    <img src={product4} className="productImage" alt="test"/>
                    <p className="imageContent">Striped Flutter Sleeve Overlap collar pepium Hem Blouse</p>
                    <div className="productPrice">
                        <p>$80</p>
                        <p className="productAmount">$121</p>
                    </div>
                </div>
            </div>
        </div>
    )
 }

 export default ProductGrid;