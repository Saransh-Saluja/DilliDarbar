// "use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const toggleMenuDropdown = () =>
//     setIsMenuDropdownOpen(!isMenuDropdownOpen);

//   return (
//     <nav
//       className={`fixed w-full top-0 z-50 transition-all duration-500 ${
//         isScrolled
//           ? "bg-black/95 backdrop-blur-xl border-b border-yellow-600/30 shadow-lg shadow-yellow-600/10"
//           : "bg-black/80 backdrop-blur-md border-b border-yellow-600/20"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Left Nav */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <NavLink href="/">Home</NavLink>
//             <NavLink href="/about">About Us</NavLink>

//             {/* Menu Dropdown */}
//             <div className="relative group">
//               <button className="flex items-center space-x-1 text-[#e3c493] hover:text-[#f5e3c6] transition-colors duration-300 uppercase text-sm font-medium tracking-wider">
//                 <span>Menu</span>
//                 <svg
//                   className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 
//                       1.414l-4 4a1 1 0 01-1.414 
//                       0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>

//               {/* Dropdown */}
//               <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                 <div className="bg-black/95 backdrop-blur-xl border border-yellow-600/30 rounded-xl shadow-lg shadow-yellow-600/20 overflow-hidden">
//                   {[
//                     ["Appetizers", "/menu/appetizers"],
//                     ["Main Course", "/menu/main-course"],
//                     ["Biryani & Rice", "/menu/biryani"],
//                     ["Desserts", "/menu/desserts"],
//                     ["Beverages", "/menu/beverages"],
//                   ].map(([label, link]) => (
//                     <Link
//                       key={link}
//                       href={link}
//                       className="block px-5 py-3 text-[#e3c493] hover:text-[#f5e3c6] hover:bg-[#e3c493]/10 transition-all duration-300 text-sm"

//                     >
//                       {label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Center Logo */}
//           <div className="flex-shrink-0 flex justify-center">
//             <Link href="/" className="group flex flex-col items-center">
//               <Image
//                 src="/logo.png"
//                 alt="Dilli Darbar Logo"
//                 width={180}
//                 height={180}
//                 priority
//                 className="transition-transform duration-300 group-hover:scale-105"
//               />
//               {/* <Image
//                 src="/logo-3.png"
//                 alt="Dilli Darbar Logo"
//                 width={70}
//                 height={70}
//                 priority
//                 className="transition-transform duration-300 group-hover:scale-105"
//               /> */}

              
//             </Link>
//           </div>

//           {/* Right Nav */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <NavLink href="/order-online">Order Online</NavLink>
//             <NavLink href="/catering">Catering</NavLink>
//             <Link
//   href="/contact"
//   className="px-6 py-2 border border-[#e3c493] text-[#e3c493] hover:text-black hover:bg-[#f5e3c6] transition-all duration-300 rounded-lg text-sm uppercase font-medium tracking-wider"
// >
//   Contact
// </Link>

//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden">
//             <button
//               onClick={toggleMenu}
//               className="relative w-8 h-8 flex flex-col justify-center items-center group focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               <span
//                 className={`absolute w-6 h-0.5 bg-yellow-600 transform transition-all duration-300 ${
//                   isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
//                 }`}
//               />
//               <span
//                 className={`absolute w-6 h-0.5 bg-yellow-600 transform transition-all duration-300 ${
//                   isMenuOpen ? "opacity-0" : "opacity-100"
//                 }`}
//               />
//               <span
//                 className={`absolute w-6 h-0.5 bg-yellow-600 transform transition-all duration-300 ${
//                   isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
//                 }`}
//               />
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
//             isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="py-4 border-t border-yellow-600/20 space-y-1">
//             <MobileNavLink href="/">Home</MobileNavLink>
//             <MobileNavLink href="/about">About Us</MobileNavLink>

//             {/* Mobile Dropdown */}
//             <div>
//             <button
//   onClick={toggleMenuDropdown}
//   className="w-full flex justify-between items-center px-4 py-3 text-[#e3c493] hover:text-[#f5e3c6] text-sm font-medium uppercase tracking-wide"
// >

//                 Menu
//                 <svg
//                   className={`w-4 h-4 transition-transform duration-300 ${
//                     isMenuDropdownOpen ? "rotate-180" : ""
//                   }`}
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 
//                       0L10 10.586l3.293-3.293a1 1 0 111.414 
//                       1.414l-4 4a1 1 0 01-1.414 
//                       0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <div
//                 className={`ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
//                   isMenuDropdownOpen
//                     ? "max-h-40 opacity-100"
//                     : "max-h-0 opacity-0"
//                 }`}
//               >
//                 {[
//                   ["Appetizers", "/menu/appetizers"],
//                   ["Main Course", "/menu/main-course"],
//                   ["Biryani & Rice", "/menu/biryani"],
//                   ["Desserts", "/menu/desserts"],
//                   ["Beverages", "/menu/beverages"],
//                 ].map(([label, link]) => (
//                   <MobileDropdownLink key={link} href={link}>
//                     {label}
//                   </MobileDropdownLink>
//                 ))}
//               </div>
//             </div>

//             <MobileNavLink href="/order-online">Order Online</MobileNavLink>
//             <MobileNavLink href="/catering">Catering</MobileNavLink>
//             <MobileNavLink href="/contact">Contact</MobileNavLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // Reusable components
// const NavLink = ({ href, children }) => (
//   <Link
//     href={href}
//     className="relative text-[#e3c493] hover:text-[#f5e3c6] px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-300"
//   >
//     {children}
//     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#e3c493] to-[#f5e3c6] transition-all duration-300 group-hover:w-full"></span>
//   </Link>
// );


// const MobileNavLink = ({ href, children }) => (
//   <Link
//     href={href}
//     className="block px-4 py-3 text-[#e3c493] hover:text-[#f5e3c6] hover:bg-[#e3c493]/10 transition-all duration-300 text-sm font-medium uppercase tracking-wide"
//   >
//     {children}
//   </Link>
// );

// const MobileDropdownLink = ({ href, children }) => (
//   <Link
//     href={href}
//     className="block px-4 py-2 text-[#e3c493] hover:text-[#f5e3c6] hover:bg-[#e3c493]/5 transition-all duration-300 text-xs uppercase tracking-wide"
//   >
//     {children}
//   </Link>
// );

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMenuDropdown = () => setIsMenuDropdownOpen(!isMenuDropdownOpen);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-[#e3c493]/30 shadow-lg shadow-[#e3c493]/10"
          : "bg-black/80 backdrop-blur-md border-b border-[#e3c493]/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About Us</NavLink>

            {/* Menu Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-[#e3c493] hover:text-[#f5e3c6] transition-colors duration-300 uppercase text-sm font-playfair font-bold tracking-wider">
                <span>Menu</span>
                <svg
                  className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 
                      1.414l-4 4a1 1 0 01-1.414 
                      0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="bg-black/95 backdrop-blur-xl border border-[#e3c493]/30 rounded-xl shadow-lg shadow-[#e3c493]/20 overflow-hidden">
                  {[
                    ["Appetizers", "/menu/appetizers"],
                    ["Main Course", "/menu/main-course"],
                    ["Biryani & Rice", "/menu/biryani"],
                    ["Desserts", "/menu/desserts"],
                    ["Beverages", "/menu/beverages"],
                  ].map(([label, link]) => (
                    <Link
                      key={link}
                      href={link}
                      className="block px-5 py-3 text-[#e3c493] hover:text-black hover:bg-[#f5e3c6] transition-all duration-300 text-sm font-playfair"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0 flex justify-center">
            <Link href="/" className="group flex flex-col items-center">
              <Image
                src="/logo-3.png"
                alt="Dilli Darbar Logo"
                width={70}
                height={70}
                priority
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Right Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="/order-online">Order Online</NavLink>
            <NavLink href="/catering">Catering</NavLink>
            <Link
              href="/contact"
              className="px-6 py-2 border border-[#e3c493] text-[#e3c493] hover:text-black hover:bg-[#f5e3c6] transition-all duration-300 rounded-lg text-sm uppercase font-playfair font-bold tracking-wider"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex flex-col justify-center items-center group focus:outline-none"
              aria-label="Toggle menu"
            >
              <span
                className={`absolute w-6 h-0.5 bg-[#e3c493] transform transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-[#e3c493] transform transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-[#e3c493] transform transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-[#e3c493]/20 space-y-1">
            <MobileNavLink href="/">Home</MobileNavLink>
            <MobileNavLink href="/about">About Us</MobileNavLink>

            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={toggleMenuDropdown}
                className="w-full flex justify-between items-center px-4 py-3 text-[#e3c493] hover:text-[#f5e3c6] text-sm font-playfair font-bold uppercase tracking-wide"
              >
                Menu
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isMenuDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 
                      0L10 10.586l3.293-3.293a1 1 0 111.414 
                      1.414l-4 4a1 1 0 01-1.414 
                      0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                  isMenuDropdownOpen
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {[
                  ["Appetizers", "/menu/appetizers"],
                  ["Main Course", "/menu/main-course"],
                  ["Biryani & Rice", "/menu/biryani"],
                  ["Desserts", "/menu/desserts"],
                  ["Beverages", "/menu/beverages"],
                ].map(([label, link]) => (
                  <MobileDropdownLink key={link} href={link}>
                    {label}
                  </MobileDropdownLink>
                ))}
              </div>
            </div>

            <MobileNavLink href="/order-online">Order Online</MobileNavLink>
            <MobileNavLink href="/catering">Catering</MobileNavLink>
            <MobileNavLink href="/contact">Contact</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Reusable components
const NavLink = ({ href, children }) => (
  <Link
    href={href}
    className="relative text-[#e3c493] hover:text-[#f5e3c6] px-3 py-2 text-sm font-playfair font-bold uppercase tracking-wider transition-colors duration-300 group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#e3c493] to-[#f5e3c6] transition-all duration-300 group-hover:w-full"></span>
  </Link>
);

const MobileNavLink = ({ href, children }) => (
  <Link
    href={href}
    className="block px-4 py-3 text-[#e3c493] hover:text-black hover:bg-[#f5e3c6] transition-all duration-300 text-sm font-playfair font-bold uppercase tracking-wide"
  >
    {children}
  </Link>
);

const MobileDropdownLink = ({ href, children }) => (
  <Link
    href={href}
    className="block px-4 py-2 text-[#e3c493] hover:text-black hover:bg-[#f5e3c6] transition-all duration-300 text-xs font-playfair uppercase tracking-wide"
  >
    {children}
  </Link>
);