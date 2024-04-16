import React, { createContext } from "react";
import all_produdct from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
	const contextValue = { all_produdct };

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};

export default ShopContextProvider;
