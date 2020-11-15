import React from "react";
import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <img
                className="header_logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            <div className="header_search">
                <form>
                    <input type="text" className="header_searchInput" />
                    {/*logo*/}
                </form>
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
            </div>
        </div>
    );
};

export default Header;
