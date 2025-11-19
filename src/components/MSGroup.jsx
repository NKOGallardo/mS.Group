import React, { useState, useEffect } from 'react';
import { Car, Phone, Mail, MapPin, Clock, Shield, Star } from 'lucide-react';
import './MSGroup.css'; // <--- Links to the styles

export default function MSGroup() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    date: '',
    time: ''
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = () => {
    if (formData.name && formData.phone && formData.pickup && formData.destination && formData.date && formData.time) {
      alert('Booking request submitted! We will contact you shortly.');
      setFormData({ name: '', phone: '', pickup: '', destination: '', date: '', time: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isInView = (offset) => {
    return scrollY > offset - 600;
  };

  return (
    <div className="main-app" style={{ cursor: 'none' }}>
      {/* Custom Cursor */}
      <div 
        className="cursor-outline"
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <div 
        className="cursor-dot"
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Header */}
      <header className="main-header">
        <div className="header-content">
          <div className="logo-container">
            <Car className="logo-icon" />
            <h1 className="logo-text">mS. Group</h1>
          </div>
          <nav className="nav-menu">
            <a href="#services" className="nav-link">Services</a>
            <a href="#fleet" className="nav-link">Fleet</a>
            <a href="#booking" className="nav-link">Book Now</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <a 
            href="https://wa.me/27717316712" 
            target="_blank" 
            rel="noopener noreferrer"
            className="call-now-btn"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            Call Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 
            className="hero-title"
            style={{
              opacity: scrollY < 100 ? 1 : 0.3,
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          >
            Luxury Travel Redefined
          </h2>
          <p 
            className="hero-subtitle"
            style={{
              opacity: scrollY < 100 ? 1 : 0.3,
              transform: `translateY(${scrollY * 0.3}px)`
            }}
          >
            Experience premium car taxi services with style, comfort, and sophistication
          </p>
          <a 
            href="#booking" 
            className="hero-cta-btn"
          >
            Book Your Ride
          </a>
        </div>
      </section>

      {/* Features */}
      <section id="services" className="features-section">
        <div className="section-content">
          <h3 
            className="section-title"
            style={{
              opacity: isInView(400) ? 1 : 0,
              transform: isInView(400) ? 'translateY(0)' : 'translateY(50px)'
            }}
          >
            Why Choose mS. Group
          </h3>
          <div className="features-grid">
            {[
              { icon: Shield, title: 'Safety First', text: 'Professional drivers, fully insured vehicles, and 24/7 monitoring for your peace of mind.' },
              { icon: Star, title: 'Premium Fleet', text: 'Latest luxury vehicles maintained to the highest standards for your comfort.' },
              { icon: Clock, title: 'Always On Time', text: 'Punctual service with real-time tracking and proactive communication.' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="feature-card"
                style={{
                  opacity: isInView(500) ? 1 : 0,
                  transform: isInView(500) ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                  transitionDelay: `${idx * 200}ms`
                }}
              >
                <item.icon className="feature-icon" />
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section id="fleet" className="fleet-section">
        <div className="section-content">
          <h3 
            className="section-title"
            style={{
              opacity: isInView(1000) ? 1 : 0,
              transform: isInView(1000) ? 'translateY(0)' : 'translateY(50px)'
            }}
          >
            Our Premium Fleet
          </h3>
          <div className="fleet-grid">
            {['Mercedes S-Class', 'BMW 7 Series', 'Audi A8'].map((car, idx) => (
              <div 
                key={idx} 
                className="fleet-card"
                style={{
                  opacity: isInView(1100) ? 1 : 0,
                  transform: isInView(1100) ? 'translateX(0) rotate(0deg)' : `translateX(${idx % 2 === 0 ? '-100px' : '100px'}) rotate(${idx % 2 === 0 ? '-5deg' : '5deg'})`,
                  transitionDelay: `${idx * 200}ms`
                }}
              >
                <div className="fleet-image-placeholder">
                  <Car className="fleet-car-icon" />
                </div>
                <div className="fleet-details">
                  <h4 className="card-title">{car}</h4>
                  <p className="fleet-subtitle">Executive sedan with premium amenities</p>
                  <ul className="fleet-amenities-list">
                    <li>• Leather interior</li>
                    <li>• Climate control</li>
                    <li>• WiFi & charging ports</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="booking-section">
        <div className="booking-container">
          <h3 
            className="section-title booking-title"
            style={{
              opacity: isInView(1800) ? 1 : 0,
              transform: isInView(1800) ? 'scale(1)' : 'scale(0.8)'
            }}
          >
            Book Your Luxury Ride
          </h3>
          <div 
            className="booking-form-card"
            style={{
              opacity: isInView(1900) ? 1 : 0,
              transform: isInView(1900) ? 'translateY(0)' : 'translateY(100px)'
            }}
          >
            <div className="booking-form-row">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="booking-input" />
              <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="booking-input" />
            </div>
            <div className="booking-form-field">
              <input type="text" name="pickup" placeholder="Pickup Location" value={formData.pickup} onChange={handleChange} className="booking-input full-width" />
            </div>
            <div className="booking-form-field">
              <input type="text" name="destination" placeholder="Destination" value={formData.destination} onChange={handleChange} className="booking-input full-width" />
            </div>
            <div className="booking-form-row">
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="booking-input" />
              <input type="time" name="time" value={formData.time} onChange={handleChange} className="booking-input" />
            </div>
            <button onClick={handleSubmit} className="booking-submit-btn">
              Request Booking
            </button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="section-content text-center">
          <h3 
            className="section-title"
            style={{
              opacity: isInView(2500) ? 1 : 0,
              transform: isInView(2500) ? 'translateY(0)' : 'translateY(50px)'
            }}
          >
            Get In Touch
          </h3>
          <div className="contact-grid">
            {[
              { icon: Phone, title: 'Call Us', text: '+1 (555) 123-4567' },
              { icon: Mail, title: 'Email Us', text: 'info@msgroup.com' },
              { icon: MapPin, title: 'Visit Us', text: '123 Luxury Lane, City' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="contact-card"
                style={{
                  opacity: isInView(2600) ? 1 : 0,
                  transform: isInView(2600) ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
                  transitionDelay: `${idx * 200}ms`
                }}
              >
                <item.icon className="contact-icon" />
                <h4 className="card-title">{item.title}</h4>
                <p className="card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="section-content text-center footer-text">
          <p>&copy; 2025 mS. Group. All rights reserved. Luxury redefined.</p>
          <p>Developed bye <a href='https://nkocoding.codes'>NKO</a></p>
        </div>
      </footer>
    </div>
  );
}