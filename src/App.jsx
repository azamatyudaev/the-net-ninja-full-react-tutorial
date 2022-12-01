const App = () => {
  const title = 'Welcome to the new blog'
  const likes = 50
  // const person = {
  //   name: 'Azamat',
  //   age: 27
  // }
  const link = 'https://www.google.com'

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>

        {/* We can't output object */}
        {/* <p>{person}</p> */}

        <p>{10}</p>
        <p>{'hello, Azamat'}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link} target="_blank">
          Google Site
        </a>
      </div>
    </div>
  )
}

export default App
