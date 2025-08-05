<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import styles from '../Pages-css/Catalogo.module.css';
import { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIAS = [
  'Todas',
  'Mayakas',
  'Kafkas',
  'Arrudeia',
  'Brincos',
  'Colares',
  'B.Clava',
  'Yomba',
  'BodyChain',
];

function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarProdutos() {
      setLoading(true);
      try {
        const produtosRef = collection(db, 'produtos');
        const snapshot = await getDocs(produtosRef);
        const lista = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProdutos(lista);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarProdutos();
  }, []);

  const produtosFiltrados =
    categoriaAtiva === 'Todas'
      ? produtos
      : produtos.filter((produto) => produto.categoria === categoriaAtiva);

  return (
    <section className={styles.catalogo}>
      <div className={styles.titulo}>
        <h1>Catálogo</h1>
        <p>Explore criações artesanais organizadas por coleção e estilo.</p>
      </div>

      <div className={styles.filtros}>
        {CATEGORIAS.map((categoria) => (
          <button
            key={categoria}
            className={`${styles.botaoFiltro} ${
              categoriaAtiva === categoria ? styles.ativo : ''
            }`}
            onClick={() => setCategoriaAtiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {loading ? (
          <div className={styles.loading}>
            <motion.div
              className={styles.spinner}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            />
            <p>Carregando produtos...</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {produtosFiltrados.length > 0 ? (
              produtosFiltrados.map((produto) => (
                <motion.div
                  key={produto.id}
                  className={styles.card}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className={styles.imagem}
                  />
                  <div className={styles.info}>
                    <h2>{produto.nome}</h2>
                    <p>{produto.preco}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className={styles.vazio}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p>Nenhum produto encontrado nessa categoria.</p>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}

export default Catalogo;
=======
/* eslint-disable no-unused-vars */
import styles from '../Pages-css/Catalogo.module.css';
import { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIAS = [
  'Todas',
  'Mayakas',
  'Kafkas',
  'Arrudeia',
  'Brincos',
  'Colares',
  'B.Clava',
  'Yomba',
  'BodyChain',
];

function Catalogo() {
  const [produtos, setProdutos] = useState([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todas');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarProdutos() {
      setLoading(true);
      try {
        const produtosRef = collection(db, 'produtos');
        const snapshot = await getDocs(produtosRef);
        const lista = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProdutos(lista);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarProdutos();
  }, []);

  const produtosFiltrados =
    categoriaAtiva === 'Todas'
      ? produtos
      : produtos.filter((produto) => produto.categoria === categoriaAtiva);

  return (
    <section className={styles.catalogo}>
      <div className={styles.titulo}>
        <h1>Catálogo</h1>
        <p>Explore criações artesanais organizadas por coleção e estilo.</p>
      </div>

      <div className={styles.filtros}>
        {CATEGORIAS.map((categoria) => (
          <button
            key={categoria}
            className={`${styles.botaoFiltro} ${
              categoriaAtiva === categoria ? styles.ativo : ''
            }`}
            onClick={() => setCategoriaAtiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {loading ? (
          <div className={styles.loading}>
            <motion.div
              className={styles.spinner}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            />
            <p>Carregando produtos...</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            {produtosFiltrados.length > 0 ? (
              produtosFiltrados.map((produto) => (
                <motion.div
                  key={produto.id}
                  className={styles.card}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className={styles.imagem}
                  />
                  <div className={styles.info}>
                    <h2>{produto.nome}</h2>
                    <p>{produto.preco}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                className={styles.vazio}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p>Nenhum produto encontrado nessa categoria.</p>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}

export default Catalogo;
>>>>>>> c8762d3 (Primeiro Commit com atualizações e criações da estrutura inicial do projeto do Front-end)
