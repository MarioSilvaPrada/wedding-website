import styled from 'styled-components';

import couple from 'assets/couple.jpeg';

export const Container = styled.div`height: 100%;`;

export const StyledImage = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${couple});
  background-size: cover;
`;

export const ImageContainer = styled.div`height: 50vh;`;

export const PhotoCarousel = styled.div`
  height: 100%;
  background: url(${({ img }) => img}) no-repeat;
  background-size: contain;
`;
