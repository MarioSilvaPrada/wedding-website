import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
`;

export const Wrapper = styled.div`
  width: calc(${(props) => props.theme.maxWidth} / 2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.darkGreen};
`;

export const StyledLink = styled(NavLink)`
  font-size: 1rem;
`;

export const StyledTitle = styled.h1`
  font-size: 2rem;
`;
