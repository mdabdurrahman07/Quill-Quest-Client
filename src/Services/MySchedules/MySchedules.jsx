import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const MySchedules = () => {
    const {User} = useAuth()
    const axios = useAxios()
    const [bookingData , SetBookingData] = useState([])
    useEffect(()=>{
        axios(`allBookings?BookingUserEmail=${User?.email}`)
        .then(res=> {
        //    console.log(res.data)
           SetBookingData(res.data)
        })
        .catch(
            error => {
                console.log(error)
            }
        )
    },[])
    // console.log(bookingData)
    return (
        <div className="max-w-screen-2xl mx-auto mt-10 mb-32">
            <div className="flex-row lg:flex justify-center">
            <section className="flex-1 bg-teal-500 h-full">
                <h1 className="text-4xl text-white text-center p-2 underline">My Bookings</h1>

          <div className="w-2/3 mx-auto bg-white mt-5 mb-5">
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th className="text-lg font-bold">Service Name</th>
        <th  className="text-lg font-bold">Booking Date</th>
        <th  className="text-lg font-bold">Booking ID</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        bookingData?.map(booking =>  <tr key={booking?._id}>
        
            <td className="font-bold text-gray-900">{booking?.BookingServiceName ? booking?.BookingServiceName : "Please , Book a Service"  }</td>
            <td className="font-bold text-gray-900">{booking?.BookingDate ? booking?.BookingDate : "Please , Book a Service" }</td>
            <td className="font-bold text-gray-900">{booking?._id ? booking?._id :  "Please , Book a Service" }</td>
          </tr>)
     }
  
    </tbody>
  </table>
</div>
          </div>

            </section>
            <section className="flex-1 bg-amber-500 h-full">
                <h1 className="text-4xl text-white text-center  p-2 underline">My Pending Works</h1>
            </section>
            </div>
        </div>
    );
};

export default MySchedules;
