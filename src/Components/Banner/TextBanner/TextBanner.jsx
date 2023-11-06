import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
const TextBanner = () => {
    return (
        <div>
         <div className='space-y-5'>
               {/*main content   */}
               <h1 className='text-5xl  font-semibold'>Welcome To QuillQuest</h1>
            {/* short description */}
            <p className='text-4xl font-medium text-zinc-700'>All In One Book Services   <br /><span style={{ color: 'green', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Buy Books', 'Find Books Club', 'Rare Book Collection', '& more']}
            loop={100}
            cursor
            cursorStyle='...'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span></p>
            {/* btn */}
           <div>
           <Link to="/registration" ><button  className="bg-gradient-to-r from-emerald-500  to-purple-500 text-white text-xl font-medium rounded-full px-6 py-2 mb-3">
             Register Now

            </button></Link>
           </div>
         </div>
        </div>
    );
};

export default TextBanner;