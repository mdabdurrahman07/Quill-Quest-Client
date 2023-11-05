import Lottie from "lottie-react";
import loginAnimation from "../../public/login-lottie/Animation - 1699200714684.json"
import { Link } from "react-router-dom";
const login = () => {

    return (
        <div className="max-w-screen-2xl mx-auto bg-gradient-to-r from-indigo-500 via-emerald-500 to-pink-500">
			<h2 className="text-5xl font-semibold text-center text-white py-5">Login to your account</h2>
				<div className="flex-row lg:flex gap-5 items-center p-10">
					<section className="flex-1">   
 <div className="w-96 max-w-md p-4 rounded-md shadow sm:p-8 bg-white">
	
	<p className="text-xl text-center ">Dont have account?
		<Link to="/registration"><a   className="underline"> Register</a></Link>
	</p>
	<div className="my-6 space-y-4">
		<button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ri focus:ri dark:border-gray-400 focus:ri">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
	</div>
	<div className="flex items-center w-full my-4">
		<hr className="w-full dark:text-gray-400"/>
		<p className="px-3 dark:text-gray-400">OR</p>
		<hr className="w-full dark:text-gray-400"/>
	</div>
	<form className="space-y-8">
		<div className="space-y-4">
			<div className="space-y-2">
				<label name="email" className="block text-xl">Email address</label>
				<input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border-2 rounded-md " />
			</div>
			<div className="space-y-2">
				<div className="flex justify-between">
					<label name="password" className="text-xl">Password</label>
					
				</div>
				<input type="password" name="password" id="password" placeholder="password" className="w-full px-3 py-2 border-2 rounded-md " />
			</div>
		</div>
		<div className="flex justify-center">
		<button type="button" className="bg-gradient-to-r from-pink-500  to-purple-500 text-white text-xl font-medium  px-6 py-2 ">Sign in</button>
		</div>
	</form>
					</div></section>

					<section className="flex-1">
						<Lottie animationData={loginAnimation}></Lottie>
					</section>
				</div>
        </div>
    );
};

export default login;
