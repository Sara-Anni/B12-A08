import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import Banner from "../Components/Banner";
import Installation from "../Pages/Installation";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children:[
        {
        path: '*', 
        element: <ErrorPage />, 
        },
         
         {
            path: '/home',
            element: <Home/>,
            
         },
         {
             path: '/apps',
             element: <Apps/>,
         },
         {
             path: '/installation',
             element: <Installation/>,
         },

    ]
  },
 
  
]);

export default router;