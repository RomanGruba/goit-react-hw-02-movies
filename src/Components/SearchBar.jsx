import React from 'react';
import styles from '../styles.module.css';

const SearchBar = ({ value, onChange }) => (
  <input
    type="text"
    className={styles.input}
    value={value}
    onChange={onChange}
  />
);

export default SearchBar;
