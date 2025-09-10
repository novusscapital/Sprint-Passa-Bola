import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const linkClass = ({ isActive }) =>
  "nav__a" + (isActive ? " nav__a--active" : "");

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__wrap">
        {/* Marca (logo) */}
        <Link to="/" className="nav__brand" translate="no">
          <img src={logo} alt="Logo Elas em Campo" className="nav__logo" />
        </Link>

        {/* Links */}
        <nav>
          <ul className="nav__links" translate="no">
            <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
            <li><NavLink to="/Sobre" className={linkClass}>Sobre</NavLink></li>
            <li><NavLink to="/Campeonato" className={linkClass}>Campeonato</NavLink></li>
            <li><NavLink to="/Noticias" className={linkClass}>Notícias</NavLink></li>
            <li><NavLink to="/Peneiras" className={linkClass}>Peneiras</NavLink></li>
            <li><NavLink to="/Login" className={linkClass}>Conecte-se</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}