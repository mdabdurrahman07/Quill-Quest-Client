import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";

const AllServices = () => {
    // const handlefilter = e => {
    //     e.preventDefault()
    //     const form = e.target
    //     const filterData = form.input.value
    //     console.log(filterData)
    //    }

    const [services , Setservices] = useState([])
   
    const axios = useAxios()
   useEffect(()=>{
  axios.get('allServices')
    .then(response => {
    //  console.log(response.data)
     Setservices(response.data)
    })
    .catch(error => {
        console.log(error)
    })
   },[])
   
    return (
        <div className="max-w-screen-2xl mx-auto my-10">
                {/* filter data */}
                
                <form  className="flex justify-center gap-2   mb-7">
                <input type="text" name="input" placeholder="Enter Service Name" className="input input-bordered w-full max-w-sm md:max-w-lg" />
                    <input type="submit" value="Filter" className=" px-6 py-2  bg-teal-500 text-white text-lg rounded-lg font-semibold" />
                </form>
            


            <div className="grid grid-cols-1 justify-center items-center gap-5 my-10">
           {
            services.map(service =>  <div key={service._id} className="card  bg-base-100 shadow-xl mb-5 lg:mb-0">
            <figure><img src={service?.serviceUrl} alt="Shoes" className="max-w-sm md:max-w-md" /></figure>
            <div className="card-body">
              <h2 className="card-title">{service?.serviceName}</h2>
              <p>{service?.ServiceDesc.slice(0,300)}.... <span className="text-blue-500">Read more</span></p>
                  <div className="w-30 h-[1px] bg-black my-2"></div>
              
                  <h1 className="text-center font-bold">Service Provider info</h1>
                  <span className="flex justify-center ">
                  <p className="text-lg font-semibold">{service?.UserName}</p>
                  <img src={service?.UserPhoto} className="w-12 h-12 rounded-full" alt="" />
              </span>
              <p className="text-center text-xl font-bold"><span className="mr-3">Price</span>  ${service?.servicePrice}</p>
              <p className="text-center text-xl font-bold"><span className="mr-3">Service Area</span>  {service?.serviceArea}</p>
             
              <div className="card-actions mt-2">
                <button className="w-full bg-gray-800 py-3 text-white text-xl rounded-lg">View Details</button>
              </div>
            </div>
          </div>)
           }
            </div>
            
        </div>
    );
};

export default AllServices;