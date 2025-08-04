import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const MotionBox = motion(Box);

const ProfileSection = ({ img, reverse, name, title, desc1, desc2 }) => {
  const overlayRef = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    gsap.set(overlayRef.current, { y: '100%' });
  }, []);

  const handleHover = (direction) => {
    gsap.to(overlayRef.current, {
      y: direction === 'up' ? 0 : '100%',
      duration: 0.5,
      ease: direction === 'up' ? 'power3.out' : 'power3.in',
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: reverse ? 'row-reverse' : 'row' },
        width: '100%',
        maxWidth: 1000,
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
        mx: 'auto',
        bgcolor: '#fff',
        py: 10,
        px: 8,
        mt: 4,
       
      }}
    >
      {/* Image with overlay */}
      <Box
        sx={{
          position: 'relative',
          width: { xs: '100%', sm: '40%', md: '30%' },
          overflow: 'hidden',
        }}
        onMouseEnter={() => handleHover('up')}
        onMouseLeave={() => handleHover('down')}
      >
        <Box
          component="img"
          src={img}
          alt={name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <MotionBox
          ref={overlayRef}
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            color: '#fff',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            zIndex: 10,
          }}
        >
          <Button variant="contained" fullWidth color="primary">
            View Profile
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{ color: 'white', borderColor: 'white' }}
          >
            Message
          </Button>
        </MotionBox>
      </Box>

      {/* Content */}
      <Box
        sx={{
          p: 3,
          width: { xs: '100%', sm: '60%' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="primary">
          {name}
        </Typography>
        <Typography variant="subtitle1" mb={2}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {desc1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc2}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileSection;
