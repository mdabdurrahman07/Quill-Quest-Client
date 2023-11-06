import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Swal from 'sweetalert2'

const AddServices = () => {
    const {User} = useAuth()
    const axios = useAxios()
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
        // data sending
     axios.post('allServices' , ServiceAllInfo)
     .then(response => {
        console.log(response.data)
        if(response.data.acknowledged){
            Swal.fire({
                title: "Good job!",
                text: "Your Service Added Successfully",
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
            <h1 className='text-4xl font-bold text-center my-3'>Fill up this Form to Insert New Services</h1>
            {/* info  */}
            <div>
            <section className="p-6 ">
	<form onSubmit={handleAddService} action="" className="container flex flex-col mx-auto space-y-20 ">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-slate-300">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium text-3xl">Book Services Info</p>
				<p className="text-xl">Please, Enter Info Correctly</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label name="firstname" className="text-2xl">Your Name</label>
					<input name="name"  type="text" defaultValue={User?.displayName } readOnly className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label name="lastname" className="text-2xl">Price</label>
					<input name="price" type="number" placeholder="$100" className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label name="email" className="text-2xl">Your Email</label>
					<input name="email" type="email" defaultValue={User?.email} readOnly className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full">
					<label name="address" className="text-2xl">Service Description</label>
					<input name="description" type="text" placeholder="" className="w-full rounded-md py-10" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label name="city" className="text-2xl">Service Name</label>
					<input name="serviceName" type="text" placeholder="" className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label name="state" className="text-2xl">Service Area</label>
					<input name="serviceArea" type="text" placeholder="" className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label name="zip" className="text-2xl">Service Photo</label>
					<input name="serviceUrl" type="url" placeholder="" className="w-full rounded-md py-3" />
				</div>

                <button type="submit" className="px-5 py-3 rounded-lg bg-slate-500 text-white text-xl font-bold">Add Service</button>
			</div>
		</fieldset>
		
	</form>
</section>
            </div>
        </div>
    );
};

export default AddServices;