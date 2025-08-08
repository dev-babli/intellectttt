import { useState, useEffect } from 'react';

export const useMobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSections, setOpenSections] = useState(new Set());
  const [openMegaMenuSections, setOpenMegaMenuSections] = useState(new Set());

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setOpenSections(new Set());
      setOpenMegaMenuSections(new Set());
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSections(new Set());
    setOpenMegaMenuSections(new Set());
  };

  const toggleSection = (sectionName) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(sectionName)) {
      newOpenSections.delete(sectionName);
    } else {
      newOpenSections.add(sectionName);
    }
    setOpenSections(newOpenSections);
  };

  const toggleMegaMenuSection = (menuName, sectionTitle) => {
    const key = `${menuName}-${sectionTitle}`;
    const newOpenMegaMenuSections = new Set(openMegaMenuSections);
    if (newOpenMegaMenuSections.has(key)) {
      newOpenMegaMenuSections.delete(key);
    } else {
      newOpenMegaMenuSections.add(key);
    }
    setOpenMegaMenuSections(newOpenMegaMenuSections);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return {
    isMobileMenuOpen,
    openSections,
    openMegaMenuSections,
    toggleMobileMenu,
    closeMobileMenu,
    toggleSection,
    toggleMegaMenuSection
  };
}; 