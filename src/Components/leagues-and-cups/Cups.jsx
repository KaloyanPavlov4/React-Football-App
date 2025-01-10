import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material'
import { getAllCups } from '../../services/football-service'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Hero from './Hero'
import TableCups from './TableCups'

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


export default function Cups() {
  const [cups, setCups] = useState([])

  useEffect(() => {
    const fetchCups = async () => {
      setCups(await getAllCups())
    }
    fetchCups()
  }, [])

  if(!cups) {
    return <Box>Empty</Box>
  }


  return (
    <Box sx={(theme) => ({ marginTop: theme.spacing(12) })}>
      <Hero header={'Cups'} body={'See them'}/>
      <StyledBox>
        <TableCups data={cups}/>
      </StyledBox>
    </Box>
  )
}