import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import Section from 'components/Section/Section';
import data from 'data';
import * as S from './App.styled';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import pic1 from 'assets/carousel/pic1.jpg';
import pic2 from 'assets/carousel/pic2.jpg';
import pic3 from 'assets/carousel/pic3.jpg';
import pic4 from 'assets/carousel/pic4.jpg';

const App = () => {
  const { pathname } = useLocation();
  const { state } = useLocation();

  const carouselData = [
    {
      img: pic1,
    },
    {
      img: pic2,
    },
    {
      img: pic3,
    },
    {
      img: pic4,
    },
  ];

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
    [ pathname ],
  );

  useEffect(
    () => {
      if (state) {
        scrollToElement(state.scroll);
      }
    },
    [ state ],
  );

  return (
    <S.Container>
      <Carousel>
        {carouselData.map((pic) => (
          <S.ImageContainer key={pic.img}>
            <S.PhotoCarousel img={pic.img} />
          </S.ImageContainer>
        ))}
      </Carousel>
      {data.map(({ background, image, title, time, adress, mapUrl, name, element }) => (
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
