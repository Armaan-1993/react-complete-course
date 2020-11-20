import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../state-provider/state-provider";
import { auth } from "../../firebase";

const Header = () => {
    const [{ basket, user }] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="logo"
                />
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                {/*logo*/}
                <SearchIcon className="header_searchIcon"></SearchIcon>
            </div>
            <div className="header_navbar">
                <Link to={!user && "/login"}>
                    <div
                        onClick={handleAuthentication}
                        className="header_options"
                    >
                        <span className="header_optionLineOne">
                            Hello {user.email}
                        </span>
                        <span className="header_optionLineTwo">
                            {user ? "Sign Out" : "Sign in"}
                        </span>
                    </div>
                </Link>
                <div className="header_options">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_options">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        <span className="header_optionLineTwo header_BasketCount">
                            {basket?.length}{" "}
                            {/*using the question mark will check the basket for any error in case if therre is an error*/}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
