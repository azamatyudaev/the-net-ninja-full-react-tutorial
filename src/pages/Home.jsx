import {useState} from 'react'

const Home = () => {
  // let name = 'Azamat' // not reactive

  const [name, setName] = useState('Azamat') // reactive
  const [age, setAge] = useState(27) // reactive

  const handleClick = () => {
    // name = 'Yudaev'
    // console.log(name)
    setName('Yudaev')
    setAge(28)
  }

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>{name} is {age} years old</p>
      <button type="button" onClick={handleClick}>Click me</button>
    </div>
  )
}

export default Home