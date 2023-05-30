import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
import useAxiosSecure from './UseAxiosSecure';

// import useAxiosSecure from './UseAxiosSecure';


const useCart = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    // const token = localStorage.getItem('access-token')
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
     
        // with axios 
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`);
            console.log(res)
            return res.data
        }
           
        // without axios 
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     });
        //     return res.json()
        // }
    })

    return [cart, refetch]

};

export default useCart;