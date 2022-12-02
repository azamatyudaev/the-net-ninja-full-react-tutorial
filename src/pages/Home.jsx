import { useState, useEffect } from 'react'
import BlogList from '../components/BlogList'
import Loader from '../components/Loader'
import FetchError from '../components/FetchError'

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // npx json-server --watch data/db.json --port 8000
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then((response) => {
          console.log(response)
          if (!response.ok) {
            throw Error('Could not fetch the data for that resource')
          }
          return response.json()
        })
        .then((data) => {
          console.log(data)
          setBlogs(data)
          setLoading(false)
          setError(null)
        })
        .catch((err) => {
          console.log(err.message)
          setError(err.message)
          setLoading(false)
        })
    }, 1000)
  }, [])

  return (
    <div className="home">
      {error && <FetchError err={error} />}
      {loading && <Loader />}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  )
}

export default Home
