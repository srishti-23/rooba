
import React, { useState, useEffect } from 'react';
import img1 from '../assets/asset1.jpg';
import img2 from '../assets/asset2.jpg';

import img4 from '../assets/concert.jpg';

const images = [img1, img2, img4];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length));
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-60 left-0  w-auto h-auto z-10  max-w-6xl ">
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-[120%] h-96 flex-shrink-0 px-2">
            <img src={image} alt={`Slide ${index}`} className="w-full h-full" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
       
      </div>
    </div>
  );
};

export default CarouselComponent;
