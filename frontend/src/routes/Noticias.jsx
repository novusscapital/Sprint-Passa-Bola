import React from "react";
import { Link } from "react-router-dom";

const Noticias = () => {
  return (
    <main className="news">
      {/* Título da página */}
      <h2 className="news__title">NOTÍCIAS</h2>

      {/* BLOCO: Notícia em destaque */}
      <section className="news__highlight">
        <h3 className="news__sectiontitle">Notícia em destaque</h3>

        <div className="news__highlight-grid">
          <img
            className="news__highlight-img"
            src="/src/assets/imagem_noticias_em_destaque.png"
            alt="Duas meninas comemorando com troféu"
          />

          <div className="news__highlight-content">
            <p className="news__date">15 de junho de 2024</p>

            <h4 className="news__headline">
              <Link to="/Noticias" className="news__link">
                Copa Passa Bola 2024 tem início marcado
              </Link>
            </h4>

            <p className="news__excerpt">
              O maior campeonato de futebol feminino de base do país está
              prestes a começar com a participação das equipes.
            </p>
          </div>

          {/* Sidebar de categorias */}
          <aside className="news__aside">
            <h5 className="news__aside-title">Categorias</h5>
            <ul className="news__aside-list">
              <li><Link to="/Campeonato">Campeonato</Link></li>
              <li><Link to="/Peneiras">Peneiras</Link></li>
              <li><Link to="/Noticias">Notícias</Link></li>
              <li><Link to="/Noticias">Eventos</Link></li>
            </ul>
          </aside>
        </div>
      </section>

      {/* BLOCO: Lista de notícias */}
      <section className="news__list">
        <h3 className="news__sectiontitle">Notícias</h3>

        <div className="news__cards">
          {/* Card 1 */}
          <article className="news__card">
            <img
              className="news__card-img"
              src="/src/assets/imagem_noticia1.png"
              alt="Grupo de meninas com bola"
            />

            <div className="news__card-body">
              <p className="news__date">15 de junho de 2024</p>
              <h4 className="news__card-title">
                Inscrições abertas para peneiras regionais
              </h4>
              <p className="news__card-text">
                Meninas de 14 a 20 anos podem se inscrever nas peneiras que
                acontecerão em 15 cidades brasileiras.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="news__card">
            <img
              className="news__card-img"
              src="/src/assets/imagem_noticia2.png"
              alt="Treino com equipes em quadra"
            />

            <div className="news__card-body">
              <p className="news__date">15 de junho de 2024</p>
              <h4 className="news__card-title">
                Parceria com escolas públicas é ampliada
              </h4>
              <p className="news__card-text">
                Programa de incentivo ao futebol feminino chega a mais de 50
                escolas em todo o território nacional.
              </p>
            </div>
          </article>
        </div>

        {/* Opt-in de e-mail */}
        <div className="news__optin">
          <label className="news__optin-label">
            <input type="checkbox" />
            <span>
              Deseja receber por e-mail? <Link to="/Login">(faça login)</Link>
            </span>
          </label>
        </div>
      </section>
    </main>
  );
};

export default Noticias;