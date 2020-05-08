import styled from 'styled-components';

export const StyledContainer = styled.div`
  background: ${(props) => props.theme.colors.lightGreen};
  min-height: 100vh;
`;

export const Wrapper = styled.div`background: ${(props) => props.theme.colors.lightGreen};`;

export const StyledForm = styled.form`
  width: 33rem;
  padding: 1rem 2rem;
  margin: 0 auto;
  padding: 3rem 0;
`;

export const Label = styled.label`
  font-size: 1.1rem;
  margin-bottom: .5rem;
  display: block;
  font-weight: 300;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  padding: .6rem;
  font-size: 1.1rem;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  border-radius: 4px;
  border: 1px solid black;
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;

`;

export const InputWrapper = styled.div`
  display: flex;

  & > :first-child {
    margin-right: 1rem;
  }
`;

export const SubmitButton = styled.input`
  padding: .9rem 2rem;
  border-radius: 2rem;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1rem;
  border: 1px solid black;
  cursor: pointer;
  font-weight: 800;
  margin-top: 1rem;
`;

export const StyledImage = styled.div`
  background: url('https://images.pexels.com/photos/173665/pexels-photo-173665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  height: 50vh;
  width: 100%;
  background-size: cover;
`;
