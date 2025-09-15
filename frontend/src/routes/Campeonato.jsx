import React from "react";

const Campeonato = () => {
  return (
    <main className="max-w-[1200px] mx-auto my-12 px-6">
      {/* Header com gradiente moderno */}
      <header className="text-center mb-12">
        <h2 className="text-[#1f5b37] text-[32px] md:text-[40px] font-extrabold mb-4 bg-gradient-to-r from-[#1f5b37] to-[#34a76c] bg-clip-text text-transparent">
          Campeonato Passa Bola
        </h2>
        <p className="text-[#515e6a] max-w-2xl mx-auto text-lg">
          A competição que reúne as melhores equipes femininas do país. 
          Participe e mostre todo seu talento no campo!
        </p>
      </header>

      {/* Seção principal com regras e tabela */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Card de Regras modernizado */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-[rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="w-3 h-7 bg-[#1f5b37] rounded-full mr-3"></div>
            <h3 className="text-[#1f5b37] text-2xl font-bold">Regras do Campeonato</h3>
          </div>
          
          <div className="mb-6 rounded-xl overflow-hidden">
            <img
              src="/src/assets/imagem_regras.png"
              alt="Regras do campeonato"
              className="w-full h-auto rounded-xl object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <ul className="space-y-3 text-[#515e6a]">
            <li className="flex items-start">
              <span className="bg-[#e8f5ee] text-[#1f5b37] rounded-full p-1 mr-3 flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </span>
              Cada equipe deve ter no mínimo 11 jogadoras e máximo de 20 inscritas
            </li>
            <li className="flex items-start">
              <span className="bg-[#e8f5ee] text-[#1f5b37] rounded-full p-1 mr-3 flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </span>
              Idade máxima conforme categoria (Sub-15, Sub-17, Sub-20)
            </li>
            <li className="flex items-start">
              <span className="bg-[#e8f5ee] text-[#1f5b37] rounded-full p-1 mr-3 flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </span>
              Documentação obrigatória para inscrição (RG, comprovante de residência e atestado médico)
            </li>
          </ul>
        </div>

        {/* Card da Tabela (sem título) */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-[rgba(0,0,0,0.05)] hover:shadow-xl transition-shadow duration-300">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/src/assets/Tabela.png"
              alt="Tabela do campeonato"
              className="w-full h-auto rounded-xl object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <button className="bg-[#1f5b37] text-white px-6 py-3 rounded-xl font-semibold flex items-center hover:bg-[#2a7a4f] transition-colors duration-300">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              Baixar Tabela Completa
            </button>
          </div>
        </div>
      </section>

      {/* Seção de inscrição e informações */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulário modernizado */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-[rgba(0,0,0,0.05)]">
          <div className="flex items-center mb-6">
            <div className="w-3 h-7 bg-[#1f5b37] rounded-full mr-3"></div>
            <h3 className="text-[#1f5b37] text-2xl font-bold">Inscreva sua Equipe</h3>
          </div>
          
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-[#515e6a] mb-1" htmlFor="team">
                Nome da Equipe
              </label>
              <input
                className="w-full h-12 rounded-xl border border-[rgba(0,0,0,0.1)] bg-white px-4 text-[15px] outline-none box-border focus:border-[#237244] focus:ring-2 focus:ring-[#237244] focus:ring-opacity-20 transition-all duration-300"
                id="team"
                placeholder="Digite o nome da sua equipe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#515e6a] mb-1" htmlFor="coach">
                Nome do Técnico
              </label>
              <input
                className="w-full h-12 rounded-xl border border-[rgba(0,0,0,0.1)] bg-white px-4 text-[15px] outline-none box-border focus:border-[#237244] focus:ring-2 focus:ring-[#237244] focus:ring-opacity-20 transition-all duration-300"
                id="coach"
                placeholder="Nome completo do técnico"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#515e6a] mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full h-12 rounded-xl border border-[rgba(0,0,0,0.1)] bg-white px-4 text-[15px] outline-none box-border focus:border-[#237244] focus:ring-2 focus:ring-[#237244] focus:ring-opacity-20 transition-all duration-300"
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#515e6a] mb-1" htmlFor="phone">
                  Telefone
                </label>
                <input
                  className="w-full h-12 rounded-xl border border-[rgba(0,0,0,0.1)] bg-white px-4 text-[15px] outline-none box-border focus:border-[#237244] focus:ring-2 focus:ring-[#237244] focus:ring-opacity-20 transition-all duration-300"
                  id="phone"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            <button
              className="w-full bg-gradient-to-r from-[#1f5b37] to-[#34a76c] text-white py-3 rounded-xl font-semibold text-[16px] border-none cursor-pointer mt-2 flex items-center justify-center hover:shadow-lg transition-all duration-300"
              type="submit"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              Fazer Inscrição
            </button>
          </form>
        </div>

        {/* Informações do campeonato modernizadas */}
        <div>
          <div className="flex items-center mb-6">
            <div className="w-3 h-7 bg-[#2f80ed] rounded-full mr-3"></div>
            <h3 className="text-[#2f80ed] text-2xl font-bold">Informações do Campeonato</h3>
          </div>
          
          <div className="bg-gradient-to-br from-[#f0f7ff] to-[#e1efff] rounded-2xl p-6 border border-[#2f80ed] border-opacity-20 shadow-lg">
            <h4 className="text-[#0b3d91] text-xl font-bold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
              </svg>
              Detalhes Importantes
            </h4>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-[#2f80ed] text-white rounded-full p-1 mr-3 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </span>
                <div>
                  <strong className="text-[#0b3d91]">Data:</strong>
                  <p className="text-[#374151]">15 de julho a 30 de agosto de 2024</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="bg-[#2f80ed] text-white rounded-full p-1 mr-3 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </span>
                <div>
                  <strong className="text-[#0b3d91]">Local:</strong>
                  <p className="text-[#374151]">Estádio Municipal - Av. Principal, 1234</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="bg-[#2f80ed] text-white rounded-full p-1 mr-3 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </span>
                <div>
                  <strong className="text-[#0b3d91]">Equipes:</strong>
                  <p className="text-[#374151]">16 times (8 na chave A e 8 na chave B)</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="bg-[#2f80ed] text-white rounded-full p-1 mr-3 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                  </svg>
                </span>
                <div>
                  <strong className="text-[#0b3d91]">Formato:</strong>
                  <p className="text-[#374151]">Eliminação direta com quartas, semifinal e final</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="bg-[#2f80ed] text-white rounded-full p-1 mr-3 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </span>
                <div>
                  <strong className="text-[#0b3d91]">Categorias:</strong>
                  <p className="text-[#374151]">Sub-15, Sub-17 e Sub-20 (nascidas entre 2004 e 2009)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Campeonato;