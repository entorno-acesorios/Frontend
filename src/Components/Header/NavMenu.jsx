/* eslint-disable no-unused-vars */
import styles from './Header.module.css';
import { motion } from 'framer-motion';

function NavMenu({ isOpen }) {
  const links = [
    { label: 'Produtos', href: '/produtos' },
    { label: 'Acessórios', href: '/acessorios' },
    { label: 'Coleções', href: '/colecoes' },
  ];

  return (
    <motion.nav
      className={`${styles.nav} ${isOpen ? styles.ativo : ''}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </motion.nav>
  );
}

export default NavMenu;
