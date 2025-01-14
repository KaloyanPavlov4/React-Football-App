import { useEffect, useState } from 'react'
import { getUpcomingMatches } from '../../services/football-service'
import { Box, Typography, Paper, styled } from '@mui/material'
import Crest from '../styled/Crest'
import { format } from 'date-fns'

const MatchCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
}))


export default function LeagueUpcomingMatches({ id }) {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setMatches(await getUpcomingMatches(id))
    }
    fetchData()
  }, [id])

  if(matches.length === 0) {
    return
  }

  return (
    <Box sx={{ marginTop: 4 }}>
      {matches.map((match, index) => (
        <MatchCard key={index}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Crest sx={{ backgroundColor: '#fff', padding:'5px',  border:'1px solid #ccc' }} src={match.homeTeam.crest} alt={match.homeTeam.name} />
              <Typography variant="body1">{match.homeTeam.name}</Typography>
            </Box>
            <Typography variant="h6">vs</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Crest sx={{ backgroundColor: '#fff', padding:'5px',  border:'1px solid #ccc' }} src={match.awayTeam.crest} alt={match.awayTeam.name} />
              <Typography variant="body1">{match.awayTeam.name}</Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="body2" color="textSecondary">
              Kickoff: {format(new Date(match.utcDate), 'MMM dd, yyyy HH:mm')} UTC
            </Typography>
          </Box>
        </MatchCard>
      ))}
    </Box>
  )
}