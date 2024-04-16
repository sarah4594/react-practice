import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ShopContextProvider from "./Context/ShopContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ShopContextProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ShopContextProvider>
);
