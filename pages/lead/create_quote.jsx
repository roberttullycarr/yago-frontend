import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import yagoApi from '../../api';
import { getNacebelCodesUrl } from '../../api/apiUrls';
import { createNewEntityCodes } from '../../api/fetches/createNewEntityCodes';
import { createNewLegalEntity } from '../../api/fetches/createNewLegalEntity';
import { createNewQuote } from '../../api/fetches/createNewQuote';
import { createNewUser } from '../../api/fetches/createNewUser';
import Container from '../../components/basic/Container';

const CreateQuote = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({defaultValues: formValues});
  const [nacebelCodes, setNacebelCodes] = useState([]);
  const [responseErrors, setResponseErrors] = useState([]);
  const router = useRouter();

  const getNacebelCodes = async () => {
    const url = getNacebelCodesUrl();
    try {
      const response = await yagoApi.get(url);
      setNacebelCodes(response.data.data)
    } catch(e) {
      console.log(e)
    };
  }

  useEffect(()=> {
    getNacebelCodes()
  }, [])


  const onSubmitHandler = (async (data) => {
    console.log(data);
    const user = data.user;
    const legalEntity = data.legalEntity;
    const nacebelCodeIds = data.nacebelCodes;

    try {
      const newUser = await createNewUser(user);
      const userID = newUser.data.data.id;
      const newLegalEntity = await createNewLegalEntity(legalEntity, userID);
      const legalEntityID = newLegalEntity.data.data.id;
      const entityCodes = await createNewEntityCodes(nacebelCodeIds, legalEntityID);
      const newQuote = await createNewQuote(legalEntityID);
      router.push('/lead/check_email')
      router
    } catch(e) {
      setResponseErrors(e.response.data.errors);
    }
  });


  return (
    <Container>
      <h1 style={{color: "black"}}>Create a Quote</h1>
      <StyledFormMain onSubmit={handleSubmit(onSubmitHandler)}>
        <StyledFormSection>
          <h2>Personal Info</h2>
          <StyledFormLabel>
            First Name:
            <StyledInput 
              type="text" 
              name="firstName"
              {...register('user.firstName', {required: true})} 
            />
          </StyledFormLabel>
          <StyledFormLabel>
            Last Name:
            <StyledInput 
              type="text" 
              name="lastName"
              {...register('user.lastName', {required: true})} 
            />
          </StyledFormLabel>
          <StyledFormLabel>
            Phone #:
            <StyledInput 
              type="tel" 
              name="phoneNumber"
              {...register('user.phoneNumber', {required: true})} 
            />
          </StyledFormLabel>
          <StyledFormLabel>
            Email:
            <StyledInput 
              type="email" 
              name="email"
              {...register('user.email', {required: true})} 
            />
          </StyledFormLabel>
          <StyledFormLabel>
            Address 1:
            <StyledInput 
              type="text" 
              name="addressOne"
              {...register('user.addressOne', {required: true})} 
            />
          </StyledFormLabel>
          <StyledFormLabel>
            Address 2:
            <StyledInput 
              type="text" 
              name="addressTwo"
              {...register('user.addressTwo', {required: false})} 
            />
          </StyledFormLabel>
          <StyledFormLabel>
            City:
            <StyledInput 
              type="text" 
              name="addressCity"
              {...register('user.addressCity', {required: true})} 
            />
          </StyledFormLabel>
          <StyledFormLabel>
            Country:
            <StyledInput 
              type="text" 
              name="country"
              {...register('user.addressCountry', {required: true})} 
            />
          </StyledFormLabel>
          <StyledFormLabel>
            Post Code:
            <StyledInput 
              type="number" 
              name="postCode"
              {...register('user.postCode', {required: true})} 
            />
          </StyledFormLabel>
        </StyledFormSection>
        <StyledFormSection>
          <h2>Legal Entity Info</h2>
          <StyledFormLabel>
          Enterprise #:
            <StyledInput 
              type="number" 
              name="enterpriseNumber"
              {...register('legalEntity.enterpriseNumber', {required: true, maxLength: 10, minLength: 10 })} 
            />
          </StyledFormLabel>
          { 
            errors && errors.legalEntity && errors.legalEntity.enterpriseNumber && 
              <StyledError role="alert">Enterprise number must be 10 characters</StyledError>
          }
          <StyledFormLabel>
            Legal Name:
            <StyledInput 
              type="text" 
              name="legalName"
              {...register('legalEntity.legalName', {required: true})} 
            />
          </StyledFormLabel>
          <StyledFormLabel>
            Annual Revenue:
            <StyledInput 
              type="number" 
              name="annualRevenue"
              {...register('legalEntity.annualRevenue', {required: true})} 
            />
          </StyledFormLabel>
          <StyledFormLabel htmlFor="nacebelCodes">
            Nacebel Codes
            <StyledMultipleSelect 
              {...register('nacebelCodes', {required: true})}
              multiple 
            >
              {
                nacebelCodes && nacebelCodes.map((code, index) => (
                  <option 
                    value={code.attributes.id} 
                    key={index}
                  >
                    {`${code.attributes.code} - ${code.attributes.label}`}
                  </option>
                ))
              }
            </StyledMultipleSelect>
          </StyledFormLabel>
          <StyledFormLabel>
            Natural Person?
            <StyledCheckboxMain>
              <input
                type="checkbox" 
                name="annualRevenue"
                {...register('legalEntity.annualRevenue', {required: true})} 
              />
            </StyledCheckboxMain>
          </StyledFormLabel>
        </StyledFormSection>
        {responseErrors.length ? (
          responseErrors.map((error, index) => (
            <StyledError key={index}>{error.title}</StyledError>
          ))
        ) : null}
        <StyledSubmitButton type="submit" value="Submit"/>
      </StyledFormMain>
    </Container>
  )
}

export default CreateQuote;

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

const StyledMultipleSelect = styled.select`
  display: flex;
  flex: 1;
  max-width: 80%;
  max-height: 10em;
`

const StyledError = styled.p`
  color: red;
`

const formValues = {
  user: {
    firstName: "Robert",
    lastName: "Carr",
    phoneNumber: "320474028089",
    email: "roberttullycarr@gmail.com",
    addressOne: 'cuylitsstraat 53',
    addressTwo: '',
    addressCity: "antwerpen",
    addressCountry: "belgium",
    postCode: "2018",
  },
  legalEntity: {
    enterpriseNumber: "234523452345",
    legalName: "carr industries NV",
    annualRevenue: "800000",
    naturalPerson: false,
  },
  nacebelCodes: []
}

