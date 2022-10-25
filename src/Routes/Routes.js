
import { createBrowserRouter } from "react-router-dom";
import Course from "../Components/Course";
import Home from "../Components/Home/Home";
import Login from "../Components/UserLogin/Login/Login";
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
             path: '/register',
             element:<Signup/>
             },
             {
             path: '/login',
             element:<Login/>
             },
             
         ],         
     }
     
 ])
export default routes 