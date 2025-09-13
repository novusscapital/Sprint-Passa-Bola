import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const linkClass = ({ isActive }) =>
  "text-white no-underline font-semibold py-1.5 px-2.5 rounded text-[14px] " + 
  (isActive 
    ? "bg-[rgba(255,255,255,0.15)]" 
    : "hover:bg-[rgba(255,255,255,0.15)]"
  );

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#1f5b37] text-white z-[100] shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
      <div className="max-w-[1200px] h-16 mx-auto px-4 flex items-center justify-between">
        {/* Marca (logo) */}
        <Link to="/" className="flex items-center gap-2.5 text-white no-underline" translate="no">
          <img src={logo} alt="Logo Elas em Campo" className="h-16 w-auto object-contain" />
        </Link>

        {/* Links */}
        <nav>
          <ul className="flex gap-4 list-none m-0 p-0" translate="no">
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