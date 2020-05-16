import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  color: white;
  ${({ isVisible }) => !isVisible && css`display: none;`};
  z-index: 10;

  @media screen and (max-width: 600px) {
    padding-top: 3.2rem;
  }
`;

export const FixedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 2rem;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  color: white;
  background: ${(props) => props.theme.colors.color3};
  transform: translateY(${(props) => (props.isVisible ? 0 : '-2rem')});
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: .5s;
  z-index: 2;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  width: calc(${(props) => props.theme.maxWidth} / 2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    justify-content: flex-end;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1rem;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const StyledMenuLink = styled(StyledLink)`
  font-size: 2rem;
  margin-bottom: 4rem;
  color: white;
  
`;

export const StyledTitle = styled.h1`
  font-size: 2rem;
  @media screen and (max-width: 600px) {
    font-size: 2.3rem;
  }
`;
