import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Section from 'components/Section/Section';
import data from 'data';
import * as S from './App.styled';

const App = () => {
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
      {data.map(({
        background, image, title, time, adress, mapUrl, name,
      }) => (
        <Section
          key={image}
          background={background}
          image={image}
          title={title}
          time={time}
          name={name}
          adress={adress}
          mapUrl={mapUrl}
        />
      ))}
    </S.Container>
  );
};

export default App;
