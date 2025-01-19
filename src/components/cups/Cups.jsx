import { useState, useEffect } from 'react'
import { getAllCups } from '../../services/football-service'
import { Box, Grid2 as Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import Hero from '../Hero'
import CupCard from './CupCard'

const StyledBox = styled(Box)(() => {
  return {
    alignSelf: 'center',
    width: '100%',
    padding: '20px 0px 20px 0px'
  }
})

const Cups = () => {
  const [cups, setCups] = useState([])

  useEffect(() => {
    const fetchCups = async () => {
      setCups(await getAllCups())
    }
    fetchCups()
  }, [])

  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing(12), marginBottom: theme.spacing(12) })}>
      <Hero header={'Discover the most prestigious tournaments in football'}
        body={'Work in progress!'}/>
      <StyledBox>
        <Grid container spacing={3} justifyContent='center'>
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

export default Cups