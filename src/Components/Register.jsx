import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import registerAnimation from '../../public/lottie-animation/Animation - 1699197918381.json'
const Register = () => {
    const handleRegister = () =>{

    }
    // const handleGoogle = () => {

    // }
    return (
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 max-w-screen-2xl mx-auto">
            <h1 className="text-5xl font-medium text-center py-5 text-white">
                Welcome To Our Registration Page
            </h1>
           <div>
   <div className="hero">
<div className="hero-content flex-col lg:flex-row">
    <Lottie animationData={registerAnimation}></Lottie>
<div className="card flex-shrink-0  w-full max-w-sm  bg-base-100">
  <form onSubmit={handleRegister} className="card-body">
  <div className="form-control">
      <label className="label">
        <span className="text-2xl">Name</span>
      </label>
      <input type="text" placeholder="name" name='name' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="text-2xl">Email</span>
      </label>
      <input type="email" placeholder="email" name='email' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="text-2xl">Photo Url</span>
      </label>
      <input type="url" placeholder="Photo Url" name='url' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="text-2xl">Password</span>
      </label>
      <input type="password" placeholder="password" name='password' className="input input-bordered" required />
     
    </div>
    <div className="flex justify-center mt-6">
      <button type='submit' className="bg-gradient-to-r from-pink-500  to-purple-500 text-white text-xl font-medium  px-6 py-2">Register</button>
    </div>

   
    <div className='ml-5 mt-3'><p className='text-xl font-medium '>Already Have an Account ? <Link to="/login" className='underline ml-2'>Login</Link></p></div>
  </form>
  <div className="my-6 space-y-4">
		<button aria-label="Login with Google" type="button" className="flex items-center justify-center w-52 mx-auto p-4 space-x-4 border-2 rounded-md ">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
	</div>
</div>
</div>
</div>
   </div>
    </div>
    );
};

export default Register;