import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #ffb6c1;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
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
    color: white;
  }

  &.active {
    color: #ffb6c1;
    background-color: white;
    pointer-events: none;
  }
`;
