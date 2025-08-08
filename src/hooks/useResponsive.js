import { useState, useEffect } from 'react';

// Breakpoint definitions
const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

// Hook to get current screen size and breakpoint
export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Determine current breakpoint
  const getBreakpoint = () => {
    const { width } = windowSize;
    if (width >= breakpoints.xxl) return 'xxl';
    if (width >= breakpoints.xl) return 'xl';
    if (width >= breakpoints.lg) return 'lg';
    if (width >= breakpoints.md) return 'md';
    if (width >= breakpoints.sm) return 'sm';
    return 'xs';
  };

  // Check if screen is mobile
  const isMobile = windowSize.width < breakpoints.md;
  
  // Check if screen is tablet
  const isTablet = windowSize.width >= breakpoints.md && windowSize.width < breakpoints.lg;
  
  // Check if screen is desktop
  const isDesktop = windowSize.width >= breakpoints.lg;
  
  // Check if screen is small mobile
  const isSmallMobile = windowSize.width < breakpoints.sm;
  
  // Check if screen is large desktop
  const isLargeDesktop = windowSize.width >= breakpoints.xl;

  // Responsive utilities
  const responsive = {
    // Text sizes
    text: {
      xs: isSmallMobile ? '0.75rem' : '0.875rem',
      sm: isSmallMobile ? '0.875rem' : '1rem',
      base: isSmallMobile ? '1rem' : '1.125rem',
      lg: isSmallMobile ? '1.125rem' : '1.25rem',
      xl: isSmallMobile ? '1.25rem' : '1.5rem',
      '2xl': isSmallMobile ? '1.5rem' : '1.875rem',
      '3xl': isSmallMobile ? '1.875rem' : '2.25rem',
      '4xl': isSmallMobile ? '2.25rem' : '3rem',
    },
    
    // Spacing
    spacing: {
      xs: isSmallMobile ? '0.25rem' : '0.5rem',
      sm: isSmallMobile ? '0.5rem' : '0.75rem',
      base: isSmallMobile ? '0.75rem' : '1rem',
      lg: isSmallMobile ? '1rem' : '1.5rem',
      xl: isSmallMobile ? '1.5rem' : '2rem',
      '2xl': isSmallMobile ? '2rem' : '3rem',
      '3xl': isSmallMobile ? '3rem' : '4rem',
    },
    
    // Padding
    padding: {
      xs: isSmallMobile ? '0.5rem' : '0.75rem',
      sm: isSmallMobile ? '0.75rem' : '1rem',
      base: isSmallMobile ? '1rem' : '1.5rem',
      lg: isSmallMobile ? '1.5rem' : '2rem',
      xl: isSmallMobile ? '2rem' : '3rem',
    },
    
    // Margins
    margin: {
      xs: isSmallMobile ? '0.25rem' : '0.5rem',
      sm: isSmallMobile ? '0.5rem' : '0.75rem',
      base: isSmallMobile ? '0.75rem' : '1rem',
      lg: isSmallMobile ? '1rem' : '1.5rem',
      xl: isSmallMobile ? '1.5rem' : '2rem',
    },
    
    // Border radius
    borderRadius: {
      sm: isSmallMobile ? '4px' : '6px',
      base: isSmallMobile ? '6px' : '8px',
      lg: isSmallMobile ? '8px' : '12px',
      xl: isSmallMobile ? '12px' : '16px',
    },
    
    // Shadows
    shadow: {
      sm: isSmallMobile ? '0 1px 2px rgba(0,0,0,0.05)' : '0 1px 3px rgba(0,0,0,0.1)',
      base: isSmallMobile ? '0 1px 3px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.1)',
      lg: isSmallMobile ? '0 4px 6px rgba(0,0,0,0.1)' : '0 10px 15px rgba(0,0,0,0.1)',
      xl: isSmallMobile ? '0 10px 15px rgba(0,0,0,0.1)' : '0 20px 25px rgba(0,0,0,0.1)',
    }
  };

  return {
    windowSize,
    breakpoint: getBreakpoint(),
    isMobile,
    isTablet,
    isDesktop,
    isSmallMobile,
    isLargeDesktop,
    responsive,
    breakpoints
  };
};

// Hook for responsive visibility
export const useResponsiveVisibility = () => {
  const { isMobile, isTablet, isDesktop, isSmallMobile } = useResponsive();
  
  return {
    showOnMobile: !isMobile,
    showOnTablet: !isTablet,
    showOnDesktop: !isDesktop,
    showOnSmallMobile: !isSmallMobile,
    hideOnMobile: isMobile,
    hideOnTablet: isTablet,
    hideOnDesktop: isDesktop,
    hideOnSmallMobile: isSmallMobile,
  };
};

// Hook for responsive layout
export const useResponsiveLayout = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  
  return {
    // Grid columns
    gridColumns: {
      xs: 1,
      sm: isMobile ? 1 : 2,
      md: isTablet ? 2 : 3,
      lg: isDesktop ? 4 : 3,
      xl: isDesktop ? 5 : 4,
    },
    
    // Container max width
    containerMaxWidth: isDesktop ? '1400px' : isTablet ? '960px' : '100%',
    
    // Sidebar width
    sidebarWidth: isMobile ? '100%' : isTablet ? '300px' : '350px',
    
    // Header height
    headerHeight: isMobile ? '60px' : isTablet ? '70px' : '80px',
    
    // Footer padding
    footerPadding: isMobile ? '20px 0' : isTablet ? '30px 0' : '40px 0',
  };
};

// Hook for responsive animations
export const useResponsiveAnimation = () => {
  const { isMobile, isSmallMobile } = useResponsive();
  
  return {
    // Reduce animations on mobile for better performance
    animationDuration: isMobile ? '0.3s' : '0.5s',
    transitionDuration: isMobile ? '0.3s' : '0.5s',
    
    // Disable complex animations on small mobile
    enableComplexAnimations: !isSmallMobile,
    
    // Parallax settings
    parallaxEnabled: !isMobile,
    
    // Scroll behavior
    scrollBehavior: 'smooth',
  };
};

// Hook for responsive touch targets
export const useResponsiveTouchTargets = () => {
  const { isMobile, isSmallMobile } = useResponsive();
  
  return {
    // Minimum touch target sizes
    minTouchTarget: isMobile ? '44px' : '40px',
    minButtonHeight: isMobile ? '44px' : '40px',
    minButtonWidth: isMobile ? '44px' : '40px',
    
    // Link padding
    linkPadding: isMobile ? '12px 16px' : '8px 12px',
    
    // Input padding
    inputPadding: isMobile ? '12px 16px' : '8px 12px',
  };
};

export default useResponsive; 