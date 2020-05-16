import React from 'react';
import * as S from '../NavBar.styled';

const FixedNavbar = ({ toTop, pathname }) => (
  <S.FixedContainer isVisible={toTop > 500 && pathname !== '/convite'}>
    <S.Wrapper>
      <S.StyledLink to="convite">Convite</S.StyledLink>
      <S.StyledLink to={{ pathname: '/', state: { scroll: 'cerimonia' } }}>Cerimónia</S.StyledLink>
      <S.StyledTitle>Cláudia & Mário</S.StyledTitle>
      <S.StyledLink to={{ pathname: '/', state: { scroll: 'copo' } }}>Copo de Água</S.StyledLink>
      <S.StyledLink to="/RSVP">RSVP</S.StyledLink>
    </S.Wrapper>
  </S.FixedContainer>
);

export default FixedNavbar;
