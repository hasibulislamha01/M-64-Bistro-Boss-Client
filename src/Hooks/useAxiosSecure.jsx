import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',

})

const useAxiosSecure = () => {
    const {logout} = useContext(AuthContext)
    const navigate = useNavigate()
    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        const token = localStorage.getItem('access-token')
        // console.log('inside interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, async function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const status = error.request.status
        if(status==401 || status==403){
            await logout()
            navigate('/login')
        }
        // console.log('Error in the interceptors', status)
        return Promise.reject(error);
    });


    return axiosSecure
};

export default useAxiosSecure;