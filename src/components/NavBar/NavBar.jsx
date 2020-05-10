import React from 'react';
import * as S from './NavBar.styled';

const NavBar = () => (
  <S.Container>
    <S.Wrapper>
      <S.StyledLink to="/">Convite</S.StyledLink>
      <S.StyledLink to="/">Cerimónia</S.StyledLink>
      <S.StyledTitle>Cláudia & Mário</S.StyledTitle>
      <S.StyledLink to="/">Copo de Água</S.StyledLink>
      <S.StyledLink to="/RSVP">RSVP</S.StyledLink>
    </S.Wrapper>
  </S.Container>
);

export default NavBar;
