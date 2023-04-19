import type { NextPage } from 'next'

import 'react-circular-progressbar/dist/styles.css';
import CircleText from './CircleText'
import { useEffect, useState } from 'react';
import PageLayout from '../components/layout/page-layout';
import MatchesPage from '../components/matches';

import { MatchProp } from './types';
import styled from 'styled-components';
import { useMatches } from '../hooks/useMatches';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface Props {
  items: any;
}

const FilterWrapper = styled.div`
  display:flex;
  margin-left:10px;
  // background-color: red;
  // position:fixed;
  // top:20;
  // width:100%;
  // z-index:100;
`

const FilterContainer = styled.div`
  width: 150px;
  border: 1px solid #353935;
  border-radius: 8px;
  text-align: center;
  padding: 6px 0;
  margin-right: 4px;
  gap: 10px;
  cursor: pointer;
`

const FilterText = styled.div`
  margin-left: 10px;
  font-weight: bold;
  font-size: 16px;
`

const Home: NextPage<Props> = () => {
  const [matchesData, setMatchesData] = useState<MatchProp[]>([]);
  const [showFinished, setShowFinished] = useState(false);
  const [showAll, setShowAll] = useState(true);
  const [showNotStarted, setShowNotStarted] = useState(false);
  const [showInProgress, setShowInProgress] = useState(false);

  // load data
  const { data, isLoading, isError } = useMatches()

  const handleLiveFilterClick = () => {
    setShowInProgress(true)
    setShowFinished(false);
    setShowNotStarted(false);
    setShowAll(false);
  };

  const handleFinishedFilterClick = () => {
    setShowFinished(true);
    setShowInProgress(false)
    setShowNotStarted(false);
    setShowAll(false);
  };
  
  const handleNotStartedFilterClick = () => {
    setShowNotStarted(true);
    setShowFinished(false);
    setShowAll(false);
    setShowInProgress(false)
  };

  const handleAllFilterClick = () => {
    setShowAll(true)
    setShowFinished(false);
    setShowNotStarted(false);
    setShowNotStarted(false);
    setShowFinished(false);
    setShowInProgress(false)
  };

  useEffect(() => {
    if (parsedData && showAll) {
      setMatchesData(parsedData);
    } else if(parsedData && showFinished) {
      setMatchesData(finishedMatches);
    } else if(parsedData && showInProgress) {
      setMatchesData(inProgressMatches);
    } else if(parsedData && showNotStarted) {
      setMatchesData(notStartedMatches);
    }

  }, [data, showAll, showFinished, showInProgress, showNotStarted])

  if (isError) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div><Skeleton count={40} /></div>;

  const parsedData = JSON.parse(data);
  const notStartedMatches = parsedData.filter((match: MatchProp) => match.status.type === 'notstarted');
  const finishedMatches = parsedData.filter((match: MatchProp) => match.status.type === 'finished');
  const inProgressMatches = parsedData.filter((match: MatchProp) => match.status.type === 'inprogress');
 
  return (
    <div>
     
      <PageLayout>
      <div>
          
          <FilterText>Filters</FilterText>
          <FilterWrapper>
            <FilterContainer onClick={handleAllFilterClick}> All ({parsedData.length})</FilterContainer>
            <FilterContainer onClick={handleFinishedFilterClick}> Result   ({finishedMatches.length})</FilterContainer>
            <FilterContainer onClick={handleLiveFilterClick}> Live ({inProgressMatches.length})</FilterContainer>
            <FilterContainer onClick={handleNotStartedFilterClick}> Upcomming  ({notStartedMatches.length})</FilterContainer>
          </FilterWrapper>
      </div>
      <MatchesPage matches={matchesData} />
      
      </PageLayout>

      {/* <CircleText percentage={60} text="Canceled`" strokeWidth={10} color="#00ff00" /> */}
    </div>
  )
}

export default Home
