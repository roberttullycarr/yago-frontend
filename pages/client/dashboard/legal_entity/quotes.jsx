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

  console.log(quotes);

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
            <StyledEntityCard onClick={() => onCardClickHandler(quote.attributes.id)}>
              <h3>{quote.attributes.quoteID}</h3>
                <span style={{fontWeight: "600"}}>{`Quote ID:`}&nbsp;</span><span>{quote.attributes.quoteId}</span>
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
  max-width: 20em;
  height: 15em;
  flex: 1;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`