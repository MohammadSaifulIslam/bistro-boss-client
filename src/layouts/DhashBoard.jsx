import { BiWallet } from "react-icons/bi";
import { FaBars, FaHome, FaShoppingBag } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { HiMail, HiOutlineHome } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { Link, Outlet, ScrollRestoration } from "react-router-dom";
const DhashBord = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <ScrollRestoration />
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <div className="w-72 p-4 text-black bg-accent">

                    <h2 className="text-2xl font-black text-center uppercase">Bistro Boss</h2>
                    <h4 className="text-xl font-bold text-center uppercase">Restaurant</h4>

                    <ul className="menu mt-3">
                        <li><Link><HiOutlineHome/> User Home</Link></li>
                        <li><Link><SlCalender/> Reservation</Link></li>
                        <li><Link><BiWallet/> Payment History</Link></li>
                        <li><Link to='/dashboard/my-cart'><GiShoppingCart/> My Cart</Link></li>

                        <hr className="border-black my-2" />

                        <li><Link to='/'><FaHome/> Home</Link></li>
                        <li><Link to='/menu'><FaBars/>  Menu</Link></li>
                        <li><Link to='/order/salad'><FaShoppingBag/> Order</Link></li>
                        <li><Link><HiMail/> Contact</Link></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default DhashBord;