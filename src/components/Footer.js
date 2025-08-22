"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-black to-gray-900 border-t border-[#e3c493]/30 mt-10">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e3c493] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo & Description */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="group inline-block">
              <Image
                src="/logo.png"
                alt="Dilli Darbar Logo"
                width={180}
                height={180}
                priority
                className="transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-[#e3c493]/80 text-sm font-playfair leading-relaxed max-w-sm">
              Experience the finest in authentic Indian cuisine. Where tradition meets luxury in every dish, crafted with passion and served with excellence.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <SocialLink href="https://www.facebook.com/profile.php?id=61579307412385" label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://www.instagram.com/dillidarbar_ma/" label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </SocialLink>
              {/* <SocialLink href="#" label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </SocialLink> */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-[#f5e3c6] text-lg font-playfair tracking-wider uppercase">
              Quick Links
            </h3>
            <div className="space-y-3">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/menu">Our Menu</FooterLink>
              <FooterLink href="/catering">Catering</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </div>
          </div>

          {/* Menu Categories */}
          <div className="space-y-6">
            <h3 className="text-[#f5e3c6] text-lg font-playfair tracking-wider uppercase">
              Our Specialties
            </h3>
            <div className="space-y-3">
            {/* <FooterLink href="menu">Soups</FooterLink>
            <FooterLink href="menu">Salads</FooterLink> */}
            <FooterLink href="menu">Vegetarian Appetizers</FooterLink>
            <FooterLink href="menu">Non-Vegetarian Appetizers</FooterLink>
            <FooterLink href="menu">Curries</FooterLink>
            <FooterLink href="menu">Other House Specialities</FooterLink>
            <FooterLink href="menu">Classic Combos</FooterLink>
            {/* <FooterLink href="menu">Dosa Corner</FooterLink>
            <FooterLink href="menu">Flatbreads</FooterLink>
            <FooterLink href="menu">Rice & Noodles</FooterLink>
            <FooterLink href="menu">Breads</FooterLink>
            <FooterLink href="menu">Desserts</FooterLink>
            <FooterLink href="menu">Kids Menu</FooterLink> */}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-[#f5e3c6] text-lg font-playfair tracking-wider uppercase">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#e3c493] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <p className="text-[#e3c493] text-sm font-playfair leading-relaxed">
                    1 Edgell Road<br />
                    Framingham, MA 01701
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#e3c493] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <Link href="tel:+15085992222" className="text-[#e3c493] hover:text-[#f5e3c6] text-sm font-playfair transition-colors duration-300">
                +1 (508) 599-2222
                </Link>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#e3c493] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <Link href="mailto:Dillidarbarma@gmail.com" className="text-[#e3c493] hover:text-[#f5e3c6] text-sm font-playfair transition-colors duration-300">
                Dillidarbarma@gmail.com
                </Link>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-2">
              <h4 className="text-[#f5e3c6] text-sm font-playfair uppercase tracking-wider">Hours</h4>
              <div className="text-[#e3c493]/80 text-xs font-playfair space-y-1">
                <p>Mon - Thu: 11:30 AM - 10:00 PM</p>
                <p>Fri - Sat: 11:30 AM - 10:30 PM</p>
                <p>Sunday: 12:00 PM - 9:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Online CTA */}
        <div className="border-t border-[#e3c493]/20 py-8">
          <div className="text-center">
            <h3 className="text-[#f5e3c6] text-xl font-playfair mb-4 tracking-wider">
              Experience Luxury at Home
            </h3>
            <p className="text-[#e3c493]/80 text-sm font-playfair mb-6 max-w-2xl mx-auto leading-relaxed">
              Bring the authentic flavors of Dilli Darbar to your dining table. Order online for pickup or delivery.
            </p>
            <Link
              href="https://order.toasttab.com/online/dilli-darbar-1-edgell-road"
              target="_blank"
              className="inline-flex items-center px-8 py-3 border-2 border-[#e3c493] text-[#e3c493] hover:text-black hover:bg-[#f5e3c6] transition-all duration-300 rounded-lg text-sm uppercase font-playfair tracking-wider group"
            >
              <span>Order Online</span>
              <svg className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#e3c493]/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#e3c493]/60 text-xs font-playfair text-center md:text-left">
              <p>&copy; {currentYear} Dilli Darbar. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6 text-xs font-playfair">
              <FooterLink href="/privacy" className="text-[#e3c493]/60 hover:text-[#e3c493]">
                Privacy Policy
              </FooterLink>
              <FooterLink href="/terms" className="text-[#e3c493]/60 hover:text-[#e3c493]">
                Terms of Service
              </FooterLink>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e3c493]/20 via-[#e3c493] to-[#e3c493]/20"></div>
    </footer>
  );
}

// Reusable Components
const FooterLink = ({ href, children, className = "" }) => (
  <Link
    href={href}
    className={`text-[#e3c493]/80 hover:text-[#f5e3c6] text-sm font-playfair transition-colors duration-300 block group ${className}`}
  >
    <span className="relative">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#f5e3c6] transition-all duration-300 group-hover:w-full"></span>
    </span>
  </Link>
);

const SocialLink = ({ href, children, label }) => (
  <Link
    href={href}
    aria-label={label}
    className="w-10 h-10 bg-[#e3c493]/10 hover:bg-[#e3c493]/20 text-[#e3c493] hover:text-[#f5e3c6] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#e3c493]/20"
  >
    {children}
  </Link>
);