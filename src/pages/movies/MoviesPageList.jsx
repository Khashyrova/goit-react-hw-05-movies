import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../home/Home.module.css';

const MoviesPageList = ({ query, movies }) => {
  return (
    <>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className={styles.listItem}>
            <Link
              to={`/movies/${movie.id}`}
              className={styles.listItemLink}
              state={{ from: `/movies?name=${query}` }}
            >
              <p className={styles.listItemTitle}>{movie.title}</p>

              {movie.poster_path === null ? (
                <img
                  className={styles.listItemImage}
                  src=""
                  alt={movie.title}
                />
              ) : (
                <img
                  className={styles.listItemImage}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              )}
            </Link>
          </li>
        ))}
    </>
  );
};

MoviesPageList.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.array,
};

export default MoviesPageList;
