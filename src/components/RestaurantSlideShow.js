// import React, { useState, useEffect } from 'react';

// const RestaurantSlideshow = () => {
//   const [currentImage, setCurrentImage] = useState(0);
  
//   // Restaurant images
//   const images = [
//     'landing/landing-1.webp',
//     'landing/landing-1.webp',
//     'landing/landing-1.webp',
//     'landing/landing-1.webp'
//   ];

//   // Auto change images every 3.5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 3500);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] relative overflow-hidden rounded-lg shadow-2xl">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//             index === currentImage ? 'opacity-100' : 'opacity-0'
//           }`}
//           style={{
//             backgroundImage: `url(${image})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             animation: index === currentImage 
//               ? 'zoomInOut 3.5s ease-in-out infinite' 
//               : 'none'
//           }}
//         />
//       ))}
      
//       {/* Navigation dots */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentImage(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               index === currentImage ? 'bg-white' : 'bg-white/50'
//             }`}
//           />
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes zoomInOut {
//           0% { transform: scale(1); }
//           50% { transform: scale(1.05); }
//           100% { transform: scale(1); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default RestaurantSlideshow;

import React, { useState, useEffect } from 'react';

const RestaurantSlideshow = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Restaurant images
  const images = [
    'landing/landing-2.avif',
    'landing/landing-4.jpg',
    'landing/landing-3.jpg',
    'landing/landing-1.png',
  ];

  // Auto change images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] relative overflow-hidden rounded-2xl shadow-2xl bg-black">
      {/* Gradient overlay for sophistication */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-20 pointer-events-none" />
      
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ease-out ${
            index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <div
            className={`w-full h-full bg-cover bg-center transition-transform duration-4000 ease-out ${
              index === currentImage ? 'animate-ken-burns' : ''
            }`}
            style={{
              backgroundImage: `url(${image})`,
              filter: index === currentImage ? 'brightness(1.1) contrast(1.05)' : 'brightness(0.8)'
            }}
          />
        </div>
      ))}
      
      {/* Elegant navigation dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`relative transition-all duration-500 ease-out hover:scale-125 ${
              index === currentImage ? 'w-8 h-2' : 'w-2 h-2'
            }`}
          >
            <div
              className={`w-full h-full rounded-full transition-all duration-500 backdrop-blur-sm ${
                index === currentImage 
                  ? 'bg-white shadow-lg shadow-white/30' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
            />
            {index === currentImage && (
              <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Elegant side navigation arrows */}
      <button
        onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 group opacity-0 hover:opacity-100 focus:opacity-100"
      >
        <svg className="w-6 h-6 text-white transform transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 group opacity-0 hover:opacity-100 focus:opacity-100"
      >
        <svg className="w-6 h-6 text-white transform transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-40">
          <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}

      <style jsx>{`
        @keyframes ken-burns {
          0% { 
            transform: scale(1) rotate(0deg);
          }
          50% { 
            transform: scale(1.08) rotate(0.5deg);
          }
          100% { 
            transform: scale(1.05) rotate(0deg);
          }
        }
        
        .animate-ken-burns {
          animation: ken-burns 4s ease-in-out infinite;
        }
        
        .duration-4000 {
          transition-duration: 4000ms;
        }
        
        /* Smooth hover effects */
        button:focus {
          outline: none;
        }
        
        /* Glass morphism effect */
        .backdrop-blur-md {
          backdrop-filter: blur(12px);
        }
      `}</style>
    </div>
  );
};

export default RestaurantSlideshow;