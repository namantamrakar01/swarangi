import { CssBaseline } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Collection from './components/Collection'
import Contact from './components/Contact'
import FloatingInstagramButton from './components/FloatingInstagramButton'

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Collection />
      <Contact />
      <FloatingInstagramButton />
    </>
  )
}

export default App

