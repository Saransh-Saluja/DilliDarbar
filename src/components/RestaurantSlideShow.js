import React, { useState, useEffect } from 'react';

const RestaurantSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  // Restaurant images
  const images = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1552566595-bfd47e5aed08?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
  ];

  // Auto change images every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] relative overflow-hidden rounded-lg shadow-2xl">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            animation: index === currentImage 
              ? 'zoomInOut 3.5s ease-in-out infinite' 
              : 'none'
          }}
        />
      ))}
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes zoomInOut {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default RestaurantSlideshow;