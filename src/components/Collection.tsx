const Collection = () => {
  const instruments = [
    {
      id: 1,
      name: 'Miniature Sitar',
      description: 'A delicate replica of the classical Indian stringed instrument',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600',
    },
    {
      id: 2,
      name: 'Tiny Tabla',
      description: 'Perfectly tuned percussion instrument for rhythm and melody',
      image: 'https://images.unsplash.com/photo-1574263760853-e8e5e7e1b0f2?w=600',
    },
    {
      id: 3,
      name: 'Miniature Sarangi',
      description: 'Handcrafted bowed string instrument with warm, soulful tones',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600',
    },
    {
      id: 4,
      name: 'Tiny Flute',
      description: 'Delicate wind instrument inspired by the classical bansuri',
      image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600',
    },
  ]

  return (
    <section id="collection" className="collection">
      <div className="container">
        <div className="section-header">
          <div className="divider"></div>
          <h2>Our Collection</h2>
        </div>

        <div className="grid">
          {instruments.map((instrument) => (
            <div key={instrument.id} className="card">
              <img
                src={instrument.image}
                alt={instrument.name}
              />
              <div className="card-content">
                <h3>{instrument.name}</h3>
                <p>{instrument.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collection
