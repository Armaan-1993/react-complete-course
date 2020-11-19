import React from "react";
import "./checkout.css";
// import Home from "../home.component/home";
import Subtotal from "../subtotal.component/subtotal";

const Checkout = ({ title, rating, price, image }) => {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                    className="checkout_ad"
                    alt="ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                />
                <h2 className="checkout_title">Your Shopping Basket</h2>
                {/*Basket Item*/}
                {/*Basket Item*/}
                {/*Basket Item*/}
                {/*Basket Item*/}
                {/*Basket Item*/}
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
};

export default Checkout;