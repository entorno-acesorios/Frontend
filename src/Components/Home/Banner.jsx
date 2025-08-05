/* eslint-disable no-unused-vars */
import styles from './Banner.module.css';
import { motion } from 'framer-motion';
import bannerImage from '../../assets/banner.svg';

function Banner() {
  return (
    <section className={styles.banner}>
      <motion.div
        className={styles.conteudo}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img src={bannerImage} alt='Ilustração do Banner Principal' className={styles.bannerImage}/>
        <h2>Vestir é também um ato de memória</h2>
        <p>
          A Entorno traduz em cada peça um afeto ancestral. 
          Nossos acessórios contam histórias de liberdade, identidade e expressão.
        </p>
        <a href="/sobre" className={styles.botao}>Conheça a marca</a>
      </motion.div>
    </section>
  );
}

export default Banner;
