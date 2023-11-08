
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";



const UpdateService = () => {
    const {User} = useAuth()
    const axios = useAxios()
    const Data = useLoaderData()
    const {id} = useParams()
    // console.log(Data)
    // console.log(id)
    const [newUpdatedInfo , setNewUpdatedInfo] = useState({})

    useEffect(()=>{
        const filterUpdate = Data?.find(items => items._id == id)
        setNewUpdatedInfo(filterUpdate)
    },[Data, id])
    // console.log(newUpdatedInfo)
  
    const handleAddService = e =>{
        e.preventDefault()
        const form = e.target
        const UserName = form.name.value
        const servicePrice = form.price.value
        const UserEmail = form.email.value
        const ServiceDesc = form.description.value
        const serviceName = form.serviceName.value
        const serviceArea = form.serviceArea.value
        const serviceUrl = form.serviceUrl.value
    //  console.log(UserName , UserEmail , servicePrice ,ServiceDesc , serviceName , serviceArea , serviceUrl)
     const ServiceAllInfo = {
        UserName , UserEmail , servicePrice ,ServiceDesc , serviceName , serviceArea , serviceUrl , UserPhoto : User?.photoURL }
        console.log(ServiceAllInfo)
        // data updating

        axios.put(`/allServices/${newUpdatedInfo._id}` , ServiceAllInfo)
        .then(result => {
            console.log(result.data)
            if(result.data.modifiedCount > 0){
                Swal.fire({
                    title: "Service Updated",
                    text: "Thanks Your Service , Updated Successfully",
                    icon: "success"
                  });
            }

        })
        .catch(error => {
            console.log(error)
        })
     
    }
    return (
        <div className='max-w-screen-2xl mx-auto p-3 my-10'>
            <h1 className='text-4xl font-bold text-center my-3'>Fill up this Form to Update Services</h1>
            {/* info  */}
            <div>
            <section className="p-6 ">
	<form onSubmit={handleAddService} action="" className="container flex flex-col mx-auto space-y-20 ">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-slate-300">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium text-3xl">Update Services Info</p>
				<p className="text-xl">Please, Enter Info Correctly</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label name="firstname" className="text-2xl">Your Name</label>
					<input name="name"  type="text" defaultValue={User?.displayName }  className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label name="lastname" className="text-2xl">Price</label>
					<input name="price" type="number" defaultValue={newUpdatedInfo?.servicePrice} required className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label name="email" className="text-2xl">Your Email</label>
					<input name="email" type="email" defaultValue={User?.email} readOnly className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full">
					<label name="address" className="text-2xl">Service Description</label>
					<input name="description" type="text" defaultValue={newUpdatedInfo?.ServiceDesc} required className="w-full rounded-md py-10" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label name="city" className="text-2xl">Service Name</label>
					<input name="serviceName" type="text" defaultValue={newUpdatedInfo?.serviceName} required className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label name="state" className="text-2xl">Service Area</label>
					<input name="serviceArea" type="text" defaultValue={newUpdatedInfo?.serviceArea} required className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label name="zip" className="text-2xl">Service Photo</label>
					<input name="serviceUrl" type="url" defaultValue={newUpdatedInfo?.serviceUrl} required className="w-full rounded-md py-3" />
				</div>

                <button type="submit" className="px-5 py-3 rounded-lg bg-emerald-500 text-white text-xl font-bold w-56">Update Service</button>
			</div>
		</fieldset>
		
	</form>
</section>
            </div>
        </div>
        
    );
};

export default UpdateService;