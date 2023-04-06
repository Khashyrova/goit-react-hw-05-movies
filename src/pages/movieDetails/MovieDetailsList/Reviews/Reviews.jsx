import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../../../components/FetchApi';
import ReviewsList from './ReviewsList';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const reviewContainer = useRef();

  useEffect(() => {
    setLoading(true);
    getReviews(id)
      .then(data => setReviews(data))
      .catch(function (error) {
        console.log('Error: ' + error);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
          reviewContainer.current.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      });
  }, [id]);

  return (
    <div ref={reviewContainer}>
      {isLoading ? <h1>Loading...</h1> : <ReviewsList data={reviews} />}
    </div>
  );
};

export default Reviews;
