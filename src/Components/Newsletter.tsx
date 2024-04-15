import React from "react";

const Newsletter = () => {
	return (
		<div className="newsletter width-[65%] h-[40vh] flex flex-col items-center justify-center m-auto py-0 px-36 mb-40 bg-gradient-to-t from-white to-fuchsia-200 gap-8">
			<h1 className="text-gray-600 text-6xl font-semibold">
				Get Exclusive Offers In Your Email
			</h1>
			<p className="text-gray-600 text-xl">
				Subscribe to our newsletter and stay updated
			</p>
			<div className="flex items-center justify-between bg-white w-[730px] h-16 rounded-full bourder border-1 border-white">
				<input
					type="email"
					placeholder="Your email"
					className="w-[500px] ml-8 border-none outline-none text-gray-600 text-lg"
				/>
				<button className="w-[210px] h-16 rounded-full bg-black text-white cursor-ponter">
					Subscribe
				</button>
			</div>
		</div>
	);
};

export default Newsletter;
