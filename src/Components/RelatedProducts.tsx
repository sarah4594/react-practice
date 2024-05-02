import React from "react";
import data_product from "./Assets/data";
import Item from "./Item";

const RelatedProducts = () => {
	return (
		<div className="relatedProducts flex flex-col items-center gap-2.5 h-[90vh]">
			<h1 className="text-gray-800 text-5xl font-semibold">Related Products</h1>
			<hr className="w-52 h-1.5 rounded bg-gray-800" />
			<div className="relatedProducts-item mt-12 flex gap-8">
				{data_product.map((item, i) => {
					return (
						<Item
							key={i}
							id={item.id}
							name={item.name}
							image={item.image}
							new_price={item.new_price}
							old_price={item.old_price}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default RelatedProducts;
