import { useRouter } from 'next/router';
import React from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { createNewLogin } from '../api/fetches/createNewLogin';
import Container from '../components/basic/Container';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();


  const onSubmitHandler = (async (data) => {
    try {
      createNewLogin(data);
      router.push('/check_email');
    } catch(e){
      console.log(e);
    }
  });

  return (
    <Container>
      <h1 style={{color: "black"}}>Login</h1>
      <StyledFormMain onSubmit={handleSubmit(onSubmitHandler)}>
          <StyledFormLabel>
            Email:
            <StyledInput 
              type="email" 
              name="email"
              {...register('email', {required: true})} 
            />
          </StyledFormLabel>
          <StyledSubmitButton type="submit" value="Submit"/>
      </StyledFormMain>
    </Container>
  )
}

export default Login;

const StyledFormMain = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
`

const StyledFormSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-bottom: 1px solid grey;
  align-items: center;
`

const StyledFormLabel = styled.label`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1em;
  /* border: 1px solid red; */
`

const StyledInput = styled.input`
  display: flex;
  flex: 1;
  max-width: 80%;
`

const StyledCheckboxMain = styled.div`
  display: flex;
  flex: 1;
  max-width: 80%;
`

const StyledSubmitButton = styled.input`
  margin-top: 1em;
  width: 25%;
`