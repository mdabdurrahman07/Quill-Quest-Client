import { Link, NavLink } from "react-router-dom";

const Header = () => {
   
    return (
        <div className="max-w-screen-2xl mx-auto p-2">
    
        <div className="p-3 sticky">
        <div className=" md:flex-none lg:flex justify-between p-2   drop-shadow-xl bg-base-100">
  <div className="">
    <div className="dropdown">
      <label tabIndex={0} className="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
            >
            <li><a>Home</a></li>
            </NavLink>
       
        <li>
          <a className="font-medium text-2xl">DashBoard</a>
          <ul className="p-2">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
            >
            <li><a className="font-medium text-lg">My-services</a></li>
            </NavLink>
            <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
            >
            <li><a className="font-medium text-lg">Add-services</a></li>
            </NavLink>
            <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
            >
            <li><a className="font-medium text-lg">My-schedules</a></li>
            </NavLink>
          </ul>
        </li>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
            >
            <li><a className="font-medium text-lg">login</a></li>
            </NavLink>
      </ul>
    </div>
    <a className="font-bold  text-2xl">QuillQuest
</a>
  </div>
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
            >
            <li><a className="font-medium text-lg">Home</a></li>
            </NavLink>
      <li tabIndex={0}>
        <details>
          <summary className="font-medium text-lg">DashBoard</summary>
          <ul className="p-5 ">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
            >
            <li><a className="font-medium text-lg">My-services</a></li>
            </NavLink>
            <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
            >
            <li><a className="font-medium text-lg">Add-services</a></li>
            </NavLink>
            <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
            >
            <li><a className="font-medium text-lg">My-schedules</a></li>
            </NavLink>
          </ul>
        </details>
      </li>
      <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }
            >
            <li><a className="font-medium text-lg">login</a></li>
            </NavLink>
    </ul>
  </div>
  
</div>
        </div>

        </div>
    );
};

export default Header;