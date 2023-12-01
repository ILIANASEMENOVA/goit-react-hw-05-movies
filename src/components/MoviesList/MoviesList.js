import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, Item, MovieLink } from './MoviesList.styled';

const MoviesList = ({ items }) => {
  const location = useLocation();

  return (
    <List>
      {items.map(({ id, title, name }) => (
        <Item key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            {title || name}
          </MovieLink>
        </Item>
      ))}
    </List>
  );
};

export default MoviesList;
