import React from "react";

const Peneiras = () => {
  return (
    <main className="max-w-[1100px] mx-auto my-10 mb-14 px-[18px]">
      {/* Título */}
      <h2 className="text-center text-[#1f5b37] text-[28px] font-extrabold mt-2 mb-6">PENEIRAS</h2>

      {/* Mapa / banner superior */}
      <div className="bg-[#fff7e9] rounded-[16px] border border-solid border-[rgba(0,0,0,0.08)] shadow-[0_8px_22px_rgba(0,0,0,0.06)] overflow-hidden">
        <img
          className="w-full h-[260px] object-cover"
          src="/src/assets/mapa.png"
          alt="Mapa com marcações"
        />
      </div>

      {/* Filtros (estado / cidade) */}
      <div className="grid grid-cols-2 gap-4 mt-6 mb-3.5">
        <select className="w-full h-[44px] rounded-[10px] border border-solid border-[rgba(0,0,0,0.16)] bg-white px-3 text-[14px] outline-none box-border focus:border-[#237244] focus:shadow-[0_0_0_2px_rgba(35,114,68,0.15)]">
          <option>Estado</option>
          <option>SP</option>
          <option>RJ</option>
          <option>MG</option>
        </select>

        <select className="w-full h-[44px] rounded-[10px] border border-solid border-[rgba(0,0,0,0.16)] bg-white px-3 text-[14px] outline-none box-border focus:border-[#237244] focus:shadow-[0_0_0_2px_rgba(35,114,68,0.15)]">
          <option>Cidade</option>
          <option>São Paulo</option>
          <option>Campinas</option>
          <option>Rio de Janeiro</option>
        </select>
      </div>

      {/* Lista de cards */}
      <section className="grid gap-4.5 mt-1.5">
        {/* Card 1 */}
        <article className="bg-white border border-solid border-[rgba(0,0,0,0.10)] rounded-[16px] shadow-[0_10px_24px_rgba(0,0,0,0.06)] p-4.5 grid grid-cols-[86px_1fr] gap-4 items-center">
          <img
            className="w-[86px] h-[86px] object-contain rounded-xl"
            src="/src/assets/imagem_bola_peneira.png"
            alt="Ícone calendário/bola"
          />
          <div className="grid gap-1">
            <p className="m-0 text-[#1f5b37] font-extrabold text-[18px]">20 de julho de 2024</p>
            <h3 className="m-0 text-[#1a2d22] text-[18px] font-extrabold">São Paulo (SP)</h3>
            <p className="m-0 text-[#5c6b76] text-[15px] font-semibold">Sub-17</p>
            <p className="m-0 mt-0.5 text-[#3a4752] text-[14px] leading-[1.45]">
              Estádio Municipal – Rua das Flores, 123
              <br />
              Peneira para seleção de talentos da região metropolitana de São Paulo
            </p>
          </div>
        </article>

        {/* Card 2 */}
        <article className="bg-white border border-solid border-[rgba(0,0,0,0.10)] rounded-[16px] shadow-[0_10px_24px_rgba(0,0,0,0.06)] p-4.5 grid grid-cols-[86px_1fr] gap-4 items-center">
          <img
            className="w-[86px] h-[86px] object-contain rounded-xl"
            src="/src/assets/imagem_bola_peneira.png"
            alt="Ícone calendário/bola"
          />
          <div className="grid gap-1">
            <p className="m-0 text-[#1f5b37] font-extrabold text-[18px]">04 de agosto de 2024</p>
            <h3 className="m-0 text-[#1a2d22] text-[18px] font-extrabold">São Paulo (SP)</h3>
            <p className="m-0 text-[#5c6b76] text-[15px] font-semibold">Sub-15</p>
            <p className="m-0 mt-0.5 text-[#3a4752] text-[14px] leading-[1.45]">
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