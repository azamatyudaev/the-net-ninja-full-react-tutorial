const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <ul className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <li className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <button type="button" onClick={() => handleDelete(blog.id)}>
            Delete blog
          </button>
        </li>
      ))}
    </ul>
  )
}

export default BlogList
