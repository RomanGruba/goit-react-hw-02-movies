import React from 'react';
import styles from '../styles.module.css';
import MovieCard from './MovieCard';

const MovieGrid = ({ filteredList }) => (
  <ul className={styles.movieGrid}>
    {filteredList.length > 0 ? (
      filteredList.map(movie => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))
    ) : (
      <p>No matching results!</p>
    )}
  </ul>
);

export default MovieGrid;
