import React from "react";

const LoginSignUp = () => {
	return (
		<div className="loginSignup w-full h-[80vh] bg-gray-100 pt-24">
			<div className="loginSignup-container w-[650px] h-[700px] bg-white m-auto py-10 px-16">
				<h1 className="my-5 px-0">Sign Up</h1>
				<div className="loginSignup-fields flex flex-col gap-8 mt-8">
					<input
						className="h-20 w-full pl-5 border border-gray-100 outline-none text-gray-600 text-lg"
						type="text"
						placeholder="Your Name"
					/>
					<input
						className="h-20 w-full pl-5 border border-gray-100 outline-none text-gray-600 text-lg"
						type="email"
						placeholder="Email Address"
					/>
					<input
						className="h-20 w-full pl-5 border border-gray-100 outline-none text-gray-600 text-lg"
						type="password"
						placeholder="Password"
					/>
				</div>
				<button className="w-[500px] h-16 mt-8 text-white bg-red-500 text-2xl cursor-pointer">
					Continue
				</button>
				<p className="loginSignup-login mt-5 text-gray-600 text-lg">
					Already have an account?{" "}
					<span className="text-red-500 font-semibold">Login here</span>
				</p>
				<div className="loginSignup-agree flex items-center mt-6 gap-5 text-gray-600 text-lg">
					<input type="checkbox" name="" id="" />
					<p>By continuing, I agree to the Terms and Policies</p>
				</div>
			</div>
		</div>
	);
};

export default LoginSignUp;
