import React from "react";
import exclusive_image from "./Assets/exclusive_image.png";

const Offers = () => {
	return (
		<div className="offers w-[65%] h-[60vh] py-0 px-36 flex m-auto mb-40 bg-gradient-to-t from-white to-fuchsia-200">
			<div className="offers-left flex flex-1 flex-col justify-center ">
				<h1 className="text-gray-800 font-semibold text-6xl leading-normal">
					Exclusive
				</h1>
				<h1 className="text-gray-800 font-semibold text-6xl leading-normal">
					Offers For You
				</h1>
				<p className="uppercase font-semibold text-xl text-gray-800 ">
					only on best sellers products
				</p>
				<button className="w-72 h-16 text-xl mt-8 coursor-pointer rounded-3xl bg-red-500 text-white">
					Check Now
				</button>
			</div>
			<div className="offers-right flex flex-1 items-center justify-end pt-12">
				<img src={exclusive_image} alt="" />
			</div>
		</div>
	);
};

export default Offers;
