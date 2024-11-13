
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignUp';
import HomePage from './HomePage';
import HotelListPage from './Context/MainHotelPage';
import BookingPage from './BookingPage'; 
import MyBookings from './MyBookings';
function App() {
  return (
    <div>
      <Routes>
      <Route path="/hotel" element={<HotelListPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/hotels" element={<HotelListPage />} />
        <Route path="/booking/:id" element={<BookingPage />} /> 
      </Routes>
    </div>
  );
}

export default App;

