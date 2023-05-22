import { Outlet, ScrollRestoration } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <ScrollRestoration/>
            <Outlet/>
        </div>
    );
};

export default Main;