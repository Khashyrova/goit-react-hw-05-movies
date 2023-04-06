import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const MoviesList = ({ movies, location }) => {
  return (
    <>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className={styles.listItem}>
            <Link
              className={styles.listItemLink}
              to={`movies/${movie.id}`}
              state={{ from: location }}
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

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
