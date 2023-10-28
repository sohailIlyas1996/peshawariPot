import React, { useState } from 'react';
import Form from './Form';

function Menu() {
  const images = [
    { src: '/img1.jpg', name: 'Pizza', details: 'Chicken tikka pizza wanted by all' },
    { src: '/img2.jpg', name: 'Lamb Curry', details: 'Best Lamb curry with spicy terka' },
    { src: '/img3.jpg', name: 'Mix Vegitable', details: 'Delicious Vegitable' },{ src: '/daal.jpg', name: 'Daal', details: 'Daal with Desi ghee terka ' },
    { src: '/pulao.jpg', name: 'Pulao', details: 'Kabli pulao with great ingredient' },
    { src: '/chicken.jpg', name: 'Chicken Curry', details: 'Desi Chicken Curry ' },{ src: '/biryani.jpg', name: 'Biryani', details: 'Sindhi Biryani for biryani lovers' },
    { src: '/nan.jpg', name: 'Nan', details: 'Kulcha Nan' },
    { src: '/kabab.jpg', name: 'Chapal Kabab', details: 'Chapal Kabab Peshwari taste' },
    // Add more images with names and details as needed
  ];

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className='h-screen flex flex-col items-center mb-400 '>
      <div className='text-3xl md:text-5xl lg:text-8xl underline m-10'>
        <h1>Our Menu </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative bg-white p-4 rounded-md shadow-md cursor-pointer"
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-lg font-semibold">{image.name}</h2>

            {/* Details container */}
            {hoveredItem === index && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white">
                <h3 className="text-2xl font-bold mb-2">{image.name}</h3>
                <p>{image.details}</p>
                {/* Add more details if needed */}
              </div>
            )}
          </div>
        ))}
      </div>
      <Form/>
    </div>
  );
}

export default Menu;
