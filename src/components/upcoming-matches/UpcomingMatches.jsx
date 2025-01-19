import { Box } from '@mui/material'
import LeagueUpcomingMatches from '../leagues/LeagueUpcomingMatches'
import LeagueDetails from './LeagueDetails'

const UpcomingMatches = () => {
  return (
    <Box sx = {(theme) => ({ marginBottom: theme.spacing(14) })}>
      <Box>
        <LeagueDetails id={2021}/>
        <LeagueUpcomingMatches id={2021} take={8}/>
      </Box>
      <Box>
        <LeagueDetails id={2002}/>
        <LeagueUpcomingMatches id={2002} take={8}/>
      </Box>
      <Box>
        <LeagueDetails id={2014}/>
        <LeagueUpcomingMatches id={2014} take={8}/>
      </Box>
      <Box>
        <LeagueDetails id={2019}/>
        <LeagueUpcomingMatches id={2019} take={8}/>
      </Box>
      <Box>
        <LeagueDetails id={2015}/>
        <LeagueUpcomingMatches id={2015} take={8}/>
      </Box>
    </Box>
  )
}

export default UpcomingMatches