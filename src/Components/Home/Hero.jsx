<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className={styles.hero}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Design artesanal com identidade
      </motion.h1>
      <p>
        A Entorno cria acessórios que celebram cultura, afeto e liberdade.
      </p>
      <a href="/catalogo" className={styles.button}>Ver Catálogo</a>
    </section>
  );
}

export default Hero;
=======
/* eslint-disable no-unused-vars */
import styles from './Hero.module.css';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className={styles.hero}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Design artesanal com identidade
      </motion.h1>
      <p>
        A Entorno cria acessórios que celebram cultura, afeto e liberdade.
      </p>
      <a href="/catalogo" className={styles.button}>Ver Catálogo</a>
    </section>
  );
}

export default Hero;
>>>>>>> c8762d3 (Primeiro Commit com atualizações e criações da estrutura inicial do projeto do Front-end)
