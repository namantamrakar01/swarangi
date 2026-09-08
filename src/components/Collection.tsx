import { useState } from 'react'
import {
  Box,
  Container,
  IconButton,
  Typography,
} from '@mui/material'
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid'
import RestartAltIcon from '@mui/icons-material/RestartAlt'

interface InstrumentItem {
  id: number
  name: string
  hindiName: string
  category: string
  categoryEn: string
  tagline: string
  description: string
  materials: string
  dimensions: string
  image: string
}

const instruments: InstrumentItem[] = [
  {
    id: 6,
    name: 'Harmonium',
    hindiName: 'हारमोनियम',
    category: 'Sushir Vadya',
    categoryEn: 'Reeds & Bellows',
    tagline: 'The melodious companion that breathes life into every swara.',
    description:
      'Individually articulated miniature keys, delicate bellow folds, and brass accents — honoring the instrument that anchors semi-classical and devotional vocal heritage.',
    materials: 'Seasoned wood, brass fittings, miniature pleated bellows',
    dimensions: '5.2" × 3.6" × 3.0" • 1:6 Scale',
    image:
      'https://res.cloudinary.com/dqn2dna4p/image/upload/f_auto,q_auto,w_800/v1788626154/harmonium_final_gagabk.jpg',
  },
  {
    id: 2,
    name: 'Tanpoora',
    hindiName: 'तानपूरा',
    category: 'Tat Vadya',
    categoryEn: 'Drone Strings',
    tagline: 'The sound that never ends, the silence that sings.',
    description:
      'The foundational drone of every classical raag. Sculpted with authentic neck proportions, hand-detailed tumba motifs, and micro-acoustic strings tuned to eternity.',
    materials: 'Carved timber, hand-painted gourd, brass bridge & frets',
    dimensions: '8.5" length • 1:6 Scale',
    image:
      'https://res.cloudinary.com/dqn2dna4p/image/upload/f_auto,q_auto,w_800/v1782319296/Tanpoora1_hboikz.jpg',
  },
  {
    id: 5,
    name: 'Sitar',
    hindiName: 'सितार',
    category: 'Tat Vadya',
    categoryEn: 'Plucked Strings',
    tagline: 'Intricate stringed soul with resonant, shimmering overtones.',
    description:
      'Complete with arched brass frets, sympathetic string bridges, and ornate carved detailing, celebrating the majestic lineage of Maihar and Senia gharanas.',
    materials: 'Polished hardwood, delicate brass frets, precision strings',
    dimensions: '8.2" length • 1:6 Scale',
    image:
      'https://res.cloudinary.com/dqn2dna4p/image/upload/f_auto,q_auto,w_800/v1784778964/swarangi/swarangi-guitar.jpg',
  },
  {
    id: 1,
    name: 'Tabla',
    hindiName: 'तबला जोड़ी',
    category: 'Avanaddha Vadya',
    categoryEn: 'Rhythmic Percussion',
    tagline: 'Two hearts, one rhythm — a dialogue of devotion and taal.',
    description:
      'Features a resonant Bayan and calibrated Dayan, complete with miniature syahi tuning paste circles and woven leather straps true to traditional riwaaz.',
    materials: 'Turned hardwood, bell alloy bayan, micro-tension straps',
    dimensions: '3.8" × 4.2" • 1:6 Scale',
    image:
      'https://res.cloudinary.com/dqn2dna4p/image/upload/f_auto,q_auto,w_800/v1788624547/IMG20260531170346_uslohz.jpg',
  },
]

const Collection = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [activeCategory] = useState<string>('All')

  const handleCardFlip = (id: number) => {
    setFlippedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    )
  }

  const filteredInstruments = instruments.filter((item) => {
    if (activeCategory === 'All') return true
    if (activeCategory.includes('Strings') && item.category === 'Tat Vadya') return true
    if (activeCategory.includes('Percussion') && item.category === 'Avanaddha Vadya') return true
    if (activeCategory.includes('Reeds') && item.category === 'Sushir Vadya') return true
    return true
  })

  return (
    <Box
      id="collection"
      component="section"
      sx={{
        backgroundColor: '#FAF3E0',
        padding: { xs: '60px 16px', md: '100px 24px' },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', marginBottom: { xs: '36px', md: '52px' } }}>
          <Box
            sx={{
              width: '60px',
              height: '3px',
              backgroundColor: '#E8A020',
              margin: '0 auto 20px',
              borderRadius: '2px',
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              color: '#3B1F0A',
              fontSize: { xs: '34px', sm: '42px', md: '50px' },
              fontWeight: 700,
              letterSpacing: '-0.5px',
              marginBottom: '14px',
            }}
          >
            The Artisan Collection
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Jost', sans-serif",
              color: '#5C3D1E',
              fontSize: { xs: '15px', md: '17px' },
              maxWidth: '680px',
              margin: '0 auto 28px',
              lineHeight: 1.6,
            }}
          >
            Handcrafted miniature echoes of Indian classical instruments — each piece is sculpted
            with devotion, authentic proportions, and timeless heritage.
          </Typography>
        </Box>

        {/* 4-Card Responsive Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(4, minmax(0, 1fr))',
            },
            gap: { xs: 3, sm: 3, md: 3.5 },
            maxWidth: '1360px',
            margin: '0 auto',
          }}
        >
          {filteredInstruments.map((instrument) => {
            const isFlipped = flippedCards.includes(instrument.id)

            return (
              <Box
                key={instrument.id}
                onClick={() => handleCardFlip(instrument.id)}
                sx={{
                  position: 'relative',
                  height: { xs: '480px', sm: '510px', md: '530px' },
                  perspective: '1200px',
                  cursor: 'pointer',
                  borderRadius: '16px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    overflow: 'visible',
                    boxShadow: isFlipped
                      ? '0 20px 45px rgba(59, 31, 10, 0.28)'
                      : '0 12px 30px rgba(59, 31, 10, 0.12)',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(232, 160, 32, 0.35)',
                    transformStyle: 'preserve-3d',
                    WebkitTransformStyle: 'preserve-3d',
                    transition: 'transform 0.65s cubic-bezier(0.4, 0.0, 0.2, 1)',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* FRONT FACE — IMAGE + NAME ONLY */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '16px',
                      overflow: 'hidden',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(0deg) translateZ(1px)',
                      zIndex: isFlipped ? 0 : 2,
                      opacity: isFlipped ? 0 : 1,
                      visibility: isFlipped ? 'hidden' : 'visible',
                      transition: 'opacity 0.01s linear 0.31s, visibility 0.01s linear 0.31s',
                    }}
                  >
                    {/* Image */}
                    <Box
                      component="img"
                      src={instrument.image}
                      alt={instrument.name}
                      loading="lazy"
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'transform 0.6s ease',
                        '.MuiBox-root:hover &': {
                          transform: 'scale(1.04)',
                        },
                      }}
                    />

                    {/* Flip Hint Button */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 14,
                        left: 14,
                        right: 14,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        zIndex: 3,
                      }}
                    >
                      <IconButton
                        size="small"
                        aria-label="View story and details"
                        sx={{
                          backgroundColor: 'rgba(42, 20, 6, 0.72)',
                          backdropFilter: 'blur(8px)',
                          color: '#E8A020',
                          border: '1px solid rgba(232, 160, 32, 0.45)',
                          transition: 'all 0.25s ease',
                          '&:hover': {
                            backgroundColor: '#E8A020',
                            color: '#3B1F0A',
                            transform: 'rotate(180deg)',
                          },
                        }}
                      >
                        <FlipCameraAndroidIcon sx={{ fontSize: 16 }} />
                      </IconButton>
                    </Box>

                    {/* Bottom Vignette — Instrument Name Only */}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background:
                          'linear-gradient(to top, rgba(35, 16, 5, 0.95) 0%, rgba(35, 16, 5, 0.72) 50%, transparent 100%)',
                        padding: { xs: '30px 16px 20px', md: '38px 20px 24px' },
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: { xs: '26px', sm: '28px', md: '30px' },
                          fontWeight: 700,
                          color: '#FAF3E0',
                          lineHeight: 1.15,
                          textAlign: 'center',
                        }}
                      >
                        {instrument.name}
                      </Typography>
                    </Box>
                  </Box>

                  {/* BACK FACE — TEXT ONLY ON DARK MUSTARD */}
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '16px',
                      backgroundColor: '#C18F12',
                      backgroundImage:
                        'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.12), transparent 70%)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      padding: { xs: '22px 20px', md: '28px 24px' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg) translateZ(1px)',
                      zIndex: isFlipped ? 2 : 0,
                      opacity: isFlipped ? 1 : 0,
                      visibility: isFlipped ? 'visible' : 'hidden',
                      transition: 'opacity 0.01s linear 0.31s, visibility 0.01s linear 0.31s',
                    }}
                  >
                    {/* Return Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <IconButton
                        size="small"
                        aria-label="Return to photo"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCardFlip(instrument.id)
                        }}
                        sx={{
                          color: 'rgba(255, 255, 255, 0.85)',
                          border: '1px solid rgba(255, 255, 255, 0.35)',
                          padding: '4px',
                          '&:hover': {
                            color: '#8B6914',
                            backgroundColor: '#FFFFFF',
                          },
                        }}
                      >
                        <RestartAltIcon sx={{ fontSize: 16 }} />
                      </IconButton>
                    </Box>

                    {/* Name (Hindi + English) → Size → Description */}
                    <Box sx={{ textAlign: 'center' }}>
                      
                      <Typography
                        sx={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 700,
                          fontSize: { xs: '28px', md: '30px' },
                          color: '#FFFFFF',
                          lineHeight: 1.2,
                          marginBottom: '12px',
                        }}
                      >
                        {instrument.name}
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontWeight: 600,
                          fontSize: { xs: '20px', md: '24px' },
                          color: '#FFFFFF',
                          lineHeight: 1.15,
                          marginBottom: '4px',
                        }}
                      >
                        {instrument.hindiName}
                      </Typography>


                      <Box
                        sx={{
                          width: '44px',
                          height: '2px',
                          backgroundColor: 'rgba(255, 255, 255, 0.6)',
                          margin: '0 auto 14px',
                        }}
                      />

                      <Typography
                        sx={{
                          fontFamily: "'Jost', sans-serif",
                          color: '#FFFFFF',
                          fontSize: { xs: '13px', md: '13.5px' },
                          lineHeight: 1.65,
                        }}
                      >
                        {instrument.description}
                      </Typography>
                    </Box>

                    {/* Action Footer */}
                    <Box>
                      <Typography
                        sx={{
                          textAlign: 'center',
                          fontFamily: "'Jost', sans-serif",
                          fontSize: '11px',
                          color: 'rgba(255, 255, 255, 0.75)',
                          marginTop: '8px',
                        }}
                      >
                        Tap card to return to gallery view
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}

export default Collection
