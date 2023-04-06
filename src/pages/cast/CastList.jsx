import React from 'react';
import PropTypes from 'prop-types';
import styles from './CastList.module.css';

const CastList = data => {
  const cast = data;

  return (
    <ul className={styles.castList}>
      {cast.data && cast.data.length ? (
        cast.data.map(cast => (
          <li key={cast.id} className={styles.castItem}>
            {cast.profile_path === null ? (
              <img src="" alt={cast.name} width="150" />
            ) : (
              <img
                className={styles.image}
                src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                alt={cast.name}
              />
            )}
            <p className={styles.name}>{cast.name}</p>
            <p className={styles.character}>Character: {cast.character}</p>
          </li>
        ))
      ) : (
        <li key="noInfo" className={styles.noInfo}>
          Sorry, no cast has been added yet
        </li>
      )}
    </ul>
  );
};

CastList.propTypes = {
  data: PropTypes.array,
};
export default CastList;
