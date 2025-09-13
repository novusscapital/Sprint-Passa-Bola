import React from "react";
import { Link } from "react-router-dom";

const Noticias = () => {
  return (
    <main className="max-w-[1100px] mx-auto my-10 mb-14 px-[18px]">
      {/* Título da página */}
      <h2 className="text-center text-[#1f5b37] text-[28px] font-extrabold mt-2 mb-6">NOTÍCIAS</h2>

      {/* BLOCO: Notícia em destaque */}
      <section className="mb-8">
        <h3 className="text-[#1f5b37] text-[22px] mb-3.5 border-b-[3px] border-[#1f5b37] inline-block pb-1">
          Notícia em destaque
        </h3>

        <div className="grid grid-cols-[1.2fr_1fr_280px] gap-6 items-start">
          <img
            className="w-full rounded-xl object-cover aspect-[4/3] shadow-[0_6px_16px_rgba(0,0,0,0.06)]"
            src="/src/assets/imagem_noticias_em_destaque.png"
            alt="Duas meninas comemorando com troféu"
          />

          <div className="grid gap-3">
            <p className="text-[#7a8a97] text-[13px] m-0">15 de junho de 2024</p>

            <h4 className="m-0 text-[20px] leading-[1.25]">
              <Link to="/Noticias" className="text-[#1f5b37] underline decoration-2 underline-offset-[3px] hover:opacity-90">
                Copa Passa Bola 2024 tem início marcado
              </Link>
            </h4>

            <p className="m-0 leading-[1.6] text-[#303a44] text-[15px]">
              O maior campeonato de futebol feminino de base do país está
              prestes a começar com a participação das equipes.
            </p>
          </div>

          {/* Sidebar de categorias */}
          <aside className="bg-[#f7f8f9] border border-solid border-[rgba(0,0,0,0.08)] rounded-xl p-3.5">
            <h5 className="m-0 mb-2.5 text-[14px] text-[#1b3a2b] border-b-[2px] border-[#1f5b37] inline-block pb-1">
              Categorias
            </h5>
            <ul className="list-none m-2 mt-0 p-0 grid gap-2.5">
              <li><Link to="/Campeonato" className="text-[#2d3e50] no-decoration hover:text-[#1f5b37]">Campeonato</Link></li>
              <li><Link to="/Peneiras" className="text-[#2d3e50] no-decoration hover:text-[#1f5b37]">Peneiras</Link></li>
              <li><Link to="/Noticias" className="text-[#2d3e50] no-decoration hover:text-[#1f5b37]">Notícias</Link></li>
              <li><Link to="/Noticias" className="text-[#2d3e50] no-decoration hover:text-[#1f5b37]">Eventos</Link></li>
            </ul>
          </aside>
        </div>
      </section>

      {/* BLOCO: Lista de notícias */}
      <section className="mt-6">
        <h3 className="text-[#1f5b37] text-[22px] mb-3.5 border-b-[3px] border-[#1f5b37] inline-block pb-1">
          Notícias
        </h3>

        <div className="grid grid-cols-2 gap-6 mt-3.5">
          {/* Card 1 */}
          <article className="bg-white rounded-[14px] shadow-[0_10px_24px_rgba(0,0,0,0.08)] overflow-hidden border border-solid border-[rgba(0,0,0,0.06)]">
            <img
              className="w-full aspect-[16/9] object-cover"
              src="/src/assets/imagem_noticia1.png"
              alt="Grupo de meninas com bola"
            />

            <div className="p-3.5 grid gap-2">
              <p className="text-[#7a8a97] text-[13px] m-0">15 de junho de 2024</p>
              <h4 className="m-0 text-[#0f2e21] text-[18px] leading-[1.3]">
                Inscrições abertas para peneiras regionais
              </h4>
              <p className="m-0 text-[#374151] text-[14px] leading-[1.55]">
                Meninas de 14 a 20 anos podem se inscrever nas peneiras que
                acontecerão em 15 cidades brasileiras.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-white rounded-[14px] shadow-[0_10px_24px_rgba(0,0,0,0.08)] overflow-hidden border border-solid border-[rgba(0,0,0,0.06)]">
            <img
              className="w-full aspect-[16/9] object-cover"
              src="/src/assets/imagem_noticia2.png"
              alt="Treino com equipes em quadra"
            />

            <div className="p-3.5 grid gap-2">
              <p className="text-[#7a8a97] text-[13px] m-0">15 de junho de 2024</p>
              <h4 className="m-0 text-[#0f2e21] text-[18px] leading-[1.3]">
                Parceria com escolas públicas é ampliada
              </h4>
              <p className="m-0 text-[#374151] text-[14px] leading-[1.55]">
                Programa de incentivo ao futebol feminino chega a mais de 50
                escolas em todo o território nacional.
              </p>
            </div>
          </article>
        </div>

        {/* Opt-in de e-mail */}
        <div className="mt-4">
          <label className="inline-flex items-center gap-2.5 text-[#3a464f] text-[14px]">
            <input type="checkbox" className="w-[18px] h-[18px]" />
            <span>
              Deseja receber por e-mail? <Link to="/Login" className="text-[#1f5b37]">(faça login)</Link>
            </span>
          </label>
        </div>
      </section>
    </main>
  );
};

export default Noticias;