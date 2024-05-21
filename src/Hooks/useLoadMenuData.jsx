import { useEffect, useState } from "react";

const useLoadMenuData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data)
            })
    }, [])
    return data
};

export default useLoadMenuData;