// src/components/TestimonialSlider.jsxx
import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const testimonials = [
  {
    id: 1,
    name: 'Sofia Vergara',
    image: '/assets/user.jpg',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna aliqua.',
    stars: 5,
  },
  {
    id: 2,
    name: 'Sofia Vergara',
    image: '/assets/user.jpg',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna aliqua.',
    stars: 5,
  },
  {
    id: 3,
    name: 'Sofia Vergara',
    image: '/assets/user.jpg',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna aliqua.',
    stars: 5,
  },
  {
    id: 4,
    name: 'Sofia Vergara',
    image: '/assets/user.jpg',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna aliqua.',
    stars: 5,
  },
  {
    id: 5,
    name: 'Sofia Vergara',
    image: '/assets/user.jpg',
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod magna aliqua.',
    stars: 5,
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3, // 🟢 SHOW 3 CARDS PER SLIDE
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ py: 10, px: 4, textAlign: 'center', maxWidth: 1385, margin: '0 auto' }}>
      <Typography
        variant="body2"
        sx={{
          display: 'inline-block',
          backgroundColor: '#f5f0e9',
          px: 2,
          py: 0.5,
          borderRadius: '20px',
          fontWeight: 600,
          mb: 1,
        }}
      >
        🗣 Real feedback
      </Typography>

      <Typography variant="h4" fontWeight={700} mb={6}>
        The customer experience
      </Typography>

      <Slider {...settings}>
        {testimonials.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f77c82',
              borderRadius: '10px',
              maxWidth: 400,
              margin: 'auto',
              p: 3,
              boxShadow: 3,
              textAlign: 'left',
              mx: 2, // spacing between cards
            }}
          >
            {/* Half-circle image */}
            <Box
              sx={{
                width: 120,
                height: 120,
                overflow: 'hidden',
                clipPath: 'ellipse(50% 100% at 50% 50%)',
                flexShrink: 0,
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </Box>

            {/* Text */}
            <Box sx={{ pl: 2 }}>
              <Typography sx={{ mb: 1 }}>{item.feedback}</Typography>
              <Typography fontWeight={700}>{item.name}</Typography>
              <Box mt={0.5}>
                {[...Array(item.stars)].map((_, i) => (
                  <StarIcon key={i} fontSize="small" sx={{ color: '#000' }} />
                ))}
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default TestimonialSlider;
