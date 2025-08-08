import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { 
  MegaMenuContainer, 
  MegaMenuContent, 
  MegaMenuSection 
} from '../../styles/MegaMenuStyles';

const MegaMenuDropdown = ({ 
  isOpen, 
  menuName, 
  sections, 
  onMouseEnter, 
  onMouseLeave 
}) => {
  const handleNavigation = (url) => {
    // Add any additional navigation logic here
    console.log('Navigating to:', url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <MegaMenuContainer
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <MegaMenuContent>
            {sections.map((section) => (
              <MegaMenuSection key={section.title}>
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        to={item.url}
                        onClick={() => handleNavigation(item.url)}
                      >
                        {item.title}
                        <ArrowRight size={14} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </MegaMenuSection>
            ))}
          </MegaMenuContent>
        </MegaMenuContainer>
      )}
    </AnimatePresence>
  );
};

export default MegaMenuDropdown; 