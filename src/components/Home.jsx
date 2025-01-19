import { useNavigate } from 'react-router'
import { Box, Button } from '@mui/material'
import Hero from './Hero'

const Home = () => {
  const nav = useNavigate()

  const goToLeagues = () => {
    return nav('/leagues')
  }

  const body = `
  Your hub for exploring the world of football, from legendary european leagues to talents.
  🚧 Work in Progress
  This platform is currently under development and uses static data to showcase its features.
  `

  return (
    <Box sx={{ marginTop: 12,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <Hero header={'Football Frontend'} body={body}/>
      <Button variant='contained' onClick={goToLeagues}>Go to leagues</Button>
    </Box>
  )
}

export default Home