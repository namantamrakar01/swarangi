import { Box, Container, Typography } from '@mui/material'

const About = () => {
  return (
    <Box
      id="about"
      component="section"
      sx={{
        backgroundColor: '#FAF3E0',
        padding: { xs: '48px 16px', md: '80px 24px' },
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            width: '60px',
            height: '2px',
            backgroundColor: '#E8A020',
            margin: '0 auto 24px',
          }}
        />
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            color: '#3B1F0A',
            fontSize: { xs: '28px', md: '38px' },
            fontWeight: 700,
            marginBottom: '32px',
            lineHeight: 1.2
          }}
        >
          At Swarangi, we don't just craft miniature musical instruments — we preserve raag, riwaaz aur rishtey.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Jost', sans-serif",
            color: '#5C3D1E',
            fontSize: '16px',
            lineHeight: 2,
            marginBottom: '24px',
            fontWeight: 500,
          }}
        >
          हर छोटा सा वाद्ययंत्र, हाथों से गढ़ा हुआ, अपने भीतर एक पूरी दुनिया समेटे है।
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Jost', sans-serif",
            color: '#5C3D1E',
            fontSize: '16px',
            lineHeight: 1.4,
            marginBottom: '24px',
            fontStyle: 'italic',
          }}
        >
          It is not an ornament, it is a heartbeat — carved with care, polished with love, and tuned to eternity.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Jost', sans-serif",
            color: '#5C3D1E',
            fontSize: '16px',
            lineHeight: 2,
            marginBottom: '16px',
            fontWeight: 600,
          }}
        >
          Swarangi miniatures are not replicas. They are echoes.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Jost', sans-serif",
            color: '#5C3D1E',
            fontSize: '16px',
            lineHeight: 1.4,
            marginBottom: '24px',
          }}
        >
          Echoes of gharanas, of festivals, of the timeless bond between music and soul. They remind us that even the smallest voices can carry the weight of centuries.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Jost', sans-serif",
            color: '#E8A020',
            fontSize: '18px',
            lineHeight: 1.4,
            fontWeight: 600,
          }}
        >
          ✨ Hold one, and you don't just hold an instrument — you hold a story.
        </Typography>
      </Container>
    </Box>
  )
}

export default About
