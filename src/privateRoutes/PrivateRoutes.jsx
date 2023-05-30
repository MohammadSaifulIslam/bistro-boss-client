import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace={true}></Navigate>
    }
    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    return children
};

export default PrivateRoutes;