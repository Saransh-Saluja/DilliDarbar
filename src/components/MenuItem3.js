'use client'
import React, { useState, useEffect, useRef } from 'react';

// --- MenuItem (unchanged, just responsive tweaks for padding/text size) ---
const MenuItem = ({ slug, title, price, subtitle, description, image, index, options = [] }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const itemRef = useRef(null);

  useEffect(() => {
    if (options.length > 0) {
      const initialSelections = {};
      options.forEach(option => {
        if (option.choices && option.choices.length > 0) {
          initialSelections[option.category] = option.choices[0];
        }
      });
      setSelectedOptions(initialSelections);
    }
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100);
        }
      },
      { threshold: 0.1, rootMargin: '50px 0px -50px 0px' }
    );

    if (itemRef.current) observer.observe(itemRef.current);
    return () => { if (itemRef.current) observer.unobserve(itemRef.current); };
  }, [index]);

  const handleClick = (e) => {
    if (e.target.closest('.option-selector')) return;
    setIsFlipped(!isFlipped);
  };

  const handleOptionChange = (category, choice) => {
    setSelectedOptions(prev => ({ ...prev, [category]: choice }));
  };

  const calculatePrice = () => {
    let finalPrice = parseFloat(price);
    Object.values(selectedOptions).forEach(choice => {
      if (choice?.priceModifier) finalPrice += parseFloat(choice.priceModifier);
    });
    return finalPrice.toFixed(2);
  };

  const defaultDescription = `Experience the authentic flavors of ${title}. Our chefs have carefully crafted this dish using traditional techniques and the finest ingredients to create a memorable dining experience that will delight your taste buds.`;

  const hasOptions = options.length > 0;
  const minHeight = hasOptions ? '200px' : '140px';

  return (
    <div 
      ref={itemRef}
      className={`cursor-pointer group transition-all duration-700 ease-out mb-6 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      onClick={handleClick}
    >
      <div 
        className="menu-item-container relative w-full transition-transform duration-700" 
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          minHeight
        }}
      >
        {/* Front Side */}
        <div 
          className=" w-full p-4 sm:p-4 border border-gray-800 hover:border-gray-700 bg-black hover:bg-[#0a0a0a] transition-colors duration-300 rounded-lg flex flex-col" 
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-start gap-3 sm:gap-4 mb-4">
            {image && (
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-gray-700">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg sm:text-xl font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300 leading-tight">
                  {title}
                </h3>
                <span className="text-lg sm:text-xl font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300">
                  ${calculatePrice()}
                </span>
              </div>
              <div className="text-xs sm:text-sm text-[#e3c493] italic group-hover:text-[#f9e4b7] transition-colors duration-300 mb-3">
                {subtitle}
              </div>
            </div>
          </div>

          {hasOptions && (
            <div className="option-selector border-t border-gray-800 pt-3 sm:pt-4 space-y-3 sm:space-y-4 overflow-hidden" onClick={e => e.stopPropagation()}>
              {options.map((option, optionIndex) => (
                <div key={optionIndex} className="space-y-2">
                  <label className="block text-xs font-medium text-[#e3c493] uppercase tracking-wide">
                    {option.category}
                  </label>
                  <div className="flex flex-wrap gap-2 max-w-full overflow-hidden">
                    {option.choices.map((choice, choiceIndex) => (
                      <button
                        key={choiceIndex}
                        onClick={(e) => { e.stopPropagation(); handleOptionChange(option.category, choice); }}
                        className={`px-2 sm:px-3 py-1.5 text-xs rounded-full border transition-all duration-200 hover:scale-105 ${
                          selectedOptions[option.category] === choice
                            ? 'bg-[#e3c493] text-black border-[#e3c493] shadow-md'
                            : 'bg-transparent text-[#e3c493] border-[#e3c493] hover:bg-[#e3c493]/10'
                        }`}
                      >
                        {choice.name}
                        {choice.priceModifier !== undefined && (
                          <span className="ml-1">
                            ({`${choice.priceModifier >= 0 ? '+' : ''}${choice.priceModifier.toFixed(2)}`})
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {!hasOptions && (
            <div className="text-xs text-gray-500 italic pt-2 border-t border-gray-800 mt-4">
              Tap to see description
            </div>
          )}
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 w-full p-4 sm:p-6 border border-gray-800 hover:border-gray-700 bg-black hover:bg-[#0a0a0a] transition-colors duration-300 rounded-lg" 
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="h-full flex flex-col justify-center">
            <h3 className="text-base sm:text-lg font-semibold font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300 mb-4">
              About {title}
            </h3>
            <p className="text-xs sm:text-sm text-[#e3c493] group-hover:text-[#f9e4b7] transition-colors duration-300 leading-relaxed mb-6">
              {description || defaultDescription}
            </p>
            <div className="text-xs text-gray-500 italic mt-4 pt-2 border-t border-gray-800">
              Tap to return
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuColumn = ({ items = [], className = "" }) => (
  <div className={`w-full ${className}`}>
    <div className="space-y-6 sm:space-y-8">
      {items?.map((item, index) => (
        <MenuItem key={index} {...item} index={index} />
      ))}
    </div>
  </div>
);

const LuxuryItem3 = ({ sectionHeading, leftColumn, rightColumn, title, subtitle }) => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsTitleVisible(true), { threshold: 0.1, rootMargin: '100px 0px -50px 0px' });
    const sectionObserver = new IntersectionObserver(([entry]) => entry.isIntersecting && setIsSectionVisible(true), { threshold: 0.1, rootMargin: '100px 0px -50px 0px' });

    if (titleRef.current) titleObserver.observe(titleRef.current);
    if (sectionRef.current) sectionObserver.observe(sectionRef.current);

    return () => {
      if (titleRef.current) titleObserver.unobserve(titleRef.current);
      if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="bg-black py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-8 sm:mb-12">
          <div className={`mb-4 sm:mb-6 transition-all duration-700 ease-out ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-base sm:text-lg font-serif text-[#e3c493] mb-2 sm:mb-4">{subtitle}</p>
            <div className="flex justify-center mb-4 sm:mb-6">
              <svg width="50" height="12" viewBox="0 0 60 12" className="text-[#e3c493]">
                <path d="M5 6h50M2 3l3 3-3 3M58 3l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>
          <h1 className={`inline-block border-b-2 border-amber-600 p-2 text-3xl sm:text-4xl lg:text-6xl font-serif text-[#e3c493] mb-4 transition-all duration-700 ease-out delay-200 ${isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {title}
          </h1>
        </div>

        {/* Section Heading
        <div ref={sectionRef} className="text-center mb-8 sm:mb-12">
          <h2 className={`text-2xl sm:text-3xl font-serif text-[#e3c493] border-b-2 border-amber-600 pb-2 sm:pb-3 inline-block transition-all duration-700 ease-out ${isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {sectionHeading}
          </h2>
        </div> */}

        {/* Menu Columns */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <MenuColumn items={leftColumn} />
          <MenuColumn items={rightColumn} />
        </div>
      </div>
    </section>
  );
};

export default LuxuryItem3;
