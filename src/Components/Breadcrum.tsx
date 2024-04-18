import React from "react";
import arrow_icon from "./Assets/breadcrum_arrow.png";

const Breadcrum = (props) => {
	const { product } = props;

	return (
		<div className="breadcrum flex items-center gap-2 text-gray-600 font-semibold my-16 mx-44 uppercase">
			HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />{" "}
			{product.category} <img src={arrow_icon} alt="" /> {product.name}
		</div>
	);
};

export default Breadcrum;
