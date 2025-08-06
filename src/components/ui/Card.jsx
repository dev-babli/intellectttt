import React from 'react';
import { Card as MuiCard, CardContent, CardMedia, CardActions } from '@mui/material';
import { BRAND_COLORS } from '../../constants';

const Card = ({ 
  children, 
  media, 
  actions,
  elevation = 1,
  sx = {},
  ...props 
}) => {
  const getCardStyles = () => {
    return {
      borderRadius: 3,
      overflow: 'hidden',
      boxShadow: `0 ${elevation * 2}px ${elevation * 8}px rgba(0,0,0,0.1)`,
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: `0 ${elevation * 4}px ${elevation * 12}px rgba(0,0,0,0.15)`,
      },
      ...sx,
    };
  };

  return (
    <MuiCard sx={getCardStyles()} {...props}>
      {media && (
        <CardMedia
          component="img"
          height="200"
          image={media.src}
          alt={media.alt || ''}
        />
      )}
      <CardContent sx={{ p: 3 }}>
        {children}
      </CardContent>
      {actions && (
        <CardActions sx={{ p: 3, pt: 0 }}>
          {actions}
        </CardActions>
      )}
    </MuiCard>
  );
};

export default Card; 