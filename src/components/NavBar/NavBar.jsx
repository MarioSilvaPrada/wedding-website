import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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
      <S.Container isVisible={pathname !== '/convite'}>
        <S.Wrapper>
          <S.StyledLink to="/convite">Convite</S.StyledLink>
          <S.StyledLink to="/">Cerimónia</S.StyledLink>
          <S.StyledTitle>Cláudia & Mário</S.StyledTitle>
          <S.StyledLink to="/">Copo de Água</S.StyledLink>
          <S.StyledLink to="/RSVP">RSVP</S.StyledLink>
        </S.Wrapper>
      </S.Container>
      <S.FixedContainer isVisible={toTop > 500 && pathname !== '/convite'}>
        <S.Wrapper>
          <S.StyledLink to="/convite">Convite</S.StyledLink>
          <S.StyledLink to="/">Cerimónia</S.StyledLink>
          <S.StyledTitle>Cláudia & Mário</S.StyledTitle>
          <S.StyledLink to="/">Copo de Água</S.StyledLink>
          <S.StyledLink to="/RSVP">RSVP</S.StyledLink>
        </S.Wrapper>
      </S.FixedContainer>
    </div>
  );
};

export default NavBar;
