import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/HomePage/Home/Home";
import MenuHome from "../pages/MenuPage/MenuHome/MenuHome";

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
      ]
    },
  ]);

export default router;