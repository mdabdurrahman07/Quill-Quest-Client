import {  NavLink } from "react-router-dom";
import logo from '../../public/logos/logo-no-background.png'
import useAuth from "../hooks/useAuth";
const Header = () => {
   const {User , logout} = useAuth()
   
   const handleLogout = () =>{
      logout()
      .then(()=>{

      })
      .catch(error=>console.log(error.message))
   }
    return (
        <div className="max-w-screen-2xl mx-auto">
    
        <div className="sticky">
        <div className=" md:flex-none lg:flex justify-between p-2 drop-shadow-xl bg-base-100">
  <div className="my-auto">
    <div className="dropdown">
      <label tabIndex={0} className="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 my-auto">
                <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-fuchsia-500" : ""
            }
            >
            <li><a className="font-medium text-lg">Home</a></li>
            </NavLink>
            <NavLink
            to="/allServices"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-fuchsia-500" : ""
            }
            >
            <li><a className="font-medium text-lg">Services</a></li>
            </NavLink>
       {
        User ? 

          <>
          
        <li>
          <a className="font-medium text-2xl">DashBoard</a>
          <ul className="p-2">
          <NavLink
            to="/myServices"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-fuchsia-500" : ""
            }
            >
            <li><a className="font-medium text-lg">My-services</a></li>
            </NavLink>
            <NavLink
            to="/addServices"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-emerald-500" : ""
            }
            >
            <li><a className="font-medium text-lg">Add-services</a></li>
            </NavLink>
            <NavLink
            to="/mySchedules"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-fuchsia-500" : ""
            }
            >
            <li><a className="font-medium text-lg">My-schedules</a></li>
            </NavLink>
          </ul>
        </li>
        
            <li onClick={handleLogout}><a className="font-medium text-lg">logout</a></li>
           
          </>
        :
        <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-2 border-fuchsia-500" : ""
        }
        >
        <li><a className="font-medium text-lg">login</a></li>
        </NavLink>

    

       }
      </ul>
    </div>
    
   
     
     
      <a className="font-bold text-2xl ">
   <span>   <img src={logo} className="w-16 inline-block" alt="" /> </span>
       
        <span className="ml-2">QuillQuest</span>
        
  
        </a>
     
          
  </div>
  <div className="hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 my-auto">
    <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-fuchsia-500" : ""
            }
            >
            <li><a className="font-medium text-lg">Home</a></li>
            </NavLink>
            <NavLink
            to="/allServices"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-fuchsia-500" : ""
            }
            >
            <li><a className="font-medium text-lg">Services</a></li>
            </NavLink>
      {
        User ?
        <>
        <li tabIndex={0}>
        <details>
          <summary className="font-medium text-lg">DashBoard</summary>
          <ul className="p-5 lg:w-40">
          <NavLink
            to="/myServices"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-fuchsia-500" : ""
            }
            >
            <li><a className="font-medium text-lg">My-services</a></li>
            </NavLink>
            <NavLink
            to="/addServices"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-fuchsia-500" : ""
            }
            >
            <li><a className="font-medium text-lg">Add-services</a></li>
            </NavLink>
            <NavLink
            to="/mySchedules"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-fuchsia-500" : ""
            }
            >
            <li><a className="font-medium text-lg">My-schedules</a></li>
            </NavLink>
          </ul>
        </details>
      </li>
             
            <li onClick={handleLogout}><a className="font-medium text-lg">logout</a></li>
            {/* <li><img src={User.photoURL} className="w-10 h-10 rounded-full" alt="" /></li> 

            <li><p>{User.displayName}</p></li>  */}
          
        </>
        :
        <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-2 border-fuchsia-500" : ""
            }
            >
            <li><a className="font-medium text-lg">login</a></li>
            </NavLink>
      }
       
    </ul>
   
  </div>
  
</div>
        </div>

        </div>
    );
};

export default Header;