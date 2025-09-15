import React from "react";

const Sobre = () => {
  return (
    <main className="max-w-[1100px] mx-auto my-[50px] px-[18px]">
      {/* Título principal */}
      <h2 className="text-[#1f5b37] text-center text-[32px] mb-[50px] font-bold tracking-wide">
        SOBRE NÓS
      </h2>

      {/* TEXTO à esquerda, IMAGEM à direita */}
      <section className="flex items-center justify-between gap-[60px] mb-[70px]">
        <div className="flex-1 text-[15px] leading-[1.8] bg-[#f8faf7] p-8 rounded-xl shadow-sm">
          <h3 className="text-[#1f5b37] text-[24px] mb-5 m-0 font-bold border-b-2 border-[#1f5b37] pb-2">
            NOSSA MISSÃO
          </h3>
          <p className="m-0 text-[#2d4a3a]">
            A Elas em Campo tem como missão principal democratizar e fortalecer o acesso 
            ao futebol feminino em todo o Brasil. Nosso objetivo é conectar talentos 
            femininos de todas as regiões às melhores oportunidades no esporte, proporcionando 
            uma plataforma segura, educativa e inclusiva que promova visibilidade, 
            desenvolvimento e crescimento do futebol feminino em todas as suas dimensões.
          </p>
        </div>

        <img
          className="w-full max-w-[320px] aspect-[4/3] rounded-[12px] object-cover object-center flex-1 shadow-md"
          src="/src/assets/imagem_nossa_missao.png"
          alt="Nossa missão - meninas jogando futebol"
        />
      </section>

      <hr className="border-0 border-t-2 border-[#1f5b37] my-[50px]" />

      {/* IMAGEM à esquerda, TEXTO à direita */}
      <section className="flex items-center justify-between gap-[60px] mb-[70px]">
        <img
          className="w-full max-w-[320px] aspect-[4/3] rounded-[12px] object-cover object-center flex-1 shadow-md"
          src="/src/assets/imagem_seguranca.png"
          alt="Segurança - goleira defendendo"
        />
        <div className="flex-1 text-[15px] leading-[1.8] bg-[#f8faf7] p-8 rounded-xl shadow-sm">
          <h3 className="text-[#1f5b37] text-[24px] mb-5 m-0 font-bold border-b-2 border-[#1f5b37] pb-2">
            SEGURANÇA
          </h3>
          <p className="m-0 text-[#2d4a3a]">
            Na Elas em Campo, a segurança das nossas usuárias é prioridade absoluta. 
            Nossa plataforma foi desenvolvida para ser um ambiente protegido e controlado, 
            com criação de contas seguras mesmo para crianças e adolescentes. Não coletamos 
            dados sensíveis nem compartilhamos informações pessoais. Todo o ecossistema foi 
            cuidadosamente planejado para garantir privacidade, segurança e bem-estar, 
            sem redes sociais públicas ou áreas de doação que possam comprometer a integridade 
            das nossas atletas e usuárias.
          </p>
        </div>
      </section>

      {/* Métricas - Versão Reforçada */}
      <section className="bg-[#1f5b37] rounded-2xl py-10 px-6 mb-5 text-center text-white">
        <h3 className="text-[28px] font-bold mb-8 tracking-wide">IMPACTO E RESULTADOS</h3>
        
        <div className="flex gap-[80px] justify-center">
          <div className="flex flex-col items-center">
            <span className="text-[42px] font-extrabold mb-2">5+</span>
            <span className="text-[18px] font-medium">Campeonatos</span>
            <p className="text-[14px] mt-2 max-w-[180px] opacity-90">Organizados e apoiados em todo território nacional</p>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-[42px] font-extrabold mb-2">50+</span>
            <span className="text-[18px] font-medium">Equipes</span>
            <p className="text-[14px] mt-2 max-w-[180px] opacity-90">Cadastradas e ativas em nossa plataforma</p>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-[42px] font-extrabold mb-2">300+</span>
            <span className="text-[18px] font-medium">Jogadoras</span>
            <p className="text-[14px] mt-2 max-w-[180px] opacity-90">Conectadas a oportunidades no futebol feminino</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sobre;