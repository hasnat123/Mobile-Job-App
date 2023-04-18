import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (endpoint, query) => {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
        'X-RapidAPI-Key': 'd2ad709ad8msh638468baa6e8ff7p1fb418jsn5e42a1418091',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      },
      params: { ...query },
    };
      
    const fetchData = async () =>
    {
        setIsLoading(true)

        try {
            const res = await axios.request(options)
            setData(res.data.data)
        } catch (error) {
            setError(error)
            alert('There is an error')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() =>
    {
        fetchData()
    }, [])

    const refetch = () =>
    {
        setIsLoading(true)
        fetchData()
    }

  return { data, isLoading, error, refetch }
}

export default useFetch