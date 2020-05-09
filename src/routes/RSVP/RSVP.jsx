import React, { useState } from 'react';

import * as S from './RSVP.styled';

const RSVP = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [plus, setPlus] = useState('');

  // const [isSubmit, setIsSubmitted] = useState(false);

  // const onSubmit = () => {
  //   setIsSubmitted(true);
  // };

  // const formInfo = [
  //   {
  //     label: 'E-mail *',
  //     type: 'email',
  //     name: 'entry.1144025166',
  //     value: email,
  //     onChange: (e) => setEmail(e.target.value),
  //   },
  //   {
  //     label: 'Primeiro nome *',
  //     type: 'text',
  //     name: 'entry.1144025166',
  //     value: firstName,
  //     onChange: (e) => setFirstName(e.target.value),
  //   },
  //   {
  //     label: 'Último nome *',
  //     type: 'text',
  //     name: 'entry.684504895',
  //     value: lastName,
  //     onChange: (e) => setLastName(e.target.value),
  //   },
  //   {
  //     label: 'Confirmas a tua presença? *',
  //     type: 'text',
  //     name: 'entry.851837353',
  //     value: confirmation,
  //     onChange: (e) => setConfirmation(e.target.value),
  //   },
  //   {
  //     label: 'Quem mais vem contigo? *',
  //     type: 'text',
  //     name: 'entry.2028181525',
  //     value: plus,
  //     onChange: (e) => setPlus(e.target.value),
  //   },
  // ];

  return (
    <S.StyledContainer>
      <S.StyledImage />
      <S.StyledForm
        method="POST"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScl0AqV1WgzQ-hERFRqXZVdGj_YW7CxjcnxpVV0LzEccZaNpQ/formResponse"
        target="hidden_iframe"
      >
        <S.StyledInputContainer>
          <S.Label>E-mail *</S.Label>
          <S.StyledInput
            type="email"
            name="entry.1144025166"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </S.StyledInputContainer>
        <S.InputWrapper>
          <S.StyledInputContainer>
            <S.Label>Primeiro nome *</S.Label>
            <S.StyledInput
              name="entry.2087119626"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </S.StyledInputContainer>
          <S.StyledInputContainer>
            <S.Label>Último nome *</S.Label>
            <S.StyledInput
              name="entry.684504895"
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
              type="radio"
              value="Sim"
              name="entry.851837353"
              checked={confirmation === 'Sim'}
              onChange={(e) => setConfirmation(e.target.value)}
              required
            />
            <S.Checkmark />
          </S.LabelRadio>
          <S.LabelRadio>
            Não
            <S.StyledRadio
              type="radio"
              value="Não"
              name="entry.851837353"
              checked={confirmation === 'Não'}
              onChange={(e) => setConfirmation(e.target.value)}
              required
            />
            <S.Checkmark />
          </S.LabelRadio>
        </S.RadioInputWrapper>
        {confirmation === 'Sim' && (
          <S.StyledInputContainer>
            <S.Label>Quem mais vem contigo? *</S.Label>
            <S.StyledInput
              name="entry.2028181525"
              value={plus}
              onChange={(e) => setPlus(e.target.value)}
              required
            />
          </S.StyledInputContainer>
        )}
        <S.SubmitButton type="submit" value="Enviar" />
      </S.StyledForm>
    </S.StyledContainer>
  );
};

export default RSVP;
