import React from "react";
import "./cart-component.styles.scss";
import CustomButton from "../custom-button-component/custom-button";

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

export default CartDropdown;
