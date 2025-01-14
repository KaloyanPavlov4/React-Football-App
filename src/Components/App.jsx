import Container from '@mui/material/Container'
import Navigation from './Navigation'
import LeagueDetails from './leagues/LeagueDetails'

export default function App() {
  return (
    <Container>
      <Navigation/>
      <LeagueDetails id={2021}/>
    </Container>
  )
}