// export interface MatchProps {
//   records: MatchProp[];
// }


export interface MatchProp {
  id: string;
  name: string;
  competition: string;
  country: string;
  countryId: string;
  status: {
    type: 'inprogress' | 'notstarted' | 'finished'
  },
  homeTeam : {
    id: number;
    name: string;
  },
  awayTeam: {
    id: number;
    name: string;
  },
  homeScore: {
    current: number;
    period1: number;
    normaltime: number;
  },
  awayScore: {
    current: number;
    period1: number;
    normaltime: number;
  },
  timestamp: number;
  liveStatus: 'FT' | 'HT' | 'Cancelled' | '-'
}