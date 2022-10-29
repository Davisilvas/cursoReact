import { useState, useEffect } from "react";

// criando custom hooks

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    
    // 5 - refatorando o POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //6 creating loading state
    const[loading, setLoading] = useState(false)

    // tratando erros
    const [error, setError] = useState(null)

    //delete
    const [itemId, setItemId] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            // 6 loading
            setLoading(true)
            
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (error){
                console.log(error.message)
                setError("Houve algum erro ao carregar os Dados.")
            }

            setLoading(false)
        }
        fetchData();
    }, [url, callFetch])

    // 5 - refatorando o POST
    const httpConfig = (data, method) => {
        if(method ==="POST"){
            setConfig({
                method,
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            setMethod(method);
        } else if (method === "DELETE"){
            setConfig({
                method,
                headers: {
                    "content-type": "application/json"
                },
            });
            setMethod(method)
            setItemId(data)
        }
    }

    useEffect(() =>{
        const httpRequest = async() => {
            if(method==="POST"){
                let fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions)
                const json = await res.json()
    
                setCallFetch(json)
            } else if (method === "DELETE"){
                const deleteUrl = `${url}/${itemId}`
                const res = await fetch(deleteUrl, config)
                const json = await res.json()
                setCallFetch(json)
            }
        }
        httpRequest();
    }, [config, method, url, itemId])


    return {data, httpConfig, loading, error};
}