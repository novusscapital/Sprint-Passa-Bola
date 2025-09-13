export default function Footer() {
  return (
    <footer className="bg-[#0c5a2c] text-white mt-5 shadow-[inset_0_2px_0_rgba(0,0,0,0.25)]" translate="no">
      <div className="max-w-[1100px] mx-auto py-1.5 px-3 grid grid-cols-3 gap-1.5">
        {/* Contatos */}
        <div className="grid grid-rows-[auto_1fr]">
          <h3 className="m-0 text-center text-[13px] font-semibold pb-0.5 border-b border-[rgba(0,0,0,0.15)]">Contatos</h3>
          <div className="grid place-items-center gap-1 pt-1.5 text-center text-[11px]">
            <p>contato@copapassabola.com</p>
            <p>(00) 1234-5678</p>
          </div>
        </div>

        {/* Endereço */}
        <div className="grid grid-rows-[auto_1fr]">
          <h3 className="m-0 text-center text-[13px] font-semibold pb-0.5 border-b border-[rgba(0,0,0,0.15)]">Endereço</h3>
          <div className="grid place-items-center gap-1 pt-1.5 text-center text-[11px]">
            <p>Av. Paulista, 1106</p>
            <p>São Paulo — SP</p>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="grid grid-rows-[auto_1fr]">
          <h3 className="m-0 text-center text-[13px] font-semibold pb-0.5 border-b border-[rgba(0,0,0,0.15)]">Siga a gente</h3>
          <div className="grid place-items-center pt-1.5">
            <div className="flex gap-1.5">
              <a href="#" className="w-5 h-5 rounded-[6px] grid place-items-center font-bold text-[11px] no-underline text-white shadow-[0_1px_3px_rgba(0,0,0,0.18),inset_0_0_0_1px_rgba(0,0,0,0.12)] transition-transform duration-150 ease-[ease] transition-filter duration-150 ease-[ease] hover:translate-y-[-2px] hover:brightness-105 bg-[#1877f2]" aria-label="Facebook">f</a>
              <a href="#" className="w-5 h-5 rounded-[6px] grid place-items-center font-bold text-[11px] no-underline text-white shadow-[0_1px_3px_rgba(0,0,0,0.18),inset_0_0_0_1px_rgba(0,0,0,0.12)] transition-transform duration-150 ease-[ease] transition-filter duration-150 ease-[ease] hover:translate-y-[-2px] hover:brightness-105 bg-[#1da1f2]" aria-label="Twitter">t</a>
              <a href="#" className="w-5 h-5 rounded-[6px] grid place-items-center font-bold text-[11px] no-underline text-transparent relative bg-[radial-gradient(30%_30%_at_30%_30%,#ffd86a_0_60%,transparent_61%),linear-gradient(135deg,#fd5949_0%,#d6249f_50%,#285AEB_100%)]" aria-label="Instagram">
                ∙
                <span className="absolute inset-0 rounded-[6px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7),inset_0_0_0_3px_rgba(255,255,255,0.15)]"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="text-center py-1 px-2 text-[10px] bg-[rgba(0,0,0,0.12)]">
        © {new Date().getFullYear()} Elas em Campo — Todos os direitos reservados
      </div>
    </footer>
  );
}