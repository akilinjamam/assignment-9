import { useEffect, useState } from "react";


const useDashData = () => {

    const [data, setData] = useState([]);
    console.log(data)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, []);

    return [data, setData]
}




export default useDashData