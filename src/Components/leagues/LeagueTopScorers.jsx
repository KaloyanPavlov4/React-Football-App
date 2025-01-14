import { useEffect, useState } from 'react'
import { getTopScorers } from '../../services/football-service'
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

export default function LeagueTopScorers({ id }) {
  const [topScorers, setTopScorers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setTopScorers(await getTopScorers(id))
    }
    fetchData()
  }, [id])

  return (
    <TableContainer component={Paper} sx={{ marginTop: 4 }}>
      <Table>
        <TableHead sx={{ backgroundColor: '#2b2b2b' }}>
          <TableRow>
            <StyledTableCell>Placement</StyledTableCell>
            <StyledTableCell>Team</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Position</StyledTableCell>
            <StyledTableCell>Games Played</StyledTableCell>
            <StyledTableCell>Goals</StyledTableCell>
            <StyledTableCell>Assists</StyledTableCell>
            <StyledTableCell>Penalties</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {topScorers.map((scorer, index) => (
            <TableRow key={scorer.player.id}>
              <TableCell>{index+1}</TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Crest src={scorer.team.crest} alt={scorer.team.name} />
                  <Typography>{scorer.team.name}</Typography>
                </Box>
              </TableCell>
              <TableCell>{scorer.player.name}</TableCell>
              <TableCell>{scorer.player.section}</TableCell>
              <TableCell>{scorer.playedMatches}</TableCell>
              <TableCell>{scorer.goals}</TableCell>
              <TableCell>{scorer.assists}</TableCell>
              <TableCell>{scorer.penalties}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}