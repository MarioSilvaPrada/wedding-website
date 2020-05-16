import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './Agradecimento.styled';

const Agradecimento = () => {
  const { state } = useLocation();
  const { pathname } = useLocation();

  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [pathname],
  );

  return (
    <S.Container>
      <S.StyledImage />
      <S.ThanksText>Obrigado pela tua resposta!</S.ThanksText>
      {state
      && state.detail === 'Sim' && <S.Text>Contamos com a tua presença neste dia especial.</S.Text>}
    </S.Container>
  );
};

export default Agradecimento;
