import React from "react";
import data_product from "./Assets/data.js";
import Item from "./Item";

const Popular = () => {
	return (
		<div className="popular flex flex-col items-center gap-2.5 h-[90vh]">
			<h1 className="uppercase text-gray-800 text-5xl font-semibold ">
				popular in womens
			</h1>
			<hr className="w-48 h-1.5 rounded bg-gray-800" />
			<div className="popular-item mt-12 flex gap-8">
				{data_product.map((item: ItemProps, i) => {
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

interface ItemProps {
	id: number;
	name: string;
	image: string;
	new_price: number;
	old_price: number;
}

export default Popular;
