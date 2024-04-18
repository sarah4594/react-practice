import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item, { ItemProps } from "../Components/Item";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ShopCategory = (props: any) => {
	const { all_product } = useContext(ShopContext);
	return (
		<div className="shopCategory">
			<img
				className="shopCategory-banner block my-8 mx-auto w-[82%]"
				src={props.banner}
				alt=""
			/>
			<div className="shopCategory-indexSort flex my-0 mx-44 justify-between items-center">
				<p>
					<span className="font-semibold">Showing 1 - 12</span> out of 36
					products
				</p>
				<div className="shopCategory-sort flex items-center py-2.5 px-5 rounded-full border border-gray-500">
					Sort by <img src={dropdown_icon} alt="" />
				</div>
			</div>
			<div className="shopCategory-products my-5 mx-44 grid grid-cols-4 gap-y-20">
				{all_product.map((item: ItemProps, i: number) => {
					if (props.category === item.category) {
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
					} else {
						return null;
					}
				})}
			</div>
			<div className="shopCategory-loadMore flex justify-center items-center my-36 mx-auto w-60 h-16 rounded-full bg-gray-100 text-gray-600 text-lg">
				Explore More
			</div>
		</div>
	);
};

export default ShopCategory;
