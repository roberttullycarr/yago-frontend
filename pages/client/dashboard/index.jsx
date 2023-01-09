import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getUserLegalEntities } from '../../../api/fetches/getUserLegalEntities';
import Container from '../../../components/basic/Container';

const Dashboard = () => {
  const router = useRouter();
  const [userLegalEntities, setUserLegalEntities] = useState([]);
  const userID = router.query.id;

  console.log(userLegalEntities);

  const saveUserLegalEntities = async () => {
    const userLegalEntitiesResponse = await getUserLegalEntities(userID);
    setUserLegalEntities(userLegalEntitiesResponse.data.data)
  }

  useEffect(() => {
    if (userID !== undefined ){
      saveUserLegalEntities();
    }
  }, [userID])

  const onCardClickHandler = (legalEntityID) => {
    router.push(`/client/dashboard/legal_entity/quotes?id=${legalEntityID}`)
  }

  return (
    <Container>
      <h1 style={{color: "black"}}>dashboard</h1>
      <StyledGroupMembersGrid>
        {userLegalEntities && userLegalEntities.map((entity, index) => (
          <StyledGridChild key={index}>
            <StyledEntityCard onClick={() => onCardClickHandler(entity.attributes.id)}>
              <h3>{entity.attributes.legalName}</h3>
              <div style={{display: "flex", alignItems: "center"}}>
                <span style={{fontWeight: "600"}}>{`Enterprise Number:`}&nbsp;</span><span>{entity.attributes.enterpriseNumber}</span>
              </div>
            </StyledEntityCard>
          </StyledGridChild>
        ))}
      </StyledGroupMembersGrid>
    </Container>
  )
}

export default Dashboard;

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
  max-width: 18em;
  height: 15em;
  flex: 1;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`