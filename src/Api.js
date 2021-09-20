import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Api = () => {
    const [api, setApi] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/documents")
            .then((response) => {
                setApi(response.data);
                console.log(response.data);

            })
            .catch(() => {
                console.log('Ruim');
            })
    }, []);

    return (
        { api }
    )
}

export default Api;