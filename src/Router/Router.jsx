import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Components/Main";
import Home from "../Pages/Home";
import Register from "../Components/register";
import Login from "../Components/Login";
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
       }
      ]
    },
   
  ]);

export default router;