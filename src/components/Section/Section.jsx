import React from 'react';
import { LazyImage } from 'react-lazy-images';
import Spinner from 'components/Spinner/Spinner';
import * as S from './Section.styled';

const Section = ({
  background, image, title, time, name, adress, mapUrl, element,
}) => (
  <S.Container rel="preload" background={background} name={element}>
    <LazyImage
      src={image}
      placeholder={({ ref }) => (
        <div ref={ref}>
          <Spinner />
        </div>
      )}
      actual={() => <S.StyledImage background={image} />}
    />
    <S.Title>{title}</S.Title>
    <S.Info>
      <S.Time>{time}</S.Time>
      <S.Name>{name}</S.Name>
      <S.Adress>{adress}</S.Adress>
      <S.LinkMap target="blank" href={mapUrl}>
        Ver no mapa
      </S.LinkMap>
    </S.Info>
  </S.Container>
);

export default Section;
