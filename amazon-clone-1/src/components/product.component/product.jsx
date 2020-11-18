import React from "react";
import { userStateValue } from "../../state-provider/state-provider";
import "./product.css";

const Product = ({ id, title, rating, price, image }) => {
    const [basket, dispatch] = userStateValue;
    const addToBasket = () => {
        //dispatch item from basket
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                price: price,
                rating: rating,
                image: image,
                title: title,
            },
        });
    };
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="book img" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
};

export default Product;
