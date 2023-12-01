import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const GoBackButton = styled(Link)`
  padding: 12px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #191d1e;
  color: #191d1e;
  font-weight: 600;
  font-size: 20px;
  border-radius: 4px 8px;

  &:hover {
    color: #ff69b4;
    border: 3px solid #ff69b4;
  }
`;

export const MovieWrapper = styled.div`
  padding: 30px;

  background-repeat: no-repeat;
  background-size: cover;
`;

export const Poster = styled.img`
  flex-shrink: 0;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0 0 0;
  color: FFC0CB;
  gap: 20px;
`;
export const Ul = styled.ul`
  list-style: none;
`;

export const NavLinkStyled = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100%;
  color: #ff69b4;

  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #ff1493;
  }

  &.active {
    color: #ffb6c1;
    background-color: white;
    pointer-events: none;
  }
`;
