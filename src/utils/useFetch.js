import { useState, useEffect, useCallback } from 'react'


export const useFetch = (url) => {

    const [ isLoading, setIsLoading ] = useState(true)
    const [ products, setProducts ] = useState([])

    const fetchData = useCallback(async () => {

        try {
            const res = await fetch(url)
            const data = await res.json()

            
            setIsLoading(false)
            setProducts(data)
        } catch (err) {
            setIsLoading(false)
            console.log(err)
        }

    }, [url])

    useEffect(() => {
        fetchData()
    }, [url, fetchData])

    return { isLoading, products }
}


