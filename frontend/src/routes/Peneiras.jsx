import React, { useState } from "react";

const Peneiras = () => {
  const [regiaoSelecionada, setRegiaoSelecionada] = useState(null);
  const [filtros, setFiltros] = useState({
    estado: "SP",
    cidade: "São Paulo", 
    idade: "17"
  });
  const [filtroHover, setFiltroHover] = useState(null);

  const regioes = [
    { id: 1, nome: "São Paulo", peneiras: 5, top: "35%", left: "58%", cor: "#FF6B6B" },
    { id: 2, nome: "Campinas", peneiras: 3, top: "42%", left: "53%", cor: "#4ECDC4" },
    { id: 3, nome: "Rio de Janeiro", peneiras: 4, top: "52%", left: "68%", cor: "#45B7D1" },
    { id: 4, nome: "Belo Horizonte", peneiras: 2, top: "47%", left: "48%", cor: "#96CEB4" },
    { id: 5, nome: "Curitiba", peneiras: 3, top: "62%", left: "53%", cor: "#FFEAA7" },
    { id: 6, nome: "Porto Alegre", peneiras: 2, top: "72%", left: "48%", cor: "#DDA0DD" },
  ];

  const peneirasData = [
    {
      id: 1,
      data: "20 de julho de 2024",
      cidade: "São Paulo (SP)",
      categoria: "Sub-17",
      local: "Estádio Municipal – Rua das Flores, 123",
      descricao: "Peneira para seleção de talentos da região metropolitana de São Paulo",
      estado: "SP",
      idade: "17"
    },
    {
      id: 2,
      data: "04 de agosto de 2024", 
      cidade: "São Paulo (SP)",
      categoria: "Sub-15",
      local: "Estádio Municipal – Rua das Flores, 123",
      descricao: "Peneira para seleção de talentos da região metropolitana de São Paulo",
      estado: "SP",
      idade: "15"
    },
    {
      id: 3,
      data: "15 de agosto de 2024",
      cidade: "Campinas (SP)",
      categoria: "Sub-17", 
      local: "Estádio Moisés Lucarelli – Av. Dr. Moraes Salles, 1.539",
      descricao: "Peneira para categorias de base do Guarani FC",
      estado: "SP",
      idade: "17"
    },
    {
      id: 4,
      data: "25 de agosto de 2024",
      cidade: "Rio de Janeiro (RJ)",
      categoria: "Sub-16",
      local: "Estádio São Januário – Rua General Almério de Moura, 131",
      descricao: "Peneira para seleção de jovens talentos do Vasco",
      estado: "RJ", 
      idade: "16"
    }
  ];

  const handleRegiaoClick = (regiao) => {
    setRegiaoSelecionada(regiao);
  };

  const handleFiltroChange = (tipo, valor) => {
    setFiltros(prev => ({
      ...prev,
      [tipo]: valor
    }));
  };

  const peneirasFiltradas = peneirasData.filter(peneira => 
    peneira.estado === filtros.estado &&
    peneira.cidade.includes(filtros.cidade) && 
    peneira.idade === filtros.idade
  );

  const getTooltipText = (tipo) => {
    const valores = {
      estado: `Estado selecionado: ${filtros.estado}`,
      cidade: `Cidade selecionada: ${filtros.cidade}`,
      idade: `Idade selecionada: ${filtros.idade} anos`
    };
    return valores[tipo];
  };

  return (
    <main className="max-w-[1100px] mx-auto my-10 mb-14 px-[18px]">
      <h2 className="text-center text-[#1f5b37] text-[28px] font-extrabold mt-2 mb-6">PENEIRAS</h2>

      {/* Mapa Interativo */}
      <div className="bg-[#fff7e9] rounded-[16px] border border-solid border-[rgba(0,0,0,0.08)] shadow-[0_8px_22px_rgba(0,0,0,0.06)] overflow-hidden p-6 mb-6">
        <div className="relative bg-white border border-gray-300 rounded-lg min-h-[400px] overflow-hidden">
          <div className="absolute inset-4 bg-blue-50 border border-blue-200 rounded-lg">
            {regioes.map((regiao) => (
              <button
                key={regiao.id}
                className={`absolute w-10 h-10 rounded-full border-2 border-white shadow-lg transition-all duration-200 hover:scale-125 hover:z-10 flex items-center justify-center ${
                  regiaoSelecionada?.id === regiao.id 
                    ? 'scale-125 z-20 ring-4 ring-yellow-400' 
                    : ''
                }`}
                style={{
                  backgroundColor: regiao.cor,
                  top: regiao.top,
                  left: regiao.left,
                }}
                onClick={() => handleRegiaoClick(regiao)}
              >
                <span className="text-white text-sm font-bold">
                  {regiao.peneiras}
                </span>
              </button>
            ))}

            {regioes.map((regiao) => (
              <div
                key={`label-${regiao.id}`}
                className="absolute text-xs font-semibold text-gray-700 bg-white/80 px-2 py-1 rounded-md pointer-events-none transition-opacity duration-200"
                style={{
                  top: `calc(${regiao.top} + 45px)`,
                  left: regiao.left,
                  opacity: regiaoSelecionada?.id === regiao.id ? 1 : 0,
                }}
              >
                {regiao.nome}
              </div>
            ))}
          </div>

          {regiaoSelecionada ? (
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 min-w-[200px] border border-gray-200 z-30">
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                {regiaoSelecionada.nome}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: regiaoSelecionada.cor }}
                ></div>
                <span className="text-sm text-gray-600">
                  {regiaoSelecionada.peneiras} peneira{regiaoSelecionada.peneiras > 1 ? 's' : ''} disponíveis
                </span>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Categoria: Sub-17</p>
                <p>• Local: Estádios municipais</p>
                <p>• Inscrição: Gratuita</p>
                <p>• Vagas: Limitadas</p>
              </div>
              <button 
                className="text-xs text-blue-600 hover:text-blue-800 mt-3"
                onClick={() => setRegiaoSelecionada(null)}
              >
                Fechar
              </button>
            </div>
          ) : (
            <div className="absolute top-4 right-4 bg-white/90 rounded-lg p-4 max-w-[250px] z-30">
              <h3 className="font-bold text-gray-800 mb-2">Mapa de Peneiras</h3>
              <p className="text-sm text-gray-600">
                Clique nas bolinhas coloridas para ver as peneiras disponíveis em cada região.
              </p>
            </div>
          )}

          <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-3 text-xs z-30">
            <div className="font-semibold mb-2 text-gray-800">Legenda:</div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-[#FF6B6B] rounded-full"></div>
              <span className="text-gray-700">5+ peneiras</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 bg-[#45B7D1] rounded-full"></div>
              <span className="text-gray-700">3-4 peneiras</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#96CEB4] rounded-full"></div>
              <span className="text-gray-700">1-2 peneiras</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="grid grid-cols-3 gap-3 mt-6 mb-3.5">
        <div 
          className="relative"
          onMouseEnter={() => setFiltroHover('estado')}
          onMouseLeave={() => setFiltroHover(null)}
        >
          <select 
            value={filtros.estado}
            onChange={(e) => handleFiltroChange('estado', e.target.value)}
            className="w-full h-[44px] rounded-[10px] border border-solid border-[rgba(0,0,0,0.16)] bg-white px-3 text-[14px] outline-none box-border focus:border-[#237244] focus:shadow-[0_0_0_2px_rgba(35,114,68,0.15)]"
          >
            <option value="SP">Estado</option>
            <option value="SP">SP</option>
            <option value="RJ">RJ</option>
            <option value="MG">MG</option>
          </select>
          {filtroHover === 'estado' && (
            <div className="absolute bottom-full mb-2 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-40">
              {getTooltipText('estado')}
            </div>
          )}
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setFiltroHover('cidade')}
          onMouseLeave={() => setFiltroHover(null)}
        >
          <select 
            value={filtros.cidade}
            onChange={(e) => handleFiltroChange('cidade', e.target.value)}
            className="w-full h-[44px] rounded-[10px] border border-solid border-[rgba(0,0,0,0.16)] bg-white px-3 text-[14px] outline-none box-border focus:border-[#237244] focus:shadow-[0_0_0_2px_rgba(35,114,68,0.15)]"
          >
            <option value="São Paulo">Cidade</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Campinas">Campinas</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
          </select>
          {filtroHover === 'cidade' && (
            <div className="absolute bottom-full mb-2 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-40">
              {getTooltipText('cidade')}
            </div>
          )}
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setFiltroHover('idade')}
          onMouseLeave={() => setFiltroHover(null)}
        >
          <select 
            value={filtros.idade}
            onChange={(e) => handleFiltroChange('idade', e.target.value)}
            className="w-full h-[44px] rounded-[10px] border border-solid border-[rgba(0,0,0,0.16)] bg-white px-3 text-[14px] outline-none box-border focus:border-[#237244] focus:shadow-[0_0_0_2px_rgba(35,114,68,0.15)]"
          >
            <option value="17">Idade</option>
            <option value="18+">18+</option>
            <option value="18">18</option>
            <option value="17">17</option>
            <option value="16">16</option>
            <option value="15">15</option>
          </select>
          {filtroHover === 'idade' && (
            <div className="absolute bottom-full mb-2 left-0 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap z-40">
              {getTooltipText('idade')}
            </div>
          )}
        </div>
      </div>

      {/* Cards de Peneiras Filtradas */}
      <section className="grid gap-4.5 mt-1.5">
        {peneirasFiltradas.map((peneira) => (
          <article key={peneira.id} className="bg-white border border-solid border-[rgba(0,0,0,0.10)] rounded-[16px] shadow-[0_10px_24px_rgba(0,0,0,0.06)] p-4.5 grid grid-cols-[86px_1fr] gap-4 items-center">
            <img
              className="w-[86px] h-[86px] object-contain rounded-xl"
              src="/src/assets/imagem_bola_peneira.png"
              alt="Ícone calendário/bola"
            />
            <div className="grid gap-1">
              <p className="m-0 text-[#1f5b37] font-extrabold text-[18px]">{peneira.data}</p>
              <h3 className="m-0 text-[#1a2d22] text-[18px] font-extrabold">{peneira.cidade}</h3>
              <p className="m-0 text-[#5c6b76] text-[15px] font-semibold">{peneira.categoria}</p>
              <p className="m-0 mt-0.5 text-[#3a4752] text-[14px] leading-[1.45]">
                {peneira.local}
                <br />
                {peneira.descricao}
              </p>
            </div>
          </article>
        ))}
        
        {peneirasFiltradas.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Nenhuma peneira encontrada com os filtros selecionados.
          </div>
        )}
      </section>
    </main>
  );
};

export default Peneiras;