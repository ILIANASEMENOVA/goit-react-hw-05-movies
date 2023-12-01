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
      {reviews.length > 0 && (
        <>
          <ReviewTitle>Reviews</ReviewTitle>
          <ReviewList>
            {reviews?.map(({ id, author, content }) => (
              <RevievItem key={id}>
                <RevieAutor>Author: {author}</RevieAutor>
                <RevieText>{content}</RevieText>
              </RevievItem>
            ))}
          </ReviewList>
        </>
      )}
      {reviews.length < 1 && (
        <ReviewTitle>Sorry, this movie has no reviews.</ReviewTitle>
      )}
    </div>
  );
};

export default Reviews;
