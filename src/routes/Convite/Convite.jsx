import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import convite from 'assets/Convite.png';
import * as S from './Convite.styled';

const Convite = () => (
  <S.Container>
    <S.Convite src={convite} />
    <S.Button to="/">
      Detalhes
      <FaArrowRight />
    </S.Button>
  </S.Container>
);

export default Convite;
