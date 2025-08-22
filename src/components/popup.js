'use client'
import React, { useState, useEffect } from 'react';
import { X, Bell, Sparkles } from 'lucide-react';

const NotificationPopup = ({ 
  title = "Notification", 
  message = "This is a notification message",
  duration = 5000,
  showOnLoad = true,
  delay = 1000
}) => {
  const [progress, setProgress] = useState(100);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (showOnLoad) {
      // Show notification after delay when component mounts
      const showTimer = setTimeout(() => {
        setIsVisible(true);
        setProgress(100);
        
        // Slide in animation
        setTimeout(() => setIsAnimating(true), 50);
        
        // Progress bar countdown
        const interval = setInterval(() => {
          setProgress((prev) => {
            const newProgress = prev - (100 / (duration / 100));
            if (newProgress <= 0) {
              clearInterval(interval);
              handleClose();
              return 0;
            }
            return newProgress;
          });
        }, 100);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(showTimer);
    }
  }, [showOnLoad, duration, delay]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={`
        transform transition-all duration-300 ease-out
        ${isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}>
        <div className="bg-black/95 backdrop-blur-sm border-2 border-[#e3c493]/40 rounded-xl shadow-2xl shadow-yellow-400/20 w-80 overflow-hidden">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-2 right-2 w-12 h-12 border border-yellow-400 rounded-full"></div>
            <div className="absolute bottom-2 left-2 w-8 h-8 border border-amber-400 rounded-full"></div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-800 h-1">
            <div 
              className="bg-gradient-to-r from-[#e3c493] to-yellow-300 h-1 transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 p-4">
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-8 h-8 bg-[#e3c493]/20 rounded-full flex items-center justify-center">
                    <Bell className="w-4 h-4 text-[#e3c493]" />
                  </div>

                </div>
                <h3 className="font-playfair text-lg text-gray-200  tracking-wide">
                  {title}
                </h3>
              </div>
              
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-[#e3c493] transition-colors duration-200 p-1 rounded-full hover:bg-gray-800/50"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message */}
            <p className="font-playfair text-gray-300 text-sm leading-relaxed tracking-wide pl-11">
              {message}
            </p>
          </div>

          {/* Bottom Accent */}
          <div className="h-1 bg-gradient-to-r from-transparent via-[#e3c493]/60 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;