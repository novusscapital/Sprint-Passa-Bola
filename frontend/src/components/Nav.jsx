import { Link } from 'react-router-dom'
import logo from '../assets/pageicon.png'

const Nav = () => {
  return (
    <header>
      <img src={logo} alt='logo'/>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Sobre'>Sobre</Link>
          </li>
          <li>
            <Link to='/Campeonato'>Campeonato</Link>
          </li>
          <li>
            <Link to='/Noticias'>Notícias</Link>
          </li>
          <li>
            <Link to='/Peneiras'>Peneiras</Link>
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
