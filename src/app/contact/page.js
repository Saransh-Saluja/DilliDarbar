import { Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 border border-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border border-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-yellow-300 rounded-full opacity-20"></div>
        <div className="absolute top-40 right-40 w-48 h-48 border border-yellow-500 rounded-full opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="mb-16 flex justify-center">
            <img 
              src="/logo-3.png" 
              alt="Restaurant Logo" 
              className="w-40 h-40 object-contain hover:scale-110 transition-transform duration-500"
            />
          </div>
          
          <h1 className="font-playfair text-6xl md:text-8xl text-gray-200 mb-8 font-light tracking-wide">
            Get In <span className="text-[#e3c493]">Touch</span>
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#e3c493] to-transparent mx-auto mb-10"></div>
          <p className="font-playfair text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
            For reservations and distinguished inquiries
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Phone */}
          <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-10 hover:border-[#e3c493]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#e3c493]/10 hover:-translate-y-2">
            <div className="text-center">
              <div className="bg-[#e3c493]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-[#e3c493]/20 transition-all duration-300">
                <Phone className="w-10 h-10 text-[#e3c493]" />
              </div>
              <p className="font-playfair text-gray-400 text-sm mb-4 tracking-wider uppercase">Call Us</p>
              <a href="tel:+15085992222" className="font-playfair text-gray-200 text-xl hover:text-[#e3c493] transition-colors block">
                +1 (508) 599-2222
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-10 hover:border-[#e3c493]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#e3c493]/10 hover:-translate-y-2">
            <div className="text-center">
              <div className="bg-[#e3c493]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-[#e3c493]/20 transition-all duration-300">
                <Mail className="w-10 h-10 text-[#e3c493]" />
              </div>
              <p className="font-playfair text-gray-400 text-sm mb-4 tracking-wider uppercase">Email Us</p>
              <a href="mailto:Dillidarbarma@gmail.com" className="font-playfair text-gray-200 text-lg hover:text-[#e3c493] transition-colors block mb-2">
                Dillidarbarma@gmail.com
              </a>
              <a href="mailto:Dillidarbarma@yahoo.com" className="font-playfair text-gray-200 text-lg hover:text-[#e3c493] transition-colors block">
                Dillidarbarma@yahoo.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-10 hover:border-[#e3c493]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#e3c493]/10 hover:-translate-y-2">
            <div className="text-center">
              <div className="bg-[#e3c493]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-[#e3c493]/20 transition-all duration-300">
                <MapPin className="w-10 h-10 text-[#e3c493]" />
              </div>
              <p className="font-playfair text-gray-400 text-sm mb-4 tracking-wider uppercase">Visit Us</p>
              <a href="https://maps.google.com/?q=1+Edgell+Road+Framingham+MA+01701" target="_blank" rel="noopener noreferrer" className="font-playfair text-gray-200 text-lg hover:text-[#e3c493] transition-colors block leading-relaxed">
                1 Edgell Road<br />
                Framingham, MA 01701
              </a>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-gray-900/60 to-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-2xl overflow-hidden hover:border-[#e3c493]/60 transition-all duration-500">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.8!2d-71.4167!3d42.2792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3815b8b8b8b8b%3A0x0!2s1%20Edgell%20Rd%2C%20Framingham%2C%20MA%2001701!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center border-t border-yellow-400/20 pt-16">
          <p className="font-playfair text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Where culinary artistry meets timeless elegance
          </p>
          <p className="font-playfair text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light italic tracking-wide">
            Experience unforgettable moments with us
          </p>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default ContactPage;