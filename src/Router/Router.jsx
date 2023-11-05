import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Components/Main";
import Home from "../Pages/Home";
import Register from "../Components/register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children : [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
    {
      path: "/registration",
      element: <Register></Register>
    }
  ]);

export default router;