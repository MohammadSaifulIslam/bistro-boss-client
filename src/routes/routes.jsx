import { createBrowserRouter } from "react-router-dom";
import DhashBord from "../layouts/DhashBoard";
import Main from "../layouts/Main";
import AddItem from "../pages/AddItem/AddItem";
import AllUsers from "../pages/AllUsers/AllUsers";
import AdminHome from "../pages/DashBoard/AdminHome/AdminHome";
import Payment from "../pages/DashBoard/Payment/Payment";
import UserHome from "../pages/DashBoard/UserHome/UserHome";
import Home from "../pages/HomePage/Home/Home";
import ManageItems from "../pages/ManageItems/ManageItems";
import MenuHome from "../pages/MenuPage/MenuHome/MenuHome";
import MyCart from "../pages/MyCart/MyCart";
import OrderHome from "../pages/Order/OrderHome/OrderHome";
import Register from "../pages/Register/Register";
import Login from "../pages/login/Login";
import AdminRoute from "../privateRoutes/AdminRoute";
import PrivateRoutes from "../privateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <MenuHome />
      },
      {
        path: '/order/:category',
        element: <OrderHome />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes> <DhashBord /></PrivateRoutes>,
    children: [
      // user's route
      {
        path: 'user-home',
        element: <UserHome/>
      },
      {
        path: 'payment',
        element: <Payment/>
      },
      {
        path: 'my-cart',
        element: <MyCart />
      },
      // admin's routes
      {
        path: 'admin-home',
        element: <AdminRoute><AdminHome/></AdminRoute>
      },
      {
        path: 'all-users',
        element: <AllUsers />
      },
      {
        path: 'add-item',
        element: <AdminRoute><AddItem /></AdminRoute>
      },
      {
        path: 'manage-items',
        element: <AdminRoute><ManageItems /></AdminRoute>
      },
    ]
  }
]);

export default router;