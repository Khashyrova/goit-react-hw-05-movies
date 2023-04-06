import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reviews.module.css';

const ReviewsList = data => {
  const reviews = data;

  return (
    <>
      {reviews.data && reviews.data.length ? (
        reviews.data.map(review => (
          <div key={review.id} className={styles.reviewContainer}>
            <h3 className={styles.reviewer}>🗣 {review.author}</h3>
            <p className={styles.review}>{review.content}</p>
          </div>
        ))
      ) : (
        <p className={styles.noInfo}>Sorry, no reviews have been added yet</p>
      )}
    </>
  );
};

ReviewsList.propTypes = {
  data: PropTypes.array,
};

export default ReviewsList;
