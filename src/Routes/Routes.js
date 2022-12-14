
import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Checkout from "../Components/Checkout/Checkout";
import Course from "../Components/Course";
import CouresDetails from "../Components/courseDetails/CouresDetails";
import ErrorRoute from "../Components/ErrorRoute/ErrorRoute";
import Faq from "../Components/FAQ/Faq";
import Home from "../Components/Home/Home";
import Login from "../Components/UserLogin/Login/Login";
import PrivetRout from "../Components/UserLogin/PrivetRoute/PrivetRout";
import Register from "../Components/UserLogin/Register/Register";
import Signup from "../Components/UserLogin/Signup/Signup";
import Main from "../Layouts/Main";

 const routes = createBrowserRouter([
    {
        path: '/',
         element: <Main></Main>,
         children: [
             
             {
             path: '/courses',
             element:<Course/>
             },
             {
             path: '/',
             element:<Home/>
             },
             {
             path: '/home',
             element:<Home/>
             },
             {
             path: '/blog',
             element:<Blog/>
             },
             {
             path: '/faq',
             element:<Faq/>
             },
             {
             path: '/signup',
             element:<Signup/>
             },
             {
             path: '/mailregister',
             element:<Register/>
             },
             {
             path: '/login',
             element:<Login/>
             },
             {
                 path: '/courses/:id',
                 loader: ({ params }) => fetch(`https://asten-server.vercel.app/courses/${params.id}`),
                 element: <CouresDetails />
             },
             {
                 path: '/checkout/:id',
                 loader: ({ params }) => fetch(`https://asten-server.vercel.app/courses/${params.id}`),
                 element: <PrivetRout><Checkout /></PrivetRout>
             },
             
         ],         
     },
     {
         path: '*',
         element:<ErrorRoute/>
     }
     
 ])
export default routes 