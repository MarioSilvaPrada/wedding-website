import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SideBarMenu from './SideBarMenu/SideBarMenu';
import FixedNavbar from './FixedNavbar/FixedNavbar';
import * as S from './NavBar.styled';

const NavBar = () => {
  const { pathname } = useLocation();
  const [toTop, setToTop] = useState(0);

  const getDistanceToTop = () => {
    window.addEventListener('scroll', () => {
      const winScroll = window.pageYOffset;
      setToTop(winScroll);
    });
  };

  useEffect(
    () => {
      getDistanceToTop();
    },
    [toTop],
  );

  return (
    <div>
      <SideBarMenu />
      <S.Container isVisible={pathname !== '/convite'}>
        <S.Wrapper>
          <S.StyledLink to="/convite">Convite</S.StyledLink>
          <S.StyledLink to={{ pathname: '/', state: { scroll: 'cerimonia' } }}>
            Cerimónia
          </S.StyledLink>
          <S.StyledTitle>Cláudia & Mário</S.StyledTitle>
          <S.StyledLink to={{ pathname: '/', state: { scroll: 'copo' } }}>
            Copo de Água
          </S.StyledLink>
          <S.StyledLink to="/RSVP">RSVP</S.StyledLink>
        </S.Wrapper>
      </S.Container>
      <FixedNavbar toTop={toTop} pathname={pathname} />
    </div>
  );
};

export default NavBar;
