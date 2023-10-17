import { Outlet } from "react-router-dom";
import Navbar from "../Pages/HomePage/Navbar";
import Footer from './../Pages/Footer/Footer';
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet ></Outlet>
            <div className="mt-9">
            <Footer></Footer>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;