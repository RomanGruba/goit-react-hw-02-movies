import React from 'react';
import ReactDOM from 'react-dom';
import movies from './сomponents/movies.json';
import App from './сomponents/App';

ReactDOM.render(<App items={movies} />, document.getElementById('root'));
