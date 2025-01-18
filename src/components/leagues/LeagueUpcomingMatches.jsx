import { useEffect, useState } from 'react'
import { getUpcomingMatches } from '../../services/football-service'
import { format } from 'date-fns'
import { Box, Typography, styled } from '@mui/material'
import Crest from '../styled/Crest'

const MatchCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
}))


const LeagueUpcomingMatches = ({ id, take }) => {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUpcomingMatches(id)
      if(take) {
        setMatches(data.slice(0, take))
      }else {
        setMatches(data)
      }
    }
    fetchData()
  }, [id, take])

  if(matches.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <Box sx={{ marginTop: 4 }}>
      {matches.map((match, index) => (
        <MatchCard key={index}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs:'column', sm:'row' },
              gap: { xs:0, sm: 2 }
            }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Crest
                sx={{
                  backgroundColor: '#fff',
                  padding:'5px',
                  border:'1px solid #ccc'
                }}
                src={match.homeTeam.crest}
                lt={match.homeTeam.name} />
              <Typography variant='body1'>{match.homeTeam.name}</Typography>
            </Box>
            <Typography variant='h6' sx={{ alignSelf: 'center' }}>vs</Typography>
            <Box sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <Crest sx={{
                backgroundColor: '#fff',
                padding:'5px',
                border:'1px solid #ccc' }}
              src={match.awayTeam.crest}
              alt={match.awayTeam.name} />
              <Typography variant='body1'>{match.awayTeam.name}</Typography>
            </Box>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant='body2' sx = {{ color:'textSecondary' }}>
              Kickoff: {format(new Date(match.utcDate), 'MMM dd, yyyy HH:mm')} UTC
            </Typography>
          </Box>
        </MatchCard>
      ))}
    </Box>
  )
}

export default LeagueUpcomingMatches