import { useState, useEffect } from 'react'


export const useFetch = (url) => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ products, setProducts ] = useState([])

    const fetchData = async () => {

        try {
            const res = await fetch(url)
            const data = await res.json()

            
            setIsLoading(false)
            setProducts(data)
        } catch (err) {
            setIsLoading(false)
            console.log(err)
        }

    }

    useEffect(() => {
        fetchData()
    }, [url])

    return { isLoading, products }
}


