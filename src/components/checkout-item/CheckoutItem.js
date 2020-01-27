import React from "react";
import "./checkoutItem.scss";

const CheckoutItem = ({ cartItem: { name, price, quantity, imageUrl } }) => {
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">{quantity}</span>
			<span className="price">{price}</span>
			<div className="remove-button">&#10008;</div>
		</div>
	);
};

export default CheckoutItem;
