import { Link } from "react-router-dom";
import hero from "../assets/imagem_bola.png";
import imgPeneiras from "../assets/imagem_peneiras.png";
import imgNoticias from "../assets/imagem_noticias.png";
import imgCalendario from "../assets/imagem_calendario.png";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="h-[320px] md:h-[400px] border-b-[6px] border-[#1f5b37] bg-center bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-gradient-to-t from-[rgba(0,0,0,0.55)] to-[rgba(0,0,0,0.2)]">
          <h1 className="m-0 mb-3 text-[38px] md:text-[48px] font-extrabold tracking-wide">Elas em Campo</h1>
          <p className="m-0 text-[16px] md:text-[18px] opacity-95 max-w-[500px] px-4">
            Conectando meninas ao futebol feminino e abrindo portas para novas oportunidades
          </p>
        </div>
      </section>

      {/* INTERACTIVE SECTIONS */}
      <section className="max-w-[1100px] mx-auto my-16 px-6">
        {/* PENEIRAS SECTION */}
        <article className="group mb-20 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src={imgPeneiras} 
              alt="Peneiras de futebol feminino" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-[#237244] text-white py-2 px-5 rounded-xl font-bold text-lg inline-block mb-4">
                  PENEIRAS
                </div>
                <p className="text-white text-lg mb-6 max-w-[600px]">
                  Encontre peneiras próximas a você e se inscreva para participar das seleções. 
                  Mostre seu talento e tenha a chance de ser descoberta por clubes profissionais 
                  em busca de novas promessas do futebol feminino.
                </p>
                <Link 
                  className="inline-block bg-[#1f5b37] text-white no-underline py-3 px-6 rounded-xl font-semibold text-lg border-none cursor-pointer hover:bg-[#2a7a4f] transition-colors duration-300" 
                  to="/Peneiras"
                >
                  Explorar peneiras
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* NOTÍCIAS SECTION */}
        <article className="group mb-20 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src={imgNoticias} 
              alt="Notícias do futebol feminino" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-[#237244] text-white py-2 px-5 rounded-xl font-bold text-lg inline-block mb-4">
                  NOTÍCIAS
                </div>
                <p className="text-white text-lg mb-6 max-w-[600px]">
                  Fique por dentro das novidades do futebol feminino e da Copa Passa Bola. 
                  Acompanhe as últimas notícias, entrevistas exclusivas com atletas, 
                  análises técnicas e tudo sobre a evolução do esporte feminino no país.
                </p>
                <Link 
                  className="inline-block bg-[#1f5b37] text-white no-underline py-3 px-6 rounded-xl font-semibold text-lg border-none cursor-pointer hover:bg-[#2a7a4f] transition-colors duration-300" 
                  to="/Noticias"
                >
                  Ler notícias
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* CALENDÁRIO SECTION */}
        <article className="group mb-20 rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
          <div className="relative h-[300px] md:h-[400px] overflow-hidden">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src={imgCalendario} 
              alt="Calendário de eventos" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="bg-[#237244] text-white py-2 px-5 rounded-xl font-bold text-lg inline-block mb-4">
                  CALENDÁRIO
                </div>
                <p className="text-white text-lg mb-6 max-w-[600px]">
                  Veja as datas dos próximos jogos e eventos do campeonato. 
                  Organize sua agenda para não perder nenhuma partida importante, 
                  desde jogos locais até grandes competições nacionais e internacionais.
                </p>
                <Link 
                  className="inline-block bg-[#1f5b37] text-white no-underline py-3 px-6 rounded-xl font-semibold text-lg border-none cursor-pointer hover:bg-[#2a7a4f] transition-colors duration-300" 
                  to="/Campeonato"
                >
                  Ver calendário
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}