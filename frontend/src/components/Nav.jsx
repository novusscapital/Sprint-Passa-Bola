import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";

const linkClass = ({ isActive }) =>
  "text-white no-underline font-semibold py-1.5 px-2.5 rounded text-[14px] " + 
  (isActive 
    ? "bg-[rgba(255,255,255,0.15)]" 
    : "hover:bg-[rgba(255,255,255,0.15)]"
  );

export default function Nav() {
  const [darkMode, setDarkMode] = useState(false);

  // Efeito para aplicar o tema ao carregar o componente
  useEffect(() => {
    // Verificar se há preferência salva
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Definir tema inicial
    const initialTheme = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setDarkMode(initialTheme);
    applyTheme(initialTheme);
  }, []);

  // Função para aplicar o tema
  const applyTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#1a1a1a';
      document.body.style.color = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  };

  // Alternar entre temas
  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    applyTheme(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

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

        {/* Ícones à direita */}
        <div className="flex items-center gap-4">
          {/* Ícone de perfil */}
          <Link 
            to="/perfil" 
            className="text-white hover:text-gray-200 transition-colors duration-200"
            aria-label="Perfil do usuário"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
              />
            </svg>
          </Link>

          {/* Botão de alternância de tema */}
          <button
            onClick={toggleTheme}
            className="text-white hover:text-gray-200 transition-colors duration-200 focus:outline-none"
            aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"}
          >
            {darkMode ? (
              // Ícone de sol (modo escuro ativo)
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
                />
              </svg>
            ) : (
              // Ícone de lua (modo claro ativo)
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}