import React from 'react'
import styled from 'styled-components';
import Container from '../../components/basic/Container';

const check_email = () => {
  return (
    <Container>
      <StyledSuccessMessage>You successfully created a Quote!</StyledSuccessMessage>
      <StyledSuccessMessage>Check your email to login and see your results</StyledSuccessMessage>
    </Container>
  )
}

export default check_email;

const StyledSuccessMessage = styled.h2`
  color: green;
`