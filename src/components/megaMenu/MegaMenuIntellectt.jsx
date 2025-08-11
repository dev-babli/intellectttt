import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";
import { ChevronDown, Menu, Search, ArrowRight, X } from "lucide-react";
import "../../App.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

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
  background: ${(props) => {
    if (!props.isHomePage) {
      return "#ffffff";
    }
    return props.scrolled ? "#ffffff" : "transparent";
  }};
  backdrop-filter: ${(props) => {
    if (!props.isHomePage) {
      return "blur(30px) saturate(180%)";
    }
    return props.scrolled ? "blur(30px) saturate(180%)" : "none";
  }};
  border-bottom: ${(props) => {
    if (!props.isHomePage) {
      return "1px solid rgba(0, 0, 0, 0.08)";
    }
    return props.scrolled ? "1px solid rgba(0, 0, 0, 0.08)" : "none";
  }};
  box-shadow: ${(props) => {
    if (!props.isHomePage) {
      return "0 1px 10px rgba(0, 0, 0, 0.05)";
    }
    return props.scrolled ? "0 1px 10px rgba(0, 0, 0, 0.05)" : "none";
  }};
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.isHomePage &&
    `
    &:hover {
      background: #ffffff;
      backdrop-filter: blur(30px) saturate(180%);
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);

      /* Force logo to show original colors on hover */
      img {
        filter: none !important;
      }

      /* Force navigation text to be black on hover */
      nav a {
        color: #000000 !important;
      }

      /* Force dropdown buttons to be black on hover */
      nav a:hover {
        color: #000000 !important;
      }

      /* Force navigation buttons to be black when header is hovered */
      nav div {
        color: #000000 !important;
      }

      /* Force "Let's Connect" button to turn red when header is hovered */
      button {
        background: #e53e3e !important;
        color: #ffffff !important;
        border: none !important;
        box-shadow: 0 2px 4px rgba(229, 62, 62, 0.2) !important;
      }
    }
  `}
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

  @media (max-width: 360px) {
    padding: 0 0.5rem;
    height: 52px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    width: auto;
    transition: all 0.3s ease;
    filter: ${(props) => {
      if (!props.isHomePage) {
        return "none";
      }
      return props.scrolled ? "none" : "brightness(0) saturate(0) invert(1)";
    }};
  }

  img:hover {
    transform: scale(1.02);
    filter: brightness(1) contrast(1);
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

  @media (max-width: 360px) {
    img {
      height: 24px;
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
  color: ${(props) => {
    if (props.isActive) return "#6366f1";
    if (!props.isHomePage) return "#000000";
    return props.scrolled ? "#000000" : "#ffffff";
  }};

  font-weight: 600;
  font-size: 0.8rem;
  font-family: "Inter", sans-serif;
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transform-origin: center;

  &:hover {
    background: ${(props) => {
      if (!props.isHomePage) return "rgba(0, 0, 0, 0.05)";
      return props.scrolled
        ? "rgba(0, 0, 0, 0.05)"
        : "rgba(99, 102, 241, 0.08)";
    }};
    color: ${(props) => {
      if (props.isActive) return "#6366f1";
      if (!props.isHomePage) return "#000000";
      return props.scrolled ? "#000000" : "#ffffff";
    }};
    transform: translateY(-2px) scale(1.02);
    box-shadow: ${(props) => {
      if (!props.isHomePage) return "0 4px 12px rgba(0, 0, 0, 0.1)";
      return props.scrolled
        ? "0 4px 12px rgba(0, 0, 0, 0.1)"
        : "0 4px 12px rgba(99, 102, 241, 0.15)";
    }};
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
  background: ${(props) => {
    if (!props.isHomePage) return "rgba(0, 0, 0, 0.05)";
    return "rgba(255, 255, 255, 0.08)";
  }};
  border: ${(props) => {
    if (!props.isHomePage) return "1px solid rgba(0, 0, 0, 0.1)";
    return "1px solid rgba(255, 255, 255, 0.12)";
  }};
  color: ${(props) => {
    if (!props.isHomePage) return "rgba(0, 0, 0, 0.7)";
    return "rgba(255, 255, 255, 0.7)";
  }};
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 200px;
  justify-content: flex-start;

  &:hover {
    background: ${(props) => {
      if (!props.isHomePage) return "rgba(0, 0, 0, 0.08)";
      return "rgba(255, 255, 255, 0.12)";
    }};
    border-color: ${(props) => {
      if (!props.isHomePage) return "rgba(0, 0, 0, 0.15)";
      return "rgba(255, 255, 255, 0.2)";
    }};
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
  color: ${(props) => {
    if (!props.isHomePage) return "#000000";
    return props.scrolled ? "#000000" : "#ffffff";
  }};

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
    background: ${(props) => {
      if (!props.isHomePage) return "#e53e3e";
      return "transparent";
    }};
    color: ${(props) => {
      if (!props.isHomePage) return "#ffffff";
      return "#374151";
    }};
    border: ${(props) => {
      if (!props.isHomePage) return "none";
      return "1px solid #d1d5db";
    }};

    &:hover {
      background: ${(props) => {
        if (!props.isHomePage) return "#dc2626";
        return "#f9fafb";
      }};
      color: ${(props) => {
        if (!props.isHomePage) return "#ffffff";
        return "#111827";
      }};
      border-color: ${(props) => {
        if (!props.isHomePage) return "none";
        return "#9ca3af";
      }};
      transform: translateY(-1px);
      box-shadow: ${(props) => {
        if (!props.isHomePage) return "0 2px 4px rgba(229, 62, 62, 0.2)";
        return "0 4px 12px rgba(0, 0, 0, 0.1)";
      }};
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
const RouterButton = ({ to, external, children, onNavigate, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (external) {
      window.open(to, "_blank");
    } else {
      // Close mega menu and scroll to top
      if (onNavigate) {
        onNavigate(to);
      } else {
        // Default behavior if no onNavigate callback
        navigate(to);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // Always use onClick handler for consistent behavior
  return (
    <ActionButton
      onClick={handleClick}
      scrolled={props.scrolled}
      isHomePage={props.isHomePage}
      {...props}
    >
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
  max-height: 50vh;
  overflow-y: auto;
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
    props.menuName === "SERVICES" || props.menuName === "WHO WE WORK WITH"
      ? "repeat(4, 1fr)"
      : "repeat(auto-fit, minmax(220px, 1fr))"};
  gap: 2rem;
  align-items: start;

  @media (max-width: 1200px) {
    grid-template-columns: ${(props) =>
      props.menuName === "SERVICES" || props.menuName === "WHO WE WORK WITH"
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
        url: "/Company/leadership-team",
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
        title: "AI & GenAI",
        description: "Advanced artificial intelligence and generative AI solutions",
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
            name: "LLM Integration",
            description: "GPT, Azure OpenAI, and advanced LLM solutions",
            focus: "AI & GenAI",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🔮",
            url: "/service/ai-and-gen-ai/llm",
          },
          {
            name: "Agentic AI",
            description: "Building intelligent, autonomous AI-driven agents",
            focus: "AI & GenAI",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🤖",
            url: "/service/ai-and-gen-ai/agents",
          },
          {
            name: "NLP & Computer Vision",
            description: "Natural language processing and computer vision solutions",
            focus: "AI & GenAI",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "👁️",
            url: "/service/ai-and-gen-ai/nlp",
          },
          {
            name: "ML Engineering & MLOps",
            description: "End-to-end machine learning engineering and operations",
            focus: "AI & GenAI",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "⚙️",
            url: "/service/ai-and-gen-ai/mlops",
          },
          {
            name: "AI Automation",
            description: "AI + RPA automation for streamlined workflows",
            focus: "AI & GenAI",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "⚡",
            url: "/service/ai-and-gen-ai/automation",
          },
          {
            name: "Responsible AI",
            description: "Strategic AI guidance with ethical considerations",
            focus: "AI & GenAI",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🎯",
            url: "/service/ai-and-gen-ai/responsible",
          },
        ],
        icon: "🔮",
        color: "rgba(59, 130, 246, 0.15)",
      },
      {
        title: "Cloud & Application Services",
        description: "Scalable cloud infrastructure and application development",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "Cloud Migration",
          "DevOps",
          "Microservices",
          "Containerization",
        ],
        hasDropdown: true,
        url: "/service/cloud-and-application-services",
        services: [
          {
            name: "Azure, AWS, GCP Engineering",
            description: "Cloud infrastructure and platform engineering",
            focus: "Cloud & Application",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "☁️",
            url: "/service/cloud-and-application-services/engineering",
          },
          {
            name: "DevOps & DevSecOps",
            description: "CI/CD pipelines and security integration",
            focus: "Cloud & Application",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🔄",
            url: "/service/cloud-and-application-services/devops",
          },
          {
            name: "App Modernization",
            description: "Legacy modernization and microservices architecture",
            focus: "Cloud & Application",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🏗️",
            url: "/service/cloud-and-application-services/modernization",
          },
          {
            name: "API Integration",
            description: "API development and system integration",
            focus: "Cloud & Application",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🔌",
            url: "/service/cloud-and-application-services/api",
          },
        ],
        icon: "☁️",
        color: "rgba(20, 184, 166, 0.15)",
      },
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
            name: "Data Engineering & ETL",
            description: "Build and streamline trusted data pipelines",
            focus: "Data & Analytics",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🔧",
            url: "/service/data-and-analytics/etl",
          },
          {
            name: "Business Intelligence & Dashboards",
            description: "Turn raw data into powerful insights",
            focus: "Data & Analytics",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "📊",
            url: "/service/data-and-analytics/bi",
          },
          {
            name: "Data Governance & Security",
            description: "Ensure compliant, secure, and reliable data",
            focus: "Data & Analytics",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🛡️",
            url: "/service/data-and-analytics/governance",
          },
          {
            name: "Data Tools Integration",
            description: "Azure Data Lake, Snowflake & Power BI integration",
            focus: "Data & Analytics",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🔗",
            url: "/service/data-and-analytics/tools",
          },
        ],
        icon: "📊",
        color: "rgba(20, 184, 166, 0.15)",
      },
      {
        title: "IoT Solutions",
        description: "Connect devices and drive automation with next-gen IoT technology",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "IoT Platform Development",
          "Sensor Integration",
          "Edge Computing",
          "Smart City Solutions",
        ],
        hasDropdown: true,
        url: "/iot",
        services: [
          {
            name: "Industrial IoT (IIoT)",
            description: "Manufacturing IoT and smart factory solutions",
            focus: "IoT Solutions",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🏭",
            url: "/iot",
          },
          {
            name: "Smart Grid & Energy IoT",
            description: "Intelligent grid systems and IoT monitoring",
            focus: "IoT Solutions",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "⚡",
            url: "/iot",
          },
          {
            name: "Healthcare IoT",
            description: "Connected medical device technology and IoT solutions",
            focus: "IoT Solutions",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🏥",
            url: "/iot",
          },
          {
            name: "Smart Logistics IoT",
            description: "Supply chain monitoring and IoT tracking solutions",
            focus: "IoT Solutions",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🚚",
            url: "/iot",
          },
        ],
        icon: "🌐",
        color: "rgba(59, 130, 246, 0.15)",
      },
      {
        title: "Managed IT Services",
        description: "Comprehensive IT management and support solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "Infrastructure Monitoring",
          "Application Support",
          "Service Desk",
          "Resource Management",
        ],
        hasDropdown: true,
        url: "/service/managed-it-services",
        services: [
          {
            name: "Infra & Network Monitoring",
            description: "24/7 NOC monitoring and infrastructure management",
            focus: "Managed IT Services",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🖥️",
            url: "/service/managed-it-services/infra",
          },
          {
            name: "Application Support",
            description: "L1-L3 application support and maintenance",
            focus: "Managed IT Services",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🔧",
            url: "/service/managed-it-services/support",
          },
          {
            name: "ITSM Service Desk",
            description: "ITSM service desk and CoE management",
            focus: "Managed IT Services",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "📞",
            url: "/service/managed-it-services/itsm",
          },
          {
            name: "Managed Resource Services",
            description: "TMS managed resource services",
            focus: "Managed IT Services",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "👥",
            url: "/service/managed-it-services/tms",
          },
        ],
        icon: "🖥️",
        color: "rgba(59, 130, 246, 0.15)",
      },
      {
        title: "SAP Services",
        description: "Comprehensive SAP solutions and consulting services",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "SAP S/4HANA",
          "SAP Business Technology Platform",
          "SAP Analytics",
        ],
        hasDropdown: true,
        url: "/service/sap-services",
        services: [
          {
            name: "SAP Migration",
            description: "End-to-end SAP S/4HANA implementation and migration",
            focus: "SAP Services",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🏢",
            url: "/service/sap-services/s4hana",
          },
          {
            name: "SAP BTP Development",
            description: "SAP BTP integration and development services",
            focus: "SAP Services",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🔧",
            url: "/service/sap-services/btp",
          },
          {
            name: "SAP Managed Support",
            description: "SAP analytics and managed support services",
            focus: "SAP Services",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🛠️",
            url: "/service/sap-services/ams",
          },
        ],
        icon: "🏢",
        color: "rgba(59, 130, 246, 0.15)",
      },
      {
        title: "Talent Solutions",
        description: "Empower business growth with agile talent solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "Direct Hire",
          "Contract-to-Hire",
          "Staff Augmentation",
          "Healthcare Staffing",
        ],
        hasDropdown: true,
        url: "/service/talent-solutions",
        services: [
          {
            name: "IT Staff Augmentation",
            description: "On-demand talent for project-based needs",
            focus: "Talent Solutions",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "⚡",
            url: "/service/talent-solutions/staffing",
          },
          {
            name: "Healthcare Staffing",
            description: "Specialized healthcare and life sciences staffing",
            focus: "Talent Solutions",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🏥",
            url: "/service/talent-solutions/healthcare",
          },
          {
            name: "Direct Hire & Contract-to-Hire",
            description: "Permanent and flexible hiring solutions",
            focus: "Talent Solutions",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "👥",
            url: "/service/talent-solutions/direct-hire",
          },
          {
            name: "Corp-to-Corp & W2",
            description: "Corporate staffing and consulting services",
            focus: "Talent Solutions",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🏢",
            url: "/service/talent-solutions/corp",
          },
        ],
        icon: "👥",
        color: "rgba(59, 130, 246, 0.15)",
      },
      {
        title: "Engineering & Manufacturing IT",
        description: "Drive innovation in manufacturing with Industry 4.0 solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "PLM & CAD Automation",
          "MES Integration",
          "Digital Twins",
          "Industry 4.0",
        ],
        hasDropdown: true,
        url: "/service/engineering-and-manufacturing-it",
        services: [
          {
            name: "PLM & CAD Automation",
            description: "Product lifecycle management and CAD automation",
            focus: "Engineering & Manufacturing",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🏭",
            url: "/service/engineering-and-manufacturing-it/plm",
          },
          {
            name: "Digital Twins Factory",
            description: "Digital twin technology for predictive maintenance",
            focus: "Engineering & Manufacturing",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🔄",
            url: "/service/engineering-and-manufacturing-it/mes",
          },
          {
            name: "MES Integration & IoT",
            description: "Manufacturing execution system integration",
            focus: "Engineering & Manufacturing",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "⚙️",
            url: "/service/engineering-and-manufacturing-it/twins",
          },
          {
            name: "Industry 4.0 Solutions",
            description: "Smart manufacturing and Industry 4.0 implementation",
            focus: "Engineering & Manufacturing",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🏭",
            url: "/service/engineering-and-manufacturing-it/industry4",
          },
        ],
        icon: "🏭",
        color: "rgba(59, 130, 246, 0.15)",
      },
      {
        title: "Healthcare & Life Sciences IT",
        description: "Revolutionize healthcare with AI-powered solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "HL7/FHIR Integration",
          "Clinical Data Platforms",
          "AI Imaging",
          "Compliance & Regulatory",
        ],
        hasDropdown: true,
        url: "/service/healthcare-and-life-sciences-it",
        services: [
          {
            name: "HL7/FHIR Integration",
            description: "Healthcare data standards and integration",
            focus: "Healthcare & Life Sciences",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🏥",
            url: "/service/healthcare-and-life-sciences-it/hl7",
          },
          {
            name: "Clinical Data Platforms",
            description: "Clinical trial and data management platforms",
            focus: "Healthcare & Life Sciences",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "📊",
            url: "/service/healthcare-and-life-sciences-it/data",
          },
          {
            name: "AI Imaging & Diagnostics",
            description: "AI-powered medical imaging and diagnostics",
            focus: "Healthcare & Life Sciences",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🔬",
            url: "/service/healthcare-and-life-sciences-it/ai",
          },
          {
            name: "Compliance & Regulatory IT",
            description: "Healthcare compliance and regulatory solutions",
            focus: "Healthcare & Life Sciences",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🛡️",
            url: "/service/healthcare-and-life-sciences-it/compliance",
          },
        ],
        icon: "🏥",
        color: "rgba(59, 130, 246, 0.15)",
      },
    ],
    sideItems: [
      {
        title: "More Services",
        items: ["Engineering & Manufacturing IT", "Healthcare & Life Sciences IT"],
        urls: [
          "/service/engineering-and-manufacturing-it",
          "/service/healthcare-and-life-sciences-it",
        ],
      },
      {
        title: "Industries",
        items: ["Manufacturing", "Aerospace", "Banking & Financial Services"],
        urls: [
          "/industries/menufacturing-and-automotive",
          "/industries/aerospace-and-defense",
          "/industries/banking-and-financial-services",
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
        title: "Banking & Financial Services",
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
      {
        title: "Retail & E-Commerce",
        description: "Digital commerce and omnichannel retail solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "E-commerce Platforms",
          "Omnichannel Solutions",
          "AI Personalization",
          "Supply Chain",
        ],
        hasDropdown: true,
        url: "/industries/retail-and-ecommerce",
        services: [
          {
            name: "E-commerce Platforms",
            description: "Scalable online shopping platforms and marketplaces",
            focus: "Retail",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🛍️",
            url: "/industries/retail-and-ecommerce",
          },
          {
            name: "Omnichannel Solutions",
            description: "Seamless shopping experiences across all channels",
            focus: "Retail",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "📱",
            url: "/industries/retail-and-ecommerce",
          },
          {
            name: "AI Personalization",
            description: "Intelligent recommendation engines and customer insights",
            focus: "Retail",
            color: "rgba(16, 185, 129, 0.15)",
            icon: "🎯",
            url: "/industries/retail-and-ecommerce",
          },
        ],
        icon: "🛍️",
        color: "rgba(20, 184, 166, 0.15)",
      },
      {
        title: "Energy & Utilities",
        description: "Smart grid and renewable energy solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "Smart Grid",
          "Renewable Energy",
          "Energy Analytics",
          "Grid Security",
        ],
        hasDropdown: true,
        url: "/industries/energy-and-utilities",
        services: [
          {
            name: "Smart Grid",
            description: "Intelligent grid systems and IoT monitoring",
            focus: "Energy",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "⚡",
            url: "/industries/energy-and-utilities",
          },
          {
            name: "Renewable Energy",
            description: "Solar, wind, and energy storage management",
            focus: "Energy",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "🌱",
            url: "/industries/energy-and-utilities",
          },
          {
            name: "Energy Analytics",
            description: "Predictive analytics and demand forecasting",
            focus: "Energy",
            color: "rgba(16, 185, 129, 0.15)",
            icon: "📊",
            url: "/industries/energy-and-utilities",
          },
        ],
        icon: "⚡",
        color: "rgba(59, 130, 246, 0.15)",
      },
      {
        title: "Education & Training",
        description: "Digital learning and training platform solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "Learning Management",
          "Virtual Classrooms",
          "Adaptive Learning",
          "Corporate Training",
        ],
        hasDropdown: true,
        url: "/industries/education-and-training",
        services: [
          {
            name: "Learning Management",
            description: "Comprehensive LMS platforms and course management",
            focus: "Education",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🎓",
            url: "/industries/education-and-training",
          },
          {
            name: "Virtual Classrooms",
            description: "Interactive online learning environments",
            focus: "Education",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "💻",
            url: "/industries/education-and-training",
          },
          {
            name: "Adaptive Learning",
            description: "AI-powered personalized learning experiences",
            focus: "Education",
            color: "rgba(16, 185, 129, 0.15)",
            icon: "🧠",
            url: "/industries/education-and-training",
          },
        ],
        icon: "🎓",
        color: "rgba(16, 185, 129, 0.15)",
      },
      {
        title: "Logistics & Transportation",
        description: "Intelligent supply chain and fleet management solutions",
        image: "/placeholder.svg?height=80&width=280",
        items: [
          "Fleet Management",
          "Supply Chain Visibility",
          "Warehouse Management",
          "Route Optimization",
        ],
        hasDropdown: true,
        url: "/industries/logistics-and-transportation",
        services: [
          {
            name: "Fleet Management",
            description: "GPS tracking and real-time fleet monitoring",
            focus: "Logistics",
            color: "rgba(20, 184, 166, 0.15)",
            icon: "🚚",
            url: "/industries/logistics-and-transportation",
          },
          {
            name: "Supply Chain Visibility",
            description: "End-to-end supply chain tracking and analytics",
            focus: "Logistics",
            color: "rgba(59, 130, 246, 0.15)",
            icon: "📦",
            url: "/industries/logistics-and-transportation",
          },
          {
            name: "Route Optimization",
            description: "AI-powered route planning and optimization",
            focus: "Logistics",
            color: "rgba(16, 185, 129, 0.15)",
            icon: "🗺️",
            url: "/industries/logistics-and-transportation",
          },
        ],
        icon: "🚚",
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
        items: [
          "Blogs",
          "Articles",
          "Whitepapers & Case Studies",
          "News & Events",
        ],
        urls: [
          "/insights/blog",
          "/insights/blog",
          "/insights/whitepapers-and-case-studies",
          "/insights/news-and-announcements",
        ],
      },
    ],
  },
  "WHO WE ARE": {
    mainItems: [
      {
        title: "Overview",
        description: "Learn about our journey in AI innovation",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Company Overview", "Vision & Mission", "Core Values"],
        url: "/about",
      },
      {
        title: "Leadership Team",
        description: "Meet our executive leadership",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Executive Team", "Board of Directors", "Advisory Board"],
        url: "/Company/leadership-team",
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
      {
        title: "Our Global Presence",
        description: "Our worldwide locations and partnerships",
        image: "/placeholder.svg?height=80&width=280",
        items: ["Office Locations", "Global Partners", "Regional Expertise"],
        url: "/global-presence",
      },
    ],
    sideItems: [
      {
        title: "Company Info",
        items: ["Awards & Recognition", "Press Releases", "Investor Relations"],
        urls: [
          "/about",
          "/about",
          "/about",
        ],
      },
      {
        title: "Partnerships",
        items: [
          "Strategic Alliances",
          "Technology Partners",
          "Channel Partners",
        ],
        urls: [
          "/partners",
          "/partners",
          "/partners",
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
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function to handle navigation and close mega menu
  const handleNavigation = (url) => {
    // Close mega menu
    setActiveMenu(null);
    setHoveredItem(null);

    // Navigate to the URL
    if (url.startsWith("/")) {
      navigate(url);
    } else {
      window.open(url, "_blank");
    }

    // Scroll to top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Check if we're on the homepage
  const isHomePage = location.pathname === "/";

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menuName) => {
    // Disable hover for all menus - use click only
    return;
  };

  const handleMouseLeave = () => {
    // Disable hover leave for all menus - use click only
    return;
  };

  const handleWhatWeDoClick = () => {
    if (activeMenu === "WHAT WE DO") {
      setActiveMenu(null);
      setSelectedService(null);
    } else {
      setActiveMenu("WHAT WE DO");
      setSelectedService(null);
    }
  };

  const handleMenuClick = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
      setSelectedService(null);
    } else {
      setActiveMenu(menuName);
      setSelectedService(null);
    }
  };

  const handleServiceClick = (serviceTitle) => {
    setSelectedService(selectedService === serviceTitle ? null : serviceTitle);
  };

  const handleKeyDown = (event, menuName) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleMenuClick(menuName);
    } else if (event.key === "Escape") {
      setActiveMenu(null);
      setSelectedService(null);
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
        setSelectedService(null);
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
        setSelectedService(null);
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

    if (menuName === "WHAT WE DO") {

      return (
        <MegaMenuContainer
          variants={megaMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          data-mega-menu="true"
          onMouseLeave={() => {
            setTimeout(() => {
              setActiveMenu(null);
              setSelectedService(null);
            }, 300);
          }}
          onMouseEnter={() => {
            // Clear any existing timeout
            if (window.megaMenuTimeout) {
              clearTimeout(window.megaMenuTimeout);
            }
          }}
        >
          <MegaMenuContent>
            <div
                             style={{
                 display: "flex",
                 gap: "1.5rem",
                 padding: "1rem 0",
                 maxWidth: "1200px",
                 margin: "0 auto",
                 maxHeight: "60vh",
                 overflowY: "auto",
               }}
            >
              {/* Left Column - Service Categories */}
              <div
                                 style={{
                   flex: 1,
                   display: "grid",
                   gridTemplateColumns: "repeat(3, 1fr)",
                   gap: "0.4rem",
                 }}
              >
                {menuConfig.mainItems.map((item, index) => (
                  <div
                    key={item.title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "0.75rem",
                      borderRadius: "10px",
                      background: selectedService === item.title 
                        ? "linear-gradient(135deg, rgba(229, 62, 62, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%)" 
                        : hoveredService === item.title 
                        ? "linear-gradient(135deg, rgba(249, 250, 251, 0.8) 0%, rgba(241, 245, 249, 0.6) 100%)"
                        : "transparent",
                      border: selectedService === item.title 
                        ? "1px solid rgba(229, 62, 62, 0.3)" 
                        : hoveredService === item.title 
                        ? "1px solid rgba(229, 62, 62, 0.2)" 
                        : "1px solid transparent",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                      boxShadow: selectedService === item.title 
                        ? "0 2px 8px rgba(229, 62, 62, 0.15)" 
                        : "none",
                    }}
                                         onMouseEnter={() => setHoveredService(item.title)}
                     onMouseLeave={() => setHoveredService(null)}
                     onClick={() => {
                       handleServiceClick(item.title);
                     }}
                  >
                    {/* Service Icon */}
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        background: selectedService === item.title 
                          ? "linear-gradient(135deg, #e53e3e 0%, #dc2626 100%)" 
                          : hoveredService === item.title 
                          ? "linear-gradient(135deg, rgba(229, 62, 62, 0.15) 0%, rgba(220, 38, 38, 0.1) 100%)"
                          : "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1rem",
                        flexShrink: 0,
                        boxShadow: selectedService === item.title 
                          ? "0 4px 12px rgba(229, 62, 62, 0.3)" 
                          : "0 2px 4px rgba(0, 0, 0, 0.05)",
                        border: selectedService === item.title 
                          ? "1px solid rgba(229, 62, 62, 0.3)" 
                          : "1px solid rgba(229, 62, 62, 0.1)",
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                        color: selectedService === item.title ? "#ffffff" : "#e53e3e",
                      }}
                    >
                      {item.icon}
                    </div>

                    {/* Service Name Only */}
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: selectedService === item.title ? "700" : "600",
                        color: selectedService === item.title ? "#e53e3e" : "#1e293b",
                        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                        lineHeight: "1.3",
                        letterSpacing: "-0.01em",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Column - Dynamic Services List */}
              <div
                style={{
                  flex: 1,
                  borderLeft: "1px solid #e2e8f0",
                  paddingLeft: "1.5rem",
                  background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                                     {selectedService ? (
                     // Show specific services for selected category
                     <div
                       style={{
                         display: "flex",
                         flexDirection: "column",
                         gap: "0.75rem",
                       }}
                     >
                       {(() => {
                         const selectedItem = menuConfig.mainItems.find(item => item.title === selectedService);
                         console.log('Selected service:', selectedService);
                         console.log('Found item:', selectedItem);
                         console.log('Services:', selectedItem?.services);
                         return (
                           <>
                             <div
                               style={{
                                 display: "grid",
                                 gridTemplateColumns: "repeat(3, 1fr)",
                                 gap: "0.5rem",
                               }}
                             >
                               {selectedItem?.services?.map((serviceItem, serviceIndex) => (
                                <div
                                  key={serviceIndex}
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    padding: "1rem",
                                    borderRadius: "10px",
                                    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                                    border: "1px solid #e2e8f0",
                                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                    cursor: "pointer",
                                    minHeight: "90px",
                                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                                    position: "relative",
                                    overflow: "hidden",
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)";
                                    e.currentTarget.style.borderColor = "#cbd5e1";
                                    e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1)";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)";
                                    e.currentTarget.style.borderColor = "#e2e8f0";
                                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.06)";
                                  }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (serviceItem.url) {
                                      handleNavigation(serviceItem.url);
                                    }
                                  }}
                                >
                                  {/* Service Icon */}
                                  <div
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      background: `linear-gradient(135deg, ${serviceItem.color || "rgba(229, 62, 62, 0.15)"} 0%, ${serviceItem.color?.replace('0.15', '0.25') || "rgba(220, 38, 38, 0.1)"} 100%)`,
                                      borderRadius: "10px",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      fontSize: "1.25rem",
                                      marginBottom: "0.75rem",
                                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                      position: "relative",
                                    }}
                                  >
                                    {serviceItem.icon}
                                    <div
                                      style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)",
                                        borderRadius: "10px",
                                        pointerEvents: "none",
                                      }}
                                    />
                                  </div>

                                  {/* Service Name */}
                                  <h4
                                    style={{
                                      fontSize: "0.75rem",
                                      fontWeight: "600",
                                      color: "#1e293b",
                                      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                                      margin: 0,
                                      lineHeight: "1.3",
                                      letterSpacing: "-0.01em",
                                    }}
                                  >
                                    {serviceItem.name}
                                  </h4>
                                </div>
                              ))}
                            </div>
                            
                            {/* See All Button */}
                            <div
                              style={{
                                marginTop: "1.5rem",
                                padding: "1rem",
                                background: "linear-gradient(135deg, #e53e3e 0%, #dc2626 100%)",
                                borderRadius: "12px",
                                cursor: "pointer",
                                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                textAlign: "center",
                                color: "#ffffff",
                                fontWeight: "600",
                                fontSize: "0.875rem",
                                boxShadow: "0 4px 12px rgba(229, 62, 62, 0.25)",
                                border: "1px solid rgba(229, 62, 62, 0.2)",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                                e.currentTarget.style.boxShadow = "0 8px 20px rgba(229, 62, 62, 0.35)";
                                e.currentTarget.style.background = "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0) scale(1)";
                                e.currentTarget.style.boxShadow = "0 4px 12px rgba(229, 62, 62, 0.25)";
                                e.currentTarget.style.background = "linear-gradient(135deg, #e53e3e 0%, #dc2626 100%)";
                              }}
                                                             onClick={() => {
                                 if (selectedItem?.url) {
                                   handleNavigation(selectedItem.url);
                                 }
                               }}
                             >
                               See All {selectedService} Services →
                            </div>
                          </>
                        );
                      })()}
                    </div>
                                     ) : (
                     // Show message when no service is selected
                     <div
                       style={{
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center",
                         justifyContent: "center",
                         padding: "3rem 2rem",
                         textAlign: "center",
                         color: "#64748b",
                         background: "linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(241, 245, 249, 0.6) 100%)",
                         borderRadius: "16px",
                         border: "2px dashed #cbd5e1",
                       }}
                     >
                       <div
                         style={{
                           fontSize: "3rem",
                           marginBottom: "1.5rem",
                           opacity: "0.7",
                           filter: "grayscale(0.3)",
                         }}
                       >
                         🎯
                       </div>
                       <h3
                         style={{
                           fontSize: "1.125rem",
                           fontWeight: "700",
                           color: "#1e293b",
                           margin: "0 0 0.75rem 0",
                           letterSpacing: "-0.01em",
                         }}
                       >
                         Select a Service
                       </h3>
                       <p
                         style={{
                           fontSize: "0.875rem",
                           color: "#64748b",
                           margin: 0,
                           lineHeight: "1.5",
                           maxWidth: "300px",
                         }}
                       >
                         Click on any service from the left to explore its detailed solutions and capabilities
                       </p>
                     </div>
                   )}
                </div>
              </div>
            </div>
          </MegaMenuContent>
        </MegaMenuContainer>
      );
    }

    if (menuName === "WHO WE WORK WITH") {
      return (
        <MegaMenuContainer
          variants={megaMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          data-mega-menu="true"
          onMouseLeave={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
              setActiveMenu(null);
              setSelectedService(null);
            }, 300);
          }}
        >
          <MegaMenuContent>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "1rem",
                padding: "1.5rem",
                maxWidth: "1200px",
                margin: "0 auto",
                maxHeight: "60vh",
              }}
            >
              {[
                {
                  title: "Healthcare & Life Sciences",
                  description: "Transform healthcare delivery with cutting-edge digital solutions.",
                  icon: "🏥",
                  color: "rgba(20, 184, 166, 0.15)",
                  url: "/industries/helthcare-and-life-sciences",
                  features: ["Electronic Health Records", "Telemedicine Platforms", "Medical Device Integration"]
                },
                {
                  title: "Manufacturing & Automotive",
                  description: "Optimize manufacturing processes with intelligent automation.",
                  icon: "🏭",
                  color: "rgba(59, 130, 246, 0.15)",
                  url: "/industries/menufacturing-and-automotive",
                  features: ["Smart Manufacturing", "Digital Twin Technology", "Quality Control Systems"]
                },
                {
                  title: "Banking & Financial Services",
                  description: "Secure financial operations with advanced digital banking solutions.",
                  icon: "🏦",
                  color: "rgba(16, 185, 129, 0.15)",
                  url: "/industries/banking-and-financial-services",
                  features: ["Digital Banking Platforms", "Payment Processing Systems", "Risk Management"]
                },
                {
                  title: "Aerospace & Defense",
                  description: "Advance aerospace technology with precision engineering solutions.",
                  icon: "✈️",
                  color: "rgba(245, 158, 11, 0.15)",
                  url: "/industries/aerospace-and-defense",
                  features: ["Aircraft Systems", "Defense Technology", "Satellite Communications"]
                },
                {
                  title: "Retail & E-Commerce",
                  description: "Accelerate retail transformation with digital commerce solutions.",
                  icon: "🛍️",
                  color: "rgba(139, 92, 246, 0.15)",
                  url: "/industries/retail-and-ecommerce",
                  features: ["E-commerce Platforms", "Omnichannel Solutions", "Inventory Management"]
                },
                {
                  title: "Energy & Utilities",
                  description: "Power energy systems with smart grid and renewable solutions.",
                  icon: "⚡",
                  color: "rgba(239, 68, 68, 0.15)",
                  url: "/industries/energy-and-utilities",
                  features: ["Smart Grid Technology", "Renewable Energy", "Energy Management"]
                },
                {
                  title: "Education & Training",
                  description: "Enhance education delivery with digital learning platforms.",
                  icon: "🎓",
                  color: "rgba(34, 197, 94, 0.15)",
                  url: "/industries/education-and-training",
                  features: ["Learning Management Systems", "Virtual Classrooms", "Student Analytics"]
                },
                {
                  title: "Logistics & Transportation",
                  description: "Optimize logistics with intelligent supply chain solutions.",
                  icon: "🚚",
                  color: "rgba(168, 85, 247, 0.15)",
                  url: "/industries/logistics-and-transportation",
                  features: ["Supply Chain Management", "Real-time Tracking", "Route Optimization"]
                }
              ].map((industry, index) => (
                <div
                  key={industry.title}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    textAlign: "left",
                    gap: "0.875rem",
                    padding: "1rem",
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                    border: "1px solid #e2e8f0",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    height: "70px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)";
                    e.currentTarget.style.borderColor = "#cbd5e1";
                    e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1)";
                    // Animate arrow
                    const arrow = e.currentTarget.querySelector('div:last-child');
                    if (arrow) {
                      arrow.style.transform = "translateX(3px)";
                      arrow.style.opacity = "1";
                      arrow.style.color = "#3b82f6";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)";
                    e.currentTarget.style.borderColor = "#e2e8f0";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)";
                    // Reset arrow
                    const arrow = e.currentTarget.querySelector('div:last-child');
                    if (arrow) {
                      arrow.style.transform = "translateX(0)";
                      arrow.style.opacity = "0.6";
                      arrow.style.color = "#94a3b8";
                    }
                  }}
                  onClick={() => {
                    if (industry.url) {
                      handleNavigation(industry.url);
                    }
                  }}
                >
                  {/* Industry Icon */}
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      background: `linear-gradient(135deg, ${industry.color} 0%, ${industry.color.replace('0.15', '0.25')} 100%)`,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.25rem",
                      flexShrink: 0,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      position: "relative",
                    }}
                  >
                    {industry.icon}
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)",
                        borderRadius: "12px",
                        pointerEvents: "none",
                      }}
                    />
                  </div>

                  {/* Industry Content */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Industry Title */}
                    <h3
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: "#1e293b",
                        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                        margin: "0 0 0.25rem 0",
                        lineHeight: "1.2",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {industry.title}
                    </h3>

                    {/* Industry Description */}
                    <p
                      style={{
                        fontSize: "0.625rem",
                        color: "#64748b",
                        lineHeight: "1.3",
                        margin: "0",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontWeight: "400",
                      }}
                    >
                      {industry.description}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#94a3b8",
                      fontSize: "0.75rem",
                      opacity: "0.6",
                      transition: "all 0.3s ease",
                      flexShrink: 0,
                    }}
                  >
                    →
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
          onMouseLeave={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
              setActiveMenu(null);
              setSelectedService(null);
            }, 300);
          }}
        >
          <MegaMenuContent>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                padding: "1.5rem",
                maxWidth: "1000px",
                margin: "0 auto",
                maxHeight: "50vh",
              }}
            >
              {/* Main Content - Cards */}
              <div
                style={{
                  flex: 1,
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1.5rem",
                }}
              >
                {menuConfig.mainItems.map((item, index) => (
                  <div
                    key={item.title}
                    style={{
                      background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                      cursor: "pointer",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: "1px solid #e2e8f0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                      e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.12)";
                      e.currentTarget.style.background = "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.06)";
                      e.currentTarget.style.background = "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)";
                    }}
                    onClick={() => {
                      if (item.url) {
                        handleNavigation(item.url);
                      }
                    }}
                  >
                    {/* Card Image */}
                    <div
                      style={{
                        height: "140px",
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
                    <div style={{ padding: "1rem" }}>
                      {/* Content Type Label */}
                      <div
                        style={{
                          fontSize: "0.625rem",
                          fontWeight: "600",
                          color: "#e53e3e",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {item.description}
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "700",
                          color: "#1e293b",
                          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                          margin: "0 0 0.75rem 0",
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
                  width: "240px",
                  padding: "0.75rem 0",
                }}
              >
                {menuConfig.sideItems?.map((sideItem, index) => (
                  <div key={sideItem.title} style={{ marginBottom: "2rem" }}>
                    {/* Section Title */}
                    <h4
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        color: "#1e293b",
                        margin: "0 0 0.75rem 0",
                        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
                        borderBottom: "1px solid #e2e8f0",
                        paddingBottom: "0.375rem",
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
                            padding: "0.5rem 0.75rem",
                            borderRadius: "6px",
                            cursor: "pointer",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
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
                            if (sideItem.urls && sideItem.urls[itemIndex]) {
                              handleNavigation(sideItem.urls[itemIndex]);
                            }
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
          onMouseLeave={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
              setActiveMenu(null);
              setSelectedService(null);
            }, 300);
          }}
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
                  {menuConfig.mainItems.map((item, index) => {
                    const getItemContent = (title) => {
                      switch (title) {
                        case "Join our team":
                          return {
                            image:
                              "/images/talent-solution.png",
                            title: "Join Our Team",
                            description:
                              "Browse current job openings and grow your career with us.",
                            buttonText: "View Openings",
                            buttonUrl: "/careers/current-openings",
                            emoji: "💼",
                          };
                        case "Life at Intellectt":
                          return {
                            image:
                              "/images/cloud-and-application.png",
                            title: "Life at Intellectt",
                            description:
                              "Discover our culture and values that make us great.",
                            buttonText: "Visit our page",
                            buttonUrl: "/careers/life-at-company",
                            emoji: "🌟",
                          };
                        case "How we hire":
                          return {
                            image:
                              "/images/Data-Analytics.png",
                            title: "How We Hire",
                            description:
                              "Learn about our hiring process and what we look for.",
                            buttonText: "Learn More",
                            buttonUrl: "/careers/hiring-process",
                            emoji: "🎯",
                          };
                        default:
                          return {
                            image:
                              "/images/cloud-and-application.png",
                            title: "Life at Intellectt",
                            description:
                              "Discover our culture and values that make us great.",
                            buttonText: "Visit our page",
                            buttonUrl: "/careers/life-at-company",
                            emoji: "🌟",
                          };
                      }
                    };

                    return (
                      <div
                        key={item.title}
                        style={{
                          padding: "0.875rem 1rem",
                          borderRadius: "8px",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          background:
                            item.isActive || hoveredItem === item.title
                              ? "#ffffff"
                              : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          border:
                            item.isActive || hoveredItem === item.title
                              ? "1px solid #d1d5db"
                              : "1px solid transparent",
                          boxShadow:
                            item.isActive || hoveredItem === item.title
                              ? "0 2px 8px rgba(0, 0, 0, 0.1)"
                              : "none",
                        }}
                        onMouseEnter={(e) => {
                          // Clear ALL other navigation items first
                          const navigationContainer = e.target.parentElement;
                          const allNavItems =
                            navigationContainer.querySelectorAll("div");
                          allNavItems.forEach((navItem) => {
                            if (navItem !== e.target) {
                              navItem.style.background = "transparent";
                              navItem.style.borderColor = "transparent";
                              navItem.style.boxShadow = "none";
                            }
                          });

                          setHoveredItem(item.title);

                          // Update content based on hover
                          const content = getItemContent(item.title);
                          const imageElement =
                            document.getElementById("careers-image");
                          const titleElement =
                            document.getElementById("careers-title");
                          const descriptionElement = document.getElementById(
                            "careers-description"
                          );
                          const buttonElement =
                            document.getElementById("careers-button");

                          if (
                            imageElement &&
                            titleElement &&
                            descriptionElement &&
                            buttonElement
                          ) {
                            // Update image
                            imageElement.src = content.image;

                            // Update text content
                            titleElement.textContent = content.title;
                            descriptionElement.textContent =
                              content.description;

                            // Update button
                            buttonElement.textContent = content.buttonText;
                            buttonElement.onclick = () => {
                              handleNavigation(content.buttonUrl);
                            };
                          }
                        }}
                        onMouseLeave={(e) => {
                          setHoveredItem(null);
                        }}
                        onClick={() => {
                          if (item.url) {
                            handleNavigation(item.url);
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
                    );
                  })}
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
                    height: "160px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    marginBottom: "1.5rem",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <img
                    id="careers-image"
                    src={menuConfig.featuredContent.image}
                    alt={menuConfig.featuredContent.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "all 0.3s ease",
                    }}
                  />
                </div>

                {/* Content */}
                <h3
                  id="careers-title"
                  style={{
                    color: "#111827",
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    margin: "0 0 0.5rem 0",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "-0.02em",
                    transition: "all 0.3s ease",
                  }}
                >
                  {menuConfig.featuredContent.title}
                </h3>

                <p
                  id="careers-description"
                  style={{
                    color: "#6b7280",
                    fontSize: "0.8rem",
                    lineHeight: "1.5",
                    margin: "0 0 1rem 0",
                    fontFamily: "Inter, sans-serif",
                    maxWidth: "300px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {menuConfig.featuredContent.description}
                </p>

                {/* Button */}
                <RouterButton
                  id="careers-button"
                  to={menuConfig.featuredContent.buttonUrl}
                  external={
                    !menuConfig.featuredContent.buttonUrl.startsWith("/")
                  }
                  onNavigate={handleNavigation}
                  style={{
                    background: "transparent",
                    border: "2px solid #e53e3e",
                    color: "#e53e3e",
                    padding: "0.6rem 1.25rem",
                    borderRadius: "8px",
                    fontSize: "0.8rem",
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
                  <span style={{ fontSize: "0.75rem", fontWeight: "700" }}>
                    →
                  </span>
                </RouterButton>
              </div>
            </div>
          </MegaMenuContent>
        </MegaMenuContainer>
      );
    }

    if (menuName === "WHO WE ARE") {
      return (
        <MegaMenuContainer
          variants={megaMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          data-mega-menu="true"
          onMouseLeave={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
              setActiveMenu(null);
              setSelectedService(null);
            }, 300);
          }}
        >
          <MegaMenuContent>
            <div
              style={{
                display: "flex",
                background: "#ffffff",
                borderRadius: "12px",
                overflow: "hidden",
                minHeight: "175px",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid #e5e7eb",
              }}
            >
              {/* Left Navigation Sidebar */}
              <div
                style={{
                  width: "280px",
                  background: "#f9fafb",
                  padding: "1rem",
                  borderRight: "1px solid #e5e7eb",
                }}
              >


                {/* Navigation Items */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  {menuConfig.mainItems.map((item, index) => {
                    const getItemContent = (title) => {
                      switch (title) {
                        case "Our Journey":
                          return {
                            image:
                              "/images/cloud-and-application.png",
                            title: "Our Journey",
                            description:
                              "From startup to global leader in AI & technology solutions.",
                            buttonText: "Learn More",
                            buttonUrl: "/company/our-journey",
                          };
                        case "Leadership Team":
                          return {
                            image:
                              "/images/talent-solution.png",
                            title: "Meet Our Leaders",
                            description:
                              "Visionary leaders driving innovation and excellence.",
                            buttonText: "Meet the Team",
                            buttonUrl: "/Company/leadership-team",
                          };
                        case "Global Presence":
                          return {
                            image:
                              "/images/cloud-computing-hero.webp",
                            title: "Global Reach",
                            description:
                              "Worldwide network serving clients across 50+ countries.",
                            buttonText: "View Locations",
                            buttonUrl: "/company/global-presence",
                          };
                        case "Our Companies":
                          return {
                            image:
                              "/images/lumin-logo.png",
                            title: "Our Companies",
                            description:
                              "Specialized divisions driving innovation across industries.",
                            buttonText: "Explore Companies",
                            buttonUrl: "#",
                          };
                        default:
                          return {
                            image:
                              "/images/cloud-and-application.png",
                            title: "About Intellectt",
                            description:
                              "Leading AI & technology company with global presence.",
                            buttonText: "Learn More",
                            buttonUrl: "/company/our-journey",
                          };
                      }
                    };

                    return (
                      <div
                        key={item.title}
                        style={{
                          padding: "0.875rem 1rem",
                          borderRadius: "8px",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          background:
                            item.isActive || hoveredItem === item.title
                              ? "#ffffff"
                              : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          border:
                            item.isActive || hoveredItem === item.title
                              ? "1px solid #d1d5db"
                              : "1px solid transparent",
                          boxShadow:
                            item.isActive || hoveredItem === item.title
                              ? "0 2px 8px rgba(0, 0, 0, 0.1)"
                              : "none",
                        }}
                        onMouseEnter={(e) => {
                          // Clear ALL other navigation items first
                          const navigationContainer = e.target.parentElement;
                          const allNavItems =
                            navigationContainer.querySelectorAll("div");
                          allNavItems.forEach((navItem) => {
                            if (navItem !== e.target) {
                              navItem.style.background = "transparent";
                              navItem.style.borderColor = "transparent";
                              navItem.style.boxShadow = "none";
                            }
                          });

                          setHoveredItem(item.title);

                          if (!item.isActive) {
                            e.target.style.background = "#ffffff";
                            e.target.style.borderColor = "#d1d5db";
                            e.target.style.boxShadow =
                              "0 2px 8px rgba(0, 0, 0, 0.1)";
                          }

                          // Update content based on hover
                          const content = getItemContent(item.title);
                          const imageElement =
                            document.getElementById("who-we-are-image");
                          const titleElement =
                            document.getElementById("who-we-are-title");
                          const descriptionElement = document.getElementById(
                            "who-we-are-description"
                          );
                          const buttonElement =
                            document.getElementById("who-we-are-button");

                          if (
                            imageElement &&
                            titleElement &&
                            descriptionElement &&
                            buttonElement
                          ) {
                            if (item.title === "Our Companies") {
                              // For Our Companies, show two company boxes
                              const rightContent = document.querySelector('[data-right-content="who-we-are"]');
                              if (rightContent) {
                                rightContent.innerHTML = `
                                  <div style="display: flex; flexDirection: column; gap: 1rem; padding: 1rem;">
                                    <!-- Lumin Inc. -->
                                    <div style="background: white; border: 1px solid #e5e7eb; borderRadius: 8px; padding: 1rem; cursor: pointer;" 
                                         onclick="window.open('https://lumininc.com/', '_blank')">
                                      <img src="/images/lumin-logo.png" alt="Lumin Inc" style="width: 100%; height: auto; maxWidth: 200px;" />
                                    </div>
                                    
                                    <!-- Lumin Innovations -->
                                    <div style="background: white; border: 1px solid #e5e7eb; borderRadius: 8px; padding: 1rem; cursor: pointer;" 
                                         onclick="window.open('https://lumin-innovations.com/', '_blank')">
                                      <img src="/images/lumin-innovations-horizontal.png" alt="Lumin Innovations" style="width: 100%; height: auto; maxWidth: 200px;" />
                                    </div>
                                  </div>
                                `;
                              }
                            } else {
                              // For other items, update the content as before
                              // Update image src
                              imageElement.src = content.image;
                              imageElement.alt = content.title;

                              // Update text content
                              titleElement.textContent = content.title;
                              descriptionElement.textContent = content.description;

                              // Update button
                              buttonElement.textContent = content.buttonText;
                              buttonElement.onclick = () => {
                                handleNavigation(content.buttonUrl);
                              };
                            }
                          }
                        }}
                        onMouseLeave={(e) => {
                          setHoveredItem(null);
                          if (!item.isActive) {
                            e.target.style.background = "transparent";
                            e.target.style.borderColor = "transparent";
                            e.target.style.boxShadow = "none";
                          }
                        }}
                        onClick={() => {
                          if (item.url) {
                            handleNavigation(item.url);
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
                            color: "#6366f1",
                            fontSize: "0.8rem",
                            fontWeight: "600",
                            opacity: item.isActive ? "1" : "0.7",
                          }}
                        >
                          ›
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Content Area - Careers Style */}
              <div
                data-right-content="who-we-are"
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
                    height: "160px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    marginBottom: "1.5rem",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <img
                    id="who-we-are-image"
                    src="/images/cloud-and-application.png"
                    alt="About Intellectt"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "all 0.3s ease",
                    }}
                  />
                </div>

                {/* Content */}
                <h3
                  id="who-we-are-title"
                  style={{
                    color: "#111827",
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    margin: "0 0 0.5rem 0",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "-0.02em",
                    transition: "all 0.3s ease",
                  }}
                >
                  About Intellectt
                </h3>

                <p
                  id="who-we-are-description"
                  style={{
                    color: "#6b7280",
                    fontSize: "0.8rem",
                    lineHeight: "1.5",
                    margin: "0 0 1rem 0",
                    fontFamily: "Inter, sans-serif",
                    maxWidth: "300px",
                    transition: "all 0.3s ease",
                  }}
                >
                  Leading AI & technology company with global presence.
                </p>

                {/* Button */}
                <RouterButton
                  id="who-we-are-button"
                  to="/company/our-journey"
                  onNavigate={handleNavigation}
                  style={{
                    background: "transparent",
                    border: "2px solid #e53e3e",
                    color: "#e53e3e",
                    padding: "0.6rem 1.25rem",
                    borderRadius: "8px",
                    fontSize: "0.8rem",
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
                  Learn More
                  <span style={{ fontSize: "0.75rem", fontWeight: "700" }}>
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
                      item.title === "Our Companies" ? (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            padding: "1rem 0",
                          }}
                        >
                          {(item.companies || item.services).map(
                            (companyItem, companyIndex) => (
                              <div
                                key={companyIndex}
                                onClick={() => {
                                  if (companyItem.url) {
                                    handleNavigation(companyItem.url);
                                  }
                                }}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "1rem",
                                  padding: "1rem",
                                  borderRadius: "12px",
                                  border: "2px solid #e5e7eb",
                                  backgroundColor:
                                    companyItem.color ||
                                    "rgba(249, 250, 251, 0.5)",
                                  cursor: "pointer",
                                  transition: "all 0.3s ease",
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.borderColor = companyItem.color
                                    ? companyItem.color.replace("0.1", "0.3")
                                    : "#3b82f6";
                                  e.target.style.backgroundColor =
                                    companyItem.color
                                      ? companyItem.color.replace("0.1", "0.2")
                                      : "rgba(59, 130, 246, 0.1)";
                                  e.target.style.transform = "translateY(-2px)";
                                  e.target.style.boxShadow =
                                    "0 8px 25px rgba(0, 0, 0, 0.1)";
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.borderColor = "#e5e7eb";
                                  e.target.style.backgroundColor =
                                    companyItem.color ||
                                    "rgba(249, 250, 251, 0.5)";
                                  e.target.style.transform = "translateY(0)";
                                  e.target.style.boxShadow = "none";
                                }}
                              >
                                <div
                                  style={{
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "12px",
                                    backgroundColor:
                                      companyItem.color ||
                                      "rgba(59, 130, 246, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                  }}
                                >
                                  <img
                                    src={
                                      companyItem.image ||
                                      "/placeholder.svg?height=40&width=40"
                                    }
                                    alt={companyItem.name}
                                    style={{
                                      width: "40px",
                                      height: "40px",
                                      objectFit: "contain",
                                    }}
                                  />
                                </div>
                                <div
                                  style={{
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.25rem",
                                  }}
                                >
                                  <h4
                                    style={{
                                      margin: 0,
                                      fontSize: "1rem",
                                      fontWeight: "600",
                                      color: "#111827",
                                      fontFamily: "Inter, sans-serif",
                                    }}
                                  >
                                    {companyItem.name}
                                  </h4>
                                  <p
                                    style={{
                                      margin: 0,
                                      fontSize: "0.875rem",
                                      color: "#6b7280",
                                      lineHeight: "1.4",
                                      fontFamily: "Inter, sans-serif",
                                    }}
                                  >
                                    {companyItem.description}
                                  </p>
                                  <span
                                    style={{
                                      fontSize: "0.75rem",
                                      fontWeight: "500",
                                      color: companyItem.color
                                        ? companyItem.color.replace(
                                            "0.1",
                                            "0.8"
                                          )
                                        : "#3b82f6",
                                      textTransform: "uppercase",
                                      letterSpacing: "0.5px",
                                    }}
                                  >
                                    {companyItem.focus}
                                  </span>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      ) : (
                        <MegaMenuGrid menuName={menuName}>
                          {(item.companies || item.services).map(
                            (serviceItem, serviceIndex) => (
                              <MegaMenuServiceItem
                                key={serviceIndex}
                                menuName={menuName}
                                onClick={() => {
                                  if (serviceItem.url) {
                                    handleNavigation(serviceItem.url);
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
                      )
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
      <HeaderContainer scrolled={scrolled} isHomePage={isHomePage}>
        <HeaderContent>
          <Logo scrolled={scrolled} isHomePage={isHomePage}>
            <div
              onClick={() => handleNavigation("/")}
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-DYNCWKUHLFK4nr4sVmlGe1Bm1n3ut5.svg"
                alt="Intellectt"
                style={{
                  cursor: "pointer",
                  objectFit: "cover",
                  objectPosition: "left center",
                  width: "auto",
                  height: "40px",
                  clipPath: "inset(0 20% 0 0)",
                }}
              />
            </div>
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
                scrolled={scrolled}
                isHomePage={isHomePage}
                onMouseEnter={() => handleMouseEnter(menuName)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleMenuClick(menuName)}
                onKeyDown={(e) => handleKeyDown(e, menuName)}
                tabIndex={0}
                role="button"
                aria-expanded={activeMenu === menuName}
                aria-haspopup="true"
                data-nav-item="true"
                style={{ cursor: "pointer" }}
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
                          handleNavigation(result.url);
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
              scrolled={scrolled}
              isHomePage={isHomePage}
              onNavigate={handleNavigation}
              style={{
                background: scrolled ? "#e53e3e" : "#ffffff",
                color: scrolled ? "#ffffff" : "#374151",
                border: scrolled ? "none" : "1px solid #e5e7eb",
                fontWeight: "600",
                fontSize: "0.875rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                boxShadow: scrolled
                  ? "0 2px 4px rgba(229, 62, 62, 0.2)"
                  : "none",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-1px)";
                e.target.style.background = "#dc2626";
                e.target.style.color = "#ffffff";
                e.target.style.border = "none";
                e.target.style.boxShadow = "0 4px 8px rgba(220, 38, 38, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.background = scrolled ? "#e53e3e" : "#ffffff";
                e.target.style.color = scrolled ? "#ffffff" : "#374151";
                e.target.style.border = scrolled ? "none" : "1px solid #e5e7eb";
                e.target.style.boxShadow = scrolled
                  ? "0 2px 4px rgba(229, 62, 62, 0.2)"
                  : "none";
              }}
            >
              Let's Connect
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
          <Logo scrolled={scrolled} isHomePage={isHomePage}>
            <div
              onClick={() => handleNavigation("/")}
              style={{
                textDecoration: "none",
                color: "inherit",
                cursor: "pointer",
              }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-DYNCWKUHLFK4nr4sVmlGe1Bm1n3ut5.svg"
                alt="Intellectt"
                style={{
                  cursor: "pointer",
                  objectFit: "cover",
                  objectPosition: "left center",
                  width: "auto",
                  height: "40px",
                  clipPath: "inset(0 20% 0 0)",
                }}
              />
            </div>
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
                    <SidebarNavItem
                      key={index}
                      onClick={() => {
                        if (item.url) {
                          handleNavigation(item.url);
                          closeMobileMenu();
                        }
                      }}
                    >
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
            isHomePage={isHomePage}
            onNavigate={handleNavigation}
            style={{ width: "100%", justifyContent: "center" }}
          >
            Let's Connect
          </RouterButton>
        </SidebarActions>
      </Sidebar>
    </div>
  );
}

export default MegaMenuIntellectt;
