'use client'
import React, { useState, useEffect, useRef } from 'react';

const MenuItem = ({ slug, title, price, subtitle, description, image, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add a slight delay based on index for staggered animation
          setTimeout(() => {
            setIsVisible(true);
          }, index * 100);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the item is visible
        rootMargin: '50px 0px -50px 0px' // Start animation slightly before item enters viewport
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

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  // Default description if none provided
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
          <div className="flex items-center gap-4">
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
                    {title}
                  </h3>
                </div>
                <div className="flex-shrink-0 mx-2 sm:mx-4 flex-1 border-b border-dotted border-gray-600 self-end mb-2"></div>
                <div className="flex-shrink-0">
                  <span className="text-lg sm:text-xl font-serif text-[#fdfbf5] group-hover:text-[#e3c493] transition-colors duration-300">
                    ${price}
                  </span>
                </div>
              </div>
              <div className="text-sm text-[#e3c493] italic group-hover:text-[#f9e4b7] transition-colors duration-300">
                {subtitle}
              </div>
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
            <p className="text-sm text-[#e3c493] group-hover:text-[#f9e4b7] transition-colors duration-300 leading-relaxed mb-2">
              {description || defaultDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuColumn = ({ items, sectionHeading, className = "" }) => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className={`w-full lg:flex-1 ${className}`}>
      {/* Section Heading for this column */}
      <div ref={sectionRef} className="text-center mb-6 sm:mb-8">
        <h2 className={`text-xl sm:text-2xl font-serif text-[#e3c493] border-b-2 border-amber-600 pb-2 inline-block transition-all duration-700 ease-out ${
          isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {sectionHeading}
        </h2>
      </div>
      
      <div className="space-y-2">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

// Two Column Menu Component with separate section headings
const LuxuryItem2 = ({ leftSectionHeading, rightSectionHeading, leftColumn, rightColumn, title, subtitle }) => {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const titleRef = useRef(null);

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

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
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

        {/* Menu Content - Two Column Layout with separate section headings */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column with its own section heading */}
          <MenuColumn 
            items={leftColumn} 
            sectionHeading={leftSectionHeading}
          />
          
          {/* Right Column with its own section heading */}
          <MenuColumn 
            items={rightColumn} 
            sectionHeading={rightSectionHeading}
          />
        </div>

        {/* Mobile Section Separator - Only shown on mobile when both columns have items */}
        {leftColumn.length > 0 && rightColumn.length > 0 && (
          <div className="lg:hidden my-8 flex justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LuxuryItem2;