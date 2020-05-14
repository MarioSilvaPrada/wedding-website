import styled from 'styled-components';
import photo from 'assets/photo1.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f9d29d;
  background-image: linear-gradient(315deg, #f9d29d 0%, #ffd8cb 74%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ThanksText = styled.h1`font-size: 3.1rem;`;

export const Text = styled.h1`
  font-weight: 300;
  margin-top: 4rem;
  font-size: 2.1rem;
`;

export const StyledImage = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  margin-bottom: 2rem;
  border: 5px solid white;
  background-image: url(${photo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
