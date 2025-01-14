import leagues from '../../data/leagues'
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


export default function Leagues() {
  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing(12) })}>
      <Hero header={'Leagues'} body={'See them'}/>
      <StyledBox>
        {leagues.map((league) => (
          <LeagueItem key={league.id} league={league}/>
        ))}
      </StyledBox>
    </Box>
  )
}