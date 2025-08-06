import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { BRAND_COLORS } from '../../constants';

const Button = ({ 
  children, 
  variant = 'contained', 
  size = 'medium', 
  color = 'primary',
  fullWidth = false,
  disabled = false,
  onClick,
  sx = {},
  ...props 
}) => {
  const getButtonStyles = () => {
    const baseStyles = {
      borderRadius: 3,
      fontWeight: 600,
      textTransform: 'none',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
      },
    };

    const variantStyles = {
      contained: {
        background: BRAND_COLORS.primary,
        color: BRAND_COLORS.white,
        '&:hover': {
          background: BRAND_COLORS.accent,
          transform: 'translateY(-2px)',
        },
      },
      outlined: {
        borderColor: BRAND_COLORS.primary,
        color: BRAND_COLORS.primary,
        '&:hover': {
          background: BRAND_COLORS.primary,
          color: BRAND_COLORS.white,
        },
      },
      text: {
        color: BRAND_COLORS.primary,
        '&:hover': {
          background: 'rgba(30, 64, 175, 0.1)',
        },
      },
    };

    return {
      ...baseStyles,
      ...variantStyles[variant],
      ...sx,
    };
  };

  return (
    <MuiButton
      variant={variant}
      size={size}
      color={color}
      fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      sx={getButtonStyles()}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button; 