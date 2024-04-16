import React from "react";
import footer_logo from "./Assets/logo_big.png";
import instagram_icon from "./Assets/instagram_icon.png";
import pintester_icon from "./Assets/pintester_icon.png";
import whatsapp_icon from "./Assets/whatsapp_icon.png";

const Footer = () => {
	return (
		<div className="footer flex flex-col justify-center items-center gap-12">
			<div className="footer-logo flex items-center gap-5">
				<img src={footer_logo} />
				<p className="uppercase text-gray-800 text-5xl font-bold">shopper</p>
			</div>
			<ul className="footer-links flex list-none gap-12 text-xl text-gray-800 ">
				<li className="cursor-pointer">Products</li>
				<li className="cursor-pointer">Offices</li>
				<li className="cursor-pointer">Company</li>
				<li className="cursor-pointer">About</li>
				<li className="cursor-pointer">Contact</li>
			</ul>
			<div className="footer-social-icons flex gap-5 ">
				<div className="footer-icons-container p-2.5 pb-1.5 bg-gray-100 border border-gray-100">
					<img src={instagram_icon} alt="" />
				</div>
				<div className="footer-icons-container p-2.5 pb-1.5 bg-gray-100 border border-gray-100">
					<img src={pintester_icon} alt="" />
				</div>
				<div className="footer-icons-container p-2.5 pb-1.5 bg-gray-100 border border-gray-100">
					<img src={whatsapp_icon} alt="" />
				</div>
			</div>
			<div className="footer-copyright flex flex-col items-center gap-8 w-full mb-8 text-gray-800 text-xl">
				<hr className="w-4/5 border order-none rounded h-1 bg-gray-200" />
				<p>Copyright @ 2024 - All Rights Reserved</p>
			</div>
		</div>
	);
};

export default Footer;
