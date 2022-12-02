import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="logo" href="/">
        React Blog
      </a>
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link" to="/">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/create">
            New Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
