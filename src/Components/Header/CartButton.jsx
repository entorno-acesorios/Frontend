import { FiShoppingBag } from 'react-icons/fi';
import styles from './Header.module.css';

function CartButton() {
  return (
    <a href="/carrinho" className={styles.iconBtn} aria-label="Sacola de compras">
      <FiShoppingBag size={22} />
    </a>
  );
}

export default CartButton;
