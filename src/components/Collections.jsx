import "./Collections.css";

import boy1 from "../assets/collections/product_29.png";
import boy2 from "../assets/collections/product_30.png";
import boy3 from "../assets/collections/product_31.png";
import boy4 from "../assets/collections/product_32.png";
import boy5 from "../assets/collections/product_33.png";
import boy6 from "../assets/collections/product_34.png";
import boy7 from "../assets/collections/product_35.png";
import boy8 from "../assets/collections/product_36.png";

function Collection() {
    return(
        <div className="collectionSection">
            <h1 className="heading">New Collections</h1>

            <div className="collection-imageSection">
                <div className="gridSection-boys">
                    <img src={boy1} alt="test"></img>
                    <h3>Boys Orang ColourBlocked Hoode shirt</h3>
                    <p>$77</p>
                </div>
                <div className="gridSection-boys">
                    <img src={boy2} alt="test"></img>
                    <h3>Boys Orang ColourBlocked Hoode shirt</h3>
                    <p>$77</p>
                </div>
                <div className="gridSection-boys">
                    <img src={boy3} alt="test"></img>
                    <h3>Boys Orang ColourBlocked Hoode shirt</h3>
                    <p>$77</p>
                </div>
                <div className="gridSection-boys">
                    <img src={boy4} alt="test"></img>
                    <h3>Boys Orang ColourBlocked Hoode shirt</h3>
                    <p>$77</p>
                </div>
                <div className="gridSection-boys">
                    <img src={boy5} alt="test"></img>
                    <h3>Boys Orang ColourBlocked Hoode shirt</h3>
                    <p>$77</p>
                </div>
                <div className="gridSection-boys">
                    <img src={boy6} alt="test"></img>
                    <h3>Boys Orang ColourBlocked Hoode shirt</h3>
                    <p>$77</p>
                </div>
                <div className="gridSection-boys">
                    <img src={boy7} alt="test"></img>
                    <h3>Boys Orang ColourBlocked Hoode shirt</h3>
                    <p>$77</p>
                </div>
                <div className="gridSection-boys">
                    <img src={boy8} alt="test"></img>
                    <h3>Boys Orang ColourBlocked Hoode shirt</h3>
                    <p>$77</p>
                </div>
            </div>
        </div>
    )
}

export default Collection;     