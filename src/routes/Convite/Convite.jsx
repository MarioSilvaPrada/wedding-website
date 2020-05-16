import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LazyImage } from 'react-lazy-images';

import { FaArrowRight } from 'react-icons/fa';

import convite from 'assets/Convite.png';
import Spinner from 'components/Spinner/Spinner';
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
      <div style={{ height: '100%' }}>
        <LazyImage
          src={convite}
          placeholder={({ ref }) => (
            <div ref={ref}>
              <Spinner />
            </div>
          )}
          actual={() => <S.Convite src={convite} />}
        />
      </div>

      <S.Button to="/">
        Detalhes
        <FaArrowRight />
      </S.Button>
    </S.Container>
  );
};

export default Convite;
