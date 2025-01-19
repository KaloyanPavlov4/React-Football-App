import { useEffect, useState } from 'react'
import { getAllLeagues } from '../../services/football-service'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Hero from '../Hero'
import LeagueItem from './LeagueItem'

const StyledBox = styled(Box)(() => {
  return {
    alignSelf: 'center',
    width: '100%',
    display:'flex',
    flexDirection: 'column',
    paddingTop:20,
    paddingBottom:20,
    gap: 20,
    alignItems:'center',
    justifyContent: 'space-between'
  }
})

const Leagues = () => {
  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    const fetchLeagues = async () => {
      setLeagues(await getAllLeagues())
    }

    fetchLeagues()
  }, [])

  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing(12), marginBottom: theme.spacing(6) })}>
      <Hero header={'Discover the Best of European Football'}
        body={'Explore the top leagues that define the beautiful game across Europe'}/>
      <StyledBox>
        {leagues.map((league) => (
          <LeagueItem key={league.id} league={league}/>
        ))}
      </StyledBox>
    </Box>
  )
}

export default Leagues