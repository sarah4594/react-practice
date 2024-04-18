import React, { createContext } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider: React.FC<Props> = (props) => {
	const contextValue: ContextValue = { all_product };

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};

interface Props {
	children: React.ReactNode;
}

interface ContextValue {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	all_product: any;
}

export default ShopContextProvider;
