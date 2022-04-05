import { useEffect, useState } from "react";


const usePageNotFound = () => {

    const [notFound, setNotFound] = useState([]);
    console.log(notFound)
    useEffect(() => {
        fetch('notFound.json')
            .then(res => res.json())
            .then(data => setNotFound(data))

    }, []);

    return [notFound, setNotFound]
}




export default usePageNotFound