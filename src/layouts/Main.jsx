import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    return (
        <div className="relative">
            <Navbar/>
            <ScrollRestoration/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;