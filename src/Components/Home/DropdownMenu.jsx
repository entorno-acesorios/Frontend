<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styles from './DropdownMenu.module.css';
import { motion, AnimatePresence } from 'framer-motion';

function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className={styles.title}>Coleções ▾</span>

      <AnimatePresence>
        {open && (
          <motion.ul
            className={styles.menu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <li><a href="/colecoes/afeto">Afeto</a></li>
            <li><a href="/colecoes/raízes">Raízes</a></li>
            <li><a href="/colecoes/territórios">Territórios</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DropdownMenu;
=======
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import styles from './DropdownMenu.module.css';
import { motion, AnimatePresence } from 'framer-motion';

function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <span className={styles.title}>Coleções ▾</span>

      <AnimatePresence>
        {open && (
          <motion.ul
            className={styles.menu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <li><a href="/colecoes/afeto">Afeto</a></li>
            <li><a href="/colecoes/raízes">Raízes</a></li>
            <li><a href="/colecoes/territórios">Territórios</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DropdownMenu;
>>>>>>> c8762d3 (Primeiro Commit com atualizações e criações da estrutura inicial do projeto do Front-end)
