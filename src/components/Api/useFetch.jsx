import {useState, useEffect} from "react";

const useFetch = (id) => {
    const [data, setData] = useState(null);

    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(response => response.json())
            .then(json => setData(json))
        }, 1000);
        
    }, [url])
    return data;
}

export default useFetch;