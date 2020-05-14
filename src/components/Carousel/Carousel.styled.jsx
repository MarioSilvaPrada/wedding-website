import styled from 'styled-components';

export const CarouselWrapper = styled.div``;

export const PhotoCarousel = styled.div`
  height: 100%;
  background: url(${({ img }) => img}) no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ImageContainer = styled.div`
  height: 80vh;
  width: 100%;
  position: relative;
`;

export const Layer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
`;

export const Title = styled.div`
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: white;
`;

export const MainText = styled.h1`
  font-size: 6rem;
  margin-bottom: 3rem;
  letter-spacing: -0.0454545em;
`;

export const SubText = styled.p`
  font-size: 2.3rem;
  font-weight: 300;
`;
