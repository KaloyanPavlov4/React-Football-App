import { useEffect, useState } from 'react'
import { Box, Tabs, Tab, Typography, styled } from '@mui/material'
import TabPanel from '../TabPanel'
import { getCompetition } from '../../services/football-service'
import LeagueStandings from './LeagueStandings'
import LeagueTopScorers from './LeagueTopScorers'
import LeagueUpcomingMatches from './LeagueUpcomingMatches'
import Flag from '../styled/Flag'

const Image = styled('img')({
  borderRadius: '8px',
  objectFit: 'contain',
})

export default function LeagueDetails({ id }) {
  const [league, setLeague] = useState({})
  const [value, setValue] = useState(0)

  useEffect(() => {
    const fetchLeague = async () => {
      setLeague(await getCompetition(id))
    }
    fetchLeague()
  }, [id])

  if (!league || !league.seasons) {
    return null
  }

  const lastSeasonWinners = league.seasons.filter((season) => season.winner)[0].winner

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', marginTop: 15 }}>
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
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, alignItems:{ xs: 'center', md:'flex-start' } }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            {league.name}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography variant="body2" color="textSecondary">
              {league.area.name}
            </Typography>
            <Flag src={league.area.flag} alt={`${league.area.name} flag`} />
          </Box>
        </Box>
        <Box sx={{ marginLeft: { md:'auto' }, textAlign: 'center' }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
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
              sx={{ width: 50, height: 'auto', background: '#fff', padding: 1 }}
            />
            <Typography variant="body2">{lastSeasonWinners.name}</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
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
          <Tab label="Standings" />
          <Tab label="Top Scorers" />
          <Tab label="Upcoming Matches" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <LeagueStandings id={2021}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <LeagueTopScorers id={2021}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <LeagueUpcomingMatches id={2021}/>
      </TabPanel>
    </Box>
  )
}
