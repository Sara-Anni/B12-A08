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
    element: <MainLayout />,
    children: [
      {
        index: true, 
        element: <Home />,
        loader: () => fetch('/appData.json'), 
      },
      {
        path: 'apps',
        element: <Apps />,
      },
      {
        path: 'installation',
        element: <Installation />,
      },
      {
        path: '*', 
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;