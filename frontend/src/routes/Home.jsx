import { Link } from "react-router-dom";
import hero from "../assets/imagem_bola.png";
import imgPeneiras from "../assets/imagem_peneiras.png";
import imgNoticias from "../assets/imagem_noticias.png";
import imgCalendario from "../assets/imagem_calendario.png";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="h-[240px] border-b-[6px] border-[#1f5b37] bg-center bg-cover bg-no-repeat relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-gradient-to-t from-[rgba(0,0,0,0.45)] to-[rgba(0,0,0,0.10)]">
          <h1 className="m-0 mb-1.5 text-[34px] font-extrabold">Elas em Campo</h1>
          <p className="m-0 text-[14px] opacity-95">Conectando meninas ao futebol</p>
        </div>
      </section>

      {/* CARDS */}
      <section className="max-w-[1100px] mx-auto my-[48px] px-[28px] grid grid-cols-2 gap-x-[48px] gap-y-[64px]">
        <article className="bg-white rounded-[14px] shadow-[0_10px_24px_rgba(0,0,0,0.12)] p-[24px] relative">
          <div className="absolute top-[-16px] left-[20px] bg-[#237244] text-white py-2 px-3.5 rounded-[10px] font-bold text-[14px]">PENEIRAS</div>
          <img className="w-full h-[220px] mt-[26px] rounded-[12px] object-cover object-center" src={imgPeneiras} alt="Peneiras" />
          <p className="my-4 mx-1.5 text-[14px] leading-[1.4]">
            Encontre peneiras próximas a você e se inscreva para participar das seleções.
          </p>
          <Link className="inline-block bg-[#1f5b37] text-white no-underline py-2 px-3.5 rounded-lg font-semibold text-[14px] border-none cursor-pointer hover:brightness-95" to="/Peneiras">Ver peneiras</Link>
        </article>

        <article className="bg-white rounded-[14px] shadow-[0_10px_24px_rgba(0,0,0,0.12)] p-[24px] relative mt-1.5">
          <div className="absolute top-[-16px] left-[20px] bg-[#237244] text-white py-2 px-3.5 rounded-[10px] font-bold text-[14px]">NOTÍCIAS</div>
          <img className="w-full h-[220px] mt-[26px] rounded-[12px] object-cover object-center" src={imgNoticias} alt="Notícias" />
          <p className="my-4 mx-1.5 text-[14px] leading-[1.4]">
            Fique por dentro das novidades do futebol feminino e da Copa Passa Bola.
          </p>
          <Link className="inline-block bg-[#1f5b37] text-white no-underline py-2 px-3.5 rounded-lg font-semibold text-[14px] border-none cursor-pointer hover:brightness-95" to="/Noticias">Ler notícias</Link>
        </article>

        <article className="bg-white rounded-[14px] shadow-[0_10px_24px_rgba(0,0,0,0.12)] p-[24px] relative">
          <div className="absolute top-[-16px] left-[20px] bg-[#237244] text-white py-2 px-3.5 rounded-[10px] font-bold text-[14px]">CALENDÁRIO</div>
          <img className="w-full h-[220px] mt-[26px] rounded-[12px] object-cover object-center" src={imgCalendario} alt="Calendário" />
          <p className="my-4 mx-1.5 text-[14px] leading-[1.4]">
            Veja as datas dos próximos jogos e eventos do campeonato.
          </p>
          <Link className="inline-block bg-[#1f5b37] text-white no-underline py-2 px-3.5 rounded-lg font-semibold text-[14px] border-none cursor-pointer hover:brightness-95" to="/Campeonato">Abrir calendário</Link>
        </article>
      </section>
    </>
  );
}