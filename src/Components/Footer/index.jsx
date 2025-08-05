import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Seção superior */}
      <div className={styles.topSection}>
        <nav className={styles.linksGroup} aria-label="Links úteis">
          <ul>
            <li><a href="/catalogo">Produtos</a></li>
            <li><a href="/catalogo">Acessórios</a></li>
            <li><a href="/catalogo">Coleções</a></li>
          </ul>

          <ul>
            <li><a href="/politica-privacidade">Política de Privacidade</a></li>
            <li><a href="/trocas-e-devolucoes">Trocas e Devoluções</a></li>
            <li><a href="/frete">Política de Frete</a></li>
          </ul>

          <ul>
            <li><a href="https://instagram.com/entorno_acessorios" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a></li>
            <li><a href="https://wa.me.com/5583991" target="_blank" rel="noopener noreferrer">Whatsapp</a></li>
          </ul>
        </nav>

        {/* Newsletter */}
        <div className={styles.newsletter}>
          <h3>INSCREVA–SE PARA SABER DAS NOVIDADES</h3>
          <form onSubmit={(e) => e.preventDefault()} aria-label="Formulário de newsletter">
            <input type="text" name="nome" placeholder="Nome" aria-label="Nome" required />
            <input type="email" name="email" placeholder="Digite seu e-mail" aria-label="E-mail" required />
            <button type="submit">SE INSCREVER</button>
          </form>
        </div>
      </div>

      {/* Logo da marca */}
      <div className={styles.brand}>
        <h1>ENTORNO</h1>
      </div>

      {/* Informações e links legais */}
      <div className={styles.bottomInfo}>
        <p>© 2025 Entorno Acessórios. Website artesanal com ❤️</p>
        <div className={styles.links}>
          <a href="/politica-privacidade">Política de privacidade</a>
          <a href="/politica-reembolso">Política de reembolso</a>
          <a href="/termos-servico">Termos de serviço</a>
          <a href="/frete">Política de frete</a>
          <a href="/contato">Informações de contato</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
