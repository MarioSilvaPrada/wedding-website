import React from 'react';
import * as S from './NavBar.styled';

const NavBar = () => (
  <S.Container>
    <S.Wrapper>
      <S.StyledLink to="/">Receção</S.StyledLink>
      <S.StyledLink to="/1">Cerimonia</S.StyledLink>
      <S.StyledTitle>Cláudia & Mário</S.StyledTitle>
      <S.StyledLink to="/2">Copo de água</S.StyledLink>
      <S.StyledLink to="/2">RSVP</S.StyledLink>
    </S.Wrapper>
  </S.Container>
);

export default NavBar;
