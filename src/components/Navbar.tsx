import { useState } from 'react'
import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

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
    <List>
      {navLinks.map((link) => (
        <ListItem key={link.name} disablePadding>
          <ListItemButton
            href={link.href}
            onClick={() => setIsOpen(false)}
            sx={{ textAlign: 'center' }}
          >
            <ListItemText primary={link.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )

  return (
    <AppBar
      sx={{
        backgroundColor: 'rgba(245, 242, 238, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(232, 160, 32, 0.2)',
        boxShadow: 'none',
      }}
    >
      <Toolbar
        className='w-100'
        sx={{
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: { xs: '75px', md: '90px' },
          px: { xs: 2, md: 3 },
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
          <Box sx={{ display: 'flex', gap: 4 }}>
            {navLinks.map((link, index) => (
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
                  marginRight: index === navLinks.length - 1 ? '100px' : '0',
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
                  marginTop: '75px',
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
