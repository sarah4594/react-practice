import React from "react";

const DescriptionBox = () => {
	return (
		<div className="descriptionBox my-32 mx-44">
			<div className="descriptionBox-navigator flex">
				<div className="descriptionBox-nav-box flex items-center justify-center font-semibold w-44 h-16 border border-gray-100">
					Description
				</div>
				<div className="descriptionBox-nav-box fade descriptionBox-nav-box flex items-center justify-center font-semibold w-44 h-16 border border-gray-100 bg-gray-100 text-gray-600">
					Reviews (122)
				</div>
			</div>
			<div className="descriptionBox-description flex flex-col gap-6 border border-gray-100 p-12 pb-44">
				<p>
					An e-commerce website is an online platform that fascilitates buying
					and selling of products or services over the internet and serves as a
					virtual marketplace where businesses and individuals can showcase
					their products, interact with customers, and conduct transactions
					without the need for a physical presence. E-commerce websites have
					gained immense populatity due to their conventional accessibility, and
					the global reach they offer.
				</p>
				<p>
					E-commerce websites typically display products or services and
					detailed descriptions, images, and any available variations (e.g.,
					sizes, colors). Each product usually has its own dedicated page with
					relecant information.
				</p>
			</div>
		</div>
	);
};

export default DescriptionBox;
