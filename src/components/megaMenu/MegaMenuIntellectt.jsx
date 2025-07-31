import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";
import { ChevronDown, Menu, Search, ArrowRight, X } from "lucide-react";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";

// Add smooth scrolling to the entire page
if (typeof document !== "undefined") {
  document.documentElement.style.scrollBehavior = "smooth";
}

// Styled Components
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(30px) saturate(180%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  }
`;

const HeaderContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;

  @media (max-width: 1024px) {
    padding: 0 1.25rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 60px;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
    height: 56px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    width: auto;
    transition: transform 0.2s ease;
  }

  img:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    img {
      height: 32px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 28px;
    }
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.div`
  position: relative;
  cursor: pointer;
  padding: 0.625rem 0.875rem;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${(props) => (props.isActive ? "#6366f1" : "#1f2937")};
  font-weight: 600;
  font-size: 0.8rem;
  font-family: "Inter", sans-serif;
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transform-origin: center;

  &:hover {
    background: rgba(99, 102, 241, 0.08);
    color: #6366f1;
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
  }

  &:active {
    transform: translateY(0px) scale(0.98);
    transition: all 0.1s ease;
  }

  svg {
    width: 11px;
    height: 11px;
    transition: transform 0.3s ease;
    transform: ${(props) =>
      props.isActive ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

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

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.375rem 0.625rem;
  min-width: 200px;
  transition: all 0.2s ease;

  &:focus-within {
    border-color: #6366f1;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  @media (max-width: 768px) {
    min-width: 160px;
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  font-size: 0.875rem;
  font-family: "Inter", sans-serif;
  color: #374151;
  width: 100%;
  margin-left: 0.5rem;

  &::placeholder {
    color: #9ca3af;
  }
`;

const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  color: #9ca3af;
`;

const SearchResultsDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  margin-top: 0.5rem;
  max-height: 300px;
  overflow-y: auto;
  z-index: 1000;
`;

const SearchResultItem = styled.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid #f3f4f6;
  transition: background 0.2s ease;

  &:hover {
    background: #f9fafb;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const SearchResultTitle = styled.div`
  font-weight: 500;
  color: #111827;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

const SearchResultDescription = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
`;

const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 1rem;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    margin: 0 0.5rem;
  }
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transform-origin: center;

  ${(props) =>
    props.variant === "primary"
      ? `
    background: #6366f1;
    color: #ffffff;

    &:hover {
      background: #5855eb;
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
    }

    &:active {
      transform: translateY(0px) scale(0.98);
      transition: all 0.1s ease;
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
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(0px);
      transition: all 0.1s ease;
    }
  `}

  img {
    width: 16px;
    height: 16px;
    transition: transform 0.2s ease;
  }

  &:hover img {
    transform: translateX(2px);
  }
`;

// React Router Button Component
const RouterButton = ({ to, external, children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (external) {
      window.open(to, "_blank");
    } else {
      navigate(to);
    }
  };

  // Always use onClick handler for consistent behavior
  return (
    <ActionButton onClick={handleClick} {...props}>
      {children}
    </ActionButton>
  );
};

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #374151;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1001;
  transform-origin: center;

  &:hover {
    background: rgba(99, 102, 241, 0.08);
    color: #6366f1;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.15);
  }

  &:active {
    transform: scale(0.95);
    transition: all 0.1s ease;
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
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
  z-index: 9998;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.isOpen ? "0" : "-100%")};
  bottom: 0;
  width: 320px;
  max-width: 85vw;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(30px) saturate(180%);
  border-right: 1px solid rgba(0, 0, 0, 0.08);
  z-index: 9999;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  overflow-y: auto;
  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  box-shadow: ${(props) =>
    props.isOpen ? "0 0 30px rgba(0, 0, 0, 0.1)" : "none"};
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
  font-family: "Manrope", sans-serif;
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
    transform: ${(props) =>
      props.isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
    color: #6366f1;
  }
`;

const SidebarSectionContent = styled.div`
  max-height: ${(props) => (props.isExpanded ? "400px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

const SidebarNavItem = styled.div`
  padding: 0.75rem 2rem;
  color: #4b5563;
  font-size: 0.875rem;
  font-weight: 400;
  font-family: "Inter", sans-serif;
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
    content: "";
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
  background: #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-top: 1px solid rgba(0, 0, 0, 0.04);
  z-index: 999;
  overflow: hidden;
`;

const MegaMenuContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  min-height: fit-content;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 1024px) {
    padding: 1.25rem 0.75rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
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
  font-family: "Manrope", sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;
  padding: 1.5rem 0;
  margin: 0;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  &:hover {
    color: #6366f1;
  }

  svg {
    width: 14px;
    height: 14px;
    transition: transform 0.2s ease;
    transform: ${(props) =>
      props.isExpanded ? "rotate(180deg)" : "rotate(0deg)"};
    color: #6366f1;
  }
`;

const MegaMenuSectionContent = styled.div`
  max-height: ${(props) => (props.isExpanded ? "none" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding-bottom: ${(props) => (props.isExpanded ? "0.75rem" : "0")};
`;

const MegaMenuGrid = styled.div`
  display: grid;
  grid-template-columns: ${(props) =>
    props.menuName === "SERVICES"
      ? "repeat(4, 1fr)"
      : "repeat(auto-fit, minmax(220px, 1fr))"};
  gap: 2rem;
  align-items: start;

  @media (max-width: 1200px) {
    grid-template-columns: ${(props) =>
      props.menuName === "SERVICES"
        ? "repeat(2, 1fr)"
        : "repeat(auto-fit, minmax(220px, 1fr))"};
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const MegaMenuServiceItem = styled.div`
  background: #ffffff;
  border: none;
  border-radius: 12px;
  padding: ${(props) =>
    props.menuName === "SERVICES" ? "1.5rem" : "0.875rem"};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  height: ${(props) => (props.menuName === "SERVICES" ? "auto" : "auto")};
  transform-origin: center;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
    transition: all 0.1s ease;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: ${(props) => (props.menuName === "SERVICES" ? "200px" : "auto")};

  &:hover {
    background: rgba(0, 0, 0, 0.02);
    transform: translateY(-2px);
  }
`;

const ServiceIcon = styled.div`
  font-size: ${(props) => (props.menuName === "SERVICES" ? "2rem" : "1.5rem")};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.menuName === "SERVICES" ? "64px" : "50px")};
  height: ${(props) => (props.menuName === "SERVICES" ? "64px" : "50px")};
  background: ${(props) => props.color || "rgba(99, 102, 241, 0.1)"};
  border-radius: 12px;
  margin-bottom: ${(props) =>
    props.menuName === "SERVICES" ? "1rem" : "0.5rem"};
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const MegaMenuServiceTitle = styled.h4`
  color: #111827;
  font-size: ${(props) =>
    props.menuName === "SERVICES" ? "1.125rem" : "0.875rem"};
  font-weight: 700;
  font-family: "Inter", sans-serif;
  margin-bottom: ${(props) =>
    props.menuName === "SERVICES" ? "0.75rem" : "0.375rem"};
  line-height: 1.2;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  flex-grow: 1;

  &::before {
    display: none;
  }
`;

const MegaMenuServiceDescription = styled.p`
  color: #6b7280;
  font-size: ${(props) =>
    props.menuName === "SERVICES" ? "0.875rem" : "0.775rem"};
  line-height: 1.5;
  font-family: "Inter", sans-serif;
  margin-left: 0;
  flex-grow: 1;
`;

const CardTitle = styled.h4`
  color: #111827;
  font-size: 1rem;
  font-weight: 600;
  font-family: "Manrope", sans-serif;
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
  font-family: "Inter", sans-serif;

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
    transform: ${(props) =>
      props.expanded ? "rotate(180deg)" : "rotate(0deg)"};
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
    if (count <= 2) return "1fr 1fr";
    if (count <= 4) return "repeat(2, 1fr)";
    return "repeat(3, 1fr)";
  };

  const getResponsiveGridColumns = (count) => {
    if (count <= 3) return "repeat(2, 1fr)";
    return "repeat(2, 1fr)";
  };

  const shouldCenterTwoItems = itemCount === 2;

  return (
    <CompanyDropdownBase
      {...props}
      style={{
        ...props.style,
        gridTemplateColumns: getGridColumns(itemCount || 2),
        "--responsive-grid": getResponsiveGridColumns(itemCount || 2),
        "--center-two-items": shouldCenterTwoItems ? "1" : "0",
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
  background: ${(props) => props.bgColor || "rgba(255, 129, 57, 0.1)"};
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
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
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
        content: "";
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

// Enhanced Animation variants
const megaMenuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    filter: "blur(10px)",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.85,
    rotateX: -15,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
    scale: 0.9,
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
};

// Menu data with images
const menuData = {
  "WHAT WE DO": {
    mainItems: [
      {
        title: "Our Journey",
        description: "Learn about our journey in AI innovation",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Company Overview", "Vision & Mission", "Core Values"],
        url: "/company/our-journey",
      },
      {
        title: "Leadership Team",
        description: "Meet our executive leadership",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Executive Team", "Board of Directors", "Advisory Board"],
        url: "/company/leadership-team",
      },
      {
        title: "Global Presence",
        description: "Our worldwide locations and partnerships",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Office Locations", "Global Partners", "Regional Expertise"],
        url: "/company/global-presence",
      },
      {
        title: "Our Companies",
        description: "Explore our subsidiary companies and divisions",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Lumin Inc.", "Lumin Innovations"],
        hasDropdown: true,
        companies: [
          {
            name: "Lumin Inc.",
            description:
              "Healthcare display and consulting solutions specializing in medical technology",
            focus: "Healthcare Technology",
            image: "/placeholder.svg?height=60&width=100",
            color: "rgba(59, 130, 246, 0.1)",
            url: "https://lumininc.com/",
          },
          {
            name: "Lumin Innovations",
            description:
              "Advanced manufacturing and automation driving Industry 4.0 solutions",
            focus: "Manufacturing & Automation",
            image: "/placeholder.svg?height=60&width=100",
            color: "rgba(16, 185, 129, 0.1)",
            url: "https://lumin-innovations.com/",
          },
        ],
      },
    ],
    sideItems: [
      {
        title: "Company Info",
        items: ["Awards & Recognition", "Press Releases", "Investor Relations"],
      },
      {
        title: "Partnerships",
        items: [
          "Strategic Alliances",
          "Technology Partners",
          "Channel Partners",
        ],
      },
    ],
  },
  "WHAT WE DO": {
    mainItems: [
      {
        title: "Data & Analytics",
        description: "Transform your data into actionable insights",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "Data Strategy",
          "Data Platforms",
          "Data Value Realization",
          "Data Migration",
        ],
        hasDropdown: true,
        url: "/service/data-and-analytics",
        services: [
          {
            name: "Data Strategy",
            description:
              "Comprehensive data strategy development and roadmap planning",
            focus: "Data & Analytics",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "📊",
            url: "/service/data-and-analytics",
          },
          {
            name: "Data Platforms",
            description: "Modern data platform architecture and implementation",
            focus: "Data & Analytics",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🏗️",
            url: "/service/data-and-analytics/etl",
          },
          {
            name: "Data Value Realization",
            description: "Extract maximum value from your data assets",
            focus: "Data & Analytics",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "💰",
            url: "/service/data-and-analytics/bi",
          },
          {
            name: "Data Migration",
            description: "Seamless data migration and transformation services",
            focus: "Data & Analytics",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🔄",
            url: "/service/data-and-analytics/governance",
          },
        ],
        icon: "📊",
        color: "rgba(20, 184, 166, 0.15)",
      },
      {
        title: "Artificial Intelligence",
        description: "Cutting-edge AI solutions for modern businesses",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "AI Strategy",
          "Generative AI",
          "AI-Accelerated Engineering",
          "Connect AI",
        ],
        hasDropdown: true,
        url: "/service/ai-and-gen-ai",
        services: [
          {
            name: "AI Strategy",
            description: "Strategic AI roadmap and implementation planning",
            focus: "Artificial Intelligence",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🧠",
            url: "/service/ai-and-gen-ai",
          },
          {
            name: "Generative AI",
            description: "Advanced generative AI solutions and LLM integration",
            focus: "Artificial Intelligence",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🤖",
            url: "/service/ai-and-gen-ai/llm",
          },
          {
            name: "AI-Accelerated Engineering",
            description: "AI-powered engineering and development acceleration",
            focus: "Artificial Intelligence",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "⚡",
            url: "/service/ai-and-gen-ai/automation",
          },
          {
            name: "Connect AI",
            description: "AI integration and connectivity solutions",
            focus: "Artificial Intelligence",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🔗",
            url: "/service/ai-and-gen-ai/agents",
          },
        ],
        icon: "🧠",
        color: "rgba(59, 130, 246, 0.15)",
      },
      {
        title: "Cloud",
        description: "Scalable cloud solutions for enterprise needs",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Cloud Migration", "DevOps", "Legacy Modernization"],
        hasDropdown: true,
        url: "/service/cloud-and-application-services",
        services: [
          {
            name: "Cloud Migration",
            description:
              "End-to-end cloud migration and transformation services",
            focus: "Cloud",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "☁️",
            url: "/service/cloud-and-application-services",
          },
          {
            name: "DevOps",
            description: "Automated DevOps and CI/CD pipeline implementation",
            focus: "Cloud",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🔄",
            url: "/service/cloud-and-application-services/devops",
          },
          {
            name: "Legacy Modernization",
            description:
              "Modernize legacy systems for cloud-native architecture",
            focus: "Cloud",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🏗️",
            url: "/service/cloud-and-application-services/modernization",
          },
        ],
        icon: "☁️",
        color: "rgba(20, 184, 166, 0.15)",
      },
      {
        title: "Software Engineering",
        description: "Quality engineering and solution architecture",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Quality Engineering", "Solution Architecture"],
        hasDropdown: true,
        url: "/service/cloud-and-application-services/engineering",
        services: [
          {
            name: "Quality Engineering",
            description:
              "Comprehensive quality assurance and testing frameworks",
            focus: "Software Engineering",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "✅",
            url: "/service/cloud-and-application-services/engineering",
          },
          {
            name: "Solution Architecture",
            description: "Scalable solution architecture and system design",
            focus: "Software Engineering",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🏛️",
            url: "/service/cloud-and-application-services/api",
          },
        ],
        icon: "🏛️",
        color: "rgba(59, 130, 246, 0.15)",
      },
      {
        title: "Healthcare & Life Sciences IT",
        description:
          "Specialized IT solutions for healthcare and life sciences",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "Healthcare Systems",
          "Life Sciences Platform",
          "Clinical Data Management",
        ],
        hasDropdown: true,
        url: "/service/healthcare-and-life-sciences-it",
        services: [
          {
            name: "Healthcare Systems",
            description: "Comprehensive healthcare IT solutions and systems",
            focus: "Healthcare & Life Sciences IT",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🏥",
            url: "/service/healthcare-and-life-sciences-it",
          },
          {
            name: "Life Sciences Platform",
            description: "Advanced platforms for life sciences research",
            focus: "Healthcare & Life Sciences IT",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🧬",
            url: "/service/healthcare-and-life-sciences-it/data",
          },
          {
            name: "Clinical Data Management",
            description: "Secure clinical data management and analytics",
            focus: "Healthcare & Life Sciences IT",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "📋",
            url: "/service/healthcare-and-life-sciences-it/hl7",
          },
        ],
        icon: "🏥",
        color: "rgba(20, 184, 166, 0.15)",
      },
      {
        title: "Manufacturing & Engineering IT",
        description:
          "IT solutions for manufacturing and engineering industries",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "Manufacturing Systems",
          "Engineering Solutions",
          "Industrial IoT",
        ],
        hasDropdown: true,
        url: "/service/engineering-and-manufacturing-it",
        services: [
          {
            name: "Manufacturing Systems",
            description: "Advanced manufacturing IT systems and automation",
            focus: "Manufacturing & Engineering IT",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🏭",
            url: "/service/engineering-and-manufacturing-it",
          },
          {
            name: "Engineering Solutions",
            description: "Comprehensive engineering IT solutions",
            focus: "Manufacturing & Engineering IT",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "⚙️",
            url: "/service/engineering-and-manufacturing-it/plm",
          },
          {
            name: "Industrial IoT",
            description:
              "Industrial Internet of Things and smart manufacturing",
            focus: "Manufacturing & Engineering IT",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🔗",
            url: "/service/engineering-and-manufacturing-it/mes",
          },
        ],
        icon: "🏭",
        color: "rgba(59, 130, 246, 0.15)",
      },
    ],
    sideItems: [
      {
        title: "More Services",
        items: [
          "SAP Services",
          "Healthcare IT",
          "Manufacturing IT",
          "Managed Services",
        ],
      },
      {
        title: "Industries",
        items: [
          "Healthcare",
          "Manufacturing",
          "Aerospace",
          "Financial Services",
        ],
      },
    ],
  },
  "WHO WE WORK WITH": {
    mainItems: [
      {
        title: "Healthcare & Life Sciences",
        description: "Digital health and medical technology solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "Digital Health",
          "Medical Devices",
          "Clinical Trials",
          "Compliance",
        ],
        hasDropdown: true,
        url: "/industries/healthcare-life-sciences",
        services: [
          {
            name: "Digital Health",
            description:
              "AI-powered healthcare platforms and telemedicine solutions",
            focus: "Healthcare",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🏥",
            url: "/industries/healthcare-life-sciences",
          },
          {
            name: "Medical Devices",
            description:
              "Connected medical device technology and IoT solutions",
            focus: "Healthcare",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🩺",
            url: "/industries/healthcare-life-sciences",
          },
          {
            name: "Clinical Trials",
            description:
              "Clinical trial management and data analytics platforms",
            focus: "Healthcare",
            color: "rgba(16, 185, 129, 0.15)",
            icon: "🔬",
            url: "/industries/healthcare-life-sciences",
          },
        ],
        icon: "🏥",
        color: "rgba(20, 184, 166, 0.15)",
      },
      {
        title: "Manufacturing & Automotive",
        description: "Industry 4.0 and smart manufacturing solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "Smart Manufacturing",
          "Digital Twins",
          "IoT Solutions",
          "Automation",
        ],
        hasDropdown: true,
        url: "/industries/manufacturing-automotive",
        services: [
          {
            name: "Smart Manufacturing",
            description: "Industry 4.0 and connected manufacturing systems",
            focus: "Manufacturing",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🏭",
            url: "/industries/manufacturing-automotive",
          },
          {
            name: "Digital Twins",
            description: "Digital twin technology for predictive maintenance",
            focus: "Manufacturing",
            color: "rgba(16, 185, 129, 0.15)",
            icon: "🔄",
            url: "/industries/manufacturing-automotive",
          },
          {
            name: "IoT Solutions",
            description: "Connected devices and sensor networks",
            focus: "Manufacturing",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "📡",
            url: "/industries/manufacturing-automotive",
          },
        ],
        icon: "🏭",
        color: "rgba(59, 130, 246, 0.15)",
      },
      {
        title: "Financial Services",
        description: "Digital banking and fintech solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "Digital Banking",
          "Payment Systems",
          "Risk Management",
          "Compliance",
        ],
        hasDropdown: true,
        url: "/industries/financial-services",
        services: [
          {
            name: "Digital Banking",
            description: "Modern banking platforms and mobile solutions",
            focus: "Finance",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🏦",
            url: "/industries/financial-services",
          },
          {
            name: "Payment Systems",
            description: "Secure payment processing and blockchain solutions",
            focus: "Finance",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "💳",
            url: "/industries/financial-services",
          },
          {
            name: "Risk Management",
            description: "AI-powered risk assessment and fraud detection",
            focus: "Finance",
            color: "rgba(16, 185, 129, 0.15)",
            icon: "🛡️",
            url: "/industries/financial-services",
          },
        ],
        icon: "💰",
        color: "rgba(20, 184, 166, 0.15)",
      },
      {
        title: "Aerospace & Defense",
        description: "Advanced technology solutions for aerospace industry",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "Aviation Technology",
          "Defense Systems",
          "Satellite Solutions",
          "Cybersecurity",
        ],
        hasDropdown: true,
        url: "/industries/aerospace-defense",
        services: [
          {
            name: "Aviation Technology",
            description: "Flight management systems and aviation software",
            focus: "Aerospace",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "✈️",
            url: "/industries/aerospace-defense",
          },
          {
            name: "Defense Systems",
            description: "Military technology and defense software solutions",
            focus: "Aerospace",
            color: "rgba(16, 185, 129, 0.15)",
            icon: "🛡️",
            url: "/industries/aerospace-defense",
          },
          {
            name: "Satellite Solutions",
            description: "Satellite technology and space systems",
            focus: "Aerospace",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🛰️",
            url: "/industries/aerospace-defense",
          },
        ],
        icon: "✈️",
        color: "rgba(59, 130, 246, 0.15)",
      },
    ],
    sideItems: [
      {
        title: "Industry Solutions",
        items: ["Case Studies", "Success Stories", "Industry Reports"],
      },
      {
        title: "Resources",
        items: ["Whitepapers", "Webinars", "Industry Events"],
      },
    ],
  },
  INSIGHTS: {
    mainItems: [
      {
        title: "The Strategy Behind Our $100M Commitment to Data & AI",
        description: "BLOG POST",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&crop=center",
        items: ["AI AND ML"],
        hasDropdown: true,
        url: "/blog/data-ai-commitment",
        services: [
          {
            name: "AI AND ML",
            description:
              "Latest insights on artificial intelligence and machine learning",
            focus: "Data & AI",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🧠",
          },
        ],
        icon: "📊",
        color: "rgba(20, 184, 166, 0.15)",
      },
      {
        title: "74% Faster Software Delivery: Agentic AI in the Wild",
        description: "BLOG POST",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
        items: ["AI AND ML"],
        hasDropdown: true,
        url: "/blog/agentic-ai-software-delivery",
        services: [
          {
            name: "AI AND ML",
            description:
              "Latest insights on artificial intelligence and machine learning",
            focus: "Data & AI",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🧠",
          },
        ],
        icon: "⚡",
        color: "rgba(20, 184, 166, 0.15)",
      },
      {
        title: "BizTech Forward - Season 2 Recap: Art Data to Travel Tech",
        description: "LANDING PAGE",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
        items: ["AI AND ML"],
        hasDropdown: true,
        url: "/podcast/biztech-forward-season2",
        services: [
          {
            name: "AI AND ML",
            description:
              "Latest insights on artificial intelligence and machine learning",
            focus: "Data & AI",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🧠",
          },
        ],
        icon: "🎯",
        color: "rgba(20, 184, 166, 0.15)",
      },
    ],
    sideItems: [
      {
        title: "All Insights",
        items: ["Data & AI", "Editor's Picks", "Case Studies"],
      },
    ],
  },
  "WHO WE ARE": {
    mainItems: [
      {
        title: "Our Journey",
        description: "Learn about our journey in AI innovation",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Company Overview", "Vision & Mission", "Core Values"],
        url: "/company/our-journey",
      },
      {
        title: "Leadership Team",
        description: "Meet our executive leadership",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Executive Team", "Board of Directors", "Advisory Board"],
        url: "/company/leadership-team",
      },
      {
        title: "Global Presence",
        description: "Our worldwide locations and partnerships",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Office Locations", "Global Partners", "Regional Expertise"],
        url: "/company/global-presence",
      },
      {
        title: "Our Companies",
        description: "Explore our subsidiary companies and divisions",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Lumin Inc.", "Lumin Innovations"],
        hasDropdown: true,
        companies: [
          {
            name: "Lumin Inc.",
            description:
              "Healthcare display and consulting solutions specializing in medical technology",
            focus: "Healthcare Technology",
            image: "/placeholder.svg?height=60&width=100",
            color: "rgba(59, 130, 246, 0.1)",
            url: "https://lumininc.com/",
          },
          {
            name: "Lumin Innovations",
            description:
              "Advanced manufacturing and automation driving Industry 4.0 solutions",
            focus: "Manufacturing & Automation",
            image: "/placeholder.svg?height=60&width=100",
            color: "rgba(16, 185, 129, 0.1)",
            url: "https://lumin-innovations.com/",
          },
        ],
      },
    ],
    sideItems: [
      {
        title: "Company Info",
        items: ["Awards & Recognition", "Press Releases", "Investor Relations"],
      },
      {
        title: "Partnerships",
        items: [
          "Strategic Alliances",
          "Technology Partners",
          "Channel Partners",
        ],
      },
    ],
  },
  CAREERS: {
    mainItems: [
      {
        title: "Join our team",
        description: "Browse current job openings and opportunities",
        url: "/careers/current-openings",
        isActive: false,
      },
      {
        title: "Life at Intellectt",
        description: "Discover our culture and work environment",
        url: "/careers/life-at-company",
        isActive: true,
      },
      {
        title: "How we hire",
        description: "Learn about our hiring process",
        url: "/careers/hiring-process",
        isActive: false,
      },
    ],
    featuredContent: {
      title: "Life at Intellectt",
      description:
        "Discover the culture and values that make Intellectt a great place to work.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop&crop=center",
      buttonText: "Visit our page",
      buttonUrl: "/careers/life-at-company",
    },
  },
};

function MegaMenuIntellectt() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedCompanies, setExpandedCompanies] = useState({});
  const [expandedMobileSections, setExpandedMobileSections] = useState({});
  const [expandedMegaMenuSections, setExpandedMegaMenuSections] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const timeoutRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

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

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim()) {
      setShowSearchResults(true);
    } else {
      setShowSearchResults(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Here you can implement the search functionality
      console.log("Searching for:", searchQuery);
      // You can navigate to a search results page or perform search
      // window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
      setShowSearchResults(false);
    }
  };

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    if (searchQuery.trim()) {
      setShowSearchResults(true);
    }
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
    // Delay hiding results to allow clicking on them
    setTimeout(() => {
      setShowSearchResults(false);
    }, 200);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Escape") {
      setSearchQuery("");
      setShowSearchResults(false);
      searchInputRef.current?.blur();
    }
  };

  // Keyboard shortcut for search (Ctrl/Cmd + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Search through menu data
  const getSearchResults = () => {
    if (!searchQuery.trim()) return [];

    const results = [];
    const query = searchQuery.toLowerCase();

    Object.keys(menuData).forEach((menuName) => {
      const menu = menuData[menuName];

      // Search in main items
      menu.mainItems?.forEach((item) => {
        if (
          item.title.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query)
        ) {
          results.push({
            type: "main",
            menu: menuName,
            title: item.title,
            description: item.description,
            url: item.url,
          });
        }

        // Search in services
        item.services?.forEach((service) => {
          if (
            service.name.toLowerCase().includes(query) ||
            service.description?.toLowerCase().includes(query)
          ) {
            results.push({
              type: "service",
              menu: menuName,
              title: service.name,
              description: service.description,
              url: service.url,
            });
          }
        });
      });

      // Search in side items
      menu.sideItems?.forEach((sideItem) => {
        sideItem.items?.forEach((item) => {
          if (item.toLowerCase().includes(query)) {
            results.push({
              type: "side",
              menu: menuName,
              title: item,
              description: `${sideItem.title} - ${menuName}`,
            });
          }
        });
      });
    });

    return results.slice(0, 8); // Limit to 8 results
  };

  const searchResults = getSearchResults();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileSection = (sectionName) => {
    setExpandedMobileSections((prev) => ({
      ...prev,
      [sectionName]: !prev[sectionName],
    }));
  };

  const toggleMegaMenuSection = (menuName, sectionTitle) => {
    const key = `${menuName}-${sectionTitle}`;
    const isCurrentlyExpanded = expandedMegaMenuSections[key];

    // Close all sections first, then open the clicked one if it wasn't already open
    setExpandedMegaMenuSections((prev) => {
      const newState = {};
      // Close all sections for this menu
      Object.keys(prev).forEach((existingKey) => {
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

    setExpandedCompanies((prev) => ({
      ...prev,
      [cardTitle]: !prev[cardTitle],
    }));

    // Auto scroll to show the dropdown companies properly
    if (isExpanding) {
      setTimeout(() => {
        // Find the Our Companies card and its dropdown
        const ourCompaniesCard = document.querySelector(
          '[data-card="our-companies"]'
        );
        if (ourCompaniesCard) {
          // Get the card position and add dropdown height
          const cardRect = ourCompaniesCard.getBoundingClientRect();
          const headerHeight = 64;
          const dropdownHeight = 250; // Estimated dropdown height
          const targetPosition =
            window.pageYOffset +
            cardRect.bottom +
            dropdownHeight -
            window.innerHeight +
            100;

          window.scrollTo({
            top: Math.max(targetPosition, headerHeight + 200), // Ensure we don't scroll too high
            behavior: "smooth",
          });
        } else {
          // Fallback: scroll to show the dropdown area
          const headerHeight = 64;
          window.scrollTo({
            top: headerHeight + 450, // Position to show company boxes
            behavior: "smooth",
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
      if (
        activeMenu &&
        !event.target.closest("[data-mega-menu]") &&
        !event.target.closest("[data-nav-item]")
      ) {
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
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const renderMegaMenu = (menuName) => {
    const menuConfig = menuData[menuName];
    if (!menuConfig) return null;

    if (menuName === "WHAT WE DO" || menuName === "WHO WE WORK WITH") {
      return (
        <MegaMenuContainer
          variants={megaMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          data-mega-menu="true"
        >
          <MegaMenuContent>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  menuName === "WHAT WE DO"
                    ? "repeat(6, 1fr)"
                    : menuName === "WHO WE WORK WITH"
                    ? "repeat(4, 1fr)"
                    : "repeat(3, 1fr)",
                gap: menuName === "WHO WE WORK WITH" ? "1.5rem" : "1rem",
                padding: "1rem 0",
              }}
            >
              {menuConfig.mainItems.map((item, index) => (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: menuName === "WHO WE WORK WITH" ? "0.75rem" : "1rem",
                    padding: menuName === "WHO WE WORK WITH" ? "1rem" : "0",
                    borderRadius: menuName === "WHO WE WORK WITH" ? "8px" : "0",
                    background:
                      menuName === "WHO WE WORK WITH"
                        ? "rgba(249, 250, 251, 0.5)"
                        : "transparent",
                    border:
                      menuName === "WHO WE WORK WITH"
                        ? "1px solid rgba(229, 231, 235, 0.5)"
                        : "none",
                  }}
                >
                  {/* Category Header with Icon in Middle */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.icon && (
                      <div
                        style={{
                          width:
                            menuName === "WHO WE WORK WITH" ? "60px" : "50px",
                          height:
                            menuName === "WHO WE WORK WITH" ? "60px" : "50px",
                          background: item.color || "rgba(99, 102, 241, 0.1)",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize:
                            menuName === "WHO WE WORK WITH"
                              ? "1.75rem"
                              : "1.5rem",
                          marginBottom: "0.5rem",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        {item.icon}
                      </div>
                    )}
                    <h3
                      style={{
                        fontSize:
                          menuName === "WHO WE WORK WITH" ? "1rem" : "0.875rem",
                        fontWeight: "600",
                        color: "#111827",
                        fontFamily: "Inter, sans-serif",
                        margin: 0,
                        lineHeight: "1.2",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Services List */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.25rem",
                      alignItems: "center",
                    }}
                  >
                    {item.services &&
                      item.services.map((serviceItem, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          style={{
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            padding: "0.125rem 0",
                            textAlign: "center",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = "#000000";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = "#6b7280";
                          }}
                          onClick={() => {
                            if (serviceItem.url) {
                              if (serviceItem.url.startsWith("/")) {
                                navigate(serviceItem.url);
                              } else {
                                window.open(serviceItem.url, "_blank");
                              }
                            }
                          }}
                        >
                          <span
                            style={{
                              fontSize: "0.75rem",
                              color: "#6b7280",
                              fontFamily: "Inter, sans-serif",
                              fontWeight: "400",
                              lineHeight: "1.3",
                              transition: "color 0.2s ease",
                            }}
                          >
                            {serviceItem.name}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </MegaMenuContent>
        </MegaMenuContainer>
      );
    }

    if (menuName === "INSIGHTS") {
      return (
        <MegaMenuContainer
          variants={megaMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          data-mega-menu="true"
        >
          <MegaMenuContent>
            <div
              style={{
                display: "flex",
                gap: "3rem",
                padding: "2rem 0",
              }}
            >
              {/* Main Content - Cards */}
              <div
                style={{
                  flex: 1,
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "2rem",
                }}
              >
                {menuConfig.mainItems.map((item, index) => (
                  <div
                    key={item.title}
                    style={{
                      background: "#ffffff",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "translateY(-4px)";
                      e.target.style.boxShadow =
                        "0 8px 24px rgba(0, 0, 0, 0.12)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow =
                        "0 4px 12px rgba(0, 0, 0, 0.08)";
                    }}
                    onClick={() => {
                      if (item.url) {
                        if (item.url.startsWith("/")) {
                          navigate(item.url);
                        } else {
                          window.open(item.url, "_blank");
                        }
                      }
                    }}
                  >
                    {/* Card Image */}
                    <div
                      style={{
                        height: "200px",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>

                    {/* Card Content */}
                    <div style={{ padding: "1.5rem" }}>
                      {/* Content Type Label */}
                      <div
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "600",
                          color: "#6366f1",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {item.description}
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: "700",
                          color: "#111827",
                          fontFamily: "Inter, sans-serif",
                          margin: "0 0 1rem 0",
                          lineHeight: "1.3",
                        }}
                      >
                        {item.title}
                      </h3>

                      {/* Tag */}
                      <div
                        style={{
                          display: "inline-block",
                          padding: "0.25rem 0.75rem",
                          background: "rgba(99, 102, 241, 0.1)",
                          color: "#6366f1",
                          borderRadius: "16px",
                          fontSize: "0.75rem",
                          fontWeight: "500",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {item.items[0]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Side Content - Lists */}
              <div
                style={{
                  width: "280px",
                  padding: "1rem 0",
                }}
              >
                {menuConfig.sideItems?.map((sideItem, index) => (
                  <div key={sideItem.title} style={{ marginBottom: "2rem" }}>
                    {/* Section Title */}
                    <h4
                      style={{
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#374151",
                        margin: "0 0 1rem 0",
                        fontFamily: "Inter, sans-serif",
                        borderBottom: "2px solid #e5e7eb",
                        paddingBottom: "0.5rem",
                      }}
                    >
                      {sideItem.title}
                    </h4>

                    {/* List Items */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      {sideItem.items.map((listItem, itemIndex) => (
                        <div
                          key={listItem}
                          style={{
                            padding: "0.75rem 1rem",
                            borderRadius: "8px",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            background: "transparent",
                            border: "1px solid transparent",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = "#f3f4f6";
                            e.target.style.borderColor = "#d1d5db";
                            e.target.style.transform = "translateX(4px)";
                            // Change text color to deep black
                            const span = e.target.querySelector("span");
                            if (span) {
                              span.style.color = "#000000";
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = "transparent";
                            e.target.style.borderColor = "transparent";
                            e.target.style.transform = "translateX(0)";
                            // Reset text color
                            const span = e.target.querySelector("span");
                            if (span) {
                              span.style.color = "#374151";
                            }
                          }}
                          onClick={() => {
                            // If you want to route, you need to know the url for each listItem. If you have a url, use navigate(url). Otherwise, do nothing or handle as needed.
                            // Example: if (sideItem.urls && sideItem.urls[itemIndex]) { ... }
                          }}
                        >
                          <span
                            style={{
                              color: "#374151",
                              fontSize: "0.9rem",
                              fontWeight: "500",
                              fontFamily: "Inter, sans-serif",
                            }}
                          >
                            {listItem}
                          </span>
                          <span
                            style={{
                              color: "#9ca3af",
                              fontSize: "0.8rem",
                              fontWeight: "600",
                              opacity: "0.7",
                            }}
                          >
                            ›
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MegaMenuContent>
        </MegaMenuContainer>
      );
    }

    if (menuName === "CAREERS") {
      return (
        <MegaMenuContainer
          variants={megaMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          data-mega-menu="true"
        >
          <MegaMenuContent>
            <div
              style={{
                display: "flex",
                background: "#ffffff",
                borderRadius: "12px",
                overflow: "hidden",
                minHeight: "350px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e5e7eb",
              }}
            >
              {/* Left Navigation Sidebar */}
              <div
                style={{
                  width: "280px",
                  background: "#f9fafb",
                  padding: "2rem",
                  borderRight: "1px solid #e5e7eb",
                }}
              >
                {/* Header */}
                <div style={{ marginBottom: "2rem" }}>
                  <h3
                    style={{
                      color: "#111827",
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      margin: "0 0 0.5rem 0",
                      fontFamily: "Inter, sans-serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Careers
                  </h3>
                  <div
                    style={{
                      width: "40px",
                      height: "3px",
                      background: "#e53e3e",
                      marginBottom: "1.5rem",
                    }}
                  />
                </div>

                {/* Navigation Items */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  {menuConfig.mainItems.map((item, index) => (
                    <div
                      key={item.title}
                      style={{
                        padding: "0.875rem 1rem",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        background: item.isActive ? "#ffffff" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        border: item.isActive
                          ? "1px solid #d1d5db"
                          : "1px solid transparent",
                        boxShadow: item.isActive
                          ? "0 2px 8px rgba(0, 0, 0, 0.1)"
                          : "none",
                      }}
                      onMouseEnter={(e) => {
                        if (!item.isActive) {
                          e.target.style.background = "#ffffff";
                          e.target.style.borderColor = "#d1d5db";
                          e.target.style.boxShadow =
                            "0 2px 8px rgba(0, 0, 0, 0.1)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!item.isActive) {
                          e.target.style.background = "transparent";
                          e.target.style.borderColor = "transparent";
                          e.target.style.boxShadow = "none";
                        }
                      }}
                      onClick={() => {
                        if (item.url) {
                          if (item.url.startsWith("/")) {
                            navigate(item.url);
                          } else {
                            window.open(item.url, "_blank");
                          }
                        }
                      }}
                    >
                      <span
                        style={{
                          color: item.isActive ? "#111827" : "#6b7280",
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {item.title}
                      </span>
                      <span
                        style={{
                          color: "#e53e3e",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                          opacity: item.isActive ? "1" : "0.7",
                        }}
                      >
                        ›
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Content Area */}
              <div
                style={{
                  flex: 1,
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  background: "#ffffff",
                }}
              >
                {/* Featured Image */}
                <div
                  style={{
                    width: "100%",
                    height: "220px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    marginBottom: "2rem",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <img
                    src={menuConfig.featuredContent.image}
                    alt={menuConfig.featuredContent.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Content */}
                <h3
                  style={{
                    color: "#111827",
                    fontSize: "1.25rem",
                    fontWeight: "700",
                    margin: "0 0 0.75rem 0",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {menuConfig.featuredContent.title}
                </h3>

                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.875rem",
                    lineHeight: "1.6",
                    margin: "0 0 1.5rem 0",
                    fontFamily: "Inter, sans-serif",
                    maxWidth: "350px",
                  }}
                >
                  {menuConfig.featuredContent.description}
                </p>

                {/* Button */}
                <RouterButton
                  to={menuConfig.featuredContent.buttonUrl}
                  external={
                    !menuConfig.featuredContent.buttonUrl.startsWith("/")
                  }
                  style={{
                    background: "transparent",
                    border: "2px solid #e53e3e",
                    color: "#e53e3e",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    alignSelf: "flex-start",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#e53e3e";
                    e.target.style.color = "#ffffff";
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow =
                      "0 8px 25px rgba(229, 62, 62, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#e53e3e";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  {menuConfig.featuredContent.buttonText}
                  <span style={{ fontSize: "0.8rem", fontWeight: "700" }}>
                    →
                  </span>
                </RouterButton>
              </div>
            </div>
          </MegaMenuContent>
        </MegaMenuContainer>
      );
    }

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
                  onClick={
                    [
                      "Our Journey",
                      "Leadership Team",
                      "Global Presence",
                    ].includes(item.title)
                      ? undefined
                      : () => toggleMegaMenuSection(menuName, item.title)
                  }
                  style={
                    [
                      "Our Journey",
                      "Leadership Team",
                      "Global Presence",
                    ].includes(item.title)
                      ? { cursor: "default" }
                      : {}
                  }
                >
                  {[
                    "Our Journey",
                    "Leadership Team",
                    "Global Presence",
                  ].includes(item.title) ? (
                    <Link
                      to={item.url}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                  {![
                    "Our Journey",
                    "Leadership Team",
                    "Global Presence",
                  ].includes(item.title) && <ChevronDown />}
                </MegaMenuSectionTitle>

                {![
                  "Our Journey",
                  "Leadership Team",
                  "Global Presence",
                ].includes(item.title) && (
                  <MegaMenuSectionContent isExpanded={isExpanded}>
                    {item.hasDropdown && (item.companies || item.services) ? (
                      <MegaMenuGrid menuName={menuName}>
                        {(item.companies || item.services).map(
                          (serviceItem, serviceIndex) => (
                            <MegaMenuServiceItem
                              key={serviceIndex}
                              menuName={menuName}
                              onClick={() => {
                                if (serviceItem.url) {
                                  if (serviceItem.url.startsWith("/")) {
                                    navigate(serviceItem.url);
                                  } else {
                                    window.open(serviceItem.url, "_blank");
                                  }
                                }
                              }}
                              style={
                                serviceItem.url ? { cursor: "pointer" } : {}
                              }
                            >
                              {serviceItem.icon && (
                                <ServiceIcon
                                  color={serviceItem.color}
                                  menuName={menuName}
                                >
                                  {serviceItem.icon}
                                </ServiceIcon>
                              )}
                              <MegaMenuServiceTitle menuName={menuName}>
                                {serviceItem.name}
                              </MegaMenuServiceTitle>
                              <MegaMenuServiceDescription menuName={menuName}>
                                {serviceItem.description}
                              </MegaMenuServiceDescription>
                            </MegaMenuServiceItem>
                          )
                        )}
                      </MegaMenuGrid>
                    ) : (
                      <div
                        style={{
                          padding: "1rem 0",
                          color: "#6b7280",
                          fontSize: "0.875rem",
                          lineHeight: "1.5",
                        }}
                      >
                        {item.description}
                      </div>
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
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-DYNCWKUHLFK4nr4sVmlGe1Bm1n3ut5.svg"
                alt="Intellectt"
                style={{ cursor: "pointer" }}
              />
            </Link>
          </Logo>

          <Navigation>
            {[
              "WHAT WE DO",
              "WHO WE WORK WITH",
              "INSIGHTS",
              "WHO WE ARE",
              "CAREERS",
            ].map((menuName) => (
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

          <SearchBarContainer>
            <SearchForm onSubmit={handleSearchSubmit}>
              <SearchIcon>
                <Search size={16} />
              </SearchIcon>
              <SearchInput
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                onKeyDown={handleSearchKeyDown}
                ref={searchInputRef}
              />
            </SearchForm>
            {showSearchResults && (
              <SearchResultsDropdown>
                {searchResults.length > 0 ? (
                  searchResults.map((result, index) => (
                    <SearchResultItem
                      key={index}
                      onClick={() => {
                        if (result.url) {
                          if (result.url.startsWith("/")) {
                            navigate(result.url);
                          } else {
                            window.open(result.url, "_blank");
                          }
                        }
                        setSearchQuery("");
                        setShowSearchResults(false);
                      }}
                    >
                      <SearchResultTitle>{result.title}</SearchResultTitle>
                      <SearchResultDescription>
                        {result.description}
                      </SearchResultDescription>
                    </SearchResultItem>
                  ))
                ) : searchQuery.trim() ? (
                  <SearchResultItem>
                    <SearchResultTitle>No results found</SearchResultTitle>
                    <SearchResultDescription>
                      Try searching for something else
                    </SearchResultDescription>
                  </SearchResultItem>
                ) : null}
              </SearchResultsDropdown>
            )}
          </SearchBarContainer>

          <HeaderActions>
            <RouterButton
              to="/contact"
              variant="primary"
              style={{
                background: "linear-gradient(90deg, #ff8a4c 0%, #ffa726 100%)",
                color: "#374151",
                border: "none",
                fontWeight: "600",
                fontSize: "0.75rem",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                boxShadow: "0 2px 8px rgba(255, 138, 76, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 4px 16px rgba(255, 138, 76, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 2px 8px rgba(255, 138, 76, 0.3)";
              }}
            >
              Contact Us
              <span style={{ fontSize: "0.7rem", fontWeight: "700" }}>›</span>
            </RouterButton>
          </HeaderActions>

          <MobileMenuButton
            onClick={handleMobileMenuToggle}
            aria-label="Open mobile menu"
          >
            <Menu size={24} />
          </MobileMenuButton>
        </HeaderContent>

        <AnimatePresence>
          {activeMenu && (
            <div
              onMouseEnter={() => handleMouseEnter(activeMenu)}
              onMouseLeave={handleMouseLeave}
            >
              {renderMegaMenu(activeMenu)}
            </div>
          )}
        </AnimatePresence>
      </HeaderContainer>

      {/* Mobile Sidebar */}
      <SidebarOverlay isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />

      <Sidebar isOpen={isMobileMenuOpen}>
        <SidebarHeader>
          <Logo>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-DYNCWKUHLFK4nr4sVmlGe1Bm1n3ut5.svg"
                alt="Intellectt"
                style={{ cursor: "pointer" }}
              />
            </Link>
          </Logo>
          <SidebarClose onClick={closeMobileMenu} aria-label="Close sidebar">
            <X size={20} />
          </SidebarClose>
        </SidebarHeader>

        <SidebarNav>
          {[
            "WHAT WE DO",
            "WHO WE WORK WITH",
            "INSIGHTS",
            "WHO WE ARE",
            "CAREERS",
          ].map((menuName) => {
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
                  {menuData[menuName]?.mainItems?.map((item, index) => (
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
          <RouterButton
            to="/contact"
            variant="secondary"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Contact Us
          </RouterButton>
        </SidebarActions>
      </Sidebar>
    </div>
  );
}

export default MegaMenuIntellectt;
