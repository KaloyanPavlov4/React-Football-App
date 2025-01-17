import { useEffect, useState } from 'react'
import { getCompetition } from '../../services/football-service'
import { Box, Typography, styled } from '@mui/material'
import Flag from '../styled/Flag'

const Image = styled('img')({
  borderRadius: '8px',
  objectFit: 'contain',
})

const LeagueDetails = ({ id }) => {
  const [league, setLeague] = useState({})

  useEffect(() => {
    const fetchLeague = async () => {
      setLeague(await getCompetition(id))
    }
    fetchLeague()
  }, [id])

  if (!league || !league.matches) {
    return null
  }

  return (
    <Box sx={{ width: '100%', marginTop: 15 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          background: '#2b2b2b',
          color: '#fff',
          padding: 3,
          borderRadius: 2,
          gap: 2,
        }}
      >
        <Image
          src={league.emblem}
          alt={league.name}
          sx={{
            width: 150,
            height: 'auto',
            background: '#fff',
            padding: 1,
          }}
        />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          alignItems:{ xs: 'center', md:'flex-start' }
        }}>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
            {league.name}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography variant='body2' color='textSecondary'>
              {league.area.name}
            </Typography>
            <Flag src={league.area.flag} alt={`${league.area.name} flag`} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LeagueDetails