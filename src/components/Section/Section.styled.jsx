import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.25rem;
  background: ${({ background }) => background && background};
`;

export const StyledImage = styled.div`
  width: 30.56rem;
  height: 30.56rem;
  border-radius: 50%;
  margin-bottom: 2rem;
  border: 5px solid white;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 600px) {
    width: 28rem;
    height: 28rem;
  }
`;

export const Name = styled.p`
  margin-bottom: .7rem;
  font-size: 1.5rem;
`;

export const Title = styled.h1`
  font-weight: 300;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const Info = styled.div`
  display: block;
  text-align: center;
`;

export const Time = styled.p`
  font-weight: bold;
  margin-bottom: .8rem;
`;

export const LinkMap = styled.a`
  color: #00a1ab;
  border-bottom: 1px solid transparent;
  transition: .5s;
  font-size: 16px;

  &:hover {
    border-bottom: 1px solid #00a1ab;
  }
`;

export const Adress = styled.p`
  margin-bottom: 1rem;
  font-weight: 300;
  font-size: 16px;
`;
