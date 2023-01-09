import React from 'react'
import styled from 'styled-components';
import Container from '../components/basic/Container';

const CheckEmail = () => {
  return (
    <Container>
      <StyledSuccessMessage>Check your email to login</StyledSuccessMessage>
    </Container>
  )
};

export default CheckEmail;

const StyledSuccessMessage = styled.h2`
  color: green;
`