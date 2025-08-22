import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-amber-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-yellow-300 rounded-full opacity-20"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-1">
        {/* Coming Soon Badge - Prominent at Top */}
        <div className="mb-12 mt-8 animate-fade-in">
          <div className="inline-block relative">
            {/* Elegant border frame */}
            <div className="absolute -inset-3 border border-[#e3c493]/40 rounded-lg"></div>
            <div className="bg-gradient-to-r from-[#e3c493]/10 to-amber-400/10 backdrop-blur-sm px-8 py-4 rounded-lg border border-[#e3c493]/60 shadow-2xl">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#e3c493] animate-spin" />
                <span className="font-playfair text-lg md:text-xl font-medium tracking-[0.2em] text-[#e3c493] uppercase">Coming Soon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-gray-200 mb-8 max-w-4xl mx-auto leading-tight font-light tracking-wide">
          An Extraordinary Experience
          <span className="block text-[#e3c493] mt-4 text-3xl md:text-5xl lg:text-6xl">Awaits</span>
        </h1>

        {/* Subtitle */}
        <div className="mb-16">
          <p className="font-playfair text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Where culinary artistry meets timeless elegance
          </p>
          <p className="font-playfair text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light italic tracking-wide">
            Opening doors to unforgettable memories
          </p>
        </div>

        {/* Elegant Description */}
        <div className="mb-20 max-w-2xl mx-auto">
          <p className="font-playfair text-gray-300 text-lg leading-relaxed italic tracking-wide">
            We are meticulously crafting every detail to deliver an unparalleled dining experience. 
            From our carefully curated menu to our thoughtfully designed ambiance, 
            every element is being perfected with passion and precision.
          </p>
        </div>

        {/* Contact Information */}
        <div className="border-t border-yellow-400/20 pt-16">
          <p className="font-playfair text-gray-300 text-xl mb-12 italic tracking-wide">
            For reservations and distinguished inquiries
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-gray-200">
            <a href="tel:+15085992222" className="flex items-center space-x-4 hover:text-[#e3c493] transition-colors duration-300 cursor-pointer">
              <Phone className="w-6 h-6 text-[#e3c493]" />
              <span className="font-playfair text-lg tracking-wide">+1 (508) 599-2222</span>
            </a>
            <div className="hidden md:block w-px h-8 bg-yellow-400/40"></div>
            <a href="mailto:Dillidarbarma@gmail.com" className="flex items-center space-x-4 hover:text-[#e3c493] transition-colors duration-300 cursor-pointer">
              <Mail className="w-6 h-6 text-[#e3c493]" />
              <span className="font-playfair text-lg tracking-wide">Dillidarbarma@gmail.com</span>
            </a>
            <div className="hidden md:block w-px h-8 bg-yellow-400/40"></div>
            <a href="mailto:Dillidarbarma@yahoo.com" className="flex items-center space-x-4 hover:text-[#e3c493] transition-colors duration-300 cursor-pointer">
              <Mail className="w-6 h-6 text-[#e3c493]" />
              <span className="font-playfair text-lg tracking-wide">Dillidarbarma@yahoo.com</span>
            </a>
          </div>

          {/* Newsletter Signup Hint */}
          <div className="mt-16">
            <p className="font-playfair text-gray-400 text-base italic tracking-wide">
              Be among the first to experience our grand opening
            </p>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default ComingSoon;