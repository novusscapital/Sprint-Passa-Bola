import React from "react";

const Campeonato = () => {
  return (
    <main className="camp">
      <h2 className="camp__title">Campeonato Passa Bola</h2>

      {/* Regras (esq) / Tabela (dir) */}
      <section className="camp__grid">
        {/* Regras */}
        <div className="panel">
          <h3 className="panel__title">Regras</h3>
          <div className="panel__card">
            <div className="panel__media">
              {/* IMAGEM MENOR */}
              <img
                src="/src/assets/imagem_regras.png"
                alt="Regras do campeonato"
                className="camp__img"
              />
            </div>

            <ul className="panel__list">
              <li>Cada equipe deve ter no mínimo 11 jogadoras</li>
              <li>Idade máxima conforme categoria</li>
              <li>Documentação obrigatória para inscrição</li>
            </ul>
          </div>
        </div>

        {/* Tabela */}
        <div className="panel">
          <h3 className="panel__title">Tabela do Campeonato</h3>
          <div className="panel__card">
            <div className="panel__media">
              {/* IMAGEM MAIS LARGA QUE A DAS REGRAS */}
              <img
                src="/src/assets/Tabela.png"
                alt="Tabela do campeonato"
                className="camp__img camp__img--wide"
              />
            </div>
          </div>
        </div>
      </section>

      {/*Inscreva-se (esq) / Informações (dir) */}
      <section className="camp__grid camp__grid--second">
        {/* Formulário */}
        <div className="panel">
          <h3 className="panel__title">Inscreva-se</h3>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="team">Nome da Equipe</label>
            <input className="input" id="team" placeholder="Nome da Equipe" />

            <label className="sr-only" htmlFor="coach">Nome do Técnico</label>
            <input className="input" id="coach" placeholder="Nome do Técnico" />

            <label className="sr-only" htmlFor="email">Email</label>
            <input className="input" id="email" type="email" placeholder="Email" />

            <label className="sr-only" htmlFor="phone">Telefone</label>
            <input className="input" id="phone" placeholder="Telefone" />

            <button className="btn btn--lg" type="submit">Fazer Inscrição</button>
          </form>
        </div>

        {/* Informações */}
        <aside className="panel">
          <h3 className="panel__title">Informações do Campeonato</h3>
          <div className="info">
            <h4 className="info__title">Detalhes</h4>
            <ul className="info__list">
              <li><strong>Data:</strong> 15 de julho de 2024</li>
              <li><strong>Local:</strong> Estádio Municipal</li>
              <li><strong>Equipes:</strong> 16 times</li>
              <li><strong>Formato:</strong> Eliminação Direta</li>
              <li><strong>Categorias:</strong> Sub-15, Sub-17, Sub-20</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
};

export default Campeonato;