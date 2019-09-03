import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar/SearchBar';
import MovieGrid from './MovieGrid/MovieGrid';

const filterMovies = (movies, filter) => {
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class App extends Component {
  state = {
    movies: [...this.props.items],
    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { movies, filter } = this.state;
    const filteredList = filterMovies(movies, filter);
    return (
      <>
        <SearchBar value={this.state.inputValue} onChange={this.changeFilter} />
        <MovieGrid filteredList={filteredList} />
      </>
    );
  }
}

App.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
