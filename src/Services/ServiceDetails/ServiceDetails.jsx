import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";

const ServiceDetails = () => {
    const {User} = useAuth()
    const axios = useAxios()
    const [detail , setDetail] = useState({})
    const details = useLoaderData()
    const {id} = useParams()
    // console.log(id)
    
    
    useEffect(()=> {
      const FindDetails = details?.find(values => values._id == id)
      setDetail(FindDetails)
    }, [details, id])
    const handleBookingForm = e =>{
        e.preventDefault()
        const form = e.target
        const BookingServiceName = form.name.value
        const ServiceProviderEmail = form.email.value
        const BookingUserEmail = form.loginUser.value
        const BookingDate = form.date.value
        const BookingInstruction = form.instruction.value
        const BookingPrice = form.price.value
        // console.log(BookingServiceName ,ServiceProviderEmail,BookingUserEmail,BookingDate,BookingInstruction,BookingPrice)

        const allBookingInfo = {
            BookingServiceName ,ServiceProviderEmail,BookingUserEmail,BookingDate,BookingInstruction,BookingPrice
        }
        axios.post('allBookings' , allBookingInfo)
        .then(result => {
            console.log(result.data)
            if(result.data.acknowledged){
                toast.success('Your Booking is Confirmed, Thanks')
            }
            form.reset()
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="max-w-screen-2xl mx-auto p-3">
          <h1 className="text-5xl font-bold text-center mt-5 mb-5">Welcome To Service Details Page</h1>
          <div className="bg-slate-300 max-w-md mx-auto p-5 mb-5">
            <p className="text-xl mb-5 text-center font-bold">Service Provider Information</p>
            <div className="flex justify-around items-center">

                <p className="text-lg bg-black text-white">{detail.UserName}</p>
                <img src={detail.UserPhoto} className="w-28 h-28" alt="" />
            </div>
          </div>
          <div className="card lg:card-side bg-base-100 drop-shadow">
  <figure><img src={detail?.serviceUrl} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{detail?.serviceName}</h2>
    <p>{detail.ServiceDesc}</p>
    <span >
                  <p className="text-lg font-semibold pb-4">{detail?.UserName}</p>
                  <img src={detail?.UserPhoto} className="w-20 h-20 rounded-full" alt="" />
              </span>

              <p className="text-center text-xl font-bold"><span className="mr-3">Price</span>  ${detail?.servicePrice}</p>
              <p className="text-center text-xl font-bold"><span className="mr-3">Service Area</span>:  {detail?.serviceArea}</p>
             
    <div className="card-actions justify-end">
      
      {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="px-5 py-2 bg-gray-700 text-white text-xl" onClick={()=>document.getElementById('my_modal_5').showModal()}>Book Now</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Confirm Your Bookings</h3>
    {/* <p className="py-4">Press ESC key or click the button below to close</p> */}
    <form onSubmit={handleBookingForm} className="card-body">
  <div className="form-control">
  <div className="flex justify-center items-center">
  <img src={detail?.serviceUrl} className="w-36 h-28" alt="" />
  </div>
      <label className="label">
        <span className="text-2xl">Service Name</span>
      </label>
    
      <input type="text" defaultValue={detail?.serviceName}  readOnly name='name' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="text-2xl">Service Provider  Email</span>
      </label>
      <input type="email" defaultValue={detail?.UserEmail} readOnly name='email' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="text-2xl">User Email</span>
      </label>
      <input type="text" defaultValue={User?.email} name='loginUser' readOnly className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="text-2xl">Set Date</span>
      </label>
      <input type="date"  name='date' className="input input-bordered" required />
     
    </div>
    <div className="form-control">
      <label className="label">
        <span className="text-2xl">Special Instruction </span>
      </label>
      <input type="text"  name='instruction' className="input input-bordered"  />
     
    </div>
    <div className="form-control">
      <label className="label">
        <span className="text-2xl">Price</span>
      </label>
      <input type="text" defaultValue={detail?.servicePrice} readOnly  name='price' className="input input-bordered" required />
     
    </div>
    <div className="flex justify-center mt-6">
      <button type='submit' className="bg-gray-700 text-white text-xl font-medium  px-6 py-2">Confirm</button>
    </div>

   
    
  </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        
        <button className="btn">Close</button>
        
      </form>
    </div>
  </div>
</dialog>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceDetails;