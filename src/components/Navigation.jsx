import { useState } from 'react'
import { styled, alpha } from '@mui/material/styles'
import { Box,
  AppBar,
  Toolbar,
  Button,
  Container,
  MenuItem,
  Drawer } from '@mui/material/'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { useNavigate } from 'react-router'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}))

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const nav = useNavigate()

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  const goTo = (to) => {
    setOpen(false)
    return nav(to)
  }

  return (
    <AppBar
      position='fixed'
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth='lg'>
        <StyledToolbar variant='dense' disableGutters>
          <Button sx={{ mr: 3 }} color='primary' onClick={() => goTo('/')}>Football Frontend</Button>
          <Box sx={{ flexGrow: 1, display: { xs:'none', md:'flex' }, alignItems: 'center', px: 0 }}>
            <Button variant='text' color='primary' size='small' onClick={() => goTo('/leagues')}>
                Leagues
            </Button>
            <Button variant='text' color='primary' size='small' onClick={() => goTo('/cups')}>
                Cups
            </Button>
            <Button variant='text' color='primary' size='small' onClick={() => goTo('/upcoming')}>
              Upcoming matches
            </Button>
          </Box>
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <IconButton aria-label='Menu button' onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor='top'
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem onClick={() => goTo('/leagues')}>Leagues</MenuItem>
                <MenuItem onClick={() => goTo('/cups')}>Cups</MenuItem>
                <MenuItem onClick={() => goTo('/upcoming')}>Upcoming matches</MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  )
}

export default Navigation