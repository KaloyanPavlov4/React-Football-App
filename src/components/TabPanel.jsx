import { Box } from '@mui/material'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </Box>
  )
}

export default TabPanel