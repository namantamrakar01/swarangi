import { Box, Button, Container, InputAdornment, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PersonIcon from '@mui/icons-material/Person'
import MessageIcon from '@mui/icons-material/Message'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setIsSubmitted(false)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://flow.sokt.io/func/scriF9wsxzlO', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit contact form')
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
      setIsSubmitted(true)
    } catch (error) {
      console.error('Form submission failed:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        backgroundColor: '#3B1F0A',
        padding: { xs: '48px 16px', md: '80px 24px' },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', marginBottom: '64px' }}>
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
              color: '#FAF3E0',
              fontSize: { xs: '32px', md: '42px' },
              fontWeight: 700,
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Jost', sans-serif",
              color: 'rgba(250, 243, 224, 0.8)',
              fontSize: '16px',
              marginTop: '16px',
            }}
          >
            Have questions? We'd love to hear from you.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ marginBottom: '48px' }}>
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <MailIcon
                sx={{
                  color: '#E8A020',
                  fontSize: '32px',
                  margin: '0 auto 16px',
                  display: 'block',
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#FAF3E0',
                  fontSize: '20px',
                  marginBottom: '12px',
                  fontWeight: 700,
                }}
              >
                Email
              </Typography>
              <Typography
                component="a"
                href="mailto:info@swarangi.com"
                sx={{
                  fontFamily: "'Jost', sans-serif",
                  color: 'rgba(250, 243, 224, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#E8A020',
                  },
                }}
              >
                info@swarangi.com
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <PhoneIcon
                sx={{
                  color: '#E8A020',
                  fontSize: '32px',
                  margin: '0 auto 16px',
                  display: 'block',
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#FAF3E0',
                  fontSize: '20px',
                  marginBottom: '12px',
                  fontWeight: 700,
                }}
              >
                Phone
              </Typography>
              <Typography
                component="a"
                href="tel:+919630354469"
                sx={{
                  fontFamily: "'Jost', sans-serif",
                  color: 'rgba(250, 243, 224, 0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#E8A020',
                  },
                }}
              >
                +91 96303 54469
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <LocationOnIcon
                sx={{
                  color: '#E8A020',
                  fontSize: '32px',
                  margin: '0 auto 16px',
                  display: 'block',
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#FAF3E0',
                  fontSize: '20px',
                  marginBottom: '12px',
                  fontWeight: 700,
                }}
              >
                Location
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Jost', sans-serif",
                  color: 'rgba(250, 243, 224, 0.8)',
                }}
              >
                Indore, Madhya Pradesh
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            backgroundColor: 'rgba(250, 243, 224, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(232, 160, 32, 0.2)',
            borderRadius: '12px',
            padding: '32px',
            '& .MuiOutlinedInput-input': {
              color: '#FAF3E0',
              opacity: 1,
              WebkitTextFillColor: '#FAF3E0',
            },
            '& .MuiOutlinedInput-input::placeholder': {
              color: 'rgba(250, 243, 224, 0.45)',
              opacity: 1,
              WebkitTextFillColor: 'rgba(250, 243, 224, 0.45)',
            },
            '& textarea': {
              color: '#FAF3E0',
              opacity: 1,
              WebkitTextFillColor: '#FAF3E0',
            },
            '& textarea::placeholder': {
              color: 'rgba(250, 243, 224, 0.45)',
              opacity: 1,
              WebkitTextFillColor: 'rgba(250, 243, 224, 0.45)',
            },
            '& input:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px rgba(59, 31, 10, 0.5) inset',
              WebkitTextFillColor: '#FAF3E0',
              caretColor: '#FAF3E0',
            },
            '& .MuiInputAdornment-root .MuiSvgIcon-root': {
              color: 'rgba(250, 243, 224, 0.85)',
            },
          }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3} sx={{ marginBottom: '24px' }}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  variant="outlined"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon sx={{ color: 'rgba(250, 243, 224, 0.6)' }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#FAF3E0',
                      fontFamily: "'Jost', sans-serif",
                      backgroundColor: 'rgba(59, 31, 10, 0.5)',
                      '& fieldset': {
                        borderColor: 'rgba(232, 160, 32, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(232, 160, 32, 0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#E8A020',
                        backgroundColor: 'rgba(59, 31, 10, 0.7)',
                      },
                    },
                    '& .MuiOutlinedInput-input::placeholder': {
                      color: 'rgba(250, 243, 224, 0.5)',
                      opacity: 1,
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  required
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  variant="outlined"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailIcon sx={{ color: 'rgba(250, 243, 224, 0.6)' }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#FAF3E0',
                      fontFamily: "'Jost', sans-serif",
                      backgroundColor: 'rgba(59, 31, 10, 0.5)',
                      '& fieldset': {
                        borderColor: 'rgba(232, 160, 32, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(232, 160, 32, 0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#E8A020',
                        backgroundColor: 'rgba(59, 31, 10, 0.7)',
                      },
                    },
                    '& .MuiOutlinedInput-input::placeholder': {
                      color: 'rgba(250, 243, 224, 0.5)',
                      opacity: 1,
                    },
                  }}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  required
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  variant="outlined"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon sx={{ color: 'rgba(250, 243, 224, 0.6)' }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#FAF3E0',
                      fontFamily: "'Jost', sans-serif",
                      backgroundColor: 'rgba(59, 31, 10, 0.5)',
                      '& fieldset': {
                        borderColor: 'rgba(232, 160, 32, 0.3)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(232, 160, 32, 0.5)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#E8A020',
                        backgroundColor: 'rgba(59, 31, 10, 0.7)',
                      },
                    },
                    '& .MuiOutlinedInput-input::placeholder': {
                      color: 'rgba(250, 243, 224, 0.5)',
                      opacity: 1,
                    },
                  }}
                />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              required
              multiline
              rows={5}
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              variant="outlined"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start" sx={{ alignSelf: 'flex-start', marginTop: '2px' }}>
                      <MessageIcon sx={{ color: 'rgba(250, 243, 224, 0.6)' }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                marginBottom: '24px',
                '& .MuiOutlinedInput-root': {
                  color: '#FAF3E0',
                  fontFamily: "'Jost', sans-serif",
                  backgroundColor: 'rgba(59, 31, 10, 0.5)',
                  '& fieldset': {
                    borderColor: 'rgba(232, 160, 32, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(232, 160, 32, 0.5)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#E8A020',
                    backgroundColor: 'rgba(59, 31, 10, 0.7)',
                  },
                },
                '& .MuiOutlinedInput-input::placeholder': {
                  color: 'rgba(250, 243, 224, 0.5)',
                  opacity: 1,
                },
              }}
            />

            {isSubmitted && (
              <Typography
                sx={{
                  color: '#FAF3E0',
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '16px',
                  marginBottom: '24px',
                }}
              >
                Thank you for your message. We will contact you shortly.
              </Typography>
            )}

            <Button
              type="submit"
              variant="outlined"
              disabled={isSubmitting}
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
                '&.Mui-disabled': {
                  color: 'rgba(250, 243, 224, 0.5)',
                  borderColor: 'rgba(250, 243, 224, 0.5)',
                },
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
