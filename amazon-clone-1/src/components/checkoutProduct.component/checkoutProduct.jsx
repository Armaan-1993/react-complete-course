import React from "react";
import { useStateValue } from "../../state-provider/state-provider";
import "./checkoutProduct.css";

const CheckoutProduct = ({ id, image, rating, price, title }) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
            title: title,
            rating: rating,
            price: price,
        });
    };

    return (
        <div className="checkoutProduct">
            <img src={image} className="checkoutProduct_image" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating)
                        .fill()
                        .map(() => (
                            <p>⭐</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;
