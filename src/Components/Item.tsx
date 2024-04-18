import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, new_price, old_price }) => {
	return (
		<div className="item w-80 hover:scale-105 duration-600">
			<Link to={`/product/${id}`}>
				<img src={image} />
			</Link>
			<p className="my-1.5 mx-0">{name}</p>
			<div className="items-prices flex gap-5">
				<div className="item-price-new text-gray-600 text-lg font-semibold">
					${new_price}
				</div>
				<div className="items-price-old text-gray-400 text-lg font-normal line-through">
					${old_price}
				</div>
			</div>
		</div>
	);
};

export default Item;
