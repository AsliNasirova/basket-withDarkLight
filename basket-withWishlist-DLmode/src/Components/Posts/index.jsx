import axios from 'axios';
import { useEffect, useState } from 'react';
function Posts() {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const getProducts = async () => {
        const res = await axios.get("http://localhost:3000/posts");
        setData(res.data);
        setIsLoading(false);
    };
    useEffect(() => {


        getProducts();
    }, []);

    return [data,getProducts]
}

export default Posts;