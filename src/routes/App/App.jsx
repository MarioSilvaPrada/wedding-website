import React from 'react';
import Section from 'components/Section/Section';

import data  from 'data';
import * as S from './App.styled';

const App = () => (
  <S.Container>
    <S.StyledImage />
    {data.map(({
      background, image, title, time, adress, mapUrl,
    }) => (
      <Section
        background={background}
        image={image}
        title={title}
        time={time}
        adress={adress}
        mapUrl={mapUrl}
      />
    ))}
  </S.Container>
);

export default App;
