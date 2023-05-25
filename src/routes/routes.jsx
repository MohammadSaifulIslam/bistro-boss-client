import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/HomePage/Home/Home";
import MenuHome from "../pages/MenuPage/MenuHome/MenuHome";
import OrderHome from "../pages/Order/OrderHome/OrderHome";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/menu',
          element: <MenuHome/>
        },
        {
          path: '/order/:category',
          element: <OrderHome/>
        },
        {
          path: 'login',
          element: <Login/>
        },
      ]
    },
  ]);

export default router;