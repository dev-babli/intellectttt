import React from 'react';
import { Container as MuiContainer } from '@mui/material';

const Container = ({ 
  children, 
  maxWidth = 'lg',
  disableGutters = false,
  sx = {},
  ...props 
}) => {
  return (
    <MuiContainer
      maxWidth={maxWidth}
      disableGutters={disableGutters}
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiContainer>
  );
};

export default Container; 