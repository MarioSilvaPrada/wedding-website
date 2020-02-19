import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
`;

export const Wrapper = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.darkGreen};
`;

export const StyledLink = styled(Link)`
    margin-right: 2rem;
`;

export const StyledTitle = styled.h1`
  font-size: 3rem;
  margin-right: 2rem;
`;
