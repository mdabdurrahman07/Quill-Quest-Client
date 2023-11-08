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
import Error from "../Error/Error";
import UpdateService from "../Services/UpdateService/UpdateService";
import MySchedules from "../Services/MySchedules/MySchedules";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement : <Error></Error>,
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
          
        path : "/manageServices",
        element : <PrivateRoute><MyServices></MyServices></PrivateRoute>
      
  },
  {
          
    path : "/addServices",
    element : <PrivateRoute><AddServices></AddServices></PrivateRoute>

  },
  {
          
    path : "/mySchedules",
    element : <PrivateRoute><MySchedules></MySchedules></PrivateRoute>

  },
  {
    path : '/popularServices',
    element : <PopularServices></PopularServices>,
    
  },
  {
    path : '/serviceDetails/:id',
    element : <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
    loader : () => fetch('https://quillquest-server.vercel.app/allServices')
  },
  {
    path : '/updateService/:id',
    element : <PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
    loader : () => fetch('https://quillquest-server.vercel.app/allServices')
  }
      ]
    }
    

   
  ]);

export default router;