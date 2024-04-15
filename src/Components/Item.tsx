import React from "react";

const Item = () => {
	return (
		<div className="item w-80 hover:scale-105 duration-600">
			<img src={props.image} />
			<p className="my-1.5 mx-0">{props.name}</p>
			<div className="items-prices flex gap-5">
				<div className="item-price-new text-gray-600 text-lg font-semibold">
					{props.new_price}
				</div>
				<div className="items-price-old text-gray-400 text-lg font-normal line-through">
					{props.old_price}
				</div>
			</div>
		</div>
	);
};

export default Item;
