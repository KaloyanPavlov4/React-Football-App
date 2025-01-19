import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getTeam } from '../../services/football-service'
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
} from '@mui/material'
import StyledTableCell from '../styled/StyledTableCell'

const Crest = styled('img')({
  width: '80px',
  height: '80px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  padding: '5px',
  border: '1px solid #ccc',
})

const TeamInfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
}))

const InfoText = styled(Typography)({
  fontWeight: 'bold',
  marginBottom: '4px',
})

const TeamDetails = () => {
  const [team, setTeam] = useState({})
  const id = Number(useParams().id)

  useEffect(() => {
    const fetchData = async () => {
      setTeam(await getTeam(id))
    }
    fetchData()
  }, [id])

  if(!team || !team.coach) {
    return
  }

  return (
    <Box sx={(theme) => ({ padding: 4, marginTop:theme.spacing(12), marginBottom:theme.spacing(12) })}>
      <TeamInfoBox>
        <Crest src={team.crest} alt={team.name} />
        <Box>
          <Typography variant='h4'>{team.name}</Typography>
          <Typography variant='body2' color='textSecondary'>
            Founded: {team.founded}
          </Typography>
        </Box>
      </TeamInfoBox>
      <Box sx={{ marginBottom: 4 }}>
        <InfoText variant='body1'>Club Colors:</InfoText> {team.clubColors}
        <InfoText variant='body1'>Venue:</InfoText> {team.venue}
        <InfoText variant='body1'>Coach:</InfoText> {team.coach.name}
      </Box>
      <Typography variant='h5' sx={{ marginBottom: 2 }}>
        Squad
      </Typography>
      <TableContainer component={Box}>
        <Table>
          <TableHead sx={{ backgroundColor: '#2b2b2b' }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Nationality</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {team.squad.map((player, index) => (
              <TableRow key={index}>
                <StyledTableCell>{player.name}</StyledTableCell>
                <StyledTableCell>{player.position}</StyledTableCell>
                <StyledTableCell>{player.nationality}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default TeamDetails