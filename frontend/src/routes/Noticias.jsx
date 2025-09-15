import React, { useState } from "react";
import { Link } from "react-router-dom";

const Noticias = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Dados de exemplo para as notícias
  const noticias = [
    {
      id: 1,
      data: "15 de junho de 2024",
      titulo: "Inscrições abertas para peneiras regionais",
      conteudo: "Meninas de 14 a 20 anos podem se inscrever nas peneiras que acontecerão em 15 cidades brasileiras.",
      imagem: "/src/assets/imagem_noticia1.png",
      alt: "Grupo de meninas com bola"
    },
    {
      id: 2,
      data: "15 de junho de 2024",
      titulo: "Parceria com escolas públicas é ampliada",
      conteudo: "Programa de incentivo ao futebol feminino chega a mais de 50 escolas em todo o território nacional.",
      imagem: "/src/assets/imagem_noticia2.png",
      alt: "Treino com equipes em quadra"
    },
    {
      id: 3,
      data: "14 de junho de 2024",
      titulo: "Seleção feminina sub-17 convocada para amistosos",
      conteudo: "A técnica anunciou a lista de convocadas para a série de amistosos internacionais.",
      imagem: "/src/assets/imagem_noticia1.png",
      alt: "Meninas treinando"
    },
    {
      id: 4,
      data: "13 de junho de 2024",
      titulo: "Novo centro de treinamento é inaugurado",
      conteudo: "Com estrutura de ponta, o centro vai atender atletas de base e profissional.",
      imagem: "/src/assets/imagem_noticia2.png",
      alt: "Centro de treinamento"
    },
    {
      id: 5,
      data: "12 de junho de 2024",
      titulo: "Atleta brasileira é destaque em competição internacional",
      conteudo: "Jovem promessa do futebol feminino marca três gols em torneio na Europa.",
      imagem: "/src/assets/imagem_noticia1.png",
      alt: "Jogadora comemorando gol"
    },
    {
      id: 6,
      data: "11 de junho de 2024",
      titulo: "Projeto social forma primeira turma de técnicas",
      conteudo: "Iniciativa capacita ex-atletas para atuarem como técnicas em comunidades carentes.",
      imagem: "/src/assets/imagem_noticia2.png",
      alt: "Formatura de técnicas"
    }
  ];

  // Calcular quantos grupos de notícias temos (cada grupo com 2 notícias)
  const gruposNoticias = [];
  for (let i = 0; i < noticias.length; i += 2) {
    gruposNoticias.push(noticias.slice(i, i + 2));
  }

  const nextGroup = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === gruposNoticias.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevGroup = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? gruposNoticias.length - 1 : prevIndex - 1
    );
  };

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

      {/* BLOCO: Lista de notícias com carrossel */}
      <section className="mt-6 relative">
        <h3 className="text-[#1f5b37] text-[22px] mb-3.5 border-b-[3px] border-[#1f5b37] inline-block pb-1">
          Notícias
        </h3>

        <div className="relative">
          {/* Botão de navegação esquerdo */}
          <button 
            onClick={prevGroup}
            className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-[#f1f5f9] transition-colors"
            style={{ top: '50%' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1f5b37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Container do carrossel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {gruposNoticias.map((grupo, grupoIndex) => (
                <div key={grupoIndex} className="w-full flex-shrink-0 grid grid-cols-2 gap-6">
                  {grupo.map((noticia) => (
                    <article key={noticia.id} className="bg-white rounded-[14px] shadow-[0_10px_24px_rgba(0,0,0,0.08)] overflow-hidden border border-solid border-[rgba(0,0,0,0.06)]">
                      <img
                        className="w-full aspect-[16/9] object-cover"
                        src={noticia.imagem}
                        alt={noticia.alt}
                      />

                      <div className="p-3.5 grid gap-2">
                        <p className="text-[#7a8a97] text-[13px] m-0">{noticia.data}</p>
                        <h4 className="m-0 text-[#0f2e21] text-[18px] leading-[1.3]">
                          {noticia.titulo}
                        </h4>
                        <p className="m-0 text-[#374151] text-[14px] leading-[1.55]">
                          {noticia.conteudo}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Botão de navegação direito */}
          <button 
            onClick={nextGroup}
            className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-[#f1f5f9] transition-colors"
            style={{ top: '50%' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1f5b37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Indicadores de página */}
        <div className="flex justify-center mt-6 space-x-2">
          {gruposNoticias.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#1f5b37]' : 'bg-[#cbd5e1]'}`}
              aria-label={`Ir para o grupo ${index + 1}`}
            />
          ))}
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