import { useState, useEffect } from 'react'
import BlogList from '../components/BlogList'
import Loader from '../components/Loader'

const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [loading, setLoading] = useState(true)

  // npx json-server --watch data/db.json --port 8000
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          console.log(data)
          setBlogs(data)
          setLoading(false)
        })
    }, 1000)
  }, [])

  return (
    <div className="home">
      {loading && <Loader />}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  )
}

export default Home
