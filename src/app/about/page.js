"use client"
import React, { useState } from 'react';
import { Award, Heart, Users, Star, ChefHat, Sparkles } from 'lucide-react';
import { Jacques_Francois_Shadow } from 'next/font/google';

const AboutUsPage = () => {
  const [videoError, setVideoError] = useState(false);

  const values = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Authentic Mastery",
      description: "Time-honored recipes from royal Delhi kitchens"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion & Heritage",
      description: "Every dish crafted with love and tradition"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Royal Hospitality",
      description: "Every guest treated like royalty"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Fresh Excellence",
      description: "Finest ingredients, aromatic spices"
    }
  ];

  const signature = [
    "Dilliwala Butter Chicken",
    "Dal Makhani",
    "Tandoori Kebabs",
    "Aromatic Biryani",
    "Street-style Chaat",
    "Mutton Rogan Josh"
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Background */}
      <div className="relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-yellow-400 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 border border-amber-400 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-yellow-300 rounded-full opacity-20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block mb-6 px-6 py-2 border border-[#e3c493]/30 rounded-full">
              <span className="font-serif text-[#e3c493] text-sm tracking-widest uppercase">Legacy of Delhi</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-gray-200 mb-6 tracking-wide font-light">
              About
              <span className="block text-[#e3c493] text-4xl md:text-6xl lg:text-7xl mt-4">Dilli Darbar</span>
            </h1>
            <p className="font-serif text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed italic">
              Where the royal heritage and flavors of Delhi come alive in every extraordinary bite
            </p>
          </div>
        </div>
      </div>

      {/* Video & Story Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#e3c493] to-amber-500 rounded-lg opacity-20 group-hover:opacity-30 blur transition-all duration-300"></div>
            <div className="relative bg-black/50 border border-yellow-400/20 rounded-lg overflow-hidden aspect-video">
              {!videoError ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  onError={() => setVideoError(true)}
                >
                  <source src="https://www.shutterstock.com/shutterstock/videos/3733051863/preview/stock-footage-butter-chicken-murgh-makhani-a-rich-creamy-north-indian-dish-with-tender-chicken-in-a-spiced.webm" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-black to-gray-900">
                  <div className="text-center p-8">
                    <ChefHat className="w-16 h-16 text-[#e3c493] mx-auto mb-4" />
                    <p className="font-serif text-gray-300 text-lg">Experience the Art of Indian Cuisine</p>
                    <p className="font-serif text-gray-500 text-sm mt-2 italic">Video coming soon</p>
                  </div>
                </div>
              )}
            </div>
            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-sm px-4 py-2 rounded border border-[#e3c493]/30">
              <p className="font-serif text-[#e3c493] text-sm tracking-wide">A Glimpse Into Our Kitchen</p>
            </div>
          </div>

          {/* Story Section */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-6 h-6 text-[#e3c493]" />
                <h2 className="font-serif text-3xl md:text-4xl text-gray-200 tracking-wide">Our Story</h2>
              </div>
              <div className="w-20 h-px bg-gradient-to-r from-[#e3c493] to-transparent mb-6"></div>
              <p className="font-serif text-lg text-gray-300 leading-relaxed mb-6">
                Welcome to <span className="text-[#e3c493]">Dilli Darbar Indian Cuisine</span>,where the rich heritage and flavors of Delhi come alive in every bite. Inspired by the royal kitchens of India’s capital, we bring you an authentic experience rooted in tradition, flavor, and hospitality.
              </p>
             
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-yellow-400/20">
              <div className="text-center">
                <Award className="w-8 h-8 text-[#e3c493] mx-auto mb-2" />
                <p className="font-serif text-2xl text-[#e3c493] font-light">100+</p>
                <p className="font-serif text-gray-400 text-sm">Authentic Dishes</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-[#e3c493] mx-auto mb-2" />
                <p className="font-serif text-2xl text-[#e3c493] font-light">Royal</p>
                <p className="font-serif text-gray-400 text-sm">Hospitality</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      {/* Our Values Section */}
<div className="relative bg-gradient-to-b from-black via-gray-900/50 to-black py-24">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 tracking-wide">
        Our <span className="text-[#e3c493]">Philosophy</span>
      </h2>
      <p className="font-serif text-xl text-gray-400 italic">
        The pillars of our culinary excellence
      </p>
    </div>

    {/* Description Section */}
    <div className="max-w-4xl mx-auto mb-16 text-center space-y-8">
      <p className="font-serif text-lg text-gray-300 leading-relaxed">
        At <span className="text-[#e3c493]">Dilli Darbar</span>, we believe food is more than just a meal — it's a journey. 
        Our chefs craft each dish using time-honored recipes, aromatic spices, and the freshest 
        ingredients to capture the true essence of North Indian cuisine. From buttery Dilliwala Butter Chicken 
        and Dal Makhani to sizzling Tandoori Kebabs, from hearty Biryani to street-style Chaat – every plate tells 
        a story of India's diverse and vibrant food culture.
      </p>
      
      <p className="font-serif text-lg text-gray-300 leading-relaxed">
        Whether you're joining us for a casual lunch, a family dinner, or a special celebration, 
        our warm and welcoming ambiance makes every visit memorable. We're proud to serve a wide range 
        of vegetarian and non-vegetarian dishes, as well as vegan and gluten-free options to cater 
        to every palate.
      </p>
      
      <p className="font-serif text-xl leading-relaxed text-[#e3c493] pt-4">
        Come savor the flavors of Delhi at Dilli Darbar – where tradition meets taste, 
        and every guest is treated like royalty.
      </p>
    </div>
  
  </div>
</div>


      {/* Signature Dishes Section */}
      <div className="relative ">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-black/50 border border-yellow-400/20 rounded-lg p-12">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl text-gray-200 mb-4 tracking-wide">
                Signature <span className="text-[#e3c493]">Delicacies</span>
              </h2>
              <p className="font-serif text-lg text-gray-400 italic">From buttery classics to sizzling specialties</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {signature.map((dish, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-black to-gray-900/50 border border-yellow-400/10 rounded-lg hover:border-[#e3c493]/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-[#e3c493] rounded-full"></div>
                  <p className="font-serif text-gray-200 text-lg">{dish}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="font-serif text-gray-300 text-lg mb-4">
                Every plate tells a story of India's diverse and vibrant food culture
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-serif text-gray-400">
                <span className="px-4 py-2 border border-yellow-400/20 rounded-full">Vegetarian Options</span>
                <span className="px-4 py-2 border border-yellow-400/20 rounded-full">Vegan Friendly</span>
                <span className="px-4 py-2 border border-yellow-400/20 rounded-full">Gluten-Free Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-200 mb-6 tracking-wide leading-tight">
              Come Savor the Flavors of <span className="text-[#e3c493]">Delhi</span>
            </h2>
            <p className="font-serif text-xl text-gray-300 leading-relaxed italic">
              Where tradition meets taste, and every guest is treated like royalty
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <a 
              href="/catering"
              className="bg-gradient-to-r from-[#e3c493] to-amber-500 text-black font-serif text-lg px-10 py-4 rounded hover:from-amber-500 hover:to-[#e3c493] transition-all duration-300 transform hover:scale-105"
            >
              Make a Reservation
            </a>
            <a 
              href="/menu"
              className="border border-[#e3c493] text-[#e3c493] font-serif text-lg px-10 py-4 rounded hover:bg-[#e3c493] hover:text-black transition-all duration-300"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default AboutUsPage;



/*
Mutton Rogan Josh 
*/
