import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import ServicesCard from "../ServicesCard/ServicesCard";

const PopularServices = () => {
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
   },[axios])
    return (
        <div className="max-w-screen-2xl mx-auto p-3">
            <h1 className="text-5xl font-bold text-center">Our Popular Services</h1>
            
            <div className="flex-row lg:flex justify-center items-center gap-5 my-10  ml-2 md:ml-44 lg:ml-0">
                {
                    services.slice(0 , 4).map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>
            
        </div>
    );
};

export default PopularServices;
