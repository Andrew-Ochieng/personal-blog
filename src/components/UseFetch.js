import { useEffect, useState } from "react"

const UseFetch = (url) => {
    // const url = 
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true) // set loading data
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    // res.json()
                    if (!res.ok) {
                        throw Error('Could not fetch data from the resource!')
                    }
                    return res.json()
                })
                .then((data) => {
                    // console.log(data)
                    setData(data.data)
                    setIsLoading(false)
                    setError(null)
                })
                .catch((err) => {
                    setIsLoading(false)
                    setError(err.message)
                })
        }, 1000);
    }, [url])
        

    // const fetchBlogs = () => {
    // fetch(url)
    //     .then((res) => {
    //         // res.json()
    //         if (!res.ok) {
    //             throw Error('Could not fetch data from the resource!')
    //         }
    //         return res.json()
    //     })
    //     .then((data) => {
    //         // console.log(data)
    //         setData(data)
    //         setIsLoading(false)
    //         setError(null)
    //     })
    //     .catch((err) => {
    //         setIsLoading(false)
    //         setError(err.message)
    //     })
    // }


    return {data, isLoading, error}
}
 
export default UseFetch;