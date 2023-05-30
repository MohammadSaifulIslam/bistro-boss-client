import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import useAxiosSecure from "./UseAxiosSecure";

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const {data: isAdmin, isLoading: isAdimnLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log('inside res ', res)
            return res.data.admin
        }
    })
    return [isAdmin, isAdimnLoading]
};

export default useAdmin;