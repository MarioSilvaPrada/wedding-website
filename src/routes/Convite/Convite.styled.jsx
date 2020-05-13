import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  background-color: #f7f7f7;
  min-height: 100vh;
`;

export const Convite = styled.img`
  width: 40rem;
  margin: 0 auto;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 8px 8px rgba(0, 0, 0, 0.11), 0 16px 16px rgba(0, 0, 0, 0.11),
    0 32px 32px rgba(0, 0, 0, 0.11);
`;

export const Button = styled(Link)`
  padding: .8rem 1.2rem;
  position: fixed;
  cursor: pointer;
  border-radius: 2px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2rem;
  right: 3rem;
  display: flex;
  align-items: center;
  background: #D0ECED;
  color: black;
  box-shadow: 0 1px 1px rgba(0,0,0,0.25), 
              0 2px 2px rgba(0,0,0,0.20), 
              0 4px 4px rgba(0,0,0,0.15), 
              0 8px 8px rgba(0,0,0,0.10),
              0 16px 16px rgba(0,0,0,0.05);
  transition: .5s;

  

  &:hover {
      transform: translateX(10px);
  }

  svg {
    margin-left: .5rem;
  }
`;
