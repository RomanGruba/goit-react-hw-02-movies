import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

const MovieCard = ({ movie }) => (
  <div className={styles.movieCard}>
    <img src={movie.posterUrl} alt="movie" />
    <div className={styles.content}>
      <h2 className={styles.title}>{movie.title}</h2>
      <p className={styles.descr}>{movie.overview}</p>
    </div>
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
