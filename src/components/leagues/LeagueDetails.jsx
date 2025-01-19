import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCompetition } from '../../services/football-service'
import { Box, Tabs, Tab, Typography, styled } from '@mui/material'
import TabPanel from '../TabPanel'
import LeagueStandings from './LeagueStandings'
import LeagueTopScorers from './LeagueTopScorers'
import LeagueUpcomingMatches from './LeagueUpcomingMatches'
import Flag from '../styled/Flag'

const Image = styled('img')({
  borderRadius: '8px',
  objectFit: 'contain',
})

const LeagueDetails = () => {
  const id = Number(useParams().id)
  const [league, setLeague] = useState({})
  const [value, setValue] = useState(0)

  useEffect(() => {
    const fetchLeague = async () => {
      setLeague(await getCompetition(id))
    }
    fetchLeague()
  }, [id])

  const handleChange = (event, newValue) => {
    event.preventDefault()
    setValue(newValue)
  }

  if (!league || !league.seasons) {
    return null
  }

  const lastSeasonWinners = league.seasons.filter((season) => season.winner)[0].winner

  return (
    <Box sx={(theme) => ({ width: '100%', marginTop: theme.spacing(12), marginBottom: theme.spacing(12) })}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'start' },
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
        <Box
          sx={{
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
            }}>
            <Typography variant='body2' color='textSecondary'>
              {league.area.name}
            </Typography>
            <Flag src={league.area.flag} alt={`${league.area.name} flag`} />
          </Box>
        </Box>
        <Box sx={{ marginLeft: { md:'auto' }, textAlign: 'center' }}>
          <Typography variant='body1' sx={{ fontWeight: 'bold', mb: 1 }}>
            Last Season Winners:
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <Image
              src={lastSeasonWinners.crest}
              alt={lastSeasonWinners.shortName}
              sx={{ width: 50,
                height: 'auto',
                background: '#fff',
                padding: 1
              }}
            />
            <Typography variant='body2'>{lastSeasonWinners.name}</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='Tabs for standings, top scorers and upcoming matches'
          TabIndicatorProps={{
            style: { backgroundColor: '#e63946' },
          }}
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 'bold',
              color: '#fff',
            },
            '& .Mui-selected': {
              color: '#e63946',
            },
          }}
        >
          <Tab label='Standings' />
          <Tab label='Top Scorers' />
          <Tab label='Upcoming Matches' data-testid='upcoming matches button'/>
        </Tabs>
      </Box>

      <TabPanel value={value} index={0} data-testid='standings tab'>
        <LeagueStandings id={id}/>
      </TabPanel>
      <TabPanel value={value} index={1} data-testid='top scorers tab'>
        <LeagueTopScorers id={id}/>
      </TabPanel>
      <TabPanel value={value} index={2} data-testid='upcoming tab'>
        <LeagueUpcomingMatches id={id}/>
      </TabPanel>
    </Box>
  )
}

export default LeagueDetails
