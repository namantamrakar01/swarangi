import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <div className="divider"></div>
          <h2>Get in Touch</h2>
          <p className="subtitle">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="info-grid">
          <div className="info-item">
            <Mail size={32} style={{ color: '#E8A020', margin: '0 auto 16px' }} />
            <h3>Email</h3>
            <a href="mailto:hello@swarangi.com">hello@swarangi.com</a>
          </div>

          <div className="info-item">
            <Phone size={32} style={{ color: '#E8A020', margin: '0 auto 16px' }} />
            <h3>Phone</h3>
            <a href="tel:+919876543210">+91 98765 43210</a>
          </div>

          <div className="info-item">
            <MapPin size={32} style={{ color: '#E8A020', margin: '0 auto 16px' }} />
            <h3>Location</h3>
            <p>Jaipur, India</p>
          </div>
        </div>

        <div className="form-container">
          <form>
            <div className="form-row">
              <input
                type="text"
                placeholder="Your Name"
              />
              <input
                type="email"
                placeholder="Your Email"
              />
            </div>
            <textarea
              placeholder="Your Message"
            ></textarea>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
