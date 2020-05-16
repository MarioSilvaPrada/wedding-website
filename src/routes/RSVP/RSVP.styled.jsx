import styled from 'styled-components';

export const StyledContainer = styled.div`min-height: 100vh;`;

export const FormContainer = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.color2};
  padding: 2rem;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const StyledForm = styled.form`
  width: 33rem;
  padding: 1rem 2rem;
  margin: 0 auto;
  padding: 3rem 0;
`;

export const Label = styled.label`
  font-size: 1.3rem;
  margin-bottom: .5rem;
  display: block;
  font-weight: 300;
`;

export const LabelRadio = styled(Label)`
  display: block;
  position: relative;
  user-select: none;
  cursor: pointer;
  font-size: 1.2rem;
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
    bottom: -.31rem ;
    right: -2.4rem;
    height: 2rem;
    width: 2rem;
    background-color: white;
    border-radius: 50%;
    border: 1px solid black;
  }

  &:hover input ~ span {
    background-color: #eee;
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
    left: 0.7rem;
    top: 0.4rem;
    width: .31rem;
    height: .7rem;
    border: solid black;
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
  padding: .7rem;
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
  border-radius: 4px;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1rem;
  border: 1px solid black;
  font-weight: 800;
  margin-top: 1rem;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.4 : 1)};
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
`;

export const StyledImage = styled.div`
  background: ${({ pic }) => pic && `url(${pic})`};
  height: 80vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const Layer = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledRadio = styled.input`margin-right: 4rem;`;

export const TitleContainer = styled.div`
  padding-top: 3rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  text-align: center;

  @media screen and (max-width: 600px) {
    margin: 0 2rem;
  }
`;

export const Title = styled.h1`
  font-size: 5.5rem;
  letter-spacing: -0.0454545em;
  margin-bottom: 3rem;
  z-index: 2;

  @media screen and (max-width: 600px) {
    font-size: 4.5rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 2.3rem;
  font-weight: 300;
  z-index: 2;
  line-height: 3.5rem;
`;
