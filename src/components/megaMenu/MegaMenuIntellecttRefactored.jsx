import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

// Import custom hooks
import { useScrollEffect } from './hooks/useScrollEffect';
import { useMobileMenu } from './hooks/useMobileMenu';

// Import components
import SearchBar from './components/SearchBar';
import MobileMenu from './components/MobileMenu';
import MegaMenuDropdown from './components/MegaMenuDropdowns/MegaMenuDropdown';

// Import data
import { navigationItems } from './data/navigationData';

// Import styles
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Navigation,
  NavItem,
  ConnectButton,
  MobileMenuButton
} from './styles/MegaMenuStyles';

// Add smooth scrolling to the entire page
if (typeof document !== "undefined") {
  document.documentElement.style.scrollBehavior = "smooth";
}

// Router Button Component
const RouterButton = ({ to, external, children, onNavigate, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate();
    }
    if (external) {
      window.open(to, '_blank');
    } else {
      navigate(to);
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

function MegaMenuIntellecttRefactored() {
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);

  // Custom hooks
  const scrolled = useScrollEffect();
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu
  } = useMobileMenu();

  // State management
  const [activeMenu, setActiveMenu] = useState(null);
  const [isHomePage, setIsHomePage] = useState(false);

  // Check if current page is home page
  useEffect(() => {
    setIsHomePage(location.pathname === '/');
  }, [location.pathname]);

  // Navigation handler
  const handleNavigation = (url) => {
    navigate(url);
    setActiveMenu(null);
    closeMobileMenu();
  };

  // Mouse event handlers
  const handleMouseEnter = (menuName) => {
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  // Keyboard navigation
  const handleKeyDown = (event, menuName) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveMenu(activeMenu === menuName ? null : menuName);
    } else if (event.key === 'Escape') {
      setActiveMenu(null);
    }
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <HeaderContainer
      ref={headerRef}
      isHomePage={isHomePage}
      scrolled={scrolled}
    >
      <HeaderContent>
        {/* Logo */}
        <Logo isHomePage={isHomePage} scrolled={scrolled}>
          <RouterButton to="/" onNavigate={() => setActiveMenu(null)}>
            <img 
              src="/public/logos/Intellectt-Logo.webp" 
              alt="Intellectt" 
            />
          </RouterButton>
        </Logo>

        {/* Desktop Navigation */}
        <Navigation>
          {navigationItems.map((item) => (
            <NavItem
              key={item.name}
              isHomePage={isHomePage}
              scrolled={scrolled}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
              onKeyDown={(e) => handleKeyDown(e, item.name)}
              tabIndex={0}
            >
              {item.name}
              {item.hasDropdown && <ChevronDown size={16} />}
            </NavItem>
          ))}
        </Navigation>

        {/* Search Bar */}
        <SearchBar isHomePage={isHomePage} scrolled={scrolled} />

        {/* Connect Button */}
        <ConnectButton
          isHomePage={isHomePage}
          scrolled={scrolled}
          onClick={() => handleNavigation('/contact')}
        >
          Let's Connect
        </ConnectButton>

        {/* Mobile Menu Button */}
        <MobileMenuButton
          isHomePage={isHomePage}
          scrolled={scrolled}
          onClick={toggleMobileMenu}
        >
          <Menu size={24} />
        </MobileMenuButton>
      </HeaderContent>

      {/* Mega Menu Dropdowns */}
      {navigationItems.map((item) => (
        <MegaMenuDropdown
          key={item.name}
          isOpen={activeMenu === item.name}
          menuName={item.name}
          sections={item.sections}
          onMouseEnter={() => handleMouseEnter(item.name)}
          onMouseLeave={handleMouseLeave}
        />
      ))}

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu} 
      />
    </HeaderContainer>
  );
}

export default MegaMenuIntellecttRefactored; 