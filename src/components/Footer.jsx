import { Box, Typography, Link } from '@mui/material'

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '8px 16px',
        background: 'linear-gradient(145deg, #1f1f1f, #333333)',
        textAlign: 'center',
      }}
    >
      <Typography variant='body2'>
        Important! This project is a work in progress by <strong>Kaloyan Pavlov</strong>. The data is static right now, so it most likely is out of date! Check the repository for more information{' '}
        <Link href='https://github.com/KaloyanPavlov4/React-Football-App' target='_blank' rel='noopener noreferrer'>
          GitHub
        </Link>.
      </Typography>
    </Box>
  )
}

export default Footer