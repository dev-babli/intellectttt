import React from "react";
import styled from "@emotion/styled";

// Responsive Container Component
const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 1024px) {
    padding: 0 1.25rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
  }

  @media (max-width: 360px) {
    padding: 0 0.5rem;
  }
`;

// Responsive Grid Component
const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

// Responsive Text Component
const ResponsiveText = styled.div`
  font-size: ${(props) => props.size || "1rem"};
  line-height: ${(props) => props.lineHeight || "1.5"};
  color: ${(props) => props.color || "inherit"};

  @media (max-width: 768px) {
    font-size: ${(props) => {
      const size = props.size || "1rem";
      if (size.includes("rem")) {
        const num = parseFloat(size);
        return `${Math.max(num * 0.9, 0.875)}rem`;
      }
      return size;
    }};
  }

  @media (max-width: 480px) {
    font-size: ${(props) => {
      const size = props.size || "1rem";
      if (size.includes("rem")) {
        const num = parseFloat(size);
        return `${Math.max(num * 0.8, 0.75)}rem`;
      }
      return size;
    }};
  }
`;

// Responsive Button Component
const ResponsiveButton = styled.button`
  padding: ${(props) => props.padding || "0.75rem 1.5rem"};
  font-size: ${(props) => props.fontSize || "1rem"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 44px;
  min-width: 44px;

  @media (max-width: 768px) {
    padding: ${(props) => {
      const padding = props.padding || "0.75rem 1.5rem";
      if (padding.includes("rem")) {
        const parts = padding.split(" ");
        const horizontal = parseFloat(parts[1]) * 0.9;
        const vertical = parseFloat(parts[0]) * 0.9;
        return `${vertical}rem ${horizontal}rem`;
      }
      return padding;
    }};
    font-size: ${(props) => {
      const fontSize = props.fontSize || "1rem";
      if (fontSize.includes("rem")) {
        const num = parseFloat(fontSize);
        return `${Math.max(num * 0.9, 0.875)}rem`;
      }
      return fontSize;
    }};
  }

  @media (max-width: 480px) {
    padding: ${(props) => {
      const padding = props.padding || "0.75rem 1.5rem";
      if (padding.includes("rem")) {
        const parts = padding.split(" ");
        const horizontal = parseFloat(parts[1]) * 0.8;
        const vertical = parseFloat(parts[0]) * 0.8;
        return `${vertical}rem ${horizontal}rem`;
      }
      return padding;
    }};
    font-size: ${(props) => {
      const fontSize = props.fontSize || "1rem";
      if (fontSize.includes("rem")) {
        const num = parseFloat(fontSize);
        return `${Math.max(num * 0.8, 0.75)}rem`;
      }
      return fontSize;
    }};
  }
`;

// Responsive Image Component
const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

// Responsive Section Component
const ResponsiveSection = styled.section`
  padding: ${(props) => props.padding || "4rem 0"};

  @media (max-width: 768px) {
    padding: ${(props) => {
      const padding = props.padding || "4rem 0";
      const parts = padding.split(" ");
      const vertical = parseFloat(parts[0]) * 0.75;
      return `${vertical}rem 0`;
    }};
  }

  @media (max-width: 480px) {
    padding: ${(props) => {
      const padding = props.padding || "4rem 0";
      const parts = padding.split(" ");
      const vertical = parseFloat(parts[0]) * 0.5;
      return `${vertical}rem 0`;
    }};
  }
`;

// Responsive Card Component
const ResponsiveCard = styled.div`
  background: ${(props) => props.background || "#ffffff"};
  border-radius: ${(props) => props.borderRadius || "12px"};
  padding: ${(props) => props.padding || "1.5rem"};
  box-shadow: ${(props) => props.boxShadow || "0 4px 6px rgba(0, 0, 0, 0.1)"};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: ${(props) => {
      const padding = props.padding || "1.5rem";
      if (padding.includes("rem")) {
        const num = parseFloat(padding);
        return `${num * 0.9}rem`;
      }
      return padding;
    }};
  }

  @media (max-width: 480px) {
    padding: ${(props) => {
      const padding = props.padding || "1.5rem";
      if (padding.includes("rem")) {
        const num = parseFloat(padding);
        return `${num * 0.8}rem`;
      }
      return padding;
    }};
  }
`;

// Responsive Form Component
const ResponsiveForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

// Responsive Input Component
const ResponsiveInput = styled.input`
  padding: ${(props) => props.padding || "0.75rem 1rem"};
  font-size: ${(props) => props.fontSize || "1rem"};
  border: ${(props) => props.border || "1px solid #d1d5db"};
  border-radius: ${(props) => props.borderRadius || "6px"};
  width: 100%;

  @media (max-width: 768px) {
    padding: ${(props) => {
      const padding = props.padding || "0.75rem 1rem";
      const parts = padding.split(" ");
      const horizontal = parseFloat(parts[1]) * 0.9;
      const vertical = parseFloat(parts[0]) * 0.9;
      return `${vertical}rem ${horizontal}rem`;
    }};
    font-size: ${(props) => {
      const fontSize = props.fontSize || "1rem";
      if (fontSize.includes("rem")) {
        const num = parseFloat(fontSize);
        return `${Math.max(num * 0.9, 0.875)}rem`;
      }
      return fontSize;
    }};
  }

  @media (max-width: 480px) {
    padding: ${(props) => {
      const padding = props.padding || "0.75rem 1rem";
      const parts = padding.split(" ");
      const horizontal = parseFloat(parts[1]) * 0.8;
      const vertical = parseFloat(parts[0]) * 0.8;
      return `${vertical}rem ${horizontal}rem`;
    }};
    font-size: ${(props) => {
      const fontSize = props.fontSize || "1rem";
      if (fontSize.includes("rem")) {
        const num = parseFloat(fontSize);
        return `${Math.max(num * 0.8, 0.75)}rem`;
      }
      return fontSize;
    }};
  }
`;

// Export all responsive components
export {
  ResponsiveContainer,
  ResponsiveGrid,
  ResponsiveText,
  ResponsiveButton,
  ResponsiveImage,
  ResponsiveSection,
  ResponsiveCard,
  ResponsiveForm,
  ResponsiveInput,
};

// Main ResponsiveWrapper component
const ResponsiveWrapper = ({ children, className, ...props }) => {
  return (
    <ResponsiveContainer className={className} {...props}>
      {children}
    </ResponsiveContainer>
  );
};

export default ResponsiveWrapper;
