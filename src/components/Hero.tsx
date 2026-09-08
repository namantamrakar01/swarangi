import { Box, Button, Typography } from '@mui/material'

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
        height: '100vh',
        overflow: 'hidden',
        marginTop: { xs: '75px', md: '90px' },
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
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
            marginBottom: '24px',
            maxWidth: '900px',
            lineHeight: 1.2,
          }}
        >
          In every note, there is a story. <br /> In every miniature, there is a soul.
        </Typography>
        <Button
          onClick={handleExplore}
          variant='outlined'
          sx={{
            backgroundColor: 'transparent',
            color: '#FAF3E0',
            border: '2px solid #FAF3E0',
            fontFamily: "'Jost', sans-serif",
            padding: '12px 32px',
            borderRadius: '30px',
            fontSize: '16px',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: 'rgba(250, 243, 224, 0.1)',
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
      </Box>
    </Box>
  )
}

export default Hero
