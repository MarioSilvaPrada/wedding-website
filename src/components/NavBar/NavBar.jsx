import React from 'react';

import * as S from './NavBar.styled';

const NavBar = () => (
  <S.Container>
    <S.Wrapper>
      <S.StyledLink to='/'>Cerimonia</S.StyledLink>
      <S.StyledLink to='/1'>Receção</S.StyledLink>
      <S.StyledTitle>Cláudia & Mário</S.StyledTitle>
      <S.StyledLink to='/2'>Alojamento</S.StyledLink>
    </S.Wrapper>
  </S.Container>
);

export default NavBar;
