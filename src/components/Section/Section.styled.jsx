import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.25rem;
  background: ${({ background }) => background && background};
`;

export const StyledImage = styled.img`
  width: 30.56rem;
  height: 30.56rem;
  border-radius: 50%;
  margin-bottom: 2rem;
  border: 5px solid white;
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

  &:hover {
    border-bottom: 1px solid #00a1ab;
  }
`;

export const Adress = styled.p`margin-bottom: .5rem;`;
