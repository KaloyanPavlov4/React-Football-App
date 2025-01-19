import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { getStandings } from '../../services/football-service'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from '@mui/material'
import Crest from '../styled/Crest'
import StyledTableCell from '../styled/StyledTableCell'

const LeagueStandings = ({ id }) => {
  const [standings, setStandings] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      setStandings(await getStandings(id))
    }
    fetchData()
  }, [id])

  const navigateToTeamDetails = (id) => {
    return nav(`/team/${id}`)
  }

  if(!standings) {
    return
  }

  return (
    <Box>
      <Typography variant='h5' sx={{ display: { xs:'block', sm:'none' }, textAlign:'center' }}>
        Scroll horizontally to see more details!
      </Typography>
      <Typography variant='h5' sx={{ display: { xs: 'block', md:'none' }, textAlign:'center' }}>
        Click on a team to see their page!
      </Typography>
      <TableContainer component={Box} sx={{ marginTop: 4 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#2b2b2b' }}>
            <TableRow>
              <StyledTableCell>Team</StyledTableCell>
              <StyledTableCell>Position</StyledTableCell>
              <StyledTableCell>Played</StyledTableCell>
              <StyledTableCell>Won</StyledTableCell>
              <StyledTableCell>Drawn</StyledTableCell>
              <StyledTableCell>Lost</StyledTableCell>
              <StyledTableCell>GD</StyledTableCell>
              <StyledTableCell>Points</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {standings.map((standing) => (
              <TableRow key={standing.team.id}
                sx= {{
                  backgroundColor: standing.position <= 4 ? '#013220' : 'inherit',
                  transition: 'transform 0.3s ease, background 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    cursor: 'pointer' }
                }}
                onClick={() => navigateToTeamDetails(standing.team.id)}
                data-testid='team row'>
                <TableCell>{standing.position}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Crest src={standing.team.crest} alt={standing.team.name} />
                    <Typography>{standing.team.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{standing.playedGames}</TableCell>
                <TableCell>{standing.won}</TableCell>
                <TableCell>{standing.draw}</TableCell>
                <TableCell>{standing.lost}</TableCell>
                <TableCell>{standing.goalDifference}</TableCell>
                <TableCell>{standing.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default LeagueStandings