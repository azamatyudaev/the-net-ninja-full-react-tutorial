// { blogs, title } we can use object destructuring
const BlogList = (props) => {
  const blogs = props.blogs
  const title = props.title

  console.log('Props: ', props)
  console.log('Blogs: ', blogs)

  return (
    <ul className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <li className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </li>
      ))}
    </ul>
  )
}

export default BlogList