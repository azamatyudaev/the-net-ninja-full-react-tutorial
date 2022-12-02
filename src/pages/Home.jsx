import BlogList from '../components/BlogList'
import Loader from '../components/Loader'
import FetchError from '../components/FetchError'
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data: blogs, loading, error } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      {error && <FetchError err={error} />}
      {loading && <Loader />}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  )
}

export default Home
