// 'use client'
// import React from 'react';

// const MenuItem = ({ slug, title, price, subtitle }) => (
//   <div className="cursor-pointer group">
//     <div className="menu-item-container p-4 border-b border-gray-800 hover:bg-[#1a1a1a] transition-colors duration-300 rounded-lg">
//       <div className="flex items-center justify-between mb-2">
//         <div className="flex-1">
//           <h3 className="text-xl font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300">
//             {title}
//           </h3>
//         </div>
//         <div className="flex-shrink-0 mx-4 flex-1 border-b border-dotted border-gray-600 self-end mb-2"></div>
//         <div className="flex-shrink-0">
//           <span className="text-xl font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300">
//             ${price}
//           </span>
//         </div>
//       </div>
//       <div className="text-sm text-[#e3c493] italic group-hover:text-[#f9e4b7] transition-colors duration-300">
//         {subtitle}
//       </div>
//     </div>
//   </div>
// );


// const MenuSection = ({ heading, items, className = "" }) => (
//   <div className={`menu-section ${className}`}>
//     <h2 className="text-2xl font-serif text-[#e3c493] mb-6 text-center border-b-2 border-amber-600 pb-2">
//       {heading}
//     </h2>
//     <div className="space-y-2">
//       {items.map((item, index) => (
//         <MenuItem key={index} {...item} />
//       ))}
//     </div>
//   </div>
// );

// const MenuImage = ({ menuImage, className = "" }) => (
//   <div className={`flex-shrink-0 ${className}`}>
//     <div className="w-64 h-80 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-lg flex items-center justify-center">
//       {menuImage ? (
//         <img src={menuImage} alt="menu display" className="w-full h-full object-contain rounded-lg" />
//       ) : (
//         <div className="text-center p-8">
//           <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"/>
//             </svg>
//           </div>
//           <p className="text-amber-700 font-serif">Menu Display</p>
//         </div>
//       )}
//     </div>
//   </div>
// );

// // Layout Type 1: Three Sections (Left - Image - Right)
// const ThreeSectionMenu = ({ leftSection, rightSection, menuImage, title, subtitle }) => {
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

//         {/* Menu Content - Three Sections */}
//         <div className="flex flex-col lg:flex-row gap-8 items-start">
//           <MenuSection 
//             heading={leftSection.heading} 
//             items={leftSection.items} 
//             className="flex-1" 
//           />
          
//           <MenuImage menuImage={menuImage} className="lg:mx-8" />
          
//           <MenuSection 
//             heading={rightSection.heading} 
//             items={rightSection.items} 
//             className="flex-1" 
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// // Layout Type 2: Single Section with Two Columns and Center Image (Updated to match dark theme)
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

// // Main Component displaying both layouts
// export default function MenuDisplay() {
//   // Demo data for three-section layout
//   const threeSectionData = {
//     title: "Today's Special",
//     subtitle: "Menu That Fits Your Palette",
//     leftSection: {
//       heading: "Soup & Salad",
//       items: [
//         { slug: "chapel", title: "Chapel Hill Shiraz", price: 56, subtitle: "AU | Bottle" },
//         { slug: "catena", title: "Catena Malbec", price: 72, subtitle: "AU | Bottle" },
//         { slug: "vieille", title: "La Vieille Rose", price: 71, subtitle: "FR | 750 ml" },
//         { slug: "rhino", title: "Rhino Pale Ale", price: 35, subtitle: "CA | 750 ml" },
//       ]
//     },
//     rightSection: {
//       heading: "Wine & Cocktails",
//       items: [
//         { slug: "aperol", title: "Aperol Spritz", price: 20, subtitle: "Aperol | Villa Marchesi prosecco | soda | 30 ml" },
//         { slug: "stormy", title: "Dark 'N' Stormy", price: 51, subtitle: "Dark rum | Ginger beer | Slice of lime" },
//         { slug: "daiquiri", title: "Daiquiri", price: 51, subtitle: "Rum | Citrus juice | Sugar" },
//         { slug: "negroni", title: "Negroni", price: 25, subtitle: "Gin | Sweet Vermouth | Campari | Orange garnish" },
//       ]
//     },
//     menuImage: null
//   };

//   // Demo data for two-column layout
//   const twoColumnData = {
//     title: "Signature Curries",
//     subtitle: "Authentic Flavors from Our Kitchen",
//     sectionHeading: "Curries",
//     leftColumn: [
//       { slug: "butter-chicken", title: "Butter Chicken", price: 18, subtitle: "Creamy tomato curry with tender chicken" },
//       { slug: "dal-makhani", title: "Dal Makhani", price: 14, subtitle: "Rich black lentils in creamy sauce" },
//       { slug: "paneer-tikka", title: "Paneer Tikka Masala", price: 16, subtitle: "Cottage cheese in spiced tomato gravy" },
//       { slug: "lamb-vindaloo", title: "Lamb Vindaloo", price: 22, subtitle: "Spicy Goan curry with tender lamb" },
//     ],
//     rightColumn: [
//       { slug: "chicken-tikka", title: "Chicken Tikka Masala", price: 19, subtitle: "Classic curry in rich tomato sauce" },
//       { slug: "saag-paneer", title: "Saag Paneer", price: 15, subtitle: "Spinach curry with cottage cheese" },
//       { slug: "biryani", title: "Chicken Biryani", price: 20, subtitle: "Fragrant basmati rice with spiced chicken" },
//       { slug: "korma", title: "Vegetable Korma", price: 16, subtitle: "Mixed vegetables in coconut curry" },
//     ],
//     menuImage: null
//   };

//   return (
//     <div className="min-h-screen bg-black">
//       {/* First Menu - Three Section Layout */}
//       <ThreeSectionMenu {...threeSectionData} />
      
//       {/* Second Menu - Two Column Layout */}
//       <TwoColumnMenu {...twoColumnData} />
//     </div>
//   );
// }


















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
              <h3 className="text-xl font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300">
                {title}
              </h3>
            </div>
            <div className="flex-shrink-0 mx-4 flex-1 border-b border-dotted border-gray-600 self-end mb-2"></div>
            <div className="flex-shrink-0">
              <span className="text-xl font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300">
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

const MenuSection = ({ heading, items, className = "" }) => (
  <div className={`menu-section ${className}`}>
    <h2 className="text-2xl font-serif text-[#e3c493] mb-6 text-center border-b-2 border-amber-600 pb-2">
      {heading}
    </h2>
    <div className="space-y-2">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
);

const MenuImage = ({ menuImage, className = "" }) => (
  <div className={`flex-shrink-0 ${className}`}>
    <div className="w-64 h-80 bg-gradient-to-b from-amber-100 to-amber-200 rounded-lg shadow-lg flex items-center justify-center">
      {menuImage ? (
        <img src={menuImage} alt="menu display" className="w-full h-full object-contain rounded-lg" />
      ) : (
        <div className="text-center p-8">
          <div className="w-16 h-16 bg-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>
          <p className="text-amber-700 font-serif">Menu Display</p>
        </div>
      )}
    </div>
  </div>
);

// Layout Type 1: Three Sections (Left - Image - Right)
const ThreeSectionMenu = ({ leftSection, rightSection, menuImage, title, subtitle }) => {
  return (
    <section className="bg-black py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <p className="text-lg font-serif text-[#e3c493] mb-2">
              {subtitle}
            </p>
            <div className="flex justify-center mb-4">
              <svg width="40" height="10" viewBox="0 0 40 10" className="text-[#e3c493]">
                <path d="M5 5h30M2 2l3 3-3 3M38 2l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-serif text-[#e3c493] mb-2">{title}</h1>
        </div>

        {/* Menu Content - Three Sections */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <MenuSection 
            heading={leftSection.heading} 
            items={leftSection.items} 
            className="flex-1" 
          />
          
          <MenuImage menuImage={menuImage} className="lg:mx-8" />
          
          <MenuSection 
            heading={rightSection.heading} 
            items={rightSection.items} 
            className="flex-1" 
          />
        </div>
      </div>
    </section>
  );
};

// Layout Type 2: Single Section with Two Columns and Center Image (Updated to match dark theme)
const TwoColumnMenu = ({ sectionHeading, leftColumn, rightColumn, menuImage, title, subtitle }) => {
  return (
    <section className="bg-black py-16 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <p className="text-lg font-serif text-[#e3c493] mb-2">
              {subtitle}
            </p>
            <div className="flex justify-center mb-4">
              <svg width="40" height="10" viewBox="0 0 40 10" className="text-[#e3c493]">
                <path d="M5 5h30M2 2l3 3-3 3M38 2l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-serif text-[#e3c493] mb-2">{title}</h1>
        </div>

        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-[#e3c493] border-b-2 border-amber-600 pb-2 inline-block w-1/4">
            {sectionHeading}
          </h2>
        </div>

        {/* Menu Content - Two Columns with Center Image */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <div className="space-y-2">
              {leftColumn.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>
          
          <MenuImage menuImage={menuImage} className="lg:mx-8" />
          
          <div className="flex-1">
            <div className="space-y-2">
              {rightColumn.map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component displaying both layouts
export default function MenuDisplay() {
  // Demo data for three-section layout with descriptions
  const threeSectionData = {
    title: "Today's Special",
    subtitle: "Menu That Fits Your Palette",
    leftSection: {
      heading: "Soup & Salad",
      items: [
        { 
          slug: "chapel", 
          title: "Chapel Hill Shiraz", 
          price: 56, 
          subtitle: "AU | Bottle",
          description: "A bold and complex Shiraz from Australia's renowned wine region. Rich blackberry and plum flavors with hints of spice and oak, perfectly balanced for any occasion."
        },
        { 
          slug: "catena", 
          title: "Catena Malbec", 
          price: 72, 
          subtitle: "AU | Bottle",
          description: "Premium Argentine Malbec with intense dark fruit flavors and velvety tannins. This full-bodied wine offers notes of black cherry, violet, and chocolate."
        },
        { 
          slug: "vieille", 
          title: "La Vieille Rose", 
          price: 71, 
          subtitle: "FR | 750 ml",
          description: "An elegant French rosé with delicate floral aromas and crisp minerality. Perfect balance of fresh strawberry and citrus notes with a clean, refreshing finish."
        },
        { 
          slug: "rhino", 
          title: "Rhino Pale Ale", 
          price: 35, 
          subtitle: "CA | 750 ml",
          description: "Craft pale ale from Canada featuring a perfect balance of citrus hops and caramel malt. Crisp and refreshing with a distinctive hoppy character."
        },
      ]
    },
    rightSection: {
      heading: "Wine & Cocktails",
      items: [
        { 
          slug: "aperol", 
          title: "Aperol Spritz", 
          price: 20, 
          subtitle: "Aperol | Villa Marchesi prosecco | soda | 30 ml",
          description: "The classic Italian aperitif cocktail. Bitter orange liqueur mixed with prosecco and soda water, garnished with an orange slice for the perfect summer refresher."
        },
        { 
          slug: "stormy", 
          title: "Dark 'N' Stormy", 
          price: 51, 
          subtitle: "Dark rum | Ginger beer | Slice of lime",
          description: "A Caribbean classic featuring premium dark rum topped with spicy ginger beer and fresh lime. This bold cocktail delivers a perfect balance of sweet and spicy flavors."
        },
        { 
          slug: "daiquiri", 
          title: "Daiquiri", 
          price: 51, 
          subtitle: "Rum | Citrus juice | Sugar",
          description: "The original Cuban cocktail made with white rum, fresh lime juice, and simple syrup. Clean, crisp, and perfectly balanced - a timeless classic done right."
        },
        { 
          slug: "negroni", 
          title: "Negroni", 
          price: 25, 
          subtitle: "Gin | Sweet Vermouth | Campari | Orange garnish",
          description: "An iconic Italian cocktail with equal parts gin, sweet vermouth, and Campari. Bitter, sweet, and herbal flavors create a sophisticated and complex drinking experience."
        },
      ]
    },
    menuImage: null
  };

  // Demo data for two-column layout with descriptions
  const twoColumnData = {
    title: "Signature Curries",
    subtitle: "Authentic Flavors from Our Kitchen",
    sectionHeading: "Curries",
    leftColumn: [
      { 
        slug: "butter-chicken", 
        title: "Butter Chicken", 
        price: 18, 
        subtitle: "Creamy tomato curry with tender chicken",
        description: "Our signature butter chicken features tender marinated chicken in a rich, creamy tomato-based sauce with aromatic spices. Served with basmati rice and fresh naan bread."
      },
      { 
        slug: "dal-makhani", 
        title: "Dal Makhani", 
        price: 14, 
        subtitle: "Rich black lentils in creamy sauce",
        description: "Slow-cooked black lentils and kidney beans simmered overnight with butter, cream, and traditional spices. A North Indian classic that's both hearty and comforting."
      },
      { 
        slug: "paneer-tikka", 
        title: "Paneer Tikka Masala", 
        price: 16, 
        subtitle: "Cottage cheese in spiced tomato gravy",
        description: "Grilled cubes of fresh cottage cheese in a vibrant tomato-based curry with onions, bell peppers, and aromatic spices. A vegetarian favorite with bold flavors."
      },
      { 
        slug: "lamb-vindaloo", 
        title: "Lamb Vindaloo", 
        price: 22, 
        subtitle: "Spicy Goan curry with tender lamb",
        description: "Traditional Goan curry with tender lamb marinated in vinegar and spices, slow-cooked with potatoes in a fiery red sauce. Not for the faint of heart!"
      },
    ],
    rightColumn: [
      { 
        slug: "chicken-tikka", 
        title: "Chicken Tikka Masala", 
        price: 19, 
        subtitle: "Classic curry in rich tomato sauce",
        description: "Charcoal-grilled chicken tikka pieces simmered in our signature creamy tomato sauce with a blend of traditional spices. Britain's favorite Indian dish, perfected."
      },
      { 
        slug: "saag-paneer", 
        title: "Saag Paneer", 
        price: 15, 
        subtitle: "Spinach curry with cottage cheese",
        description: "Fresh spinach and cottage cheese cooked with garlic, ginger, and traditional spices. This nutritious and flavorful dish is a true comfort food classic."
      },
      { 
        slug: "biryani", 
        title: "Chicken Biryani", 
        price: 20, 
        subtitle: "Fragrant basmati rice with spiced chicken",
        description: "Aromatic basmati rice layered with marinated chicken, caramelized onions, and saffron. Slow-cooked to perfection and served with raita and boiled egg."
      },
      { 
        slug: "korma", 
        title: "Vegetable Korma", 
        price: 16, 
        subtitle: "Mixed vegetables in coconut curry",
        description: "A medley of fresh seasonal vegetables cooked in a mild, creamy coconut and cashew sauce with fragrant spices. Perfect for those who prefer milder flavors."
      },
    ],
    menuImage: null
  };

  return (
    <div className="min-h-screen bg-black">
      {/* First Menu - Three Section Layout */}
      <ThreeSectionMenu {...threeSectionData} />
      
      {/* Second Menu - Two Column Layout */}
      <TwoColumnMenu {...twoColumnData} />
    </div>
  );
}


