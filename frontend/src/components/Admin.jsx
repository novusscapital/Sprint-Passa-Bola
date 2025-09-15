import React from 'react';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Painel Administrativo</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cards de administração */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Campeonato</h2>
          <p>Conteúdo administrativo aqui...</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Notícias</h2>
          <p>Conteúdo administrativo aqui...</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Usuários</h2>
          <p>Conteúdo administrativo aqui...</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;