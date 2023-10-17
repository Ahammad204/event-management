import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/HomePage/Home";
import Error from './../Error/Error';
import ServiceDetails from "../Pages/Components/ServiceDetails/ServiceDetails";
import Login from "../Pages/Components/Login/Login";
import Register from "../Pages/Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../Pages/AboutUs/AboutUs";
import TeamMember from "../Pages/TeamMember/TeamMember";
import Partner from "../Pages/PHArenaPartner/Partner";
import Purchase from "../Pages/Purches/Purchase";

const router = createBrowserRouter([

    {

        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[

            {

                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('/service.json'),

            },{

                path:'/serviceDetails/:id',
                element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
                
            },{

                path:'/login',
                element:<Login></Login>

            },{

                path:'/register',
                element:<Register></Register>

            },{

                path:'/about',
                element:<AboutUs></AboutUs>

            },{

                path:'/team',
                element:<TeamMember></TeamMember>

            },{

                path:'/partner',
                element:<PrivateRoute><Partner></Partner></PrivateRoute>

            },{

                path:'/purchase',
                element:<PrivateRoute><Purchase></Purchase></PrivateRoute>

            }


        ]

    }

])

export default router;