// 'use client'
// import Link from 'next/link';
// import React, { useState, useEffect } from 'react';

// const MenuNavigation = () => {
//   const [activeSection, setActiveSection] = useState('');
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   const menuSections = [
//     { id: 'soups-and-salads', title: 'Soups & Salads', subtitle: 'Fresh Starters' },
//     { id: 'vegetarian-appetizers', title: 'Vegetarian Appetizers', subtitle: 'Garden Delights' },
//     { id: 'non-vegetarian-appetizers', title: 'Non-Veg Appetizers', subtitle: 'Protein Selections' },
//     { id: 'curries', title: 'Curries', subtitle: 'Aromatic Dishes' },
//     { id: 'other-house-specialities', title: 'House Specialties', subtitle: 'Chef\'s Creations' },
//     { id: 'combos-and-dosa', title: 'Combos & Dosa', subtitle: 'South Indian Flavors' },
//     { id: 'flatbreads', title: 'Flatbreads', subtitle: 'Artisan Baked' },
//     { id: 'rice-and-noodles', title: 'Rice & Noodles', subtitle: 'Grain Favorites' },
//     { id: 'breads', title: 'Breads', subtitle: 'Fresh Baked' },
//     { id: 'desserts', title: 'Desserts', subtitle: 'Sweet Endings' },
//     { id: 'kids-menu', title: 'Kids Menu', subtitle: 'Little Favorites' }
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       if (typeof window === "undefined") return;

//       setIsScrolled(window.scrollY > 50);

//       // Find active section
//       const sections = menuSections.map(section => section.id);
//       const currentSection = sections.find(sectionId => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 100 && rect.bottom >= 100;
//         }
//         return false;
//       });
//       if (currentSection) {
//         setActiveSection(currentSection);
//       }

//       // Scroll progress
//       const totalHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (window.scrollY / totalHeight) * 100;
//       setScrollProgress(progress);
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll(); // Initial call
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     if (typeof window === "undefined") return;
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
//       window.scrollTo({
//         top: offsetTop,
//         behavior: 'smooth'
//       });
//     }
//     setIsOpen(false);
//   };

//   const scrollToTop = () => {
//     if (typeof window !== "undefined") {
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       {/* Fixed Navigation Bar */}
//       <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
//         isScrolled 
//           ? 'bg-black/98 backdrop-blur-md border-b border-[#e3c493]/20 shadow-xl' 
//           : 'bg-black/60 backdrop-blur-sm'
//       }`}>
//         <div className="max-w-6xl mx-auto px-4 sm:px-8">
//           <div className="flex items-center justify-between py-3">
//             {/* Logo/Title */}
//             <div className="flex items-center gap-4">
//               <Link
//                 href="/"
//                 className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-serif text-[#e3c493] hover:text-[#f9e4b7] hover:bg-[#e3c493]/10 transition-all duration-300 border border-[#e3c493]/30 hover:border-[#e3c493]/50"
//               >
//                 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                   <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//                   <polyline points="9 22 9 12 15 12 15 22" />
//                 </svg>
//                 <span>Home</span>
//               </Link>
//               <div className="hidden md:flex items-center cursor-pointer" onClick={scrollToTop}>
//                 <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#e3c493] mr-2">
//                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" 
//                         fill="currentColor"/>
//                 </svg>
//                 <h1 className="hidden md:block text-lg sm:text-xl font-serif text-[#e3c493] hover:text-[#f9e4b7] transition-colors duration-300">
//                   Our Menu
//                 </h1>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center space-x-6">
//               {menuSections.map((section) => (
//                 <button
//                   key={section.id}
//                   onClick={() => scrollToSection(section.id)}
//                   className={`text-xs font-serif transition-all duration-300 relative group py-2 px-1 ${
//                     activeSection === section.id
//                       ? 'text-[#e3c493]'
//                       : 'text-[#fdfbf5] hover:text-[#e3c493]'
//                   }`}
//                 >
//                   {section.title}
//                   <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#e3c493] transform transition-transform duration-300 ${
//                     activeSection === section.id ? 'scale-x-100' : 'scale-x-0'
//                   }`}></span>
//                 </button>
//               ))}
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="lg:hidden flex items-center justify-center w-10 h-10 text-[#e3c493] hover:text-[#f9e4b7] transition-colors duration-300 relative"
//               aria-label="Toggle menu"
//             >
//               <div className="w-6 h-5 relative flex flex-col justify-between">
//                 <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
//                   isOpen ? 'rotate-45 translate-y-2' : ''
//                 }`}></span>
//                 <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${
//                   isOpen ? 'opacity-0' : ''
//                 }`}></span>
//                 <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
//                   isOpen ? '-rotate-45 -translate-y-2' : ''
//                 }`}></span>
//               </div>
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//         }`}>
//           <div className="bg-black/98 backdrop-blur-md border-t border-[#e3c493]/20">
//             <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                 {menuSections.map((section, index) => (
//                   <button
//                     key={section.id}
//                     onClick={() => scrollToSection(section.id)}
//                     className={`text-left p-3 rounded-lg transition-all duration-300 ${
//                       activeSection === section.id
//                         ? 'bg-[#e3c493]/10 text-[#e3c493] border border-[#e3c493]/30'
//                         : 'text-[#fdfbf5] hover:bg-[#e3c493]/5 hover:text-[#e3c493]'
//                     }`}
//                     style={{
//                       animationDelay: `${index * 50}ms`
//                     }}
//                   >
//                     <div className="font-serif text-sm font-medium">{section.title}</div>
//                     <div className="text-xs text-[#e3c493]/80 mt-1">{section.subtitle}</div>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Progress Bar */}
//       <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-[9998]">
//         <div 
//           className="h-full bg-gradient-to-r from-[#e3c493] to-[#f9e4b7] transition-all duration-300 ease-out"
//           style={{ width: `${scrollProgress}%` }}
//         ></div>
//       </div>

//       {/* Floating Quick Access Menu */}
//       <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-[9997] hidden xl:block">
//         <div className="flex flex-col space-y-2">
//           {menuSections.map((section) => (
//             <button
//               key={section.id}
//               onClick={() => scrollToSection(section.id)}
//               className={`group relative w-3 h-3 rounded-full border-2 transition-all duration-300 ${
//                 activeSection === section.id
//                   ? 'bg-[#e3c493] border-[#e3c493] scale-125'
//                   : 'border-[#e3c493]/50 hover:border-[#e3c493] hover:bg-[#e3c493]/20'
//               }`}
//               title={section.title}
//             >
//               <span className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/90 text-[#e3c493] text-xs font-serif px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
//                 {section.title}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       {isScrolled && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 z-[9996] w-12 h-12 bg-[#e3c493] text-black rounded-full shadow-xl hover:bg-[#f9e4b7] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
//           aria-label="Scroll to top"
//         >
//           <svg
//             className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
//           </svg>
//         </button>
//       )}

//       {/* Keyboard Navigation Instructions */}
//       <div className="sr-only">
//         <p>Use Tab to navigate through menu sections, Enter to jump to section, or arrow keys for quick navigation.</p>
//       </div>
//     </>
//   );
// };

// export default MenuNavigation;



















'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const MenuNavigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const menuSections = [
    { id: 'soups-and-salads', title: 'Soups & Salads', subtitle: 'Fresh Starters' },
    { id: 'vegetarian-appetizers', title: 'Vegetarian Appetizers', subtitle: 'Garden Delights' },
    { id: 'non-vegetarian-appetizers', title: 'Non-Veg Appetizers', subtitle: 'Protein Selections' },
    { id: 'curries', title: 'Curries', subtitle: 'Aromatic Dishes' },
    { id: 'other-house-specialities', title: 'House Specialties', subtitle: 'Chef\'s Creations' },
    { id: 'combos-and-dosa', title: 'Combos & Dosa', subtitle: 'South Indian Flavors' },
    { id: 'flatbreads', title: 'Flatbreads', subtitle: 'Artisan Baked' },
    { id: 'rice-and-noodles', title: 'Rice & Noodles', subtitle: 'Grain Favorites' },
    { id: 'breads', title: 'Breads', subtitle: 'Fresh Baked' },
    { id: 'desserts', title: 'Desserts', subtitle: 'Sweet Endings' },
    { id: 'kids-menu', title: 'Kids Menu', subtitle: 'Little Favorites' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;

      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = menuSections.map(section => section.id);
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }

      // Scroll progress
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (typeof window === "undefined") return;
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Fixed Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/98 backdrop-blur-md border-b border-[#e3c493]/20 shadow-xl' 
          : 'bg-black/60 backdrop-blur-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Logo/Title */}
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-serif text-[#e3c493] hover:text-[#f9e4b7] hover:bg-[#e3c493]/10 transition-all duration-300 border border-[#e3c493]/30 hover:border-[#e3c493]/50"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span>Home</span>
              </Link>
              <div className="hidden md:flex items-center cursor-pointer" onClick={scrollToTop}>
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-[#e3c493] mr-2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" 
                        fill="currentColor"/>
                </svg>
                <h1 className="hidden md:block text-lg sm:text-xl font-serif text-[#e3c493] hover:text-[#f9e4b7] transition-colors duration-300">
                  Our Menu
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {menuSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-xs font-serif transition-all duration-300 relative group py-2 px-1 ${
                    activeSection === section.id
                      ? 'text-[#e3c493]'
                      : 'text-[#fdfbf5] hover:text-[#e3c493]'
                  }`}
                >
                  {section.title}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#e3c493] transform transition-transform duration-300 ${
                    activeSection === section.id ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-10 h-10 text-[#e3c493] hover:text-[#f9e4b7] transition-colors duration-300 relative"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[70vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-black/98 backdrop-blur-md border-t border-[#e3c493]/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {menuSections.map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left p-3 rounded-lg transition-all duration-300 ${
                      activeSection === section.id
                        ? 'bg-[#e3c493]/10 text-[#e3c493] border border-[#e3c493]/30'
                        : 'text-[#fdfbf5] hover:bg-[#e3c493]/5 hover:text-[#e3c493]'
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`
                    }}
                  >
                    <div className="font-serif text-sm font-medium">{section.title}</div>
                    <div className="text-xs text-[#e3c493]/80 mt-1">{section.subtitle}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-[9998]">
        <div 
          className="h-full bg-gradient-to-r from-[#e3c493] to-[#f9e4b7] transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Floating Quick Access Menu */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-[9997] hidden xl:block">
        <div className="flex flex-col space-y-2">
          {menuSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group relative w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-[#e3c493] border-[#e3c493] scale-125'
                  : 'border-[#e3c493]/50 hover:border-[#e3c493] hover:bg-[#e3c493]/20'
              }`}
              title={section.title}
            >
              <span className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/90 text-[#e3c493] text-xs font-serif px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                {section.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[9996] w-12 h-12 bg-[#e3c493] text-black rounded-full shadow-xl hover:bg-[#f9e4b7] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Keyboard Navigation Instructions */}
      <div className="sr-only">
        <p>Use Tab to navigate through menu sections, Enter to jump to section, or arrow keys for quick navigation.</p>
      </div>
    </>
  );
};

export default MenuNavigation;