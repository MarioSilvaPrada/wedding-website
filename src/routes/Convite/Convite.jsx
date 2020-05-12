import React from 'react';
import * as S from './Convite.styled';
import { FaArrowRight } from 'react-icons/fa';

import convite from 'assets/Convite.png';

const Convite = () => {
  return (
    <S.Container>
      <S.Convite src={convite} />
      <S.Button to='/'>
        Detalhes
        <FaArrowRight />
      </S.Button>
    </S.Container>
  );
};

export default Convite;
