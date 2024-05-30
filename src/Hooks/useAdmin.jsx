import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(AuthContext)
    // console.log(user)
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async()=> {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(res.data?.isAdmin)
            return res.data?.isAdmin
        }
   })
   return [isAdmin, isAdminLoading]
};

export default useAdmin;