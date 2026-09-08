import { CssBaseline } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Collection from './components/Collection'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Collection />
      <Contact />
    </>
  )
}

export default App
