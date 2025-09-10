// =========================================================
// FOOTER COMPONENT
// =========================================================

export default function Footer() {
  return (
    <footer className="footer footer--compact" translate="no">
      <div className="footer__wrap">
        {/* Contatos */}
        <div className="footer__col">
          <h3 className="footer__title">Contatos</h3>
          <div className="footer__content">
            <p>contato@copapassabola.com</p>
            <p>(00) 1234-5678</p>
          </div>
        </div>

        {/* Endereço */}
        <div className="footer__col">
          <h3 className="footer__title">Endereço</h3>
          <div className="footer__content">
            <p>Av. Paulista, 1106</p>
            <p>São Paulo — SP</p>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="footer__col">
          <h3 className="footer__title">Siga a gente</h3>
          <div className="footer__content">
            <div className="footer__icons">
              <a href="#" className="ico ico--fb" aria-label="Facebook">f</a>
              <a href="#" className="ico ico--tw" aria-label="Twitter">t</a>
              <a href="#" className="ico ico--ig" aria-label="Instagram">∙</a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="footer__bar">
        © {new Date().getFullYear()} Elas em Campo — Todos os direitos reservados
      </div>
    </footer>
  );
}