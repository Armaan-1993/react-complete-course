import React from "react";
import { useStateValue } from "../../state-provider/state-provider";
import "./product.css";

const Product = ({ id, title, rating, price, image }) => {
    const [{ basket }, dispatch] = useStateValue();
    console.log(dispatch);
    const addToBasket = () => {
        //dispatch an item
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                rating: rating,
                price: price,
                image: image,
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
