import React from 'react';
import { Box, Grid, Typography, Avatar, Stack } from '@mui/material';



const countries = [
  { name: 'India', flag: '/flags/india.png' },
  { name: 'USA', flag: 'flags/usa.png' },
  { name: 'Canada', flag: 'flags/canada.png' },
  { name: 'Mexico', flag: 'flags/mexico.png' },
  { name: 'Ireland', flag: 'flags/ireland.png' },
];

const GlobalPresence = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 6 }, py: { xs: 4, sm: 8 }, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" mb={4} color="#3d5ca3">
        GLOBAL PRESENCE
      </Typography>

      <Grid container spacing={4} alignItems="center" justifyContent="center">
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'start',
              justifyContent: 'center',
              gap: 3,
            }}
          >
            <Avatar
              src="/flags/locations-02.png"
              alt="Global Operations"
              sx={{ width: 120, height: 120 }}
            />
            <Stack spacing={2}>
              {countries.map((country, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar src={country.flag} alt={country.name} />
                  <Typography fontWeight="bold">{country.name}</Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={8}>
          <Box sx={{ position: 'relative' }}>
            <img
              src="/flags/locations.png"
              alt="US Map"
              style={{ width: '100%', maxWidth: 700 }}
            />

            {/* Add any markers or text overlays here absolutely if needed */}
          </Box>
        </Grid>
      </Grid>

      <Typography mt={4} color="text.secondary">
        Our Presence Across the US
      </Typography>
    </Box>
  );
};

export default GlobalPresence;
