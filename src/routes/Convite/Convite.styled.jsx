import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  background-color: #f1dfd1;
  background-image: linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%);
  min-height: 100vh;
`;

export const Convite = styled.img`
  width: 40rem;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid black;
`;

export const Button = styled(Link)`
  padding: .8rem 1.2rem;
  position: fixed;
  cursor: pointer;
  border-radius: 1.3rem;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2rem;
  right: 3rem;
  display: flex;
  align-items: center;
  background: #1cb3cf;
  transition: .5s;
  color: white;
  

  &:hover {
      transform: translateX(10px);
  }

  svg {
    margin-left: .5rem;
  }
`;
