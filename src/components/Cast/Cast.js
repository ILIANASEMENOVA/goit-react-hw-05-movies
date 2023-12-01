import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/moviesApi';
import { CastElement, CastGrid, CastPhoto, CastTitle } from './Cast.styled';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);
        setError(false);
        const cast = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getCast();
  }, [movieId]);

  return (
    <div>
      <CastTitle>Cast</CastTitle>
      {isLoading && <Loader />}
      {error && <p>error {error.message}</p>}
      {cast.length > 0 ? (
        <CastGrid>
          {cast?.map(item => {
            return (
              <CastElement key={item.id}>
                <CastPhoto
                  src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`}
                />
                <p>{item.original_name}</p>
              </CastElement>
            );
          })}
        </CastGrid>
      ) : (
        <CastTitle>Sorry, no cast information available.</CastTitle>
      )}
    </div>
  );
};

export default Cast;
