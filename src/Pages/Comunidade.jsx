<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import styles from '../Pages-css/Comunidade.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Dados fictícios para demonstração
//deixe aqui sua lógica de conexão com backend futuramente
const depoimentos = [
  { id: 1, user: '@lu.art', comment: 'Amei o colar, carrega tanta ancestralidade!', img: '/assets/clientes/lu.jpg' },
  { id: 2, user: '@kalu.vibes', comment: 'Uso todos os dias. Peça forte e leve ao mesmo tempo.', img: '/assets/clientes/kalu.jpg' },
  { id: 3, user: '@nanyroots', comment: 'Me identifiquei de imediato. Obrigada por isso!', img: '/assets/clientes/nany.jpg' }
];

const artistas = [
  { id: 1, nome: 'Ynaê C.', img: '/assets/artistas/ynae.jpg', fala: 'Vestir Entorno é como vestir minha mãe, minha avó e todas que vieram antes de mim.' },
  { id: 2, nome: 'Rosa Maria', img: '/assets/artistas/rosa.jpg', fala: 'Uma marca que entende o que é expressar cultura com respeito e beleza.' },
  { id: 3, nome: 'Kaique M.', img: '/assets/artistas/kaique.jpg', fala: 'Ser artista Entornado é viver arte no corpo.' }
];

function Comunidade() {
  const [index, setIndex] = useState(0);

  const proximo = () => setIndex((prev) => (prev + 1) % depoimentos.length);
  const anterior = () => setIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);

  return (
    <section className={styles.comunidade}>
      <h1 className={styles.titulo}>Comunidade Entorno</h1>

      {/* Carrossel de Clientes */}
      <div className={styles.carrosselWrapper}>
        <button onClick={anterior} className={styles.seta}>&lt;</button>
        <motion.div 
          key={index} 
          className={styles.card} 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <img src={depoimentos[index].img} alt={depoimentos[index].user} className={styles.imgCliente} />
          <p className={styles.comentario}>
            “{depoimentos[index].comment}”<br/>
            <span className={styles.usuario}>{depoimentos[index].user}</span>
          </p>
        </motion.div>
        <button onClick={proximo} className={styles.seta}>&gt;</button>
      </div>

      {/* Seção Artistas Entornades */}
      <div className={styles.artistasSection}>
        <h2>Artistas Entornades</h2>
        <div className={styles.artistasGrid}>
          {artistas.map((artista) => (
            <motion.div
              key={artista.id}
              className={styles.artistaCard}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={artista.img} alt={artista.nome} className={styles.fotoArtista} />
              <h3>{artista.nome}</h3>
              <p className={styles.fala}>{artista.fala}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

=======
/* eslint-disable no-unused-vars */
import styles from '../Pages-css/Comunidade.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Dados fictícios para demonstração
//deixe aqui sua lógica de conexão com backend futuramente
const depoimentos = [
  { id: 1, user: '@lu.art', comment: 'Amei o colar, carrega tanta ancestralidade!', img: '/assets/clientes/lu.jpg' },
  { id: 2, user: '@kalu.vibes', comment: 'Uso todos os dias. Peça forte e leve ao mesmo tempo.', img: '/assets/clientes/kalu.jpg' },
  { id: 3, user: '@nanyroots', comment: 'Me identifiquei de imediato. Obrigada por isso!', img: '/assets/clientes/nany.jpg' }
];

const artistas = [
  { id: 1, nome: 'Ynaê C.', img: '/assets/artistas/ynae.jpg', fala: 'Vestir Entorno é como vestir minha mãe, minha avó e todas que vieram antes de mim.' },
  { id: 2, nome: 'Rosa Maria', img: '/assets/artistas/rosa.jpg', fala: 'Uma marca que entende o que é expressar cultura com respeito e beleza.' },
  { id: 3, nome: 'Kaique M.', img: '/assets/artistas/kaique.jpg', fala: 'Ser artista Entornado é viver arte no corpo.' }
];

function Comunidade() {
  const [index, setIndex] = useState(0);

  const proximo = () => setIndex((prev) => (prev + 1) % depoimentos.length);
  const anterior = () => setIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);

  return (
    <section className={styles.comunidade}>
      <h1 className={styles.titulo}>Comunidade Entorno</h1>

      {/* Carrossel de Clientes */}
      <div className={styles.carrosselWrapper}>
        <button onClick={anterior} className={styles.seta}>&lt;</button>
        <motion.div 
          key={index} 
          className={styles.card} 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <img src={depoimentos[index].img} alt={depoimentos[index].user} className={styles.imgCliente} />
          <p className={styles.comentario}>
            “{depoimentos[index].comment}”<br/>
            <span className={styles.usuario}>{depoimentos[index].user}</span>
          </p>
        </motion.div>
        <button onClick={proximo} className={styles.seta}>&gt;</button>
      </div>

      {/* Seção Artistas Entornades */}
      <div className={styles.artistasSection}>
        <h2>Artistas Entornades</h2>
        <div className={styles.artistasGrid}>
          {artistas.map((artista) => (
            <motion.div
              key={artista.id}
              className={styles.artistaCard}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img src={artista.img} alt={artista.nome} className={styles.fotoArtista} />
              <h3>{artista.nome}</h3>
              <p className={styles.fala}>{artista.fala}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

>>>>>>> c8762d3 (Primeiro Commit com atualizações e criações da estrutura inicial do projeto do Front-end)
export default Comunidade;  