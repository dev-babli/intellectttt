import { useState, useEffect } from 'react';

// Mobile breakpoint (tablet size and below)
const MOBILE_BREAKPOINT = 768;

export const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      
      // Mobile: 768px and below
      setIsMobile(width <= MOBILE_BREAKPOINT);
      
      // Tablet: 768px to 1024px
      setIsTablet(width >= 768 && width <= 1024);
      
      // Small Mobile: 480px and below
      setIsSmallMobile(width <= 480);
    };

    // Check on mount
    checkScreenSize();

    // Add resize listener
    const handleResize = () => {
      checkScreenSize();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Mobile-specific utilities
  const mobileUtils = {
    // Touch-friendly button sizes
    buttonSize: isMobile ? '44px' : '40px',
    
    // Mobile-optimized font sizes
    fontSize: {
      small: isMobile ? '14px' : '16px',
      medium: isMobile ? '16px' : '18px',
      large: isMobile ? '18px' : '20px',
      xlarge: isMobile ? '20px' : '24px',
    },
    
    // Mobile-optimized spacing
    spacing: {
      small: isMobile ? '8px' : '12px',
      medium: isMobile ? '12px' : '16px',
      large: isMobile ? '16px' : '24px',
      xlarge: isMobile ? '24px' : '32px',
    },
    
    // Mobile-optimized padding
    padding: {
      small: isMobile ? '8px 12px' : '12px 16px',
      medium: isMobile ? '12px 16px' : '16px 20px',
      large: isMobile ? '16px 20px' : '20px 24px',
    },
    
    // Mobile-optimized margins
    margin: {
      small: isMobile ? '4px' : '8px',
      medium: isMobile ? '8px' : '12px',
      large: isMobile ? '12px' : '16px',
      xlarge: isMobile ? '16px' : '24px',
    },
    
    // Mobile-optimized border radius
    borderRadius: {
      small: isMobile ? '4px' : '6px',
      medium: isMobile ? '6px' : '8px',
      large: isMobile ? '8px' : '12px',
    },
    
    // Mobile-optimized shadows
    shadow: {
      small: isMobile ? '0 1px 2px rgba(0,0,0,0.1)' : '0 2px 4px rgba(0,0,0,0.1)',
      medium: isMobile ? '0 2px 4px rgba(0,0,0,0.1)' : '0 4px 8px rgba(0,0,0,0.1)',
      large: isMobile ? '0 4px 8px rgba(0,0,0,0.1)' : '0 8px 16px rgba(0,0,0,0.1)',
    }
  };

  // Mobile-specific behaviors
  const mobileBehaviors = {
    // Disable hover effects on mobile
    disableHover: isMobile,
    
    // Use touch-friendly interactions
    useTouchInteractions: isMobile,
    
    // Reduce animations on mobile for better performance
    reduceAnimations: isMobile,
    
    // Use mobile-optimized scrolling
    useMobileScrolling: isMobile,
    
    // Optimize for mobile networks
    optimizeForMobile: isMobile,
  };

  // Mobile-specific layout
  const mobileLayout = {
    // Single column layout for mobile
    useSingleColumn: isMobile,
    
    // Stack elements vertically on mobile
    stackVertically: isMobile,
    
    // Use full width on mobile
    useFullWidth: isMobile,
    
    // Reduce padding on mobile
    reducePadding: isMobile,
    
    // Use mobile-optimized grid
    useMobileGrid: isMobile,
  };

  return {
    isMobile,
    isTablet,
    isSmallMobile,
    screenWidth,
    mobileUtils,
    mobileBehaviors,
    mobileLayout,
    MOBILE_BREAKPOINT
  };
};

export default useMobileDetection; 