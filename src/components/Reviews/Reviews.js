import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/moviesApi';
import {
  RevieAutor,
  RevieText,
  RevievItem,
  ReviewList,
  ReviewTitle,
} from './Reviews.styled';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        setIsLoading(true);
        setError(false);
        const reviews = await fetchMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ReviewList>
          {reviews.map(review => {
            return (
              <RevievItem key={review.id}>
                <RevieAutor>{review.author}</RevieAutor>
                <RevieText>{review.content}</RevieText>
              </RevievItem>
            );
          })}
        </ReviewList>
      ) : (
        <ReviewTitle>Sorry, this movie has no reviews.</ReviewTitle>
      )}
    </div>
  );
};

export default Reviews;
