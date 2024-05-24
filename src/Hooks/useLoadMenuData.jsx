import { useEffect, useState } from "react";

const useLoadMenuData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/menues')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data)
            })
    }, [])
    return data
};

export default useLoadMenuData;