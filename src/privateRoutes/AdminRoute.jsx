import { useContext } from "react";
import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";

const AdminRoute = ({ children }) => {
    const [isAdmin, isAdimnLoading] = useAdmin();
    const { user, loading } = useContext(AuthContext);
    console.log(user, isAdmin)
    
    if (loading && isAdimnLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children
    }else{
        return <Navigate to={'/'}></Navigate>

    }
 
};

export default AdminRoute;