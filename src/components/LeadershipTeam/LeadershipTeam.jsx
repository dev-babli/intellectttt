import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const leaders = [
  {
    name: "Kiran M",
    title: "President",
    image: "/team/kiran.png", // Make sure this path is correct in your public folder
  },
  {
    name: "Kranthi Kiran",
    title: "Founder & CEO",
    image: "/team/kranthi.png",
  },
  {
    name: "Sangeeta Trivedi",
    title: "VP – Human Resources",
    image: "/team/lavanya.png",
  },
  {
    name: "Lavanya Rao",
    title: "Head Sales",
    image: "/team/sangeeta.png",
  },
  {
    name: "Kranthi Kiran",
    title: "Founder & CEO",
    image: "/team/kranthi.png",
  },
  {
    name: "Sangeeta Trivedi",
    title: "VP – Human Resources",
    image: "/team/lavanya.png",
  },
  {
    name: "Lavanya Rao",
    title: "Head Sales",
    image: "/team/sangeeta.png",
  },
];

const LeadershipTeam = () => {
  return (
    <Box sx={{ pt: { xs: 20, sm: 30 }, px: { xs: 2, sm: 4, md: 10 }, textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Leadership Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {leaders.map((leader, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                overflow: 'hidden',
                position: 'relative',
                '&:hover .overlay': {
                  opacity: 1,
                  transform: 'translateY(0%)',
                },
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={leader.image}
                  alt={leader.name}
                  sx={{ objectFit: 'cover' }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '100%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    p: 2,
                    opacity: 0,
                    transform: 'translateY(100%)',
                    transition: 'all 0.4s ease-in-out',
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{ mb: 1, width: '100%' }}
                  >
                    View Profile
                  </Button>
                  <Button
                    variant="outlined"
                    color="inherit"
                    size="small"
                    sx={{ width: '100%' }}
                  >
                    Connect
                  </Button>
                </Box>
              </Box>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {leader.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {leader.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LeadershipTeam;
