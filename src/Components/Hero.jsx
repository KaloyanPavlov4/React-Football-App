import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Hero({ header, body }) {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '10vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        px: 2,
        mb: 3
      }}
    >
      <Container>
        <Typography
          variant="h1"
          sx={{
            color: 'secondary.main',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            mb: 2,
          }}
        >
          {header}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '1.25rem',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {body}
        </Typography>
      </Container>
    </Box>
  )
}
