import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getLegalEntityQuotesUrl } from '../../../../api/apiUrls';
import { getLegalEntityQuotes } from '../../../../api/fetches/getLegalEntityQuotes';
import Container from '../../../../components/basic/Container';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const router = useRouter();
  const legalEntityId = router.query.id;

  const getQuotes = async () => {
    try {
      const legalEntityQuotes = await getLegalEntityQuotes(legalEntityId)
      setQuotes(legalEntityQuotes.data.data)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    if (legalEntityId !== undefined){
      getQuotes();
    }
  }, [legalEntityId])

  return (
    <Container>
      <h1 style={{color: "black"}}>Quote</h1>
      <StyledGroupMembersGrid>
        {quotes && quotes.map((quote, index) => (
          <StyledGridChild key={index}>
            <StyledEntityCard>
              <h3 style={{margin: "0"}}>Quote info</h3>
              <h3>{quote.attributes.quoteID}</h3>
              <span style={{fontWeight: "600"}}>{`Quote ID:`}&nbsp;</span><span>{quote.attributes.quoteId}</span>
              <h3>{quote.attributes.quoteID}</h3>
              <span style={{fontWeight: "600"}}>{`Available:`}&nbsp;</span><span>{quote.attributes.available ? "true" : "false"}</span>
              <span style={{fontWeight: "600"}}>{`Deductible:`}&nbsp;</span><span>${quote.attributes.deductible}</span>
              <span style={{fontWeight: "600"}}>{`Coverage Ceiling:`}&nbsp;</span><span>${quote.attributes.coverageCeiling}</span>
              <h3 style={{margin: "0"}}>Premiums</h3>
              <span style={{fontWeight: "600"}}>{`After Delivery:`}&nbsp;</span><span>${quote.attributes.afterDeliveryPremium}</span>
              <span style={{fontWeight: "600"}}>{`Entrusted Objects:`}&nbsp;</span><span>${quote.attributes.entrustedObjectsPremium}</span>
              <span style={{fontWeight: "600"}}>{`Legal Expenses:`}&nbsp;</span><span>${quote.attributes.legalExpensesPremium}</span>
              <span style={{fontWeight: "600"}}>{`Professional Indemnity:`}&nbsp;</span><span>${quote.attributes.professionalIndemityPremium}</span>
              <span style={{fontWeight: "600"}}>{`Public Liability:`}&nbsp;</span><span>${quote.attributes.publicLiabilityPremium}</span>
            </StyledEntityCard>
          </StyledGridChild>
        ))}
      </StyledGroupMembersGrid>
    </Container>
  )
}

export default Quotes;

const StyledGroupMembersGrid = styled.div`
  display: grid;
  grid-gap: 2.8rem 4%;
  grid-template-columns: repeat(auto-fit, minmax(13em, 1fr));
  width: 100%;
  max-width: 50em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1em;
  margin-bottom: 5rem;
`;

const StyledGridChild = styled.div`
  display: flex;
  justify-content: center;
`

const StyledEntityCard = styled.div`
  display: flex;
  max-width: 22em;
  height: auto;
  padding: 1em;
  flex: 1;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const StyledDataSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 !important;
  padding: 0 !important;
`