import { styled, Paper, Box, Typography, Button } from '@mui/material'
import Flag from '../styled/Flag'

const Image = styled('img')()

const Item = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  border: '1px solid',
  borderColor: theme.palette.primary.dark,
  boxShadow: '0 0 2px 3px hsl(349, 85.70%, 30%)',
  background: 'linear-gradient(145deg, #1f1f1f, #333333)',
  width: '95%'
}))

export default function LeagueItem({ league }) {
  return (
    <Item>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
      }}>
        <Box
          sx={{
            width: 100,
            height: 100,
            background: 'linear-gradient(35deg, rgb(239, 48, 84), rgb(78, 39, 110))',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 2,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Image
            src={league.emblem}
            alt={league.name}
            sx={{ width: 50, height: 'auto' }}
          />
        </Box>
        <Box sx={{ marginLeft: 2 }}>
          <Typography variant="h6">{league.name}</Typography>
          <Box display="flex" alignItems="center" justifyContent="flex-start">
            <Typography variant="body2" color="textSecondary">
              {league.area.name}
            </Typography>
            <Flag src={league.area.flag} alt={`${league.area.name} flag`} />
          </Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: '10%',
          background: 'linear-gradient(35deg, rgb(239, 48, 84), rgb(78, 39, 110))',
          color: '#fff',
          fontWeight: 'bold',
          transition: 'transform 0.3s ease, background 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(35deg,rgb(78, 39, 110), rgb(239, 48, 84))',
            transform: 'scale(1.05)',
          },
        }}
      >
          View More
      </Button>
    </Item>
  )
}