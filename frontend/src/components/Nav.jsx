import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <header className="nav">
      <div className="nav__wrap">
        {/* Marca (logo) */}
        <Link to="/" className="nav__brand">
          <img src={logo} alt="Logo Elas em Campo" className="nav__logo" />
        </Link>

        {/* Links */}
        <nav>
          <ul className="nav__links">
            <li><NavLink to="/" className="nav__a">Home</NavLink></li>
            <li><NavLink to="/Sobre" className="nav__a">Sobre</NavLink></li>
            <li><NavLink to="/Campeonato" className="nav__a">Campeonato</NavLink></li>
            <li><NavLink to="/Noticias" className="nav__a">Notícias</NavLink></li>
            <li><NavLink to="/Peneiras" className="nav__a">Peneiras</NavLink></li>
            <li><NavLink to="/Login" className="nav__a">Conecte-se</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;