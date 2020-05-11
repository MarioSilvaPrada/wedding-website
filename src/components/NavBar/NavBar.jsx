import React, { useState, useEffect } from 'react';
import * as S from './NavBar.styled';

const NavBar = () => {
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
      <S.Container>
        <S.Wrapper>
          <S.StyledLink to="/">Convite</S.StyledLink>
          <S.StyledLink to="/">Cerimónia</S.StyledLink>
          <S.StyledTitle>Cláudia & Mário</S.StyledTitle>
          <S.StyledLink to="/">Copo de Água</S.StyledLink>
          <S.StyledLink to="/RSVP">RSVP</S.StyledLink>
        </S.Wrapper>
      </S.Container>
      <S.FixedContainer isVisible={toTop > 500}>
        <S.Wrapper>
          <S.StyledLink to="/">Convite</S.StyledLink>
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
