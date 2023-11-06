
import Lottie from "lottie-react";
import contactAnimation from "../../../public/conatct-lottie/Animation - 1699282591311.json";
import {MdPhone , MdOutgoingMail , MdMap} from "react-icons/md"
const Contact = () => {
    return (
        <div className="my-10  max-w-screen-2xl mx-auto">
          {/* <h1 className="font-bold text-5xl text-center">Contact Info</h1> */}
      <div className="flex-row lg:flex justify-around items-center gap-5 drop-shadow-xl">
   
         <section>
            <Lottie animationData={contactAnimation}></Lottie>
         </section>
         <section>
       <div className='space-y-10'>
               {/*main content   */}
               <h1 className='text-5xl  font-semibold text-center'>Contact Us</h1>
            {/* short description */}
            <p className='text-2xl font-medium text-zinc-700 '><ul className="space-y-2">
                <li className="flex items-center gap-5 justify-center
                "><MdPhone></MdPhone> <span>017800000</span></li>
                <li className="flex items-center gap-5 justify-center
                "><MdOutgoingMail></MdOutgoingMail><span>quillquest@gmail.com</span></li>
                <li className="flex items-center gap-5 justify-center
                "><MdMap></MdMap><span>Dhaka, Bangladesh</span></li>
                </ul></p>
            {/* btn */}
          
         </div>
         </section>  
      </div>
        </div>
    );
};

export default Contact;