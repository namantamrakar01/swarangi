import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import InstagramIcon from '@mui/icons-material/Instagram'
import { SOCIAL_LINKS } from '../config/social'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Collection', href: '#collection' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen)
  }

  const drawerContent = (
    <Box sx={{ pb: 3, pt: 1 }}>
      <List>
        {navLinks.map((link) => (
          <ListItem key={link.name} disablePadding>
            <ListItemButton
              href={link.href}
              onClick={() => setIsOpen(false)}
              sx={{ textAlign: 'center', py: 1.5 }}
            >
              <ListItemText
                primary={link.name}
                primaryTypographyProps={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 600,
                  fontSize: '17px',
                  color: '#3B1F0A',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ px: 3, pt: 1.5, textAlign: 'center' }}>
        <Button
          fullWidth
          component="a"
          href={SOCIAL_LINKS.instagramDmUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          startIcon={<InstagramIcon />}
          sx={{
            backgroundColor: '#E8A020',
            color: '#2A1507',
            fontFamily: "'Jost', sans-serif",
            fontWeight: 600,
            fontSize: '15px',
            textTransform: 'none',
            borderRadius: '24px',
            py: 1.2,
            boxShadow: '0 4px 14px rgba(232, 160, 32, 0.35)',
            '&:hover': {
              backgroundColor: '#D18A12',
            },
          }}
        >
          Order on Instagram DM
        </Button>
      </Box>
    </Box>
  )

  return (
    <AppBar
      sx={{
        backgroundColor: 'rgba(245, 242, 238, 0.96)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(232, 160, 32, 0.2)',
        boxShadow: 'none',
      }}
    >
      {/* Upfront Announcement Bar */}
      <Box
        sx={{
          backgroundColor: '#2A1507',
          color: '#FAF3E0',
          py: { xs: 0.85, md: 0.9 },
          px: { xs: 1.5, sm: 2 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 1, sm: 1.5 },
          borderBottom: '1px solid rgba(232, 160, 32, 0.3)',
          textAlign: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Box
          component="span"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            fontSize: { xs: '12px', sm: '13px' },
            fontFamily: "'Jost', sans-serif",
            letterSpacing: '0.3px',
            color: 'rgba(250, 243, 224, 0.95)',
          }}
        >
          <InstagramIcon sx={{ fontSize: 16, color: '#E8A020' }} />
          <span>Handcrafted made-to-order • <strong>Order by DM on Instagram</strong></span>
        </Box>
        <Box
          component="a"
          href={SOCIAL_LINKS.instagramDmUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: '#E8A020',
            fontWeight: 600,
            fontSize: { xs: '12px', sm: '13px' },
            fontFamily: "'Jost', sans-serif",
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            padding: '2px 9px',
            borderRadius: '12px',
            backgroundColor: 'rgba(232, 160, 32, 0.15)',
            border: '1px solid rgba(232, 160, 32, 0.4)',
            transition: 'all 0.25s ease',
            '&:hover': {
              backgroundColor: '#E8A020',
              color: '#2A1507',
              borderColor: '#E8A020',
            },
          }}
        >
          DM {SOCIAL_LINKS.instagramHandle} ↗
        </Box>
      </Box>

      <Toolbar
        className="w-100"
        sx={{
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: { xs: '75px', md: '90px' },
          px: { xs: 2, md: 4 },
        }}
      >
        <Box
          component="a"
          href="#home"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0,
            paddingTop: '12px',
          }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/dqn2dna4p/image/upload/v1781543833/swarangi_logo_v4_wkeeqc.svg"
            alt="Swarangi Logo"
            sx={{
              height: { xs: '65px', md: '140px' },
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </Box>

        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 3.5, alignItems: 'center' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: 'rgba(59, 31, 10, 0.85)',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 500,
                  fontFamily: "'Jost', sans-serif",
                  transition: 'color 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#E8A020')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(59, 31, 10, 0.85)')}
              >
                {link.name}
              </a>
            ))}
          </Box>
        )}

        {isMobile && (
          <>
            <IconButton
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{
                color: '#3B1F0A',
                '&:hover': {
                  backgroundColor: 'rgba(232, 160, 32, 0.1)',
                },
              }}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Drawer
              anchor="top"
              open={isOpen}
              onClose={handleDrawerToggle}
              sx={{
                '& .MuiDrawer-paper': {
                  backgroundColor: '#FAF3E0',
                  marginTop: { xs: '110px', sm: '112px' },
                  boxShadow: '0 8px 24px rgba(59, 31, 10, 0.2)',
                  borderBottom: '2px solid #E8A020',
                },
              }}
            >
              {drawerContent}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
