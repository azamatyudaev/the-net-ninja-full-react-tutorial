const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="logo" href="/">
        React Blog
      </a>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a className="navbar__link" href="/">
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="/create">
            New Blog
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar