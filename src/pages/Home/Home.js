import Loader from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { fetchMovies } from 'services/moviesApi';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const initialMovies = await fetchMovies();
        setMovies(initialMovies);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>error {error.message}</p>}
      {movies.length > 0 && <MoviesList items={movies} />}
    </div>
  );
};

export default Home;
