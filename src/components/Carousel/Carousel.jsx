import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { LazyImage } from 'react-lazy-images';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import pic1 from 'assets/carousel/pic1.jpg';
import pic2 from 'assets/carousel/pic2.jpg';
import pic3 from 'assets/carousel/pic3.jpg';
import pic4 from 'assets/carousel/pic4.jpg';

import * as S from './Carousel.styled';

const MyCarousel = () => {
  const carouselData = [
    {
      img: pic2,
    },
    {
      img: pic1,
    },
    {
      img: pic3,
    },
    {
      img: pic4,
    },
  ];
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    border: 'none',
    background: 'none',
  };
  return (
    <S.CarouselWrapper>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type='button'
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, left: 15 }}
            >
              <IoIosArrowBack style={{ color: 'white', fontSize: '2.5rem' }} />
            </button>
          )}
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type='button'
              onClick={onClickHandler}
              title={label}
              style={{ ...arrowStyles, right: 15 }}
            >
              <IoIosArrowForward style={{ color: 'white', fontSize: '2.5rem' }} />
            </button>
          )}
      >
        {carouselData.map((pic) => (
          <S.ImageContainer key={pic.img}>
            <LazyImage
              src={pic.img}
              placeholder={({ ref }) => (
                <h1
                  style={{
                    color: 'white',
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  ref={ref}
                >
                  Loading...
                </h1>
              )}
              actual={() => <S.PhotoCarousel img={pic.img} />}
            />
            <S.Layer />
          </S.ImageContainer>
        ))}
      </Carousel>
      <S.Title>
        <S.MainText>Vamos casar!</S.MainText>
        <S.SubText>E queremos partilhar este momento contigo.</S.SubText>
      </S.Title>
    </S.CarouselWrapper>
  );
};

export default MyCarousel;
