import cups from '../../data/cups'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Hero from '../Hero'
import { Grid2 as Grid } from '@mui/material'
import CupCard from './CupCard'

const StyledBox = styled(Box)(() => {
  return {
    alignSelf: 'center',
    width: '100%',
    padding: '20px 0px 20px 0px'
  }
})

export default function Cups() {

  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing(12) })}>
      <Hero header={'Cups'} body={'See them'}/>
      <StyledBox>
        <Grid container spacing={3} justifyContent="center">
          {cups.map((cup) => (
            <Grid xs={12} sm={6} md={4} lg={4} key={cup.id}>
              <CupCard cup={cup}/>
            </Grid>
          ))}
        </Grid>
      </StyledBox>
    </Box>
  )
}