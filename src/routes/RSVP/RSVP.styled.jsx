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
  padding: 3rem 0 5rem;
`;

export const Label = styled.label`
  font-size: 1.1rem;
  margin-bottom: .5rem;
  display: block;
  font-weight: 300;
`;

export const LabelRadio = styled(Label)`
  display: block;
  position: relative;
  user-select: none;
  cursor: pointer;
  font-size: .9rem;
  font-weight: 500;

  & > label {
    position: relative; 
  }

  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  & > span {
    position: absolute;
    bottom: -.25rem ;
    right: -2rem;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  &:hover input ~ span {
    background-color: white;
  }

  & input:checked ~ span {
    background-color: white;
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
  }

  & input:checked ~ span:after {
    display: block;
  }

  & span:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid ${(props) => props.theme.colors.lightGreen};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export const Checkmark = styled.span``;

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

export const RadioInputWrapper = styled(InputWrapper)`
& > :first-child {
  margin-right: 4rem;
}
margin-bottom: 1.1rem;
`;

export const SubmitButton = styled.input`
  padding: .9rem 2rem;
  border-radius: 2rem;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1rem;
  border: 1px solid black;
  font-weight: 800;
  margin-top: 1rem;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.4 : 1)};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
`;

export const StyledImage = styled.div`
  background: url('https://images.pexels.com/photos/173665/pexels-photo-173665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
  height: 60vh;
  width: 100%;
  background-size: cover;
`;

export const StyledRadio = styled.input`margin-right: 4rem;`;

export const TitleContainer = styled.div`
  padding-top: 3rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 5.5rem;
  letter-spacing: -0.0454545em;
  margin-bottom: 2.2rem;
  color: ${(props) => props.theme.colors.darkGreen};
`;

export const SubTitle = styled.p`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.darkGreen};
  font-weight: 300;
`;
