import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/moviesApi';
import {
  BtnSearch,
  Input,
  SearchFormStyled,
  MoviesText,
} from './Movies.styled';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const initialMovies = await fetchMoviesByQuery(query);
        setMovies(initialMovies);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [query]);

  // const updateQueryString = e => {
  //   // if (e.target.value === '') {
  //   //   return setSearchParams({});
  //   // }
  //   // setSearchParams({ query: e.target.value });
  // };
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    if (query === '') {
      return setSearchParams({});
    }
    setSearchParams({ query });

    // getMovies(query);
  };

  return (
    <div>
      <SearchFormStyled onSubmit={handleSubmit}>
        <Input type="text" name="query" defaultValue={query} />
        <BtnSearch type="submit">Search</BtnSearch>
      </SearchFormStyled>
      {isLoading && <Loader />}
      {error && <p>error {error.message}</p>}
      <div>
        <MoviesList items={movies} />

        {movies.length === 0 && query && <MoviesText>sorry</MoviesText>}
      </div>
    </div>
  );
};

export default Movies;
