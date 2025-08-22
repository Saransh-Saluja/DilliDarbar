// 'use client'
// import React, { useState } from 'react';

// const MenuItem = ({ slug, title, price, subtitle, description }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleClick = () => {
//     setIsFlipped(!isFlipped);
//   };

//   // Default description if none provided
//   const defaultDescription = `Experience the authentic flavors of ${title}. Our chefs have carefully crafted this dish using traditional techniques and the finest ingredients to create a memorable dining experience that will delight your taste buds.`;

//   return (
//     <div className="cursor-pointer group" onClick={handleClick}>
//       <div className="menu-item-container relative w-full h-auto min-h-[100px] transition-transform duration-700" style={{
//         transformStyle: 'preserve-3d',
//         transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
//       }}>
//         {/* Front Side */}
//         <div className="absolute inset-0 w-full backface-hidden p-4 border-b border-gray-800 hover:bg-[#1a1a1a] transition-colors duration-300 rounded-lg" style={{
//           backfaceVisibility: 'hidden'
//         }}>
//           <div className="flex items-center justify-between mb-2">
//             <div className="flex-1">
//               <h3 className="text-xl font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300">
//                 {title}
//               </h3>
//             </div>
//             <div className="flex-shrink-0 mx-4 flex-1 border-b border-dotted border-gray-600 self-end mb-2"></div>
//             <div className="flex-shrink-0">
//               <span className="text-xl font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300">
//                 ${price}
//               </span>
//             </div>
//           </div>
//           <div className="text-sm text-[#e3c493] italic group-hover:text-[#f9e4b7] transition-colors duration-300">
//             {subtitle}
//           </div>
//         </div>

//         {/* Back Side */}
//         <div className="absolute inset-0 w-full backface-hidden p-4 border-b border-gray-800 hover:bg-[#1a1a1a] transition-colors duration-300 rounded-lg" style={{
//           backfaceVisibility: 'hidden',
//           transform: 'rotateY(180deg)'
//         }}>
//           <div className="h-full flex flex-col justify-center min-h-[92px]">
//             <h3 className="text-md font-semibold font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300 mb-2">
//               About {title}
//             </h3>
//             <p className="text-sm text-[#e3c493] group-hover:text-[#f9e4b7] transition-colors duration-300 leading-relaxed mb-2">
//               {description || defaultDescription}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MenuImage = ({ menuImage, className = "" }) => (
//   <div className={`flex-shrink-0 ${className}`}>
//     <div className="w-64 h-80 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
//       {menuImage ? (
//         <img 
//           src={menuImage} 
//           alt="menu display" 
//           className="w-full h-full object-cover rounded-lg"
//           style={{ imageRendering: 'crisp-edges' }}
//         />
//       ) : (
//         <div className="text-center p-8">
//           <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"/>
//             </svg>
//           </div>
//           <p className="text-gray-400 font-serif">Menu Display</p>
//         </div>
//       )}
//     </div>
//   </div>
// );

// // Two Column Menu Component
// const TwoColumnMenu = ({ sectionHeading, leftColumn, rightColumn, menuImage, title, subtitle }) => {
//   return (
//     <section className="bg-black py-16 px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Title Section */}
//         <div className="text-center mb-12">
//           <div className="mb-4">
//             <p className="text-lg font-serif text-[#e3c493] mb-2">
//               {subtitle}
//             </p>
//             <div className="flex justify-center mb-4">
//               <svg width="40" height="10" viewBox="0 0 40 10" className="text-[#e3c493]">
//                 <path d="M5 5h30M2 2l3 3-3 3M38 2l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//               </svg>
//             </div>
//           </div>
//           <h1 className="text-5xl font-serif text-[#e3c493] mb-2">{title}</h1>
//         </div>

//         {/* Section Title */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-serif text-[#e3c493] border-b-2 border-amber-600 pb-2 inline-block w-1/4">
//             {sectionHeading}
//           </h2>
//         </div>

//         {/* Menu Content - Two Columns with Center Image */}
//         <div className="flex flex-col lg:flex-row gap-8 items-start">
//           <div className="flex-1">
//             <div className="space-y-2">
//               {leftColumn.map((item, index) => (
//                 <MenuItem key={index} {...item} />
//               ))}
//             </div>
//           </div>
          
//           <MenuImage menuImage={menuImage} className="lg:mx-8" />
          
//           <div className="flex-1">
//             <div className="space-y-2">
//               {rightColumn.map((item, index) => (
//                 <MenuItem key={index} {...item} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TwoColumnMenu;


// 'use client'
// import React, { useState } from 'react';

// const MenuItem = ({ slug, title, price, subtitle, description }) => {
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleClick = () => {
//     setIsFlipped(!isFlipped);
//   };

//   // Default description if none provided
//   const defaultDescription = `Experience the authentic flavors of ${title}. Our chefs have carefully crafted this dish using traditional techniques and the finest ingredients to create a memorable dining experience that will delight your taste buds.`;

//   return (
//     <div className="cursor-pointer group" onClick={handleClick}>
//       <div className="menu-item-container relative w-full h-auto min-h-[100px] transition-transform duration-700" style={{
//         transformStyle: 'preserve-3d',
//         transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
//       }}>
//         {/* Front Side */}
//         <div className="absolute inset-0 w-full backface-hidden p-4 border-b border-gray-800 hover:bg-[#1a1a1a] transition-colors duration-300 rounded-lg" style={{
//           backfaceVisibility: 'hidden'
//         }}>
//           <div className="flex items-center justify-between mb-2">
//             <div className="flex-1">
//               <h3 className="text-xl font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300">
//                 {title}
//               </h3>
//             </div>
//             <div className="flex-shrink-0 mx-4 flex-1 border-b border-dotted border-gray-600 self-end mb-2"></div>
//             <div className="flex-shrink-0">
//               <span className="text-xl font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300">
//                 ${price}
//               </span>
//             </div>
//           </div>
//           <div className="text-sm text-[#e3c493] italic group-hover:text-[#f9e4b7] transition-colors duration-300">
//             {subtitle}
//           </div>
//         </div>

//         {/* Back Side */}
//         <div className="absolute inset-0 w-full backface-hidden p-4 border-b border-gray-800 hover:bg-[#1a1a1a] transition-colors duration-300 rounded-lg" style={{
//           backfaceVisibility: 'hidden',
//           transform: 'rotateY(180deg)'
//         }}>
//           <div className="h-full flex flex-col justify-center min-h-[92px]">
//             <h3 className="text-md font-semibold font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300 mb-2">
//               About {title}
//             </h3>
//             <p className="text-sm text-[#e3c493] group-hover:text-[#f9e4b7] transition-colors duration-300 leading-relaxed mb-2">
//               {description || defaultDescription}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Updated MenuImages component to handle multiple images
// const MenuImages = ({ menuImages, className = "" }) => {
//   // Handle both single image (string) and multiple images (array)
//   const images = Array.isArray(menuImages) ? menuImages : (menuImages ? [menuImages] : []);

//   return (
//     <div className={`flex-shrink-0 ${className}`}>
//       <div className="flex flex-col space-y-6">
//         {images.length > 0 ? (
//           images.map((image, index) => (
//             <div key={index} className="w-64 h-80 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
//               <img 
//                 src={image} 
//                 alt={`menu display ${index + 1}`} 
//                 className="w-full h-full object-cover rounded-lg"
//                 style={{ imageRendering: 'crisp-edges' }}
//               />
//             </div>
//           ))
//         ) : (
//           <div className="w-64 h-80 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
//             <div className="text-center p-8">
//               <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"/>
//                 </svg>
//               </div>
//               <p className="text-gray-400 font-serif">Menu Display</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Two Column Menu Component - Updated to use MenuImages instead of MenuImage
// const TwoColumnMenu = ({ sectionHeading, leftColumn, rightColumn, menuImages, title, subtitle }) => {
//   return (
//     <section className="bg-black py-16 px-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Title Section */}
//         <div className="text-center mb-12">
//           <div className="mb-4">
//             <p className="text-lg font-serif text-[#e3c493] mb-2">
//               {subtitle}
//             </p>
//             <div className="flex justify-center mb-4">
//               <svg width="40" height="10" viewBox="0 0 40 10" className="text-[#e3c493]">
//                 <path d="M5 5h30M2 2l3 3-3 3M38 2l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
//               </svg>
//             </div>
//           </div>
//           <h1 className="text-5xl font-serif text-[#e3c493] mb-2">{title}</h1>
//         </div>

//         {/* Section Title */}
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-serif text-[#e3c493] border-b-2 border-amber-600 pb-2 inline-block w-1/4">
//             {sectionHeading}
//           </h2>
//         </div>

//         {/* Menu Content - Two Columns with Center Images */}
//         <div className="flex flex-col lg:flex-row gap-8 items-start">
//           <div className="flex-1">
//             <div className="space-y-2">
//               {leftColumn.map((item, index) => (
//                 <MenuItem key={index} {...item} />
//               ))}
//             </div>
//           </div>
          
//           <MenuImages menuImages={menuImages} className="lg:mx-8" />
          
//           <div className="flex-1">
//             <div className="space-y-2">
//               {rightColumn.map((item, index) => (
//                 <MenuItem key={index} {...item} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TwoColumnMenu;

'use client'
import React, { useState } from 'react';

const MenuItem = ({ slug, title, price, subtitle, description }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  // Default description if none provided
  const defaultDescription = `Experience the authentic flavors of ${title}. Our chefs have carefully crafted this dish using traditional techniques and the finest ingredients to create a memorable dining experience that will delight your taste buds.`;

  return (
    <div className="cursor-pointer group" onClick={handleClick}>
      <div className="menu-item-container relative w-full h-auto min-h-[100px] transition-transform duration-700" style={{
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
      }}>
        {/* Front Side */}
        <div className="absolute inset-0 w-full backface-hidden p-4 border-b border-gray-800 hover:bg-[#1a1a1a] transition-colors duration-300 rounded-lg" style={{
          backfaceVisibility: 'hidden'
        }}>
          <div className="flex items-center justify-between mb-2">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300">
                {title}
              </h3>
            </div>
            <div className="flex-shrink-0 mx-2 sm:mx-4 flex-1 border-b border-dotted border-gray-600 self-end mb-2"></div>
            <div className="flex-shrink-0">
              <span className="text-lg sm:text-xl font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300">
                ${price}
              </span>
            </div>
          </div>
          <div className="text-sm text-[#e3c493] italic group-hover:text-[#f9e4b7] transition-colors duration-300">
            {subtitle}
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full backface-hidden p-4 border-b border-gray-800 hover:bg-[#1a1a1a] transition-colors duration-300 rounded-lg" style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)'
        }}>
          <div className="h-full flex flex-col justify-center min-h-[92px]">
            <h3 className="text-md font-semibold font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300 mb-2">
              About {title}
            </h3>
            <p className="text-sm text-[#e3c493] group-hover:text-[#f9e4b7] transition-colors duration-300 leading-relaxed mb-2">
              {description || defaultDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Updated MenuImages component - hidden on mobile
const MenuImages = ({ menuImages, className = "" }) => {
  // Handle both single image (string) and multiple images (array)
  const images = Array.isArray(menuImages) ? menuImages : (menuImages ? [menuImages] : []);

  return (
    <div className={`flex-shrink-0 hidden lg:block ${className}`}>
      <div className="flex flex-col space-y-6">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="w-64 h-80 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
              <img 
                src={image} 
                alt={`menu display ${index + 1}`} 
                className="w-full h-full object-cover rounded-lg"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
          ))
        ) : (
          <div className="w-64 h-80 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <p className="text-gray-400 font-serif">Menu Display</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Two Column Menu Component - Mobile responsive
const TwoColumnMenu = ({ sectionHeading, leftColumn, rightColumn, menuImages, title, subtitle }) => {
  return (
    <section className="bg-black py-8 sm:py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="mb-4">
            <p className="text-base sm:text-lg font-serif text-[#e3c493] mb-2">
              {subtitle}
            </p>
            <div className="flex justify-center mb-4">
              <svg width="40" height="10" viewBox="0 0 40 10" className="text-[#e3c493]">
                <path d="M5 5h30M2 2l3 3-3 3M38 2l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#e3c493] mb-2">{title}</h1>
        </div>

        {/* Section Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#e3c493] border-b-2 border-amber-600 pb-2 inline-block">
            {sectionHeading}
          </h2>
        </div>

        {/* Menu Content - Responsive Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
          {/* Left Column */}
          <div className="w-full lg:flex-1">
            <div className="space-y-2">
              {leftColumn.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>
          
          {/* Images - Only shown on large screens */}
          <MenuImages menuImages={menuImages} className="lg:mx-8" />
          
          {/* Right Column */}
          <div className="w-full lg:flex-1">
            <div className="space-y-2">
              {rightColumn.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Section Separator - Only shown on mobile when both columns have items */}
        {leftColumn.length > 0 && rightColumn.length > 0 && (
          <div className="lg:hidden my-8 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TwoColumnMenu;