
import React, { createContext, useState } from 'react';

export const HotelContext = createContext();


export const HotelProvider = ({ children }) => {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: 'Grand Palace Hotel',
      location: 'Chennai',
      price: 'Rs.12000/night',
      rating: 4.5,
      about: 'Experience the luxury and comfort at Grand Palace, located in the heart of New York City.',
      complementaries: ['Free Breakfast', 'Free Wi-Fi', 'Gym Access'],
      imageUrl: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1729468800&semt=ais_hybrid',
    },
    {
      id: 2,
      name: 'Ocean Breeze Resort',
      location: 'Coimbatore',
      price: 'Rs.13000/night',
      rating: 4.3,
      about: 'Enjoy the serene view of the ocean at Ocean Breeze Resort, a perfect getaway.',
      complementaries: ['Free Parking', 'Free Wi-Fi', 'Spa Access'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JxgI2qCHTsxA7QPfdfjYhu9rf6CT_-1mAA&s',
    },
    {
      id: 3,
      name: 'Mountain View Inn',
      location: 'Pondichery',
      price: 'Rs.15000/night',
      rating: 4.7,
      about: 'Nestled in the mountains, Mountain View Inn offers a relaxing retreat.',
      complementaries: ['Free Breakfast', 'Mountain View', 'Hot Tub'],
      imageUrl: 'https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg',
    },
    {
      id: 4,
      name: 'City Lights Hotel',
      location: 'Madurai',
      price: 'Rs.7000/night',
      rating: 4.8,
      about: 'Stay at the heart of Las Vegas at City Lights Hotel and enjoy the nightlife.',
      complementaries: ['Casino Access', 'Free Drinks', 'VIP Club Access'],
      imageUrl: 'https://res.cloudinary.com/simpleview/image/upload/v1686072977/clients/milwaukee/VM_Hilton_Plaza_Suite_King_Room_9b5d673a-95c6-445e-ad6b-5ae85e260f18.jpg',
    },
    {
      id: 5,
      name: 'Grand Palace Hotel',
      location: 'Moonar',
      price: 'Rs.6500/night',
      rating: 4.5,
      about: 'Experience the luxury and comfort at Grand Palace, located in the heart of New York City.',
      complementaries: ['Free Breakfast', 'Free Wi-Fi', 'Gym Access'],
      imageUrl: 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.1.2113030492.1729468800&semt=ais_hybrid',
    },
    {
      id: 6,
      name: 'Ocean Breeze Resort',
      location: 'Sivakasi',
      price: 'Rs.6000/night',
      rating: 4.3,
      about: 'Enjoy the serene view of the ocean at Ocean Breeze Resort, a perfect getaway.',
      complementaries: ['Free Parking', 'Free Wi-Fi', 'Spa Access'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0JxgI2qCHTsxA7QPfdfjYhu9rf6CT_-1mAA&s',
    },
    {
      id: 7,
      name: 'Mountain View Inn',
      location: 'Yercaud',
      price: 'Rs.7000/night',
      rating: 4.7,
      about: 'Nestled in the mountains, Mountain View Inn offers a relaxing retreat.',
      complementaries: ['Free Breakfast', 'Mountain View', 'Hot Tub'],
      imageUrl: 'https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg',
    },
    {
      id: 8,
      name: 'City Lights Hotel',
      location: 'Madurai',
      price: 'Rs.6500/night',
      rating: 4.8,
      about: 'Stay at the heart of Madurai at City Lights Hotel and enjoy the cultural experience.',
      complementaries: ['Free Wi-Fi', 'City Tours', 'Complimentary Breakfast'],
      imageUrl: 'https://res.cloudinary.com/simpleview/image/upload/v1686072977/clients/milwaukee/VM_Hilton_Plaza_Suite_King_Room_9b5d673a-95c6-445e-ad6b-5ae85e260f18.jpg',
    },
    {
      id: 9,
      name: 'Tropical Paradise Resort',
      location: 'Kodaikanal',
      price: '8000/night',
      rating: 4.9,
      about: 'Escape to Tropical Paradise Resort, where the pristine beaches and azure waters await.',
      complementaries: ['Private Beach', 'Free Snorkeling', 'All-Inclusive Meals'],
      imageUrl: 'https://plus.unsplash.com/premium_photo-1678297270385-ad5067126607?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww',
    },
    {
      id: 10,
      name: 'Royal Heritage Hotel',
      location: 'Ooty',
      price: 'Rs.11000/night',
      rating: 4.6,
      about: 'A regal stay awaits you at Royal Heritage Hotel, offering a glimpse of Rajasthan\'s rich history.',
      complementaries: ['Heritage Walk', 'Free Breakfast', 'Traditional Folk Shows'],
      imageUrl: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg',
    },
    {
      id: 11,
      name: 'Skyline Tower Hotel',
      location: 'Tiruppur',
      price: 'Rs.8500/night',
      rating: 4.9,
      about: 'Experience the dazzling skyline and luxurious amenities at Skyline Tower in Dubai.',
      complementaries: ['Infinity Pool', 'Free Airport Transfer', 'Access to Rooftop Bar'],
      imageUrl: 'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/900/450/75/dam/wdpro-assets/dlr/places-to-stay/disneyland-hotel/resort-overview/disneyland-hotel-06.jpg?1723533862220',
    },
    {
      id: 12,
      name: 'Safari Lodge',
      location: 'Coimbatore',
      price: 'Rs.7500/night',
      rating: 4.7,
      about: 'Stay amidst nature at Safari Lodge, where wildlife sightings are part of the experience.',
      complementaries: ['Safari Tour', 'All Meals Included', 'Cultural Dance Shows'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSaaWsADm-F8fPVo1qEv8MUNLBSUcTA9oXA&s',
    },
    {
      id: 13,
      name: 'Alpine Retreat',
      location: 'Thanjavur',
      price: 'Rs.8000/night',
      rating: 4.8,
      about: 'Unwind in the serene surroundings of the Swiss Alps at Alpine Retreat.',
      complementaries: ['Ski Pass', 'Free Breakfast', 'Spa Access'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQick28y00sR1UUhWn8x2leFmev3kEpOb4Y8w&s',
    },
    {
      id: 14,
      name: 'Urban Luxe Hotel',
      location: 'Nagerkovil',
      price: 'Rs.7000/night',
      rating: 4.6,
      about: 'Experience the fusion of modern luxury and historic charm at Urban Luxe in London.',
      complementaries: ['Free Breakfast', 'City Guide', 'Gym Access'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsnjx001ElbWv7pBT6k3ozorcjQOlfm-GYw&s'
    },
    {
      id: 15,
      name: 'Skyline Tower Hotel',
      location: 'Kanchipuram',
      price: 'Rs.10000/night',
      rating: 4.9,
      about: 'Experience the dazzling skyline and luxurious amenities at Skyline Tower in Dubai.',
      complementaries: ['Infinity Pool', 'Free Airport Transfer', 'Access to Rooftop Bar'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVBBG2nPwGQPO3qiCbizRb7Bu8MbjdHHCdg&s',
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <HotelContext.Provider value={{ hotels, searchTerm, setSearchTerm }}>
      {children}
    </HotelContext.Provider>
  );
};
export default HotelContext;