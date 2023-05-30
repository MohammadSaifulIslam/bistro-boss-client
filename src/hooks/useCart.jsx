import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
// import useAxiosSecure from './UseAxiosSecure';


const useCart = () => {
    const { user } = useContext(AuthContext)
    // const [axiosSecure] = useAxiosSecure()
    const token = localStorage.getItem('access-token')
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        // without axios 
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            return res.json()
        }

        // with axios 
        // queryFn: async () => {
        //     const res = await axiosSecure(`/carts?email=${user?.email}`);
        //     console.log(res)
        //     return res.data
        // }
    })

    return [cart, refetch]

};

export default useCart;