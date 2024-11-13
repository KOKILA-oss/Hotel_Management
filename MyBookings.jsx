/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyBookings.css'; // Optional CSS file for styling

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get the logged-in user's details from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setUser(loggedInUser);
      // Fetch bookings for the logged-in user
      axios.get('http://localhost:5000/bookings')
        .then(response => {
          const userBookings = response.data.filter(booking => booking.customerEmail === loggedInUser.email);
          setBookings(userBookings);
        })
        .catch(error => {
          console.error('Error fetching bookings:', error);
        });
    }
  }, []);

  if (!user) {
    return <p>Please log in to view your bookings.</p>;
  }

  return (
    <div className="my-bookings">
      <h1>My Bookings</h1>
      <div className="user-info">
        <p><strong>Name:</strong> {user.fullName}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      {bookings.length > 0 ? (
        <div className="bookings-list">
          {bookings.map(booking => (
            <div key={booking.id} className="booking-item">
              <h3>{booking.hotelName}</h3>
              <p><strong>Location:</strong> {booking.location}</p>
              <p><strong>Price:</strong> {booking.price}</p>
              <p><strong>Room Type:</strong> {booking.roomType}</p>
              <p><strong>Meal Plan:</strong> {booking.mealPlan}</p>
              <p><strong>Booking Date:</strong> {booking.date}</p>
              <p><strong>Special Requests:</strong> {booking.specialRequest || 'None'}</p>
              <p><strong>Booked On:</strong> {new Date(booking.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No bookings found for your account.</p>
      )}
    </div>
  );
};

export default MyBookings;*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyBookings.css';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    if (loggedInUser) {
      setUser(loggedInUser);
      axios.get('http://localhost:5000/bookings')
        .then(response => {
          const userBookings = response.data.filter(booking => booking.customerEmail === loggedInUser.email);
          setBookings(userBookings);
        })
        .catch(error => {
          console.error('Error fetching bookings:', error);
        });
    }
  }, []);

  const handleCancelBooking = (bookingId) => {
    // Delete booking from db.json
    axios.delete(`http://localhost:5000/bookings/${bookingId}`)
      .then(() => {
        // Remove the booking from the state
        setBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
        alert('Booking cancelled successfully.');
      })
      .catch(error => {
        console.error('Error cancelling booking:', error);
        alert('There was an error cancelling the booking. Please try again.');
      });
  };

  if (!user) {
    return <p>Please log in to view your bookings.</p>;
  }

  return (
    <div className="my-bookings">
      <h1>My Bookings</h1>
      <div className="user-info">
        <p><strong>Name:</strong> {user.fullName}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      {bookings.length > 0 ? (
        <div className="bookings-list">
          {bookings.map(booking => (
            <div key={booking.id} className="booking-item">
              <h3>{booking.hotelName}</h3>
              <p><strong>Location:</strong> {booking.location}</p>
              <p><strong>Price:</strong> {booking.price}</p>
              <p><strong>Room Type:</strong> {booking.roomType}</p>
              <p><strong>Meal Plan:</strong> {booking.mealPlan}</p>
              <p><strong>Booking Date:</strong> {booking.date}</p>
              <p><strong>Special Requests:</strong> {booking.specialRequest || 'None'}</p>
              <p><strong>Booked On:</strong> {new Date(booking.createdAt).toLocaleDateString()}</p>
              <button 
                className="cancel-button" 
                onClick={() => handleCancelBooking(booking.id)}
              >
                Cancel Booking
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No bookings found for your account.</p>
      )}
    </div>
  );
};

export default MyBookings;
