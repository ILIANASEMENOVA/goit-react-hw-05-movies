import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/moviesApi';
import {
  GoBackButton,
  MovieInfoWrapper,
  MovieWrapper,
  NavLinkStyled,
  Poster,
  Ul,
} from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  console.log(location);
  const backLinkRef = useRef(location.state?.from || '/');

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        setError(false);
        const initialMovie = await fetchMovieById(movieId);
        setMovie(initialMovie);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovie();
  }, [movieId]);

  return (
    <MovieWrapper>
      <GoBackButton to={backLinkRef.current}>Go back</GoBackButton>
      {isLoading && <Loader />}
      {error && <p>error {error.message}</p>}
      {movie !== null && (
        <MovieInfoWrapper>
          <Poster src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
          <h2>{movie.title}</h2>
          <p>{movie.popularity}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </MovieInfoWrapper>
      )}
      <Ul>
        <li>
          <NavLinkStyled to="casts">Casts</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="reviews">Review</NavLinkStyled>
        </li>
      </Ul>
      <Outlet />
    </MovieWrapper>
  );
};

export default MovieDetails;
