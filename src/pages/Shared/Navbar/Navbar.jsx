import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../../hooks/useAdmin";
import useCart from "../../../hooks/useCart";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    console.log(isAdmin)
    const [cart] = useCart();
    const handleLogout = () => {
        logoutUser()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const menuOptions = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/menu'}>Our Menu</NavLink></li>
        <li><NavLink to={'/order/salad'}>Order</NavLink></li>
        {
            !isAdmin &&
            <li className="flex items-center">
                <Link to='dashboard/my-cart'>
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item bg-secondary">{cart?.length || 0}</span>
                    </div>
                </Link>
            </li>
        }
        {
            isAdmin ? <li><Link to='/dashboard/admin-home'>Dashboard</Link></li> : <li><Link to='/dashboard/user-home'>Dashboard</Link></li>
        }
        {
            user ? <li onClick={handleLogout} className="cursor-pointer">Logout</li>
                : <li><NavLink to={'/login'}>Login</NavLink></li>
        }

    </>



    return (
        <section className="fixed z-10 top-0 left-1/2 -translate-x-1/2  bg-black bg-opacity-20 text-white w-full">
            <nav className="my-container navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {menuOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-5 items-center">
                        {menuOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </nav>
        </section>
    );
};

export default Navbar;