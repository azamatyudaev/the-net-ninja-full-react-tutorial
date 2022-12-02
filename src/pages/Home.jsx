import { useState } from 'react'
import BlogList from '../components/BlogList'

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: 'My new website',
      body: 'lorem ipsum...',
      author: 'azamat',
      id: 1
    },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {
      title: 'Backend top tips',
      body: 'lorem ipsum...',
      author: 'mario',
      id: 3
    },
    {
      title: 'Frontend top tips',
      body: 'lorem ipsum...',
      author: 'azamat',
      id: 4
    }
  ])

  const handleDelete = (id) => {
    console.log(id)
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  )
}

export default Home
