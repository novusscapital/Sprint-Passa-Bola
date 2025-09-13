import React from "react";

const Sobre = () => {
  return (
    <main className="max-w-[1100px] mx-auto my-[50px] px-[18px]">
      {/* Título */}
      <h2 className="text-[#1f5b37] text-center text-[28px] mb-[50px]">Sobre Nós</h2>

      {/* TEXTO à esquerda, IMAGEM à direita */}
      <section className="flex items-center justify-between gap-[60px] mb-[60px]">
        <div className="flex-1 text-[14px] leading-[1.7]">
          <h3 className="text-[#1f5b37] text-[20px] mb-4 m-0">Nossa Missão</h3>
          <p className="m-0">
            Elas em Campo tem como missão democratizar o acesso ao futebol
            feminino no Brasil. Nosso objetivo é conectar meninas de todas as
            regiões às oportunidades no esporte, proporcionando uma plataforma
            segura e educativa que promove a inclusão e a visibilidade do
            futebol feminino.
          </p>
        </div>

        <img
          className="w-full max-w-[280px] aspect-[4/3] rounded-[10px] object-cover object-center flex-1"
          src="/src/assets/imagem_nossa_missao.png"
          alt="Nossa missão - meninas jogando futebol"
        />
      </section>

      <hr className="border-0 border-t-2 border-[#1f5b37] my-[40px]" />

      {/* IMAGEM à esquerda, TEXTO à direita */}
      <section className="flex items-center justify-between gap-[60px] mb-[60px]">
        <img
          className="w-full max-w-[280px] aspect-[4/3] rounded-[10px] object-cover object-center flex-1"
          src="/src/assets/imagem_seguranca.png"
          alt="Segurança - goleira defendendo"
        />
        <div className="flex-1 text-[14px] leading-[1.7]">
          <h3 className="text-[#1f5b37] text-[20px] mb-4 m-0">Segurança</h3>
          <p className="m-0">
            Em Elas em Campo, a criação de contas é aberta até para crianças,
            com uso controlado e seguro. Não coletamos dados sensíveis nem
            compartilhamos informações pessoais. O ambiente é protegido, sem
            redes sociais públicas nem áreas de doação. Tudo é pensado para
            garantir privacidade, segurança e bem-estar.
          </p>
        </div>
      </section>

      {/* Métricas */}
      <section className="flex gap-[80px] justify-center my-[60px] mb-5 text-center">
        <div>
          <h3 className="text-[#1f5b37] text-[24px] m-0">5+</h3>
          <p className="text-[15px] mt-2 mb-0">Campeonatos</p>
        </div>
        <div>
          <h3 className="text-[#1f5b37] text-[24px] m-0">50+</h3>
          <p className="text-[15px] mt-2 mb-0">Equipes</p>
        </div>
        <div>
          <h3 className="text-[#1f5b37] text-[24px] m-0">300+</h3>
          <p className="text-[15px] mt-2 mb-0">Jogadoras</p>
        </div>
      </section>
    </main>
  );
};

export default Sobre;