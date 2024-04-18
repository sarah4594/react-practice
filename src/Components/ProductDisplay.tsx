import React from "react";
import star_icon from "./Assets/star_icon.png";
import star_dull_icom from "./Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
	const { product } = props;

	return (
		<div className="productDisplay flex my-0 mx-44">
			<div className="productDisply-left flex gap-4">
				<div className="productDisplay-img-list flex flex-col gap-4">
					<img className="h-40" src={product.image} alt="" />
					<img className="h-40" src={product.image} alt="" />
					<img className="h-40" src={product.image} alt="" />
					<img className="h-40" src={product.image} alt="" />
				</div>
				<div className="productDisplay-image">
					<img
						className="productDisplay-main-image w-[586px] h-[700px] "
						src={product.image}
						alt=""
					/>
				</div>
			</div>
			<div className="productDisply-right my-0 mx-16 flex flex-col">
				<h1 className="text-gray-600 text-4xl font-bold">{product.name}</h1>
				<div className="productDisplay-right-star flex items-center my-3 gap-1.5 text-gray-700 ">
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_icon} alt="" />
					<img src={star_dull_icom} alt="" />
					<p>(122)</p>
				</div>
				<div className="productDisplay-right-prices flex my-10 mx-0 gap-8 text-2xl font-bold">
					<div className="productDisplay-right-price-old font-bold text-gray-300 line-through">
						${product.old_price}
					</div>
					<div className="productDisplay-right-price-new font-bold">
						${product.new_price}
					</div>
				</div>
				<div className="productDsiplay-right-description">
					A lightweight, usually knitted, pullover shirt, close fitting and this
					a round neckline and short sleeves, worn as an undershirt or outer
					garment.
				</div>
				<div className="productDisplay-right-size">
					<h1 className="mt-14 text-gray-600 text-xl font-bold">Select size</h1>
				</div>
				<div className="productDisplay-right-sizes flex my-8 mx-0 gap-5">
					<div className="py-5 px-6 bg-gray-50 border border-gray-100 rounded cursor-pointer">
						Small
					</div>
					<div className="py-5 px-6 bg-gray-50 border border-gray-100 rounded cursor-pointer">
						Medium
					</div>
					<div className="py-5 px-6 bg-gray-50 border border-gray-100 rounded cursor-pointer">
						Large
					</div>
					<div className="py-5 px-6 bg-gray-50 border border-gray-100 rounded cursor-pointer">
						XL
					</div>
					<div className="py-5 px-6 bg-gray-50 border border-gray-100 rounded cursor-pointer">
						XXL
					</div>
				</div>
				<button className="py-5 px-10 w-48 text-base font-semibold text-white bg-red-500 mb-10 border border-none outline-none cursor-pointer uppercase">
					add to cart
				</button>
				<p className="productDisplay-right-category mt-2.5">
					<span className="font-semibold">Category: </span>Women, T-Shirt, Crop
					Top
				</p>
				<p className="productDisplay-right-category font-normal mt-2.5">
					<span className="font-semibold">Tags: </span>Modern, Latest
				</p>
			</div>
		</div>
	);
};

export default ProductDisplay;
