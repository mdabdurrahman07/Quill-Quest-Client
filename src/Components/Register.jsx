

const Register = () => {
    return (
        <div>
            <h1>This is Register page</h1>
            <section className="p-6">
	<form  action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md drop-shadow-xl">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label name="firstname" className="text-sm">First name</label>
					<input id="firstname" type="text" placeholder="First name" className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label name="lastname" className="text-sm">Last name</label>
					<input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label name="email" className="text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full">
					<label name="address" className="text-sm">Address</label>
					<input id="address" type="text" placeholder="" className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label name="city" className="text-sm">City</label>
					<input id="city" type="text" placeholder="" className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label name="state" className="text-sm">State / Province</label>
					<input id="state" type="text" placeholder="" className="w-full rounded-md py-3" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label name="zip" className="text-sm">ZIP / Postal</label>
					<input id="zip" type="text" placeholder="" className="w-full rounded-md py-3" />
				</div>
			</div>
		</fieldset>
		
	</form>
</section>
        </div>
    );
};

export default Register;