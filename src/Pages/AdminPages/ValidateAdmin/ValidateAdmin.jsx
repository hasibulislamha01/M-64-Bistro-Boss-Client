import { useContext } from "react";
import useAdmin from "../../../Hooks/useAdmin";
import { AuthContext } from "../../../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ValidateAdmin = ({children}) => {
    const {user} = useContext(AuthContext)
    const [isAdmin] = useAdmin()
    const location = useLocation()

    if(user && isAdmin){
        return children
    }
    return (
       <Navigate to='/login' state={{from: location}}></Navigate>
    );
};

export default ValidateAdmin;