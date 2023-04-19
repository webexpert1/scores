import React from 'react';
import MatchItem from './match';
import { MatchProp } from '../pages/types';
import styled from 'styled-components';

const MatchesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: max-width: 1024px) {
    justify-content: center;
  }
;
`
const MatchWrapper = styled.div`
  width: calc(33.3% - 1rem);
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    width: calc(50% - 1rem)
  }

  @media screen and (max-width: 480px) {
    width: 100%
  }

`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const MatchesPage = ({ matches }: { matches: MatchProp[] }) => {
  return (
    <CardContainer>
      {matches.map((match: MatchProp, index: number) => (
        <React.Fragment key={index}>
           <MatchItem key={match.id} {...match} />
        </React.Fragment>
      ))}
    </CardContainer>
  );
};

export default MatchesPage;
