<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import styles from "./ProductHighlights.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";

function ProductHighlights() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const produtosRef = collection(db, "produtos");
        const snapshot = await getDocs(produtosRef);
        const lista = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProdutos(lista);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }

    carregarProdutos();
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.titulo}>Mais Vendidos</h2>

      {carregando ? (
        <p>Carregando...</p> // Exibe "Carregando..." enquanto os dados não chegam
      ) : (
        <div className={styles.grid}>
          {produtos.map((produto) => (
            <motion.div
              key={produto.id}
              className={styles.card}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className={styles.imagem}
              />
              <div className={styles.info}>
                <h3>{produto.nome}</h3>
                <span>{produto.preco}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductHighlights;
=======
/* eslint-disable no-unused-vars */
import styles from "./ProductHighlights.module.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { db } from "../../services/firebase";
import { collection, getDocs } from "firebase/firestore";

function ProductHighlights() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const produtosRef = collection(db, "produtos");
        const snapshot = await getDocs(produtosRef);
        const lista = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProdutos(lista);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    }

    carregarProdutos();
  }, []);

  return (
    <section className={styles.section}>
      <h2 className={styles.titulo}>Mais Vendidos</h2>

      {carregando ? (
        <p>Carregando...</p> // Exibe "Carregando..." enquanto os dados não chegam
      ) : (
        <div className={styles.grid}>
          {produtos.map((produto) => (
            <motion.div
              key={produto.id}
              className={styles.card}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className={styles.imagem}
              />
              <div className={styles.info}>
                <h3>{produto.nome}</h3>
                <span>{produto.preco}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductHighlights;
>>>>>>> c8762d3 (Primeiro Commit com atualizações e criações da estrutura inicial do projeto do Front-end)
