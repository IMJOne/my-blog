import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');
  const handleChange = e => setSearchText(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className={styles.input_search} type="text" placeholder="π μ λͺ©μ κ²μν΄λ³΄μΈμ :)" value={searchText} onChange={handleChange} />
    </form>
  );
}
