import React from "react";
import React from "react";

const Sobre = () => {
  return (
    <main className="sobre">
      {/* Título */}
      <h2 className="sobre__title">Sobre Nós</h2>

      {/* TEXTO à esquerda, IMAGEM à direita */}
      <section className="sobre__section">
        <div className="sobre__text">
          <h3>Nossa Missão</h3>
          <p>
            Elas em Campo tem como missão democratizar o acesso ao futebol
            feminino no Brasil. Nosso objetivo é conectar meninas de todas as
            regiões às oportunidades no esporte, proporcionando uma plataforma
            segura e educativa que promove a inclusão e a visibilidade do
            futebol feminino.
          </p>
        </div>
  return (
    <main className="sobre">
      {/* Título */}
      <h2 className="sobre__title">Sobre Nós</h2>

      {/* 1) Nossa Missão */}
      <section className="sobre__section">
        <div className="sobre__text">
          <h3>Nossa Missão</h3>
          <p>
            Elas em Campo tem como missão democratizar o acesso ao futebol
            feminino no Brasil. Nosso objetivo é conectar meninas de todas as
            regiões às oportunidades no esporte, proporcionando uma plataforma
            segura e educativa que promove a inclusão e a visibilidade do
            futebol feminino.
          </p>
        </div>

        <img
          className="sobre__img"
          src="/src/assets/imagem_nossa_missao.png"
          alt="Nossa missão - meninas jogando futebol"
        />
      </section>

      <hr className="sobre__divider" />

      {/* IMAGEM à esquerda, TEXTO à direita */}
      <section className="sobre__section">
        <img
          className="sobre__img"
          src="/src/assets/imagem_seguranca.png"
          alt="Segurança - goleira defendendo"
        />

        <div className="sobre__text">
          <h3>Segurança</h3>
          <p>
            Em Elas em Campo, a criação de contas é aberta até para crianças,
            com uso controlado e seguro. Não coletamos dados sensíveis nem
            compartilhamos informações pessoais. O ambiente é protegido, sem
            redes sociais públicas nem áreas de doação. Tudo é pensado para
            garantir privacidade, segurança e bem-estar.
          </p>
        </div>
      </section>
        <img
          className="sobre__img"
          src="/src/assets/imagem_nossa_missao.png"
          alt="Nossa missão - meninas jogando futebol"
        />
      </section>

      <hr className="sobre__divider" />

      {/* 2) Segurança */}
      <section className="sobre__section">
        <img
          className="sobre__img"
          src="/src/assets/imagem_seguranca.png"
          alt="Segurança - goleira defendendo"
        />

        <div className="sobre__text">
          <h3>Segurança</h3>
          <p>
            Em Elas em Campo, a criação de contas é aberta até para crianças,
            com uso controlado e seguro. Não coletamos dados sensíveis nem
            compartilhamos informações pessoais. O ambiente é protegido, sem
            redes sociais públicas nem áreas de doação. Tudo é pensado para
            garantir privacidade, segurança e bem-estar.
          </p>
        </div>
      </section>

      {/* Métricas */}
      <section className="sobre__metrics">
        <div>
          <h3>5+</h3>
          <p>Campeonatos</p>
        </div>
        <div>
          <h3>50+</h3>
          <p>Equipes</p>
        </div>
        <div>
          <h3>300+</h3>
          <p>Jogadoras</p>
        </div>
      </section>
    </main>
  );
};
      {/* Métricas */}
      <section className="sobre__metrics">
        <div>
          <h3>5+</h3>
          <p>Campeonatos</p>
        </div>
        <div>
          <h3>50+</h3>
          <p>Equipes</p>
        </div>
        <div>
          <h3>300+</h3>
          <p>Jogadoras</p>
        </div>
      </section>
    </main>
  );
};

export default Sobre;
export default Sobre;