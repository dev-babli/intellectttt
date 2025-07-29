import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";
import { ChevronDown, Menu, Search, ArrowRight, X } from "lucide-react";
import '../../App.css';
import { Link } from 'react-router-dom';

// Styled Components
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: #ffffff;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;

  @media (max-width: 1024px) {
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    padding: 0 0.75rem;
    height: 56px;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
    height: 52px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 90px;
    width: auto;
  }

  @media (max-width: 768px) {
    img {
      height: 28px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 50px;
    }
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  color: ${(props) => (props.isActive ? "#6366f1" : "#070707ff")};
  font-weight: 500;
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    background: rgba(99, 102, 241, 0.05);
    color: #6366f1;
  }

  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
    transform: ${(props) => (props.isActive ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const SearchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.7);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 200px;
  justify-content: flex-start;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ${(props) =>
    props.variant === "primary"
      ? `
    background: #6366f1;
    color: #ffffff;

    &:hover {
      background: #5855eb;
    }
  `
      : `
    background: transparent;
    color: #374151;
    border: 1px solid #d1d5db;

    &:hover {
      background: #f9fafb;
      color: #111827;
      border-color: #9ca3af;
    }
  `}

  img {
    width: 16px;
    height: 16px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #374151;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s ease;
  position: relative;
  z-index: 1001;

  &:hover {
    background: rgba(99, 102, 241, 0.05);
    color: #6366f1;
  }

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 0.25rem;

    svg {
      width: 20px !important;
      height: 20px !important;
    }
  }
`;

// Mobile Sidebar Components
const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9998;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 320px;
  max-width: 85vw;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(24px);
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  z-index: 9999;
  overflow-y: auto;
  transform: translateX(${props => props.isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease;
  box-shadow: ${props => props.isOpen ? '0 0 30px rgba(0, 0, 0, 0.1)' : 'none'};
`;

const SidebarHeader = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 64px;
`;

const SidebarClose = styled.button`
  background: none;
  border: none;
  color: #374151;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(99, 102, 241, 0.05);
    color: #6366f1;
  }
`;

const SidebarNav = styled.nav`
  padding: 0.5rem 0;
`;

const SidebarSection = styled.div`
  margin-bottom: 2rem;
`;

const SidebarSectionTitle = styled.div`
  font-family: 'Manrope', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  padding: 1rem 1.5rem;
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    color: #6366f1;
    background: rgba(99, 102, 241, 0.02);
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.2s ease;
    transform: ${props => props.isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
    color: #6366f1;
  }
`;

const SidebarSectionContent = styled.div`
  max-height: ${props => props.isExpanded ? '400px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const SidebarNavItem = styled.div`
  padding: 0.75rem 2rem;
  color: #4b5563;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  position: relative;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(99, 102, 241, 0.05);
    color: #6366f1;
    padding-left: 2.25rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background: #cbd5e1;
    border-radius: 50%;
    transition: all 0.2s ease;
  }

  &:hover::before {
    background: #6366f1;
    transform: translateY(-50%) scale(1.2);
  }

  svg {
    width: 12px;
    height: 12px;
    transition: all 0.2s ease;
    opacity: 0;
    color: #6366f1;
  }

  &:hover svg {
    opacity: 1;
  }
`;

const SidebarActions = styled.div`
  padding: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: auto;
`;

const MegaMenuContainer = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  max-height: 80vh;
  overflow-y: auto;
  overscroll-behavior: contain;
`;

const MegaMenuContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  min-height: fit-content;

  @media (max-width: 1024px) {
    padding: 1rem 0.75rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 0.25rem;
  }
`;

const MegaMenuSection = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const MegaMenuSectionTitle = styled.div`
  font-family: 'Manrope', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;
  padding: 0.75rem 0;
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    color: #6366f1;
  }

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s ease;
    transform: ${props => props.isExpanded ? 'rotate(180deg)' : 'rotate(0deg)'};
    color: #6366f1;
  }
`;

const MegaMenuSectionContent = styled.div`
  max-height: ${props => props.isExpanded ? '200px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding-bottom: ${props => props.isExpanded ? '0.75rem' : '0'};
`;

const MegaMenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const MegaMenuServiceItem = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 6px;
  padding: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    border-color: rgba(99, 102, 241, 0.2);
    background: rgba(99, 102, 241, 0.02);
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }
`;

const MegaMenuServiceTitle = styled.h4`
  color: #111827;
  font-size: 0.875rem;
  font-weight: 600;
  font-family: 'Manrope', sans-serif;
  margin-bottom: 0.375rem;
  line-height: 1.3;
  display: flex;
  align-items: center;
  gap: 0.375rem;

  &::before {
    content: '';
    width: 4px;
    height: 4px;
    background: #6366f1;
    border-radius: 50%;
    flex-shrink: 0;
  }
`;

const MegaMenuServiceDescription = styled.p`
  color: #6b7280;
  font-size: 0.775rem;
  line-height: 1.4;
  font-family: 'Inter', sans-serif;
  margin-left: 0.75rem;
`;

const CardTitle = styled.h4`
  color: #111827;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Manrope', sans-serif;
  margin-bottom: 0.5rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 0.375rem;
  }
`;

const CardDescription = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    font-size: 0.825rem;
    line-height: 1.45;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.4;
  }
`;

const DropdownButton = styled.button`
  background: rgba(255, 129, 57, 0.1);
  border: 1px solid rgba(255, 129, 57, 0.3);
  border-radius: 4px;
  color: rgb(255, 129, 57);
  padding: 0.5rem 0.75rem;
  margin-top: 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;

  &:hover {
    background: rgba(255, 129, 57, 0.2);
    border-color: rgba(255, 129, 57, 0.5);
  }

  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
    transform: ${(props) => (props.expanded ? "rotate(180deg)" : "rotate(0deg)")};
  }
`;

const CompanyDropdownBase = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: -50%;
  right: -50%;
  width: 200%;
  background: rgba(33, 40, 119, 0.98);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  margin-top: 0.5rem;
  padding: 1.5rem;
  z-index: 10;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  display: grid;
  gap: 1.5rem;
  min-height: 200px;
  max-height: 70vh;
  overflow-y: auto;
  justify-content: center;

  /* Center 2-item grids on large screens */
  &[style*="--center-two-items: 1"] {
    @media (min-width: 1200px) {
      grid-template-columns: repeat(2, minmax(200px, 300px)) !important;
      justify-content: center;
      max-width: 700px;
      margin: 0 auto;
      left: -25%;
      right: -25%;
      width: 150%;
    }
  }

  @media (max-width: 1400px) {
    left: -30%;
    right: -30%;
    width: 160%;
    grid-template-columns: var(--responsive-grid, repeat(2, 1fr));
  }

  @media (max-width: 1200px) {
    left: -10%;
    right: -10%;
    width: 120%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    left: 0;
    right: 0;
    width: 100%;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1rem;
    max-height: 60vh;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
    padding: 0.75rem;
    max-height: 50vh;
    left: -10%;
    right: -10%;
    width: 120%;
  }

  @media (max-width: 360px) {
    gap: 0.5rem;
    padding: 0.5rem;
    max-height: 45vh;
    left: 0;
    right: 0;
    width: 100%;
  }
`;

// Wrapper component to filter out itemCount prop and handle grid columns
const CompanyDropdown = ({ itemCount, ...props }) => {
  const getGridColumns = (count) => {
    if (count <= 2) return '1fr 1fr';
    if (count <= 4) return 'repeat(2, 1fr)';
    return 'repeat(3, 1fr)';
  };

  const getResponsiveGridColumns = (count) => {
    if (count <= 3) return 'repeat(2, 1fr)';
    return 'repeat(2, 1fr)';
  };

  const shouldCenterTwoItems = itemCount === 2;

  return (
    <CompanyDropdownBase
      {...props}
      style={{
        ...props.style,
        gridTemplateColumns: getGridColumns(itemCount || 2),
        '--responsive-grid': getResponsiveGridColumns(itemCount || 2),
        '--center-two-items': shouldCenterTwoItems ? '1' : '0'
      }}
    />
  );
};

const CompanyItem = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 180px;

  &:hover {
    background: rgba(255, 129, 57, 0.08);
    border-color: rgba(255, 129, 57, 0.2);
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
  }
`;

const CompanyImageBox = styled.div`
  width: 100%;
  height: 100px;
  background: ${props => props.bgColor || 'rgba(255, 129, 57, 0.1)'};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    opacity: 0.9;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.15);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 100%);
  }
`;

const CompanyContent = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 0.875rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const CompanyName = styled.h5`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  margin-top: 0.25rem;
`;

const CompanyFocus = styled.span`
  color: rgb(255, 129, 57);
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 0.25rem;
`;

const CompanyDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.825rem;
  line-height: 1.5;
  margin-top: 0.5rem;
`;

const SideMenuGroup = styled.div`
  h5 {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;

    &.companies-heading {
      color: rgb(255, 129, 57);
      font-size: 0.8rem;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 30px;
        height: 2px;
        background: rgb(255, 129, 57);
        border-radius: 1px;
      }
    }
  }
`;

const SideMenuItem = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 0.6rem 0.75rem;
  margin: 0 -0.75rem;

  &:hover {
    color: rgb(255, 129, 57);
    background: rgba(255, 129, 57, 0.08);
  }

  &.company-item {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    margin-bottom: 0.5rem;
    border-radius: 6px;
    font-weight: 500;

    &:hover {
      background: rgba(255, 129, 57, 0.12);
      border-color: rgba(255, 129, 57, 0.3);
      transform: translateX(4px);
    }
  }

  svg {
    width: 14px;
    height: 14px;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover svg {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 0.825rem;
    padding: 0.5rem 0.6rem;
    margin: 0 -0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.5rem;
    margin: 0 -0.5rem;
  }
`;

// Animation variants
const megaMenuVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

// Menu data with images
const menuData = {
  "Who We Are": {
    mainItems: [
      {
        title: "Our Journey",
        description: "Learn about our journey in AI innovation",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Company Overview", "Vision & Mission", "Core Values"],
        url:"/Company/our-journey"
      },
      {
        title: "Leadership Team",
        description: "Meet our executive leadership",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Executive Team", "Board of Directors", "Advisory Board"],
        url:"/Company/leadership-team"
      },
      {
        title: "Global Presence",
        description: "Our worldwide locations and partnerships",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Office Locations", "Global Partners", "Regional Expertise"],
        url: "/Company/global-presence"
      },
      {
        title: "Our Companies",
        description: "Explore our subsidiary companies and divisions",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Lumin Inc.", "Lumin Innovations"],
        hasDropdown: true,
        url: "/Company/our-companies",
        companies: [
          {
            name: "Lumin Inc.",
            description: "Healthcare display and consulting solutions specializing in medical technology",
            focus: "Healthcare Technology",
            image: "/placeholder.svg?height=60&width=100",
            color: "rgba(59, 130, 246, 0.1)",
            url: "https://lumininc.com/"
          },
          {
            name: "Lumin Innovations",
            description: "Advanced manufacturing and automation driving Industry 4.0 solutions",
            focus: "Manufacturing & Automation",
            image: "/placeholder.svg?height=60&width=100",
            color: "rgba(16, 185, 129, 0.1)",
            url: "https://lumin-innovations.com/"
          }
        ]
      },
    ],
    sideItems: [
      {
        title: "Company Info",
        items: ["Awards & Recognition", "Press Releases", "Investor Relations"],
      },
      {
        title: "Partnerships",
        items: ["Strategic Alliances", "Technology Partners", "Channel Partners"],
      },
    ],
  },
  "What We Do": {
    mainItems: [
      {
        title: "Artificial Intelligence",
        description: "Comprehensive AI & GenAI Practice with cutting-edge solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "GenAI & LLM Integration (GPT, Azure OpenAI)",
          "Agentic AI & AI Agents",
          "NLP & Computer Vision",
          "ML Engineering & MLOps",
          "AI Automation (AI + RPA)",
          "AI Advisory & Responsible AI"
        ],
        url: "/service/ai-and-gen-ai",
        hasDropdown: true,
        services: [
          {
            name: "GenAI & LLM Integration",
            description: "Enterprise-grade GPT and Azure OpenAI implementations for intelligent automation",
            focus: "AI & GenAI Practice",
            color: "rgba(147, 51, 234, 0.1)",
            url: "/service/ai-and-gen-ai/llm"
          },
          {
            name: "Agentic AI & AI Agents",
            description: "Advanced autonomous AI agents for complex business process automation",
            focus: "AI & GenAI Practice",
            color: "rgba(59, 130, 246, 0.1)",
            url: "/service/ai-and-gen-ai/agents"
          },
          {
            name: "NLP & Computer Vision",
            description: "Natural language processing and computer vision solutions for intelligent data analysis",
            focus: "AI & GenAI Practice",
            color: "rgba(16, 185, 129, 0.1)",
            url: "/service/ai-and-gen-ai/nlp"
          },
          {
            name: "ML Engineering & MLOps",
            description: "Scalable machine learning operations and model deployment infrastructure",
            focus: "AI & GenAI Practice",
            color: "rgba(245, 158, 11, 0.1)",
            url: "/service/ai-and-gen-ai/mlops"
          },
          {
            name: "AI Automation (AI + RPA)",
            description: "Intelligent robotic process automation powered by artificial intelligence",
            focus: "AI & GenAI Practice",
            color: "rgba(239, 68, 68, 0.1)",
            url: "/service/ai-and-gen-ai/automation"
          },
          {
            name: "AI Advisory & Responsible AI",
            description: "Strategic AI consulting and ethical AI implementation frameworks",
            focus: "AI & GenAI Practice",
            color: "rgba(168, 85, 247, 0.1)",
            url: "/service/ai-and-gen-ai/responsible"
          }
        ]
      },
      {
        title: "Cloud & Application Services",
        description: "Multi-cloud expertise and modern applications",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Azure, AWS, GCP Engineering", "DevOps & DevSecOps", "App Modernization", "API Services"],
        url: "/service/cloud-and-application-services",
        hasDropdown: true,
        services: [
          {
            name: "Azure, AWS, GCP Engineering",
            description: "Multi-cloud infrastructure design and implementation across major cloud platforms",
            focus: "Cloud Services",
            color: "rgba(59, 130, 246, 0.1)"
          },
          {
            name: "DevOps & DevSecOps",
            description: "Automated CI/CD pipelines with integrated security and compliance frameworks",
            focus: "Cloud Services",
            color: "rgba(16, 185, 129, 0.1)"
          },
          {
            name: "App Modernization",
            description: "Legacy application transformation to cloud-native microservices architecture",
            focus: "Cloud Services",
            color: "rgba(245, 158, 11, 0.1)"
          },
          {
            name: "API Services",
            description: "RESTful and GraphQL API development with comprehensive integration solutions",
            focus: "Cloud Services",
            color: "rgba(239, 68, 68, 0.1)"
          }
        ]
      },
      {
        title: "SAP Services",
        description: "Enterprise SAP solutions and support",
        image: "/placeholder.svg?height=80&width=280",
        items: ["S/4HANA Migration", "BTP Development", "AMS & Support"],
        hasDropdown: true,
        services: [
          {
            name: "S/4HANA Migration",
            description: "End-to-end SAP S/4HANA transformation with minimal business disruption",
            focus: "SAP Services",
            color: "rgba(59, 130, 246, 0.1)"
          },
          {
            name: "BTP Development",
            description: "SAP Business Technology Platform integration and custom application development",
            focus: "SAP Services",
            color: "rgba(16, 185, 129, 0.1)"
          },
          {
            name: "AMS & Support",
            description: "Application management services and 24/7 SAP system support",
            focus: "SAP Services",
            color: "rgba(245, 158, 11, 0.1)"
          }
        ]
      },
      {
        title: "Data & Analytics",
        description: "Advanced data engineering and BI solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Data Engineering", "BI & ETL", "Governance & Security"],
        hasDropdown: true,
        services: [
          {
            name: "Data Engineering",
            description: "Scalable data pipelines and modern data warehouse architecture",
            focus: "Data & Analytics",
            color: "rgba(147, 51, 234, 0.1)"
          },
          {
            name: "BI & ETL",
            description: "Business intelligence solutions with advanced ETL and real-time analytics",
            focus: "Data & Analytics",
            color: "rgba(59, 130, 246, 0.1)"
          },
          {
            name: "Governance & Security",
            description: "Data governance frameworks with enterprise-grade security and compliance",
            focus: "Data & Analytics",
            color: "rgba(239, 68, 68, 0.1)"
          }
        ]
      },
      {
        title: "Healthcare & Life Sciences IT",
        description: "Specialized healthcare technology solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: ["HL7/FHIR Integration", "AI in Medical Imaging", "Compliance Solutions"],
        hasDropdown: true,
        services: [
          {
            name: "HL7/FHIR Integration",
            description: "Healthcare interoperability solutions with HL7 and FHIR standards",
            focus: "Healthcare IT",
            color: "rgba(16, 185, 129, 0.1)"
          },
          {
            name: "AI in Medical Imaging",
            description: "Advanced AI algorithms for medical image analysis and diagnostic support",
            focus: "Healthcare IT",
            color: "rgba(147, 51, 234, 0.1)"
          },
          {
            name: "Compliance Solutions",
            description: "HIPAA, FDA, and regulatory compliance frameworks for healthcare systems",
            focus: "Healthcare IT",
            color: "rgba(245, 158, 11, 0.1)"
          }
        ]
      },
      {
        title: "Manufacturing & Engineering IT",
        description: "Industry 4.0 and smart manufacturing",
        image: "/placeholder.svg?height=80&width=280",
        items: ["PLM & CAD/CAE", "MES & IoT", "Smart Factory Solutions"],
        hasDropdown: true,
        services: [
          {
            name: "PLM & CAD/CAE",
            description: "Product lifecycle management with advanced CAD/CAE integration solutions",
            focus: "Manufacturing IT",
            color: "rgba(239, 68, 68, 0.1)"
          },
          {
            name: "MES & IoT",
            description: "Manufacturing execution systems with comprehensive IoT device integration",
            focus: "Manufacturing IT",
            color: "rgba(16, 185, 129, 0.1)"
          },
          {
            name: "Smart Factory Solutions",
            description: "Industry 4.0 automation and intelligent manufacturing optimization systems",
            focus: "Manufacturing IT",
            color: "rgba(59, 130, 246, 0.1)"
          }
        ]
      },
    ],
    sideItems: [
      {
        title: "More Services",
        items: ["Managed IT Services", "Talent Solutions", "AI Automation", "Responsible AI Advisory"],
      },
      {
        title: "Industries",
        items: ["Healthcare", "Manufacturing", "Aerospace", "Financial Services"],
      },
    ],
  },
  Industries: {
    mainItems: [
      {
        title: "Healthcare & Life Sciences",
        description: "Comprehensive healthcare IT solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Clinical Systems", "Medical Imaging", "Regulatory Compliance"],
      },
      {
        title: "Manufacturing & Automotive",
        description: "Smart manufacturing and Industry 4.0",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Smart Factory", "Quality Management", "Supply Chain"],
      },
      {
        title: "Aerospace & Defense",
        description: "Mission-critical aerospace solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Avionics Systems", "Defense Solutions", "Compliance"],
      },
      {
        title: "Financial Services",
        description: "Banking and fintech solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Digital Banking", "Risk Management", "Compliance"],
      },
    ],
    sideItems: [
      {
        title: "Expertise",
        items: ["Industry 4.0", "Digital Transformation", "Regulatory Compliance"],
      },
    ],
  },
  Resources: {
    mainItems: [
      {
        title: "Blog & Insights",
        description: "Latest thoughts from our experts",
        image: "/placeholder.svg?height=80&width=280",
        items: ["AI Trends", "Industry Analysis", "Best Practices"],
      },
      {
        title: "Whitepapers & Case Studies",
        description: "In-depth research and success stories",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Technical Papers", "Client Success", "ROI Analysis"],
      },
      {
        title: "News & Events",
        description: "Company updates and industry events",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Press Releases", "Webinars", "Conferences"],
      },
    ],
    sideItems: [
      {
        title: "Support",
        items: ["Documentation", "Training", "Community Forum"],
      },
    ],
  },
};

function MegaMenuIntellectt() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCompanies, setExpandedCompanies] = useState({});
  const [expandedMobileSections, setExpandedMobileSections] = useState({});
  const [expandedMegaMenuSections, setExpandedMegaMenuSections] = useState({});
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const handleKeyDown = (event, menuName) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveMenu(activeMenu === menuName ? null : menuName);
    } else if (event.key === "Escape") {
      setActiveMenu(null);
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileSection = (sectionName) => {
    setExpandedMobileSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  const toggleMegaMenuSection = (menuName, sectionTitle) => {
    const key = `${menuName}-${sectionTitle}`;
    const isCurrentlyExpanded = expandedMegaMenuSections[key];

    // Close all sections first, then open the clicked one if it wasn't already open
    setExpandedMegaMenuSections(prev => {
      const newState = {};
      // Close all sections for this menu
      Object.keys(prev).forEach(existingKey => {
        if (existingKey.startsWith(`${menuName}-`)) {
          newState[existingKey] = false;
        } else {
          newState[existingKey] = prev[existingKey];
        }
      });

      // Open the clicked section only if it wasn't already open
      if (!isCurrentlyExpanded) {
        newState[key] = true;
      }

      return newState;
    });
  };

  const toggleCompanyDropdown = (e, cardTitle) => {
    e.stopPropagation();
    const isExpanding = !expandedCompanies[cardTitle];

    setExpandedCompanies(prev => ({
      ...prev,
      [cardTitle]: !prev[cardTitle]
    }));

    // Auto scroll to show the dropdown companies properly
    if (isExpanding) {
      setTimeout(() => {
        // Find the Our Companies card and its dropdown
        const ourCompaniesCard = document.querySelector('[data-card="our-companies"]');
        if (ourCompaniesCard) {
          // Get the card position and add dropdown height
          const cardRect = ourCompaniesCard.getBoundingClientRect();
          const headerHeight = 64;
          const dropdownHeight = 250; // Estimated dropdown height
          const targetPosition = window.pageYOffset + cardRect.bottom + dropdownHeight - window.innerHeight + 100;

          window.scrollTo({
            top: Math.max(targetPosition, headerHeight + 200), // Ensure we don't scroll too high
            behavior: 'smooth'
          });
        } else {
          // Fallback: scroll to show the dropdown area
          const headerHeight = 64;
          window.scrollTo({
            top: headerHeight + 450, // Position to show company boxes
            behavior: 'smooth'
          });
        }
      }, 400); // Allow time for dropdown to expand
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      // Close mega menu if clicking outside
      if (activeMenu && !event.target.closest('[data-mega-menu]') && !event.target.closest('[data-nav-item]')) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen, activeMenu]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const renderMegaMenu = (menuName) => {
    const menuConfig = menuData[menuName];
    if (!menuConfig) return null;

    return (
      <MegaMenuContainer
        variants={megaMenuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        data-mega-menu="true"
      >
        <MegaMenuContent>
          {menuConfig.mainItems.map((item, index) => {
            const sectionKey = `${menuName}-${item.title}`;
            const isExpanded = expandedMegaMenuSections[sectionKey];

            return (
              <MegaMenuSection key={item.title}>
                <MegaMenuSectionTitle
                  isExpanded={isExpanded}
                  onClick={["Our Journey", "Leadership Team", "Global Presence"].includes(item.title) ? () => { if (item.url) { window.location.href = item.url; } } : () => toggleMegaMenuSection(menuName, item.title)}
                  style={["Our Journey", "Leadership Team", "Global Presence"].includes(item.title) ? { cursor: 'pointer' } : {}}
                >
                  {item.title}
                  {!["Our Journey", "Leadership Team", "Global Presence"].includes(item.title) && <ChevronDown />}
                </MegaMenuSectionTitle>

                {!["Our Journey", "Leadership Team", "Global Presence"].includes(item.title) && (
                  <MegaMenuSectionContent isExpanded={isExpanded}>
                    {item.hasDropdown && (item.companies || item.services) ? (
                      <MegaMenuGrid>
                        {(item.companies || item.services).map((serviceItem, serviceIndex) => (
                          <MegaMenuServiceItem
                            key={serviceIndex}
                            onClick={() => {
                              if (serviceItem.url) {
                                if (serviceItem.url.startsWith('http')) {
                                  window.open(serviceItem.url, '_blank');
                                } else {
                                  window.location.href = serviceItem.url;
                                }
                              }
                            }}
                            style={serviceItem.url ? { cursor: 'pointer' } : {}}
                          >
                            <MegaMenuServiceTitle>
                              {serviceItem.name}
                            </MegaMenuServiceTitle>
                            <MegaMenuServiceDescription>
                              {serviceItem.description}
                            </MegaMenuServiceDescription>
                          </MegaMenuServiceItem>
                        ))}
                      </MegaMenuGrid>
                    ) : (
                      <MegaMenuGrid>
                        <MegaMenuServiceItem>
                          <MegaMenuServiceTitle>
                            {item.title}
                          </MegaMenuServiceTitle>
                          <MegaMenuServiceDescription>
                            {item.description}
                          </MegaMenuServiceDescription>
                        </MegaMenuServiceItem>
                      </MegaMenuGrid>
                    )}
                  </MegaMenuSectionContent>
                )}
              </MegaMenuSection>
            );
          })}
        </MegaMenuContent>
      </MegaMenuContainer>
    );
  };

  return (
    <div style={{ background: "white" }}>
      {/* Mega Menu Header */}
      <HeaderContainer>
        <HeaderContent>
          <Logo>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-DYNCWKUHLFK4nr4sVmlGe1Bm1n3ut5.svg"
              alt="Intellectt"
            />
          </Logo>

          <Navigation>
            {Object.keys(menuData).map((menuName) => (
              <NavItem
                key={menuName}
                isActive={activeMenu === menuName}
                onMouseEnter={() => handleMouseEnter(menuName)}
                onMouseLeave={handleMouseLeave}
                onKeyDown={(e) => handleKeyDown(e, menuName)}
                tabIndex={0}
                role="button"
                aria-expanded={activeMenu === menuName}
                aria-haspopup="true"
                data-nav-item="true"
              >
                {menuName}
                <ChevronDown />
              </NavItem>
            ))}
          </Navigation>

          <HeaderActions>
            <ActionButton
              variant="secondary"
              onClick={() => window.location.href = '/contact'}
              style={{ cursor: 'pointer' }}
            >
              Contact Us
            </ActionButton>
            <ActionButton variant="primary">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sms-white-icon01.bc2d1a2ea97440981308d874744b5030-maSIJ4zjy5dFUPhUFhyXV4qSGn0tKk.svg"
                alt=""
              />
              Chat with AI
            </ActionButton>
          </HeaderActions>

          <MobileMenuButton onClick={handleMobileMenuToggle} aria-label="Open mobile menu">
            <Menu size={24} />
          </MobileMenuButton>
        </HeaderContent>

        <AnimatePresence>
          {activeMenu && (
            <div onMouseEnter={() => handleMouseEnter(activeMenu)} onMouseLeave={handleMouseLeave}>
              {renderMegaMenu(activeMenu)}
            </div>
          )}
        </AnimatePresence>
      </HeaderContainer>

      {/* Mobile Sidebar */}
      <SidebarOverlay
        isOpen={isMobileMenuOpen}
        onClick={closeMobileMenu}
      />

      <Sidebar isOpen={isMobileMenuOpen}>
        <SidebarHeader>
          <Logo>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-DYNCWKUHLFK4nr4sVmlGe1Bm1n3ut5.svg"
              alt="Intellectt"
            />
          </Logo>
          <SidebarClose
            onClick={closeMobileMenu}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </SidebarClose>
        </SidebarHeader>

        <SidebarNav>
          {Object.keys(menuData).map((menuName) => {
            const isExpanded = expandedMobileSections[menuName];
            return (
              <SidebarSection key={menuName}>
                <SidebarSectionTitle
                  isExpanded={isExpanded}
                  onClick={() => toggleMobileSection(menuName)}
                >
                  {menuName}
                  <ChevronDown />
                </SidebarSectionTitle>
                <SidebarSectionContent isExpanded={isExpanded}>
                  {menuData[menuName].mainItems.map((item, index) => (
                    <SidebarNavItem key={index}>
                      {item.title}
                      <ArrowRight size={12} />
                    </SidebarNavItem>
                  ))}
                </SidebarSectionContent>
              </SidebarSection>
            );
          })}
        </SidebarNav>

        <SidebarActions>
          <ActionButton variant="secondary" style={{ width: '100%', justifyContent: 'center' }}>
            Contact Us
          </ActionButton>
          <ActionButton variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sms-white-icon01.bc2d1a2ea97440981308d874744b5030-maSIJ4zjy5dFUPhUFhyXV4qSGn0tKk.svg"
              alt=""
            />
            Chat with AI
          </ActionButton>
        </SidebarActions>
      </Sidebar>

    </div>
  );
}

export default MegaMenuIntellectt;
