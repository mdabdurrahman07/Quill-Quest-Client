import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServicesCard = (service) => {
    // console.log(service.service)
    // console.log(service)
  
   
    return (
        <div className="max-w-screen-2xl mx-auto">
                <div className="card  bg-base-100 shadow-xl mb-5 lg:mb-0">
  <figure><img src={service?.service?.serviceUrl} alt="Shoes" className="max-w-sm md:max-w-md" /></figure>
  <div className="card-body">
    <h2 className="card-title">{service?.service?.serviceName}</h2>
    <p>{service?.service?.ServiceDesc.slice(0,300)}.... <span className="text-blue-500">Read more</span></p>
        <div className="w-30 h-[1px] bg-black my-2"></div>
    
        <h1 className="text-center font-bold">Service Provider info</h1>
        <span className="flex justify-between items-center">
        <p className="text-lg font-semibold">{service?.service?.UserName}</p>
        <img src={service?.service?.UserPhoto} className="w-12 h-12 rounded-full" alt="" />
    </span>
    <p className="text-center text-xl font-bold"><span className="mr-3">Price</span>  ${service?.service?.servicePrice}</p>
    <div >
      <Link className="card-actions mt-2" to={`/serviceDetails/${service?.service?._id}`}><button className="w-full bg-gray-800 py-3 text-white text-xl rounded-lg">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesCard;