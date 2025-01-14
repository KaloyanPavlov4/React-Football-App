import { useEffect, useState } from 'react'
import { getStandings } from '../../services/football-service'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material'
import Crest from '../styled/Crest'
import StyledTableCell from '../styled/StyledTableCell'

export default function LeagueStandings({ id }) {
  const [standings, setStandings] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setStandings(await getStandings(id))
    }
    fetchData()
  }, [id])

  if(!standings || !standings.table) {
    return
  }

  return (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
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
          {standings.table.map((standing) => (
            <TableRow key={standing.team.id} sx = {{ backgroundColor: standing.position <= 4 ? '#013220' : 'inherit' }}>
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
  )
}