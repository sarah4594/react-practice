import React from "react";
import new_collections from "./Assets/new_collections.js";
import Item from "./Item";

const NewCollections = () => {
	return (
		<div className="new-collections flex flex-col items-center gap-2.5 mb-24">
			<h1 className="uppercase text-gray-800 text-5xl font-semibold ">
				new-collections in womens
			</h1>
			<hr className="w-48 h-1.5 rounded bg-gray-800" />
			<div className="collections grid grid-cols-4 mt-12 gap-8">
				{new_collections.map((item: ItemProps, i) => {
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

export default NewCollections;
