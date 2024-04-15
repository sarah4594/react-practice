import React from "react";
import hand_icon from "./Assets/hand_icon.png";
import arrow_icon from "./Assets/arrow.png";
import hero_image from "./Assets/hero_image.png";

const Hero = () => {
	return (
		<div className="hero h-screen bg-gradient-to-t from-white to-fuchsia-200 flex">
			<div className=" hero-left flex flex-1 flex-col justify-center gap-5 pl-44 leading-4">
				<h2 className="color-gray-800 text-xl semibold uppercase">
					new arrivals only
				</h2>
				<div>
					<div className="hero-hand-icon flex items-center gap-5">
						<p className="text-gray-800 text-8xl font-bold">new</p>
						<img className="w-24" src={hand_icon} alt="hand_icon" />
					</div>
					<p className="text-gray-800 text-8xl font-bold">collections</p>
					<p className="text-gray-800 text-8xl font-bold">for everyone</p>
				</div>
				<div className="hero-latest-btn flex justify-center items-center gap-4 w-80 h-18 rounded-full mt-8 bg-red-500 text-white text-xl">
					<div>Latest Collection</div>
					<img src={arrow_icon} alt="arrow" />
				</div>
			</div>
			<div className="hero-right flex flex-1 items-center justify-center">
				<img src={hero_image} alt="girl in sunglasses" />
			</div>
		</div>
	);
};

export default Hero;
