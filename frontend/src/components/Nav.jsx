import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Login'>Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
