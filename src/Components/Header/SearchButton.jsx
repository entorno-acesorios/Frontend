import { FiSearch } from 'react-icons/fi';
import styles from './Header.module.css';

function SearchButton() {
  return (
    <button className={styles.iconBtn} aria-label="Pesquisar">
      <FiSearch size={22} />
    </button>
  );
}

export default SearchButton;
