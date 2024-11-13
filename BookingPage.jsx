
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './BookingPage.css';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel, bookingId } = location.state; 

  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [roomType, setRoomType] = useState('standard');
  const [mealPlan, setMealPlan] = useState('breakfast');
  const [specialRequest, setSpecialRequest] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleConfirmBooking = async () => {
    setLoading(true);
    setError('');

    try {
      const bookingData = {
        hotelId: hotel.id,
        hotelName: hotel.name,
        price: hotel.price,
        location: hotel.location,
        date: bookingDate,
        customerName,
        customerEmail,
        roomType,
        mealPlan,
        specialRequest,
        createdAt: new Date().toISOString(),
      };

      await axios.post('http://localhost:5000/bookings', bookingData);

      alert(`Booking confirmed for ${hotel.name}!`);
      navigate('/');
    } catch (err) {
      console.error('Error confirming booking:', err);
      setError('There was an error confirming the booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div className="booking-page">
      <h1>Booking Confirmation</h1>
      <div className="hotel-details">
        <img src={hotel.imageUrl} alt={hotel.name} />
        <h2>{hotel.name}</h2>
        <p><strong>Location:</strong> {hotel.location}</p>
        <p><strong>Price:</strong> {hotel.price}</p>
        <p><strong>Rating:</strong> {hotel.rating} ⭐</p>
        <p><strong>Complementaries:</strong> {hotel.complementaries.join(', ')}</p>
        <p>{hotel.about}</p>
      </div>

      <h3>Customer Details</h3>
      <div className="customer-details">
        <input
          type="text"
          placeholder="Your Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          required
        />
      </div>

      <h3>Booking Date</h3>
      <input
        type="date"
        value={bookingDate}
        onChange={(e) => setBookingDate(e.target.value)}
        required
      />

      <h3>Room Preferences</h3>
      <label>
        Room Type:
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option value="standard">Standard</option>
          <option value="deluxe">Deluxe</option>
          <option value="suite">Suite</option>
        </select>
      </label>

      <h3>Meal Plan</h3>
      <label>
        Meal Plan:
        <select value={mealPlan} onChange={(e) => setMealPlan(e.target.value)}>
          <option value="breakfast">Breakfast</option>
          <option value="half-board">Half-Board</option>
          <option value="full-board">Full-Board</option>
        </select>
      </label>

      <h3>Special Requests</h3>
      <textarea
        placeholder="Any special requests?"
        value={specialRequest}
        onChange={(e) => setSpecialRequest(e.target.value)}
      ></textarea>

      {error && <p className="error-message">{error}</p>}

      <button className="confirm-button" onClick={handleConfirmBooking} disabled={loading}>
        {loading ? 'Confirming...' : 'Confirm Booking'}
      </button>

     
      
    </div>
  );
};

export default BookingPage;

