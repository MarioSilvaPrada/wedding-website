import styled from 'styled-components';
import photo from 'assets/photo1.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #226597;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ThanksText = styled.h1`
  font-size: 3.1rem;
  color: white;
  margin: 0 2rem;
  text-align: center;
  line-height: 3.2rem;
`;

export const Text = styled.h1`
  font-weight: 300;
  font-size: 2.1rem;
  color: white;
  line-height: 3.2rem;
  margin: 4rem 2rem;
  text-align: center;

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
