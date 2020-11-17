import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = () => {
    return (
        <div className="header">
            <img
                className="header_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="logo"
            />
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                {/*logo*/}
                <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>
            <div className="header_navbar">
                <div className="header_options">
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineTwo">Sign In</span>
                </div>
                <div className="header_options">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_options">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <div className="header_optionBasket">
                    <ShoppingBasketIcon></ShoppingBasketIcon>
                    <span className="header_optionLineTwo header_BasketCount">
                        0
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Header;
