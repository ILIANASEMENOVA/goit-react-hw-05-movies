import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { HeaderStyled, NavLinkStyled, Wrapper, Nav } from './Layout.styled';
import Loader from 'components/Loader/Loader';

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
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </Wrapper>
  );
};

export default Layout;
