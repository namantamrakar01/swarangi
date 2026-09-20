import { Box, Button, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import { SOCIAL_LINKS } from '../config/social'

const Hero = () => {
  const handleExplore = () => {
    const collectionSection = document.getElementById('collection')
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Box
      id="home"
      component="section"
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 'calc(100vh - 110px)', md: 'calc(100vh - 126px)' },
        minHeight: { xs: '580px', md: '640px' },
        overflow: 'hidden',
        marginTop: { xs: '110px', md: '126px' },
      }}
    >
      <Box
        component="video"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      >
        <source
          src="https://res.cloudinary.com/dqn2dna4p/video/upload/v1781540951/swarangi/swarangi-instruments-bg.mp4"
          type="video/mp4"
        />
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.55)',
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            color: '#FAF3E0',
            fontWeight: 700,
            marginBottom: '28px',
            maxWidth: '900px',
            lineHeight: 1.2,
            fontSize: { xs: '32px', sm: '42px', md: '52px' },
          }}
        >
          In every note, there is a story. <br /> In every miniature, there is a soul.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 2.5 },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={handleExplore}
            variant="outlined"
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.25)',
              color: '#FAF3E0',
              border: '2px solid #FAF3E0',
              fontFamily: "'Jost', sans-serif",
              padding: '12px 32px',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              minWidth: { xs: '240px', sm: 'auto' },
              '&:hover': {
                backgroundColor: 'rgba(250, 243, 224, 0.15)',
                borderColor: '#E8A020',
                color: '#E8A020',
                transform: 'translateY(-2px)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            }}
          >
            Explore Collection
          </Button>

          <Button
            component="a"
            href={SOCIAL_LINKS.instagramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            startIcon={<InstagramIcon sx={{ fontSize: 20 }} />}
            sx={{
              backgroundColor: '#E8A020',
              color: '#2A1507',
              border: '2px solid #E8A020',
              fontFamily: "'Jost', sans-serif",
              padding: '12px 28px',
              borderRadius: '30px',
              fontSize: '16px',
              fontWeight: 600,
              textTransform: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 18px rgba(232, 160, 32, 0.45)',
              transition: 'all 0.3s ease',
              minWidth: { xs: '240px', sm: 'auto' },
              '&:hover': {
                backgroundColor: '#FFB834',
                borderColor: '#FFB834',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 24px rgba(232, 160, 32, 0.65)',
              },
              '&:active': {
                transform: 'translateY(0)',
              },
            }}
          >
            Order via Instagram DM
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero
