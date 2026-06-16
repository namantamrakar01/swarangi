const Hero = () => {
  const handleExplore = () => {
    const collectionSection = document.getElementById('collection')
    if (collectionSection) {
      collectionSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <video
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/dqn2dna4p/video/upload/v1781540951/swarangi/swarangi-instruments-bg.mp4"
          type="video/mp4"
        />
      </video>

      <div className="overlay"></div>

      <div className="content">
        <h1>Where Music Meets Craft</h1>
        <p>Handcrafted miniature Indian instruments, made with love</p>
        <button className="btn" onClick={handleExplore}>
          Explore Collection
        </button>
      </div>
    </section>
  )
}

export default Hero
