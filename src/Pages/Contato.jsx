import styles from '../Pages-css/Contato.module.css';
import { useState } from 'react';

export const Contato = () => {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarParaWhatsapp = () => {
    const texto = `Olá! Meu nome é ${nome}.\n${mensagem}`;
    const url = `https://wa.me/5583991654234?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
  };

  const entrarNaComunidade = () => {
    const linkGrupo = 'https://chat.whatsapp.com/SEU_LINK_ENTORNETES';
    window.open(linkGrupo, '_blank');
  };

  return (
    <section className={styles.contato}>
      <h1>Fale com a Entorno</h1>
      <p>Estamos sempre por aqui, conectados e prontos para escutar.</p>

      <div className={styles.redes}>
        <a href="https://instagram.com/entorno_acessorios" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://tiktok.com/@entornoacessorios" target="_blank" rel="noreferrer">TikTok</a>
        <a href="https://wa.me/5583991654234" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>

      <form className={styles.formulario} onSubmit={(e) => { e.preventDefault(); enviarParaWhatsapp(); }}>
        <label>
          Seu nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
            required
          />
        </label>

        <label>
          Sua mensagem:
          <textarea
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            placeholder="Escreva sua mensagem"
            required
          />
        </label>

        <button type="submit">Enviar mensagem para o WhatsApp</button>
      </form>

      <div className={styles.entornetes}>
        <p>Quer se aproximar ainda mais?</p>
        <button onClick={entrarNaComunidade}>Entrar na comunidade Entornetes</button>
      </div>
    </section>
  );
}

export default Contato;