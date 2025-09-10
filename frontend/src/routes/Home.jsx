import { Link } from "react-router-dom";
import hero from "../assets/imagem_bola.png";
import imgPeneiras from "../assets/imagem_peneiras.png";
import imgNoticias from "../assets/imagem_noticias.png";
import imgCalendario from "../assets/imagem_calendario.png";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="hero__overlay">
          <h1>Elas em Campo</h1>
          <p>Conectando meninas ao futebol</p>
        </div>
      </section>

      {/* CARDS */}
      <section className="container cards">
        <article className="card card--left">
          <div className="card__title">PENEIRAS</div>
          <img className="card__img" src={imgPeneiras} alt="Peneiras" />
          <p className="card__text">
            Encontre peneiras próximas a você e se inscreva para participar das seleções.
          </p>
          <Link className="btn" to="/Peneiras">Ver peneiras</Link>
        </article>

        <article className="card card--right">
          <div className="card__title">NOTÍCIAS</div>
          <img className="card__img" src={imgNoticias} alt="Notícias" />
          <p className="card__text">
            Fique por dentro das novidades do futebol feminino e da Copa Passa Bola.
          </p>
          <Link className="btn" to="/Noticias">Ler notícias</Link>
        </article>

        <article className="card card--left">
          <div className="card__title">CALENDÁRIO</div>
          <img className="card__img" src={imgCalendario} alt="Calendário" />
          <p className="card__text">
            Veja as datas dos próximos jogos e eventos do campeonato.
          </p>
          <Link className="btn" to="/Campeonato">Abrir calendário</Link>
        </article>
      </section>
    </>
  );
}