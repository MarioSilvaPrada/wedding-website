import React, { useState, useEffect, memo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { LazyImage } from 'react-lazy-images';
import pic from 'assets/rsvp-pic.jpg';
import Spinner from 'components/Spinner/Spinner';

import * as S from './RSVP.styled';

const RSVP = () => {
  const [ email, setEmail ] = useState('');
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ confirmation, setConfirmation ] = useState('');
  const [ plus, setPlus ] = useState('');

  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    [ pathname ],
  );

  const disableButton = email === '' || firstName === '' || lastName === '' || confirmation === '';

  const onSubmit = () => {
    setTimeout(
      () => {
        history.push({ pathname: '/obrigado', state: { detail: confirmation } });
      },
      [ 500 ],
    );
  };
  return (
    <S.StyledContainer>
      <LazyImage
        src={pic}
        placeholder={({ ref }) => (
          <div ref={ref}>
            <Spinner />
          </div>
        )}
        actual={() => (
          <S.StyledImage pic={pic}>
            <S.TitleContainer>
              <S.Title>Vem celebrar connosco!</S.Title>
              <S.SubTitle>Diz-nos se podes estar presente no dia 2 de outubro de 2020.</S.SubTitle>
            </S.TitleContainer>
            <S.Layer />
          </S.StyledImage>
        )}
      />

      <S.FormContainer>
        <S.StyledForm
          method='POST'
          action='https://docs.google.com/forms/u/0/d/e/1FAIpQLScl0AqV1WgzQ-hERFRqXZVdGj_YW7CxjcnxpVV0LzEccZaNpQ/formResponse'
          target='hidden_iframe'
          onSubmit={() => onSubmit()}
        >
          <S.StyledInputContainer>
            <S.Label>E-mail *</S.Label>
            <S.StyledInput
              type='email'
              name='entry.1144025166'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </S.StyledInputContainer>
          <S.InputWrapper>
            <S.StyledInputContainer>
              <S.Label>Primeiro nome *</S.Label>
              <S.StyledInput
                name='entry.2087119626'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </S.StyledInputContainer>
            <S.StyledInputContainer>
              <S.Label>Último nome *</S.Label>
              <S.StyledInput
                name='entry.684504895'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </S.StyledInputContainer>
          </S.InputWrapper>
          <S.Label style={{ marginBottom: '.8rem' }}>Confirmas a tua presença? *</S.Label>
          <S.RadioInputWrapper>
            <S.LabelRadio>
              Sim
              <S.StyledRadio
                type='radio'
                value='Sim'
                name='entry.851837353'
                checked={confirmation === 'Sim'}
                onChange={(e) => setConfirmation(e.target.value)}
                required
              />
              <S.Checkmark />
            </S.LabelRadio>
            <S.LabelRadio>
              Não
              <S.StyledRadio
                type='radio'
                value='Não'
                name='entry.851837353'
                checked={confirmation === 'Não'}
                onChange={(e) => setConfirmation(e.target.value)}
                required
              />
              <S.Checkmark />
            </S.LabelRadio>
          </S.RadioInputWrapper>
          {confirmation === 'Sim' && (
            <S.StyledInputContainer>
              <S.Label>Quem mais vem contigo?</S.Label>
              <S.StyledInput
                name='entry.2028181525'
                value={plus}
                onChange={(e) => setPlus(e.target.value)}
              />
            </S.StyledInputContainer>
          )}
          <S.SubmitButton type='submit' isDisabled={disableButton} value='Enviar' />
        </S.StyledForm>
      </S.FormContainer>
    </S.StyledContainer>
  );
};

export default memo(RSVP);
