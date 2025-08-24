'use client'
import React, { useState, useEffect, useRef } from 'react';

const MenuItem = ({ slug, title, price, subtitle, description, image, index, options = [] }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const itemRef = useRef(null);

  // Initialize selected options with first option of each category
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
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, [index]);

  const handleClick = (e) => {
    // Don't flip if clicking on option selectors
    if (e.target.closest('.option-selector')) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  const handleOptionChange = (category, choice) => {
    setSelectedOptions(prev => ({
      ...prev,
      [category]: choice
    }));
  };

  // Calculate final price based on selected options
  const calculatePrice = () => {
    let finalPrice = parseFloat(price);
    Object.values(selectedOptions).forEach(choice => {
      if (choice && choice.priceModifier) {
        finalPrice += parseFloat(choice.priceModifier);
      }
    });
    return finalPrice.toFixed(2);
  };

  // Get selected option names for display
  const getSelectedOptionSummary = () => {
    const selections = Object.values(selectedOptions).filter(choice => choice);
    if (selections.length === 0) return '';
    return ` (${selections.map(choice => choice.name).join(', ')})`;
  };

  const defaultDescription = `Experience the authentic flavors of ${title}. Our chefs have carefully crafted this dish using traditional techniques and the finest ingredients to create a memorable dining experience that will delight your taste buds.`;

  return (
    <div 
      ref={itemRef}
      className={`cursor-pointer group transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      onClick={handleClick}
    >
      <div className="menu-item-container relative w-full h-auto min-h-[140px] transition-transform duration-700" style={{
        transformStyle: 'preserve-3d',
        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
      }}>
        {/* Front Side */}
        <div className="absolute inset-0 w-full backface-hidden p-4 border-b border-gray-800 hover:bg-[#1a1a1a] transition-colors duration-300 rounded-lg" style={{
          backfaceVisibility: 'hidden'
        }}>
          <div className="flex items-start gap-4">
            {/* Image Section */}
            {image && (
              <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border border-gray-700">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            )}
            
            {/* Content Section */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300">
                    {title}{getSelectedOptionSummary()}
                  </h3>
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 flex-1 border-b border-dotted border-gray-600 self-end mb-2"></div>
                <div className="flex-shrink-0">
                  <span className="text-lg sm:text-xl font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300">
                    ${calculatePrice()}
                  </span>
                </div>
              </div>
              <div className="text-sm text-[#e3c493] italic group-hover:text-[#f9e4b7] transition-colors duration-300 mb-3">
                {subtitle}
              </div>

              {/* Options Section */}
              {options.length > 0 && (
                <div className="option-selector space-y-3" onClick={e => e.stopPropagation()}>
                  {options.map((option, optionIndex) => (
                    <div key={optionIndex} className="space-y-1">
                      <label className="text-xs font-medium text-[#e3c493] uppercase tracking-wide">
                        {option.category}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {option.choices.map((choice, choiceIndex) => (
                          <button
                            key={choiceIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOptionChange(option.category, choice);
                            }}
                            className={`px-3 py-1 text-xs rounded-full border transition-all duration-200 ${
                              selectedOptions[option.category] === choice
                                ? 'bg-[#e3c493] text-black border-[#e3c493] shadow-md'
                                : 'bg-transparent text-[#e3c493] border-[#e3c493] hover:bg-[#e3c493] hover:text-black'
                            }`}
                          >
                            {choice.name}
                            {choice.priceModifier && choice.priceModifier !== 0 && (
                              <span className="ml-1">
                                ({choice.priceModifier > 0 ? '+' : ''}${Math.abs(choice.priceModifier).toFixed(2)})
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="text-xs text-gray-500 italic">
                    Click anywhere else on this item to see more details
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full backface-hidden p-4 border-b border-gray-800 hover:bg-[#1a1a1a] transition-colors duration-300 rounded-lg" style={{
          backfaceVisibility: 'hidden',
          transform: 'rotateY(180deg)'
        }}>
          <div className="h-full flex flex-col justify-center min-h-[132px]">
            <h3 className="text-md font-semibold font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300 mb-2">
              About {title}
            </h3>
            <p className="text-sm text-[#e3c493] group-hover:text-[#f9e4b7] transition-colors duration-300 leading-relaxed mb-4">
              {description || defaultDescription}
            </p>
            
            {/* Selected Options Summary on Back */}
            {options.length > 0 && Object.keys(selectedOptions).length > 0 && (
              <div className="border-t border-gray-700 pt-3">
                <h4 className="text-xs font-medium text-[#e3c493] uppercase tracking-wide mb-2">
                  Your Selection
                </h4>
                <div className="space-y-1">
                  {Object.entries(selectedOptions).map(([category, choice]) => (
                    choice && (
                      <div key={category} className="flex justify-between text-xs">
                        <span className="text-[#e3c493]">{category}:</span>
                        <span className="text-[#fdfbf5]">
                          {choice.name}
                          {choice.priceModifier && choice.priceModifier !== 0 && (
                            <span className="ml-1 text-[#e3c493]">
                              ({choice.priceModifier > 0 ? '+' : ''}${Math.abs(choice.priceModifier).toFixed(2)})
                            </span>
                          )}
                        </span>
                      </div>
                    )
                  ))}
                  <div className="flex justify-between text-sm font-semibold border-t border-gray-700 pt-1 mt-2">
                    <span className="text-[#e3c493]">Total:</span>
                    <span className="text-[#fdfbf5]">${calculatePrice()}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuColumn = ({ items, className = "" }) => {
  return (
    <div className={`w-full lg:flex-1 ${className}`}>
      <div className="space-y-2">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

const LuxuryItem3 = ({ sectionHeading, leftColumn, rightColumn, title, subtitle }) => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const titleRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTitleVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px 0px -50px 0px'
      }
    );

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px 0px -50px 0px'
      }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-black py-8 sm:py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-8 sm:mb-12">
          <div className={`mb-4 transition-all duration-700 ease-out ${
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="text-base sm:text-lg font-serif text-[#e3c493] mb-2">
              {subtitle}
            </p>
            <div className="flex justify-center mb-4">
              <svg width="40" height="10" viewBox="0 0 40 10" className="text-[#e3c493]">
                <path d="M5 5h30M2 2l3 3-3 3M38 2l-3 3 3 3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-serif text-[#e3c493] mb-2 transition-all duration-700 ease-out delay-200 ${
            isTitleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>{title}</h1>
        </div>

        {/* Section Title */}
        <div ref={sectionRef} className="text-center mb-6 sm:mb-8">
          <h2 className={`text-2xl sm:text-3xl font-serif text-[#e3c493] border-b-2 border-amber-600 pb-2 inline-block transition-all duration-700 ease-out ${
            isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {sectionHeading}
          </h2>
        </div>

        {/* Menu Content - Two Column Layout without center images */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <MenuColumn items={leftColumn} />
          <MenuColumn items={rightColumn} />
        </div>

        {/* Mobile Section Separator */}
        {leftColumn.length > 0 && rightColumn.length > 0 && (
          <div className="lg:hidden my-8 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LuxuryItem3;