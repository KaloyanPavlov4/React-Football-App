import { BrowserRouter, Routes, Route } from 'react-router'
import Container from '@mui/material/Container'
import Navigation from './Navigation'
import Leagues from './leagues/Leagues'
import Cups from './cups/Cups'
import Home from './Home'
import LeagueDetails from './leagues/LeagueDetails'
import TeamDetails from './teams/TeamDetails'
import NotFound from './NotFound'
import UpcomingMatches from './upcoming-matches/UpcomingMatches'
import Footer from './Footer'

const App = () => {
  return (
    <Container>
      <BrowserRouter basename="/React-Football-App">
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/leagues' element={<Leagues />} />
          <Route path='/leagues/:id' element={<LeagueDetails/>}/>
          <Route path='/team/:id' element={<TeamDetails/>}/>
          <Route path='/cups' element={<Cups />} />
          <Route path='/upcoming' element={<UpcomingMatches/>}/>
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Container>
  )
}

export default App