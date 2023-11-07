import Lottie from "lottie-react";
import ErrorAnimation from "../../public/Erroranimations/Animation - 1699391129631.json"
import { Link, useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    return (
        <div className="max-w-6xl mx-auto p-10">
           <div className="flex-row lg:flex justify-center items-center gap-5 ">
            <Lottie animationData={ErrorAnimation}></Lottie>

            <div id="error-page">
      <h1 className="text-4xl text-red-500 font-bold text-center mb-5">404 Error</h1>
      <p className="text-center text-2xl font-semibold mb-5">Sorry, an unexpected error has occurred.</p>
      <p className="text-3xl font-bold text-center mb-5">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
            </div> 

            <div className="flex justify-center">
               <Link to="/"> <button className="px-6 py-2 rounded-xl bg-emerald-500 text-xl font-semibold text-white">Home</button></Link>
            </div>

        </div>
    );
};

export default Error;