import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';

// Create an Axios instance with a base URL
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000', // Replace with your base URL
});
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logoutUser } = useContext(AuthContext);


    useEffect(() => {


        // Add an interceptor to inject the authorization header
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        // Add an interceptor to handle unauthorized responses (401 and 403)
        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                const { status } = error.response;
                if (status === 401 || status === 403) {
                    // Call the logout method from AuthContext
                    await logoutUser();

                    // Navigate to the login page
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );

    }, [navigate, logoutUser]);

    return [axiosSecure];
};

export default useAxiosSecure;
