import React from 'react';
import * as S from './Section.styled';

const Section = ({
  background, image, title, time, name, adress, mapUrl,
}) => (
  <S.Container background={background}>
    <S.StyledImage background={image} />
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
