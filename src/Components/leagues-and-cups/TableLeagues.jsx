import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const ImageComponent = styled('img')()

export default function TableLeagues({ data }) {
  return (
    <div style={{ padding: '2px' }}>
      <TableContainer component={Paper} sx={{ backgroundColor: '#333' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell>Name</TableCell>
              <TableCell sx={{ display: { xs:'none', md:'table-cell' } }}>Country</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((league) => (
              <TableRow key={league.id}>
                <TableCell>{league.code}</TableCell>
                <TableCell>
                  <Box sx={{ display:'flex', flexDirection:'row', gap:4 }}>
                    <ImageComponent sx={{ display: { xs:'none', md:'inline-block' }, height:'auto', maxWidth: '10%' }} src={league.emblem}/>
                    <p>{league.name}</p>
                  </Box>
                </TableCell>
                <TableCell sx = {{ display: { xs:'none', md:'table-cell' } }}>
                  <Box sx={{ display:'flex', flexDirection:'row', gap:2 }}>
                    <ImageComponent sx={{ height:'auto', maxWidth: '25%' }} src={league.area.flag}/>
                    <p>{league.area.name}</p>
                  </Box>
                </TableCell>
                <TableCell><Button variant='contained'>See details</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}