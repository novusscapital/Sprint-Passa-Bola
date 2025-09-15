import React from 'react';

const Admin = () => {
  return (
    <div>
      <h1>Painel Administrativo</h1>
      
      <div>
        {/* Cards de administração */}
        <div>
          <h2>Campeonato</h2>
          <p>Envios recentes das participantes do Campeonato.</p>
        </div>

        <div>
          <h2>Notícias</h2>
          <p>Controle do painel das Notícias</p>
        </div>

        <div>
          <h2>Peneiras</h2>
          <p>Acompanhamento das rotas localizadas pelas Peneiras</p>
        </div>
      </div>
    </div>
  );
};

export default Admin;