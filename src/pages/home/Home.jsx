import React, { Suspense, useState, useEffect } from 'react';
import { getMovies } from '../../components/FetchApi';
import { useLocation } from 'react-router-dom';
import styles from './Home.module.css';

const MoviesList = React.lazy(() => import('./HomeList'));

const Home = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, []);

  return (
    <>
      <h3>🎞 Trending today</h3>
      <ul className={styles.list}>
        <Suspense>
          <MoviesList movies={movies} location={location} />
        </Suspense>
      </ul>
    </>
  );
};

export default Home;
