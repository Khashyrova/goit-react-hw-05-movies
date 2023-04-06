import React, { Suspense } from 'react';

import { Link, useLocation } from 'react-router-dom';
import styles from './MovieDetails.module.css';

const MovieDetailsList = React.lazy(() =>
  import('./MovieDetailsList/MovieDetailsList')
);

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  return (
    <>
      <button className={styles.backButton}>
        <Link className={styles.btnLink} to={backLink}>
          Back to movie list
        </Link>
      </button>

      <h3 className={styles.title}>Movie Details Page</h3>
      <div className={styles.detailsContainer}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <MovieDetailsList />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetailsPage;
