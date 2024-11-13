import React, { createContext, useState } from 'react';
export const HotelContext = createContext();
export const HotelProvider = ({ children }) => {
  const hotels = [
    {
      id: 1,
      name: 'Grand Palace Hotel',
      location: 'New York',
      price: '$200/night',
      rating: 4.5,
      about: 'Experience the luxury and comfort at Grand Palace, located in the heart of New York City.',
      complementaries: ['Free Breakfast', 'Free Wi-Fi', 'Gym Access'],
      imageUrl: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1729468800&semt=ais_hybrid',
    },
    {
      id: 2,
      name: 'Ocean Breeze Resort',
      location: 'California',
      price: '$180/night',
      rating: 4.3,
      about: 'Enjoy the serene view of the ocean at Ocean Breeze Resort, a perfect getaway.',
      complementaries: ['Free Parking', 'Free Wi-Fi', 'Spa Access'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JxgI2qCHTsxA7QPfdfjYhu9rf6CT_-1mAA&s',
    },
   
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const filteredHotels = hotels.filter((hotel) =>
    hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <HotelContext.Provider value={{ filteredHotels, searchTerm, setSearchTerm }}>
      {children}
    </HotelContext.Provider>
  );
};
export default HotelProvider;