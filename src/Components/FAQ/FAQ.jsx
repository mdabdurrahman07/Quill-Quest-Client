import FAQsvg from "../../../public/assets/faq-svg/undraw_pending_approval_xuu9.svg"
const FAQ = () => {
    return (
        <div className="max-w-screen-2xl mx-auto p-3 my-10">
             <div className="flex-row lg:flex justify-center items-center gap-5">
                <section className="space-y-6 flex-1">
                    <h1 className="text-5xl font-bold text-center mb-5">FAQ</h1>
                    
                                            <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" checked="checked" /> 
                        <div className="collapse-title text-xl font-medium">
                            Can a logged User Updated or Manage his/her Services ?
                        </div>
                        <div className="collapse-content"> 
                            <p>Yes, Our Website has this feature!</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                            Do you guys provide Any discount on purchase ?
                        </div>
                        <div className="collapse-content"> 
                            <p>Certainly , We do!</p>
                        </div>
                        </div>
                        <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" /> 
                        <div className="collapse-title text-xl font-medium">
                        Can a logged User Add  New  Services ?
                        </div>
                        <div className="collapse-content"> 
                            <p>Yes , they can!</p>
                        </div>
                        </div>                     
                </section>
                <section className="flex-1">
                    {/* <Lottie animationData={aboutAnimation}></Lottie> */}
                    <img className="max-w-xs md:max-w-2xl mx-auto mt-10 md:mt-0" src={FAQsvg} alt="" />
                </section>
            </div>
        </div>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;