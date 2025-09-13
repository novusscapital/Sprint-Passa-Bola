import React from "react";

const Campeonato = () => {
  return (
    <main className="max-w-[1100px] mx-auto my-9 mb-12 px-[18px]">
      <h2 className="text-[#1f5b37] text-center text-[28px] font-extrabold mt-3.5 mb-6">
        Campeonato Passa Bola
      </h2>

      {/* Regras (esq) / Tabela (dir) */}
      <section className="grid grid-cols-2 gap-x-[50px] gap-y-[40px] items-start">
        {/* Regras */}
        <div>
          <h3 className="text-[#1f5b37] text-[22px] font-bold mb-3.5">Regras</h3>
          <div className="bg-[#f7f8f9] border border-solid border-[rgba(0,0,0,0.08)] rounded-xl p-3.5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-left mx-auto">
            <div className="w-full grid place-items-center">
              {/* IMAGEM MENOR */}
              <img
                src="/src/assets/imagem_regras.png"
                alt="Regras do campeonato"
                className="w-full max-w-[320px] h-auto rounded-xl object-cover object-center block mx-auto"
              />
            </div>

            <ul className="list-none mt-3 p-0 text-[#515e6a] leading-[1.45] text-[13px]">
              <li>Cada equipe deve ter no mínimo 11 jogadoras</li>
              <li>Idade máxima conforme categoria</li>
              <li>Documentação obrigatória para inscrição</li>
            </ul>
          </div>
        </div>

        {/* Tabela */}
        <div>
          <h3 className="text-[#1f5b37] text-[22px] font-bold mb-3.5">Tabela do Campeonato</h3>
          <div className="bg-[#f7f8f9] border border-solid border-[rgba(0,0,0,0.08)] rounded-xl p-3.5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-left mx-auto">
            <div className="w-full grid place-items-center">
              {/* IMAGEM MAIS LARGA QUE A DAS REGRAS */}
              <img
                src="/src/assets/Tabela.png"
                alt="Tabela do campeonato"
                className="w-full max-w-[520px] h-auto rounded-xl object-cover object-center block mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/*Inscreva-se (esq) / Informações (dir) */}
      <section className="grid grid-cols-2 gap-x-[50px] gap-y-[40px] items-start mt-6">
        {/* Formulário */}
        <div>
          <h3 className="text-[#1f5b37] text-[22px] font-bold mb-3.5">Inscreva-se</h3>
          <form className="bg-[#f7f8f9] border border-solid border-[rgba(0,0,0,0.08)] rounded-xl p-4 shadow-[0_4px_12px_rgba(0,0,0,0.05)] grid gap-3" onSubmit={(e) => e.preventDefault()}>
            <label className="sr-only" htmlFor="team">Nome da Equipe</label>
            <input
              className="w-full h-[38px] rounded-lg border border-[rgba(0,0,0,0.14)] bg-white px-2.5 text-[13px] outline-none box-border focus:border-[#237244] focus:shadow-[0_0_0_2px_rgba(35,114,68,0.15)]"
              id="team"
              placeholder="Nome da Equipe"
            />

            <label className="sr-only" htmlFor="coach">Nome do Técnico</label>
            <input
              className="w-full h-[38px] rounded-lg border border-[rgba(0,0,0,0.14)] bg-white px-2.5 text-[13px] outline-none box-border focus:border-[#237244] focus:shadow-[0_0_0_2px_rgba(35,114,68,0.15)]"
              id="coach"
              placeholder="Nome do Técnico"
            />

            <label className="sr-only" htmlFor="email">Email</label>
            <input
              className="w-full h-[38px] rounded-lg border border-[rgba(0,0,0,0.14)] bg-white px-2.5 text-[13px] outline-none box-border focus:border-[#237244] focus:shadow-[0_0_0_2px_rgba(35,114,68,0.15)]"
              id="email"
              type="email"
              placeholder="Email"
            />

            <label className="sr-only" htmlFor="phone">Telefone</label>
            <input
              className="w-full h-[38px] rounded-lg border border-[rgba(0,0,0,0.14)] bg-white px-2.5 text-[13px] outline-none box-border focus:border-[#237244] focus:shadow-[0_0_0_2px_rgba(35,114,68,0.15)]"
              id="phone"
              placeholder="Telefone"
            />

            <button
              className="inline-block bg-[#1f5b37] text-white no-underline py-2 px-3.5 rounded-lg font-semibold text-[14px] border-none cursor-pointer h-10 text-[14px] mt-2.5 mb-1.5 hover:brightness-95"
              type="submit"
            >
              Fazer Inscrição
            </button>
          </form>
        </div>

        {/* Informações */}
        <aside>
          <h3 className="text-[#1f5b37] text-[22px] font-bold mb-3.5">Informações do Campeonato</h3>
          <div className="border-2 border-[#2f80ed] rounded-lg p-3.5 bg-[#f7fbff]">
            <h4 className="text-[#0b3d91] text-[18px] font-bold mb-2.5">Detalhes</h4>
            <ul className="list-none m-0 p-0 text-[#374151] leading-normal text-[13px]">
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