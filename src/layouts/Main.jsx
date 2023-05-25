import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const isLogin = location.pathname.includes('login')
    console.log(isLogin)
    return (
        <div className="relative">
            {isLogin || <Navbar />}
            <ScrollRestoration />
            <Outlet />
            { isLogin || <Footer />}
        </div>
    );
};

export default Main;