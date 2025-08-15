import React from 'react';
import { Mail, Phone } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-amber-400 rounded-full"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-16 flex justify-center">
          <img 
              src="/logo-3.png" 
              alt="Restaurant Logo" 
              className="w-32 h-32 object-contain"
            />
        </div>

        {/* Main Heading */}
        <h1 className="font-playfair text-6xl md:text-6xl text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
          About Us
        </h1>

        {/* Subtitle */}
        <div className="mb-16">
          <p className="font-playfair text-2xl md:text-3xl text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Crafting an extraordinary culinary journey
          </p>
          <p className="font-playfair text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light italic tracking-wide">
            Our story unfolds soon
          </p>
        </div>

        {/* Coming Soon Badge */}
        <div className="mb-20">
          <div className="inline-block bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-500 text-black px-12 py-4 rounded-full shadow-2xl shadow-yellow-400/30">
            <span className="font-playfair text-xl font-semibold tracking-widest uppercase">Coming Soon</span>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-yellow-400/20 pt-16">
          <p className="font-playfair text-gray-300 text-xl mb-12 italic tracking-wide">
            For distinguished inquiries
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 text-gray-200">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-yellow-400" />
              <span className="font-playfair text-lg tracking-wide"> +1 (508) 599-2222</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-yellow-400/40"></div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-yellow-400" />
              <span className="font-playfair text-lg tracking-wide">ask-jeev.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;