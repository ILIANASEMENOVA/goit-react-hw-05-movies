import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderStyled, NavLinkStyled, Wrapper, Nav } from './Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <HeaderStyled>
        <ul>
          <Nav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </Nav>
          <Nav>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </Nav>
        </ul>
      </HeaderStyled>

      <main>
        <Suspense fallback={<div>LOADING PAGE...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  );
};

export default Layout;
