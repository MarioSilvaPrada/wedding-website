import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import * as S from '../NavBar.styled';
import './BurgerMenu.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Menu isOpen={isMenuOpen} onStateChange={(state) => setIsMenuOpen(state.isMenuOpen)}>
      <S.StyledMenuLink to="/convite" onClick={() => setIsMenuOpen(false)}>
        Convite
      </S.StyledMenuLink>
      <S.StyledMenuLink
        to={{ pathname: '/', state: { scroll: 'cerimonia' } }}
        onClick={() => setIsMenuOpen(false)}
      >
        Cerimónia
      </S.StyledMenuLink>
      <S.StyledMenuLink
        to={{ pathname: '/', state: { scroll: 'copo' } }}
        onClick={() => setIsMenuOpen(false)}
      >
        Copo de Água
      </S.StyledMenuLink>
      <S.StyledMenuLink to="/RSVP" onClick={() => setIsMenuOpen(false)}>
        RSVP
      </S.StyledMenuLink>
    </Menu>
  );
};

export default NavBar;
