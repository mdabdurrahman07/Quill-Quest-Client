import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Components/Main";
import Home from "../Pages/Home";
import Register from "../Components/register";
import Login from "../Components/Login";
import AllServices from "../Services/AllServices/AllServices";
import MyServices from "../Services/MyServices/MyServices";
import AddServices from "../Services/AddServices/AddServices";
import PopularServices from "../Services/PopularService/PopularServices";
import ServiceDetails from "../Services/ServiceDetails/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path: '/',
            element: <Home></Home>
        },
       {
        path: "/registration",
        element: <Register></Register>
       },
       {
        path: "/login",
        element: <Login></Login>
       },
       {
        
        path : "/allServices",
        element : <AllServices></AllServices>
      
  },
      {
          
        path : "/myServices",
        element : <MyServices></MyServices>
      
  },
  {
          
    path : "/addServices",
    element : <AddServices></AddServices>

  },
  {
          
    path : "/mySchedules",
    element : <MyServices></MyServices>

  },
  {
    path : '/popularServices',
    element : <PopularServices></PopularServices>,
    
  },
  {
    path : '/serviceDetails/:id',
    element : <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
    loader : () => fetch('http://localhost:5000/allServices')
  }
      ]
    }
    

   
  ]);

export default router;