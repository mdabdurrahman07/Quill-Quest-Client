import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import ServicesCard from "../ServicesCard/ServicesCard";
import { Link } from "react-router-dom";

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
   },[])
    return (
        <div className="max-w-screen-2xl mx-auto p-3">
            <h1 className="text-5xl font-bold text-center">Our Popular Services</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5 my-10">
                {
                    services.slice(0 , 4).map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
            </div>


            <div className="flex justify-center">
                <Link to="/allServices"><button className="bg-teal-900 text-white px-5 md:px-7 py-3  rounded-xl text-xl font-medium">Show All</button></Link>
            </div>
            
        </div>
    );
};

export default PopularServices;
