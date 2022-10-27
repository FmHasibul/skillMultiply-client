
import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Course from "../Components/Course";
import CouresDetails from "../Components/courseDetails/CouresDetails";
import Home from "../Components/Home/Home";
import Login from "../Components/UserLogin/Login/Login";
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
             path: '/home',
             element:<Home/>
             },
             {
             path: '/blog',
             element:<Blog/>
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
                 element:<CouresDetails/>
             },
             
         ],         
     }
     
 ])
export default routes 