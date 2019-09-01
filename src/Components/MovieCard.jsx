import React from 'react';
import styles from '../styles.module.css';

const MovieCard = ({ movie }) => (
  <div className={styles.movieCard}>
    <img src={movie.posterUrl} alt="movie" />
    <div className={styles.content}>
      <h2 className={styles.title}>{movie.title}</h2>
      <p className={styles.descr}>{movie.overview}</p>
    </div>
  </div>
);

export default MovieCard;
