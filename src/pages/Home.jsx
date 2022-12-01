const Home = () => {
  const handleClick = (event) => {
    console.log('hello, ninjas', event)
  }

  const handleClickAgain = (name, event) => {
    console.log('hello, ' + name, event)
  }

  return (
    <div className="home">
      <h2>Home Page</h2>
      {/* Click event runs automatically: handleClick() */}
      {/*<button type="button" onClick={handleClick()}>Click me</button>*/}

      {/* Click event runs only we click the button: handleClick, Browser event sends automatically */}
      <button type="button" onClick={handleClick}>Click me</button>

      {/* Sending argument and event to function parameter */}
      <button type="button" onClick={(event) => handleClickAgain('Azamat', event)}>Click me again</button>

      {/*
        <button type="button" onClick={() => {
          return handleClickAgain('Azamat')
        }}>Click me again</button>
      */}

      {/*
        <button type="button" onClick={() => {
          handleClickAgain('Azamat')
        }}>Click me again</button>
      */}
    </div>
  )
}

export default Home