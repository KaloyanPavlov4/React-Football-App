import Container from '@mui/material/Container'
import Navigation from './Navigation'
import Leagues from './leagues-and-cups/Leagues'

export default function App() {
  return (
    <Container>
      <Navigation/>
      <Leagues/>
    </Container>
  )
}