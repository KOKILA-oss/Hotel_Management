
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import { FaUserCircle } from 'react-icons/fa';

function HomePage() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  
  const handleProfileClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  
  const handleMyBookingsClick = () => {
    navigate('/my-bookings'); 
  };

  const handleBookHotelClick = () => {
    navigate('/hotels');
  };

  const handleAuthClick = () => {
    navigate('/login');
  };

  return (
    <div className="homepage">
      <header className="header">
        <h1 className="brand-title">Comfort Nest</h1>
        <nav className="nav-links">
          <a href="#about-us">About Us</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
          {isLoggedIn ? (
            <div className="profile-container">
              <FaUserCircle
                className="profile-icon"
                onClick={handleProfileClick}
                size={30}
              />
              {isProfileMenuOpen && (
                <div className="profile-menu">
                  <ul>
                    <li style={{color:'black'}} onClick={handleMyBookingsClick}>My Bookings</li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button onClick={handleAuthClick} className="nav-button">
              Sign Up/Login
            </button>
          )}
        </nav>
      </header>
      <section id="home" className="hero">
        <h2>Welcome to Comfort Nest</h2>
        <p style={{color:'orange'}}>Where Exquisite Luxury Meets Absolute Comfort</p>
        <button onClick={handleBookHotelClick} className="book-hotel-button">
          Book Hotel
        </button>
      </section>

      <section id="features" className="features">
        <h3 style={{color:'white'}}>Our Features</h3>
        <div className="feature-cards">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhMzhDUuTIkwnYicGkU8_lSqRzwVXBfnQMmA&s"
              alt="Exquisite Rooms"
              className="feature-image"
            />
            <h4>Exquisite Rooms</h4>
            <p>Experience unparalleled comfort and luxury.</p>
          </div>
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZrsvlslMqC-pt0CFGOr-8sspOU85UETZ66A&s"
              alt="World-Class Dining"
              className="feature-image"
            />
            <h4>World-Class Dining</h4>
            <p>Indulge in gourmet meals prepared by top chefs.</p>
          </div>
          <div className="card">
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/spa-hotels-8-1501007134.jpg"
              alt="Spa & Wellness"
              className="feature-image"
            />
            <h4>Spa & Wellness</h4>
            <p>Relax and rejuvenate with our premium spa services.</p>
          </div>
        </div>
      </section>

      <section id="about-us" className="about-us">
        <h3 style={{color:'white'}}>About Us</h3>
        <p>
          At Comfort Nest, we believe that hospitality is an art form. Our mission is to
          craft memorable experiences that go beyond mere accommodation. Nestled in the
          heart of Coimbatore, our hotel blends contemporary elegance with timeless charm,
          offering a sanctuary of luxury and tranquility.
        </p>
      </section>

      <section id="contact" className="contact">
        <h3 style={{color:'white'}}>Contact Us</h3>
        <p>
          We’d love to hear from you! Send your inquiries to{' '}
          <a href="mailto:info@comfortnest.com">info@comfortnest.com</a>, and we’ll
          respond promptly.
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Comfort Nest. All rights reserved.</p>
      </footer>
    
      
    </div>
  );
}

export default HomePage;
