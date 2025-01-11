import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid2 as Grid,
  Button,
} from '@mui/material'

export default function LeagueCard ({ league }) {
  return (
    <Grid xs={12} sm={6} md={4} lg={4} key={league.id}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 2,
          height: '20rem',
          width: '18rem',
          margin: 'auto',
          textAlign: 'center',
          boxSizing: 'border-box',
          background: 'linear-gradient(145deg, #1f1f1f, #333333)',
          color: '#fff',
          borderRadius: '15px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Box
          sx={{
            width: 100,
            height: 100,
            background: 'linear-gradient(35deg,rgb(131, 52, 0), rgb(78, 39, 110))',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 2,
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: 70,
              height: 70,
              objectFit: 'contain',
            }}
            image={league.emblem}
            alt={`${league.name} logo`}
          />
        </Box>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              textShadow: '0px 1px 3px rgba(0, 0, 0, 0.6)',
              maxWidth: '100%',
            }}
          >
            {league.name}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 1,
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: 24,
                height: 24,
                objectFit: 'contain',
                marginRight: 1,
              }}
              image={league.area.flag}
              alt={`${league.area.name} flag`}
            />
            <Typography variant="body2">{league.area.name}</Typography>
          </Box>
        </CardContent>
        <Button
          variant="contained"
          sx={{
            width: '80%',
            marginTop: 1,
            background: 'linear-gradient(35deg,rgb(131, 52, 0), rgb(78, 39, 110))',
            color: '#fff',
            fontWeight: 'bold',
            transition: 'transform 0.3s ease, background 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(35deg,rgb(78, 39, 110), rgb(131, 52, 0))',
              transform: 'scale(1.05)',
            },
          }}
        >
          View More
        </Button>
      </Card>
    </Grid>
  )
}