import Container from '@mui/material/Container'
import Navigation from './Navigation'
import Cups from './leagues-and-cups/Cups'
import Leagues from './leagues-and-cups/Leagues'

export default function App() {
  return (
    <Container>
      <Navigation/>
      <Cups/>
      <Leagues/>
    </Container>
  )
}