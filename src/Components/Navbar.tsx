import React, { useState } from "react";
import logo from "./Assets/logo.png";
import cart_icon from "./Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [menu, setMenu] = useState("shop");

	return (
		<div className="flex justify-around p-4 shadow-sm">
			<div className="flex items-center gap-2.5">
				<img src={logo} alt="logo" />
				<p className="text-gray-800 text-4xl font-semibold">SHOPPER</p>
			</div>
			<ul className="flex items-center gap-12 list-none text-gray-600 text-xl">
				<li
					onClick={() => {
						setMenu("shop");
					}}
					className="flex flex-col items-center justify-center gap-1 cursor-pointer"
				>
					<Link to="/">Shop</Link>
					{menu === "shop" ? (
						<hr className="border-none w-4/5 h-1 rounded-lg bg-red-300" />
					) : (
						<></>
					)}
				</li>
				<li
					onClick={() => {
						setMenu("mens");
					}}
					className="flex flex-col items-center justify-center gap-1 cursor-pointer"
				>
					<Link to="/mens">Men</Link>
					{menu === "mens" ? (
						<hr className="border-none w-4/5 h-1 rounded-lg bg-red-300" />
					) : (
						<></>
					)}
				</li>
				<li
					onClick={() => {
						setMenu("womens");
					}}
					className="flex flex-col items-center justify-center gap-1 cursor-pointer"
				>
					<Link to="/womens">Womens</Link>
					{menu === "womens" ? (
						<hr className="border-none w-4/5 h-1 rounded-lg bg-red-300" />
					) : (
						<></>
					)}
				</li>
				<li
					onClick={() => {
						setMenu("kids");
					}}
					className="flex flex-col items-center justify-center gap-1 cursor-pointer"
				>
					<Link to="/kids">Kids</Link>
					{menu === "kids" ? (
						<hr className="border-none w-4/5 h-1 rounded-lg bg-red-300" />
					) : (
						<></>
					)}
				</li>
			</ul>
			<div className="flex items-center gap-11 ">
				<button className="w-40 h-14 outline-none border border-gray-500 rounded-full text-gray-500 text-xl bg-white cursor-pointer active:bg-gray-100">
					<Link to="/login">Login</Link>
				</button>
				<Link to="/cart">
					<img src={cart_icon} alt="cart" />
				</Link>
				<div className="w-5 h-5 flex justify-center items-center -mt-9 -ml-14 rounded-xl text-sm bg-red-500 text-white">
					0
				</div>
			</div>
		</div>
	);
};

export default Navbar;
