// import React, { useState, useEffect } from 'react';

// const RestaurantSlideshow = () => {
//   const [currentImage, setCurrentImage] = useState(0);
//   const [isLoaded, setIsLoaded] = useState(false);
  
//   // Restaurant images
//   const images = [
//     'landing/landing-2.avif',
//     'landing/landing-4.jpg',
//     'landing/landing-3.jpg',
//     'landing/landing-1.png',
//   ];

//   // Auto change images every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % images.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     setIsLoaded(true);
//   }, []);

//   return (
//     <div className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] relative overflow-hidden rounded-2xl shadow-2xl bg-black">
//       {/* Gradient overlay for sophistication */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-20 pointer-events-none" />
      
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-all duration-1500 ease-out ${
//             index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
//           }`}
//         >
//           <div
//             className={`w-full h-full bg-cover bg-center transition-transform duration-4000 ease-out ${
//               index === currentImage ? 'animate-ken-burns' : ''
//             }`}
//             style={{
//               backgroundImage: `url(${image})`,
//               filter: index === currentImage ? 'brightness(1.1) contrast(1.05)' : 'brightness(0.8)'
//             }}
//           />
//         </div>
//       ))}
      
//       {/* Elegant navigation dots */}
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentImage(index)}
//             className={`relative transition-all duration-500 ease-out hover:scale-125 ${
//               index === currentImage ? 'w-8 h-2' : 'w-2 h-2'
//             }`}
//           >
//             <div
//               className={`w-full h-full rounded-full transition-all duration-500 backdrop-blur-sm ${
//                 index === currentImage 
//                   ? 'bg-white shadow-lg shadow-white/30' 
//                   : 'bg-white/60 hover:bg-white/80'
//               }`}
//             />
//             {index === currentImage && (
//               <div className="absolute inset-0 rounded-full bg-white/30 animate-pulse" />
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Elegant side navigation arrows */}
//       <button
//         onClick={() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length)}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 group opacity-0 hover:opacity-100 focus:opacity-100"
//       >
//         <svg className="w-6 h-6 text-white transform transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>

//       <button
//         onClick={() => setCurrentImage((prev) => (prev + 1) % images.length)}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 group opacity-0 hover:opacity-100 focus:opacity-100"
//       >
//         <svg className="w-6 h-6 text-white transform transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>

//       {/* Loading indicator */}
//       {!isLoaded && (
//         <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-40">
//           <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
//         </div>
//       )}

//       <style jsx>{`
//         @keyframes ken-burns {
//           0% { 
//             transform: scale(1) rotate(0deg);
//           }
//           50% { 
//             transform: scale(1.08) rotate(0.5deg);
//           }
//           100% { 
//             transform: scale(1.05) rotate(0deg);
//           }
//         }
        
//         .animate-ken-burns {
//           animation: ken-burns 4s ease-in-out infinite;
//         }
        
//         .duration-4000 {
//           transition-duration: 4000ms;
//         }
        
//         /* Smooth hover effects */
//         button:focus {
//           outline: none;
//         }
        
//         /* Glass morphism effect */
//         .backdrop-blur-md {
//           backdrop-filter: blur(12px);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default RestaurantSlideshow;

'use client'
import { Cinzel } from "next/font/google";
import React, { useState, useEffect } from 'react';
import { Utensils, Calendar, ArrowRight,} from 'lucide-react';
import Link from "next/link";


const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"], // choose weights you need
});

const RestaurantSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
const slides = [
  {
    image: "landing/landing-2.avif",
    title: "Exquisite Flavors",
    subtitle: "Where tradition meets innovation"
  },
  {
    image: "landing/landing-4.jpg",
    title: "Culinary Artistry",
    subtitle: "Crafted with passion, served with pride"
  },
  {
    image: "landing/landing-1.png",
    title: "Unforgettable Ambience",
    subtitle: "Creating memories one dish at a time"
  }
];

useEffect(() => {
  setIsLoaded(true);
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);

return (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background Images */}
    {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
    ))}

    {/* Content Overlay */}
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      {/* Restaurant Name */}
      <div className={`mb-8 transition-all duration-1000 delay-500 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#e3c493] mb-4 tracking-wider">
          DILLI DARBAR
        </h1>
        <div className="flex justify-center mb-4">
          <svg width="60" height="15" viewBox="0 0 60 15" className="text-[#e3c493]">
            <path d="M5 7.5h50M2 4l3 3.5-3 3.5M58 4l-3 3.5 3 3.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        <p className="font-serif text-xl md:text-2xl text-[#fdfbf5] tracking-widest">
          INDIAN CUISINE
        </p>
      </div>

      {/* Dynamic Subtitle */}
      <div className={`mb-12 transition-all duration-1000 delay-700 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className="font-serif text-2xl md:text-4xl text-[#fdfbf5] mb-4">
          {slides[currentSlide].title}
        </h2>
        <p className="font-serif text-lg md:text-xl text-[#e3c493] italic">
          {slides[currentSlide].subtitle}
        </p>
      </div>


      {/* CTA Buttons */}
<div className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-1000 delay-1000 ${
  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
}`}>
  {/* View Our Menu */}
  <a 
    href="/menu" 
    className="group bg-[#e3c493] text-black px-8 py-4 font-serif text-lg font-medium hover:bg-[#f9e4b7] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
  >
    <Utensils className="w-5 h-5 group-hover:scale-110 transition-transform" />
    View Our Menu
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </a>

  {/* Make Reservation (WhatsApp) */}
  <Link
    href="tel:+15085992222" 
    className="group border-2 border-[#e3c493] text-[#e3c493] px-8 py-4 font-serif text-lg font-medium hover:bg-[#e3c493] hover:text-black transition-all duration-300 flex items-center justify-center gap-2"
  >
    <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
    Make Reservation
  </Link>
</div>


      {/* Slide Indicators */}
      <div className="flex justify-center mt-12 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-[#e3c493] scale-125' : 'bg-[#e3c493]/40 hover:bg-[#e3c493]/70'
            }`}
          />
        ))}
      </div>
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#e3c493] animate-bounce">
      <div className="flex flex-col items-center">
        <span className="font-serif text-sm mb-2 tracking-wider">DISCOVER MORE</span>
        <div className="w-px h-8 bg-[#e3c493]"></div>
      </div>
    </div>
  </section>
);
};


export default RestaurantSlideshow;
