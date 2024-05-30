import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";

const useLoadMenuDataWithId = ({id}) => {
    console.log(id)
    const [data, setData] = useState([])
    useEffect(()=> {
        axiosSecure.get(`/menues/${id}`)
        .then(response => {
            console.log(response.data)
            setData(response.data)
        }) .catch(error => {
            console.error(error.message)
        })
    }, [])

    return data
};

export default useLoadMenuDataWithId;