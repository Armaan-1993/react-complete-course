import React from "react";
import Product from "../product.component/product";
import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="banner image"
                    className="home_image"
                />

                <div className="home_product">
                    <Product></Product>
                    {/*product component*/}
                </div>
                <div className="home_product">
                    {/*product component*/}
                    {/*product component*/}
                    {/*product component*/}
                </div>
                <div className="home_product">{/*product component*/}</div>
            </div>
        </div>
    );
};

export default Home;
