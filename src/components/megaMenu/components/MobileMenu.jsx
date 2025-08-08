import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMobileMenu } from '../hooks/useMobileMenu';
import { mobileMenuItems } from '../data/navigationData';
import {
  MobileMenuContainer,
  MobileMenuHeader,
  MobileMenuContent,
  MobileMenuItem,
  MobileMenuButton,
  MobileSubmenu,
  MobileSubmenuItem
} from '../styles/MegaMenuStyles';

const MobileMenu = ({ isOpen, onClose }) => {
  const {
    openSections,
    openMegaMenuSections,
    toggleSection,
    toggleMegaMenuSection
  } = useMobileMenu();

  const handleNavigation = (url) => {
    onClose();
    // Add any additional navigation logic here
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <MobileMenuContainer
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
          <MobileMenuHeader>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src="/public/logos/Intellectt-Logo.webp" 
                alt="Intellectt" 
                style={{ height: '30px' }}
              />
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px'
              }}
            >
              <X size={24} />
            </button>
          </MobileMenuHeader>

          <MobileMenuContent>
            {mobileMenuItems.map((item) => (
              <MobileMenuItem key={item.name}>
                <MobileMenuButton
                  onClick={() => toggleSection(item.name)}
                >
                  <span>{item.name}</span>
                  {openSections.has(item.name) ? (
                    <ChevronDown size={20} />
                  ) : (
                    <ChevronRight size={20} />
                  )}
                </MobileMenuButton>

                <AnimatePresence>
                  {openSections.has(item.name) && (
                    <MobileSubmenu
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.sections.map((section) => (
                        <div key={section.title}>
                          <MobileMenuButton
                            onClick={() => toggleMegaMenuSection(item.name, section.title)}
                            style={{ fontSize: '0.9rem', color: '#718096' }}
                          >
                            <span>{section.title}</span>
                            {openMegaMenuSections.has(`${item.name}-${section.title}`) ? (
                              <ChevronDown size={16} />
                            ) : (
                              <ChevronRight size={16} />
                            )}
                          </MobileMenuButton>

                          <AnimatePresence>
                            {openMegaMenuSections.has(`${item.name}-${section.title}`) && (
                              <MobileSubmenu
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                style={{ paddingLeft: '1rem' }}
                              >
                                {section.items.map((subItem) => (
                                  <MobileSubmenuItem key={subItem.title}>
                                    <Link
                                      to={subItem.url}
                                      onClick={() => handleNavigation(subItem.url)}
                                    >
                                      {subItem.title}
                                    </Link>
                                  </MobileSubmenuItem>
                                ))}
                              </MobileSubmenu>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </MobileSubmenu>
                  )}
                </AnimatePresence>
              </MobileMenuItem>
            ))}

            {/* Contact Button */}
            <div style={{ 
              padding: '1rem 0', 
              borderTop: '1px solid rgba(0, 0, 0, 0.1)',
              marginTop: '1rem'
            }}>
              <Link
                to="/contact"
                onClick={onClose}
                style={{
                  display: 'block',
                  background: '#e53e3e',
                  color: '#ffffff',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  fontWeight: '600',
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                Let's Connect
              </Link>
            </div>
          </MobileMenuContent>
        </MobileMenuContainer>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 