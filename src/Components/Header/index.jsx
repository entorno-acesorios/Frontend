<<<<<<< HEAD
import styles from './Header.module.css';
import { useState } from 'react';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navClass = `${styles.nav} ${menuAberto ? styles.ativo : ''}`;

  const links = [
    { label: 'Página Inicial', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Catálogo', href: '/catalogo' },
    { label: 'Comunidade', href: '/comunidade' },
    { label: 'Contatos', href: '/contato' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>Entorno Acessórios</span>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-expanded={menuAberto}
        >
          ☰
        </button>

        <nav className={navClass}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
=======
import styles from './Header.module.css';
import { useState } from 'react';

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navClass = `${styles.nav} ${menuAberto ? styles.ativo : ''}`;

  const links = [
    { label: 'Página Inicial', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Catálogo', href: '/catalogo' },
    { label: 'Comunidade', href: '/comunidade' },
    { label: 'Contatos', href: '/contato' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <span className={styles.logo}>Entorno Acessórios</span>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-expanded={menuAberto}
        >
          ☰
        </button>

        <nav className={navClass}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
>>>>>>> c8762d3 (Primeiro Commit com atualizações e criações da estrutura inicial do projeto do Front-end)
