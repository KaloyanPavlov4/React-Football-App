import { Grid2 as Grid, useTheme } from '@mui/material'
import leagues from '../../data/leagues'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Hero from './Hero'
import LeagueCard from './LeagueCard'

const StyledBox = styled('div')(() => {
  const theme = useTheme()
  return {
    alignSelf: 'center',
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid',
    borderColor: theme.palette.primary.dark,
    boxShadow: '0 0 2px 3px hsl(281, 50.00%, 50.00%)',
  }
})


export default function Leagues() {
  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing(12) })}>
      <Hero header={'Leagues'} body={'See them'}/>
      <StyledBox>
        <Grid   container
          spacing={3}
          justifyContent="center"
          alignItems="flex-start"
          sx={{
            padding: 2,
          }}>
          {leagues.map(league => (<LeagueCard key={league.id} league={league}/>))}
        </Grid>
      </StyledBox>
    </Box>
  )
}