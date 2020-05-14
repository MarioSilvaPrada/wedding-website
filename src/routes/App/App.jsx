import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Section from 'components/Section/Section';
import Carousel from 'components/Carousel/Carousel';
import data from 'data';

import * as S from './App.styled';

const App = () => {
  const { pathname } = useLocation();
  const { state } = useLocation();

  const scrollToElement = (el) => {
    scroller.scrollTo(el, {
      duration: 900,
      smooth: true,
    });
  };

  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [pathname],
  );

  useEffect(
    () => {
      if (state) {
        scrollToElement(state.scroll);
      }
    },
    [state],
  );

  return (
    <S.Container>
      <Carousel />
      {data.map(({
        background, image, title, time, adress, mapUrl, name, element,
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
          element={element}
        />
      ))}
    </S.Container>
  );
};

export default App;
