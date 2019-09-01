import React from 'react';
import ReactDOM from 'react-dom';
import movies from './movies.json';
import App from './App';

ReactDOM.render(<App items={movies} />, document.getElementById('root'));
