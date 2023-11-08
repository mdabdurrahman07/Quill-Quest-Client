import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyServices = () => {
    const {User} = useAuth()
    const axios = useAxios()
    const [UserInfo , SetUserInfo] = useState([])
    useEffect(()=>{
        axios(`allServices?UserEmail=${User.email}`)
        .then(result=>{
            console.log(result?.data)
            SetUserInfo(result?.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    const handleDelete = id =>{
        axios.delete(`/allServices/${id}`)
        .then(result =>{
            console.log(result.data)
            if(result.data.deletedCount > 0){
                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                        const filterData = UserInfo.filter(value => value._id !== id)
                        SetUserInfo(filterData)
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    }
                  });
            }

        })
        .catch(error => {
            console.log(error)
        })

    }

    return (
        <div className="max-w-screen-2xl mx-auto p-2 mt-32 mb-20">
            <h1 className="text-xl font-bold text-center mb-5">Welcome <span className="text-orange-500">{User?.email}</span> to the Manage Service</h1>
          <div className="grid grid-cols-1 justify-center items-center gap-5 my-10">
            {
                UserInfo.map(service =>   <div key={service._id} className="card  bg-base-100 shadow-xl mb-5 lg:mb-0">
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
                 
                  <div className="flex justify-around items-center">
                    <button className="bg-emerald-500 text-white font-bold text-2xl px-6 py-2 rounded-xl">Update Service</button>
                    <button onClick={()=>handleDelete(service?._id)} className="bg-red-500 text-white font-bold text-2xl px-6 py-2 rounded-xl">Delete Service</button>
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>
    );
};

export default MyServices;