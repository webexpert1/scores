import React from 'react';
import { MatchProp } from '../pages/types';
import styled from 'styled-components';
import CircleText from '../pages/CircleProgress';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { timeStamp } from 'console';

interface StatusTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    type: string;
  }

const Card = styled.div`
  width:  500px;
  height: 350px;
  margin: 10px;
  background-color: #353935;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const CardBody = styled.div`
  padding: 10px;
`;

const CardTitle = styled.div`
  font-size: 20px;
  text-align: center;
  color: white;
  margin: 8px
//   font-family: 'Barlow', sans-serif;
`;

const CardWhiteTitle = styled(CardTitle)`
    color: white;
    font-size: 14px
`

const CardSubTitle = styled(CardTitle)`
    color: white;
    font-size: 16px;
    margin-top: 20px;
    font-weight: 100
    // font-family: 'Barlow', sans-serif;
`

const CardDescription = styled.p`
  font-size: 14px;
  margin: 10px 0;
`;

const LiveStatusTitle = styled.div`
 color: ${props => props.color};
 font-size: 1em;

`


const RowContainer = styled.div`
  display: flex;
//   justify-content: center;
  margin-top: 80px
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Div = styled.div`
  width: 150px;
  height: 50px;
//   margin-left: 30px;
  font-size: 14px;
//   margin-top: 10px
`;

const ScoreTitle = styled.div`
    font-size: 48px;
    color: white;
    margin-top: 32px;
    margin-bottom: -50px;
`

const StatusText = styled.span<StatusTextProps>`
  color: ${({ type }) => {
    switch (type) {
      case 'finished':
        return 'green';
      case 'inprogress':
        return 'yellow';
      case 'notstarted':
        return 'white';
      default:
        return 'inherit';
    }
  }};
  font-size: 12px
`;

const MatchItem = (
    { country, name, competition, liveStatus, status, homeTeam, awayTeam, homeScore, awayScore, timestamp }: MatchProp) => {
    // status.type inprogress/notstarted/finished
    const { type } = status;
    let matchStatus = '';

    const liveStatusFormatter = (currentLiveStatus: string) => {
        switch(currentLiveStatus) {
            case 'FT':
                return 'FT';
            case 'Canceled': 
                return '';
            case 'HT':
                return 'HT';
            case '-':
                return '';
            default:
                return `${currentLiveStatus}\``
        }
    }

    const liveScoreFormatter = (currentStatusType: string, currentLiveStatus: string ) => {
        switch(currentStatusType) {
            case 'notstarted' || 'canceled':
                return 0;
            case 'inprogress': 
                if(currentLiveStatus === 'HT') {
                    return 45
                } else {
                    return currentLiveStatus.split('+')[0];
                }
            case 'finished': 
                return 100;
            default:
                return 0
        }
    }

    const statusLabelFormatter = (currentStatusType: string, timestamp: number) => {
        console.log(currentStatusType)
        switch(currentStatusType) {
            case 'notstarted': 
                const date = new Date(timestamp);
                const formatter = new Intl.DateTimeFormat('en-US', {
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: false,
                });
                 return formatter.format(date).toUpperCase();
            case 'finished':
                return 'ENDED';
            case 'inprogress':
                return 'LIVE'
            case 'Canceled':
                return currentStatusType?.toLocaleUpperCase();
            default:
                return undefined;
        }
    }

    return(
        <Card>
        <CardBody>
        <CardSubTitle>{country}</CardSubTitle>
        <CardTitle>{competition}</CardTitle>

            <StatusText type={status.type}>
                {statusLabelFormatter(status.type, timestamp)}
            </StatusText>
        <Container>
            <div>
                <ScoreTitle> {homeScore.current || 0 }</ScoreTitle>
            </div>
            <div>
                <ScoreTitle>-</ScoreTitle>
            </div>
            <div>
                <ScoreTitle>{awayScore.current || 0 }</ScoreTitle>
            </div>
        </Container>

        <RowContainer>
            <Container>
                <Div>
                    <CardSubTitle>
                         {homeTeam?.name}
                    </CardSubTitle>
                </Div>
                <Div>
                <div  style={{ width: 70, height: 70, marginLeft: 30,  marginTop: -10 }}>
                    <CircularProgressbar
                            value={+liveScoreFormatter(type, liveStatus)}
                            text={liveStatusFormatter(liveStatus)}
                            strokeWidth={2}
                            styles={buildStyles({
                                textSize: "20px",
                                pathColor: "#00ff00",
                                trailColor: "#d6d6d6",
                                textColor: "#fff"
                                
                            })}
                        />
                </div>
                </Div>
                <Div>
                    <CardSubTitle>
                       {awayTeam?.name}
                    </CardSubTitle>
                   
                </Div>
            </Container>
            </RowContainer>

        
         {/* <CircleText percentage={60} text="Canceled`" strokeWidth={10} color="#00ff00" /> */}
        {/* <CircleText percentage={60} text="ft`" strokeWidth={10} color="#00ff00" /> */}
        </CardBody>
    </Card>
    )
 
}


// const MatchItem = (props : MatchProp) => {
//   return (
//     <Container>
//       <h2>{props.name}</h2>
//       <p>{props.competition}</p>
//     </Container>
//   );
// };

export default MatchItem;
