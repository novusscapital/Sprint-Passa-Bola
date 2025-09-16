import React, { useState } from 'react';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('campeonato');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header fixo */}
      <header className="bg-gradient-to-r from-[#1f5b37] to-[#34a76c] text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold">Painel Administrativo</h1>
        <p className="text-white/90 mt-2">Gerencie todas as áreas do sistema Elas em Campo</p>
      </header>

      {/* Navegação */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveSection('campeonato')}
              className={`py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeSection === 'campeonato'
                  ? 'border-[#1f5b37] text-[#1f5b37]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Campeonato
            </button>
            <button
              onClick={() => setActiveSection('noticias')}
              className={`py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeSection === 'noticias'
                  ? 'border-[#1f5b37] text-[#1f5b37]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Notícias
            </button>
            <button
              onClick={() => setActiveSection('peneiras')}
              className={`py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeSection === 'peneiras'
                  ? 'border-[#1f5b37] text-[#1f5b37]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Peneiras
            </button>
          </div>
        </div>
      </nav>

      {/* Seção Campeonato */}
      {activeSection === 'campeonato' && (
        <section className="py-8 px-6 max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-[#e8f5ee] rounded-lg mr-4">
                <svg className="w-8 h-8 text-[#1f5b37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Campeonato</h2>
                <p className="text-gray-600">Envios recentes das participantes do Campeonato Passa Bola.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Inscrições</h3>
                <p className="text-3xl font-bold text-[#1f5b37]">124</p>
                <p className="text-sm text-gray-500 mt-1">Novas inscrições este mês</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Pendentes</h3>
                <p className="text-3xl font-bold text-orange-500">18</p>
                <p className="text-sm text-gray-500 mt-1">Aguardando análise</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Aprovadas</h3>
                <p className="text-3xl font-bold text-green-500">92</p>
                <p className="text-sm text-gray-500 mt-1">Inscrições validadas</p>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-[#1f5b37] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#2a7a4f] transition-colors">
                Gerenciar Inscrições
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Seção Notícias */}
      {activeSection === 'noticias' && (
        <section className="py-8 px-6 max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-[#e8f5ee] rounded-lg mr-4">
                <svg className="w-8 h-8 text-[#1f5b37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Notícias</h2>
                <p className="text-gray-600">Controle do painel das Notícias e atualizações do site.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Publicadas</h3>
                <p className="text-3xl font-bold text-[#1f5b37]">42</p>
                <p className="text-sm text-gray-500 mt-1">Notícias ativas no site</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Rascunhos</h3>
                <p className="text-3xl font-bold text-blue-500">7</p>
                <p className="text-sm text-gray-500 mt-1">Aguardando publicação</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Visualizações</h3>
                <p className="text-3xl font-bold text-purple-500">3.2K</p>
                <p className="text-sm text-gray-500 mt-1">Total este mês</p>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <button className="bg-[#1f5b37] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#2a7a4f] transition-colors">
                Gerenciar Notícias
              </button>
              <button className="bg-white text-[#1f5b37] px-5 py-2.5 rounded-lg font-medium border border-[#1f5b37] hover:bg-gray-50 transition-colors">
                Nova Notícia
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Seção Peneiras */}
      {activeSection === 'peneiras' && (
        <section className="py-8 px-6 max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-[#e8f5ee] rounded-lg mr-4">
                <svg className="w-8 h-8 text-[#1f5b37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Peneiras</h2>
                <p className="text-gray-600">Acompanhamento das rotas localizadas pelas Peneiras e eventos.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Agendadas</h3>
                <p className="text-3xl font-bold text-[#1f5b37]">15</p>
                <p className="text-sm text-gray-500 mt-1">Próximas peneiras</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Participantes</h3>
                <p className="text-3xl font-bold text-indigo-600">328</p>
                <p className="text-sm text-gray-500 mt-1">Inscrições totais</p>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Taxa de Conversão</h3>
                <p className="text-3xl font-bold text-teal-600">18%</p>
                <p className="text-sm text-gray-500 mt-1">Selecionadas para clubes</p>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <button className="bg-[#1f5b37] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#2a7a4f] transition-colors">
                Gerenciar Peneiras
              </button>
              <button className="bg-white text-[#1f5b37] px-5 py-2.5 rounded-lg font-medium border border-[#1f5b37] hover:bg-gray-50 transition-colors">
                Nova Peneira
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Admin;