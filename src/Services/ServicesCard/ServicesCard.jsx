/* eslint-disable react/prop-types */
const ServicesCard = (service) => {
    console.log(service.service)
    // console.log(service)
    // eslint-disable-next-line no-unused-vars
    // const {serviceUrl , serviceName , ServiceDesc  , UserName , UserPhoto} = service
    return (
        <div className="max-w-screen-2xl mx-auto">
                <div className="card  bg-base-100 shadow-xl mb-5 lg:mb-0">
  <figure><img src={service?.service?.serviceUrl} alt="Shoes" className="max-w-xs" /></figure>
  <div className="card-body">
    <h2 className="card-title">{service?.service?.serviceName}</h2>
    <p>{service?.service?.ServiceDesc.slice(0,200)}....</p>
        <div className="w-30 h-[1px] bg-black my-2"></div>
    
        <h1 className="text-center font-bold">Service Provider info</h1>
        <span className="flex justify-between items-center">
        <p className="text-lg font-semibold">{service?.service?.UserName}</p>
        <img src={service?.service?.UserPhoto} className="w-12 h-12 rounded-full" alt="" />
    </span>
    <div className="card-actions mt-2">
      <button className="w-full bg-gray-800 py-3 text-white text-xl rounded-lg">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServicesCard;