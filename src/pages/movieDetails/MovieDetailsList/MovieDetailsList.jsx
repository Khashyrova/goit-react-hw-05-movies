import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { getById } from '../../../components/FetchApi';

import styles from './MovieDetailsList.module.css';

const MovieDetailsList = () => {
  const location = useLocation();
  const [moviesId, setIdInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getById(id)
      .then(setIdInfo)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [id]);

  return (
    <>
      {moviesId && (
        <>
          <div className={styles.left}>
            <h2>
              {moviesId.title} ({moviesId.release_date.slice(0, 4)})
            </h2>
            <p>
              {Math.round((moviesId.vote_average + Number.EPSILON) * 100) / 100}
            </p>

            {moviesId.poster_path === null ? (
              <img
                className={styles.listItemImage}
                src=""
                alt={moviesId.title}
              />
            ) : (
              <img
                className={styles.listItemImage}
                src={`https://image.tmdb.org/t/p/w500${moviesId.poster_path}`}
                alt={moviesId.title}
              />
            )}
          </div>

          <div className={styles.right}>
            <h3>Overview:</h3>
            <p>{moviesId.overview}</p>
            <h3>Genres:</h3>
            <ul className={styles.genres}>
              {moviesId.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>

            <div className={styles.links}>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        backgroundColor: '#daa520',
                      }
                    : { backgroundColor: '#808080' }
                }
                to={`/movies/${id}/reviews`}
                className={styles.link}
                state={location.state}
              >
                Reviews
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        backgroundColor: '#daa520',
                      }
                    : { backgroundColor: '#808080' }
                }
                to={`/movies/${id}/cast`}
                className={styles.link}
                state={location.state}
              >
                Cast
              </NavLink>
            </div>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailsList;
