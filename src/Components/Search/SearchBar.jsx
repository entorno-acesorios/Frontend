<<<<<<< HEAD
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SearchBar.module.css';

function SearchBar() {
  const [expand, setExpand] = useState(false);

  return (
    <div className={styles.searchContainer}>
      <button
        className={styles.iconBtn}
        onClick={() => setExpand(!expand)}
        aria-label="Buscar"
      >
        <FiSearch />
      </button>

      <AnimatePresence>
        {expand && (
          <motion.input
            type="text"
            className={styles.searchInput}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 180, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            placeholder="Buscar produto..."
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default SearchBar;
=======
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SearchBar.module.css';

function SearchBar() {
  const [expand, setExpand] = useState(false);

  return (
    <div className={styles.searchContainer}>
      <button
        className={styles.iconBtn}
        onClick={() => setExpand(!expand)}
        aria-label="Buscar"
      >
        <FiSearch />
      </button>

      <AnimatePresence>
        {expand && (
          <motion.input
            type="text"
            className={styles.searchInput}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 180, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            placeholder="Buscar produto..."
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default SearchBar;
>>>>>>> c8762d3 (Primeiro Commit com atualizações e criações da estrutura inicial do projeto do Front-end)
