import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import 'react-circular-progressbar/dist/styles.css';
import CircleText from './CircleText'
import { useEffect, useState } from 'react';
import PageLayout from '../components/layout/page-layout';
import MatchesPage from '../components/matches-page';

import useSWR from 'swr';
import { MatchProp } from './types';
import styled from 'styled-components';
import { useMatches } from '../hooks/useMatches';

interface Props {
  items: any;
}

const FilterWrapper = styled.div`
  display:flex;
`

const FilterContainer = styled.button`
  width: 150px;
  border: 1px solid #353935;
  text-align: center;
  padding: 6px 0;
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
  if (!data) return <div>Loading...</div>;

  const parsedData = JSON.parse(data);
  const notStartedMatches = parsedData.filter((match: MatchProp) => match.status.type === 'notstarted');
  const finishedMatches = parsedData.filter((match: MatchProp) => match.status.type === 'finished');
  const inProgressMatches = parsedData.filter((match: MatchProp) => match.status.type === 'inprogress');
 
  return (
    <div>
     
      <PageLayout>
      <div>
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
