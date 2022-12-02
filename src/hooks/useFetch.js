import { useEffect, useState } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // npx json-server --watch data/db.json --port 8000
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          console.log(response)
          if (!response.ok) {
            throw Error('Could not fetch the data for that resource')
          }
          return response.json()
        })
        .then((data) => {
          console.log(data)
          setData(data)
          setLoading(false)
          setError(null)
        })
        .catch((err) => {
          console.log(err.message)
          setError(err.message)
          setLoading(false)
        })
    }, 1000)
  }, [url])

  return {
    data,
    loading,
    error
  }
}

export default useFetch
