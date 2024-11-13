import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { HotelContext } from './HotelContext'; 
import './MainHotelPage.css';

function HotelListPage() {
  const { hotels, searchTerm, setSearchTerm } = useContext(HotelContext); 
  const navigate = useNavigate(); 

  const handleSearch = (event) => {
    setSearchTerm(event.target.value); 
  };

  const filteredHotels = hotels.filter((hotel) =>
    hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  const handleBookNow = (hotel) => {
    navigate(`/booking/${hotel.id}`, { state: { hotel } }); 
  };
  
  return (
    <div className="hotel-list-page">
      <header className="hotel-header">
        <div className="brand">
          <h1>Comfort Nest</h1>
        </div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by location"
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </header>

      <div className="hotel-list">
        {filteredHotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <div className="hotel-image">
              <img src={hotel.imageUrl} alt={hotel.name} />
            </div>
            <div className="hotel-info">
              <h2>{hotel.name}</h2>
              <p><strong>Location:</strong> {hotel.location}</p>
              <p><strong>Price:</strong> {hotel.price}</p>
              <p><strong>Rating:</strong> {hotel.rating} ⭐</p>
              <p><strong>Complementaries:</strong> {hotel.complementaries.join(', ')}</p>
              <p>{hotel.about}</p>
              <button className="book-button" onClick={() => handleBookNow(hotel)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelListPage;
