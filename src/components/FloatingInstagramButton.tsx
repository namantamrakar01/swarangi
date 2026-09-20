import { Box, Button } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import { SOCIAL_LINKS } from '../config/social'

const FloatingInstagramButton = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 20, md: 28 },
        right: { xs: 16, md: 28 },
        zIndex: 1100,
      }}
    >
      <Button
        component="a"
        href={SOCIAL_LINKS.instagramDmUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        aria-label="Order via Instagram DM"
        startIcon={
          <InstagramIcon
            sx={{
              fontSize: { xs: 22, md: 24 },
              color: '#FAF3E0',
              transition: 'transform 0.3s ease',
            }}
          />
        }
        sx={{
          backgroundColor: '#3B1F0A',
          color: '#FAF3E0',
          border: '1.5px solid #E8A020',
          borderRadius: '30px',
          px: { xs: 2, md: 2.5 },
          py: { xs: 1, md: 1.2 },
          fontFamily: "'Jost', sans-serif",
          fontWeight: 600,
          fontSize: { xs: '13px', md: '14px' },
          textTransform: 'none',
          letterSpacing: '0.3px',
          boxShadow: '0 8px 24px rgba(59, 31, 10, 0.4), 0 2px 8px rgba(232, 160, 32, 0.3)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          '&:hover': {
            backgroundColor: '#E8A020',
            color: '#2A1507',
            borderColor: '#E8A020',
            transform: 'translateY(-3px) scale(1.03)',
            boxShadow: '0 12px 30px rgba(232, 160, 32, 0.5), 0 4px 12px rgba(59, 31, 10, 0.3)',
            '& .MuiSvgIcon-root': {
              color: '#2A1507',
              transform: 'scale(1.1)',
            },
          },
          '&:active': {
            transform: 'translateY(-1px) scale(0.98)',
          },
        }}
      >
        Order via DM
      </Button>
    </Box>
  )
}

export default FloatingInstagramButton
