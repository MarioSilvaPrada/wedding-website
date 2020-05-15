import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LazyImage } from 'react-lazy-images';

import { FaArrowRight } from 'react-icons/fa';

import convite from 'assets/Convite.png';
import * as S from './Convite.styled';

const Convite = () => {
  const { pathname } = useLocation();
  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [pathname],
  );
  return (
    <S.Container>
      <LazyImage
        src={convite}
        placeholder={({ ref }) => <h1 ref={ref}>Loading...</h1>}
        actual={() => <S.Convite src={convite} />}
      />

      <S.Button to="/">
        Detalhes
        <FaArrowRight />
      </S.Button>
    </S.Container>
  );
};

export default Convite;
