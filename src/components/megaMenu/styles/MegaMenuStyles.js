import styled from "@emotion/styled";
import { motion } from "framer-motion";

// Header Container
export const HeaderContainer = styled.header`
  position: relative;
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

export const HeaderContent = styled.div`
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
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  z-index: 1001;

  img {
    height: 40px;
    width: auto;
    transition: all 0.3s ease-in-out;
    filter: ${(props) => {
      if (!props.isHomePage) {
        return "none";
      }
      return props.scrolled ? "none" : "brightness(0) invert(1)";
    }};

    @media (max-width: 768px) {
      height: 35px;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  color: ${(props) => {
    if (!props.isHomePage) {
      return "#000000";
    }
    return props.scrolled ? "#000000" : "#ffffff";
  }};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: #e53e3e;
  }

  svg {
    transition: transform 0.3s ease-in-out;
  }

  &:hover svg {
    transform: rotate(180deg);
  }
`;

export const ConnectButton = styled.button`
  background: ${(props) => {
    if (!props.isHomePage) {
      return "#e53e3e";
    }
    return props.scrolled ? "#e53e3e" : "transparent";
  }};
  color: ${(props) => {
    if (!props.isHomePage) {
      return "#ffffff";
    }
    return props.scrolled ? "#ffffff" : "#ffffff";
  }};
  border: ${(props) => {
    if (!props.isHomePage) {
      return "none";
    }
    return props.scrolled ? "none" : "2px solid #ffffff";
  }};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: ${(props) => {
    if (!props.isHomePage) {
      return "0 2px 4px rgba(229, 62, 62, 0.2)";
    }
    return props.scrolled ? "0 2px 4px rgba(229, 62, 62, 0.2)" : "none";
  }};

  &:hover {
    background: #c53030;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(229, 62, 62, 0.3);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: ${(props) => {
    if (!props.isHomePage) {
      return "#000000";
    }
    return props.scrolled ? "#000000" : "#ffffff";
  }};
  z-index: 1001;

  @media (max-width: 1024px) {
    display: block;
  }
`;

// Mega Menu Styles
export const MegaMenuContainer = styled(motion.div)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffffff;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

export const MegaMenuContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    grid-template-columns: 1fr;
  }
`;

export const MegaMenuSection = styled.div`
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1a202c;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.75rem;
  }

  a {
    color: #4a5568;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      color: #e53e3e;
    }
  }
`;

// Search Styles
export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: #ffffff;
  width: 200px;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
`;

export const SearchResultItem = styled.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f7fafc;
  }

  h4 {
    margin: 0 0 0.25rem 0;
    font-size: 0.9rem;
    color: #1a202c;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    color: #718096;
  }
`;

// Mobile Menu Styles
export const MobileMenuContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffffff;
  z-index: 1000;
  overflow-y: auto;
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const MobileMenuContent = styled.div`
  padding: 1rem 1.5rem;
`;

export const MobileMenuItem = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 0;

  &:last-child {
    border-bottom: none;
  }
`;

export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.75rem 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: #1a202c;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #e53e3e;
  }
`;

export const MobileSubmenu = styled(motion.div)`
  padding-left: 1rem;
  margin-top: 0.5rem;
`;

export const MobileSubmenuItem = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  &:last-child {
    border-bottom: none;
  }

  a {
    color: #4a5568;
    text-decoration: none;
    font-size: 0.9rem;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #e53e3e;
    }
  }
`; 