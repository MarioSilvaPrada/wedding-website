import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  color: ${(props) => props.theme.colors.darkGreen};
  ${({ isVisible }) => !isVisible && css`display: none;`};
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
  background: ${(props) => props.theme.colors.green};
  transform: translateY(${(props) => (props.isVisible ? 0 : '-2rem')});
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: .5s;
`;

export const Wrapper = styled.div`
  width: calc(${(props) => props.theme.maxWidth} / 2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

export const StyledLink = styled(NavLink)`
  font-size: 1rem;
`;

export const StyledTitle = styled.h1`font-size: 2rem;`;
