import React from "react";

const Peneiras = () => {
  return (
    <main className="trials">
      {/* Título */}
      <h2 className="trials__title">PENEIRAS</h2>

      {/* Mapa / banner superior */}
      {/* Imagem de mapa*/}
      <div className="trials__map">
        <img
          className="trials__mapimg"
          src="/src/assets/mapa.png"   
          alt="Mapa com marcações"
        />
      </div>

      {/* Filtros (estado / cidade) */}
      <div className="trials__filters">
        <select className="select">
          <option>Estado</option>
          <option>SP</option>
          <option>RJ</option>
          <option>MG</option>
        </select>

        <select className="select">
          <option>Cidade</option>
          <option>São Paulo</option>
          <option>Campinas</option>
          <option>Rio de Janeiro</option>
        </select>
      </div>

      {/* Lista de cards */}
      <section className="trials__list">
        {/* Card 1 */}
        <article className="trialcard">
          <img
            className="trialcard__icon"
            src="/src/assets/imagem_bola_peneira.png"
            alt="Ícone calendário/bola"
          />
          <div className="trialcard__body">
            <p className="trialcard__date">20 de julho de 2024</p>
            <h3 className="trialcard__place">São Paulo (SP)</h3>
            <p className="trialcard__cat">Sub-17</p>
            <p className="trialcard__info">
              Estádio Municipal – Rua das Flores, 123
              <br />
              Peneira para seleção de talentos da região metropolitana de São Paulo
            </p>
          </div>
        </article>

        {/* Card 2 */}
        <article className="trialcard">
          <img
            className="trialcard__icon"
            src="/src/assets/imagem_bola_peneira.png"
            alt="Ícone calendário/bola"
          />
          <div className="trialcard__body">
            <p className="trialcard__date">04 de agosto de 2024</p>
            <h3 className="trialcard__place">São Paulo (SP)</h3>
            <p className="trialcard__cat">Sub-15</p>
            <p className="trialcard__info">
              Estádio Municipal – Rua das Flores, 123
              <br />
              Peneira para seleção de talentos da região metropolitana de São Paulo
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Peneiras;