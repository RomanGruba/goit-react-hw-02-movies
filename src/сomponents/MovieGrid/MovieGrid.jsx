import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieGrid.module.css';
import MovieCard from '../MovieCard/MovieCard';

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

MovieGrid.propTypes = {
  filteredList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default MovieGrid;
