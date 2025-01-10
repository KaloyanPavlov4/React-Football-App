import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material'
import { getAllLeagues } from '../../services/football-service'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import TableLeagues from './TableLeagues'
import Hero from './Hero'

const StyledBox = styled('div')(() => {
  const theme = useTheme()
  return {
    alignSelf: 'center',
    width: '100%',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid',
    borderColor: theme.palette.primary.dark,
    boxShadow: '0 0 2px 3px hsl(281, 50.00%, 50.00%)'
  }
})


export default function Leagues() {
  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    const fetchLeagues = async () => {
      setLeagues(await getAllLeagues())
    }
    fetchLeagues()
  }, [])

  if(!leagues) {
    return <Box>Empty</Box>
  }


  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing(12) })}>
      <Hero header={'Leagues'} body={'See them'}/>
      <StyledBox>
        <TableLeagues data={leagues}/>
      </StyledBox>
    </Box>
  )
}