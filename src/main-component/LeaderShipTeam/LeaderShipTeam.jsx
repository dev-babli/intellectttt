import React, { Fragment } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Container,
} from "@mui/material";
import {
  HowToVote,
  Event,
  Handshake,
  AccountBalance,
  TrendingUp,
  HealthAndSafety,
  Groups,
  ArrowForward,
  Star,
} from "@mui/icons-material";
import Teams from "../../api/team";
import { Link } from "react-router-dom";

const LeaderShipTeam = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // Modern color palette
  const colors = {
    primary: "#2563eb",
    secondary: "#dc2626",
    accent: "#f59e0b",
    success: "#10b981",
    dark: "#1e293b",
    light: "#f8fafc",
    white: "#ffffff",
    gray: "#64748b",
  };

  const interactiveFeatures = [
    {
      icon: <HowToVote sx={{ fontSize: 40, color: colors.primary }} />,
      title: "Join Our Mission",
      description:
        "Make your voice heard by joining our mission to transform technology and innovation.",
    },
    {
      icon: <Event sx={{ fontSize: 40, color: colors.primary }} />,
      title: "Attend Events",
      description:
        "Engage with our leadership team and be part of the positive transformation movement.",
    },
    {
      icon: <Handshake sx={{ fontSize: 40, color: colors.primary }} />,
      title: "Get Involved",
      description:
        "Make a real impact by getting involved in our company's growth and development.",
    },
    {
      icon: <AccountBalance sx={{ fontSize: 40, color: colors.primary }} />,
      title: "Partner With Us",
      description:
        "Support our mission and help us make a difference in the technology industry.",
    },
  ];

  const keyPillars = [
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: colors.success }} />,
      title: "Innovation",
      description:
        "We are dedicated to promoting sustainable growth, supporting emerging technologies, and creating innovative solutions.",
    },
    {
      icon: <HealthAndSafety sx={{ fontSize: 40, color: colors.accent }} />,
      title: "Excellence",
      description:
        "We envision a workplace that is accessible, inclusive, and of the highest quality for every team member.",
    },
    {
      icon: <Groups sx={{ fontSize: 40, color: colors.secondary }} />,
      title: "Collaboration",
      description:
        "Our mission is to build a culture that is founded on teamwork, respect, and mutual growth for all.",
    },
  ];

  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        {/* Hero Section */}
        <Box
          sx={{
            position: "relative",
            minHeight: "100vh",
            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.dark} 100%)`,
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {/* Background Pattern */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "url(/images/bg/pattern.png)",
              opacity: 0.1,
              zIndex: 1,
            }}
          />

          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ color: colors.white }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      opacity: 0.9,
                      textTransform: "uppercase",
                      letterSpacing: 2,
                    }}
                  >
                    LEADERSHIP TEAM
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      mb: 3,
                      lineHeight: 1.2,
                      fontSize: { xs: "2.5rem", md: "3.5rem" },
                    }}
                  >
                    IT'S TIME FOR
                    <br />
                    <span style={{ color: colors.accent }}>INNOVATION</span>
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      mb: 4,
                      opacity: 0.9,
                      lineHeight: 1.3,
                    }}
                  >
                    Together We Can Make Technology Great Again
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      fontSize: "1.1rem",
                      opacity: 0.8,
                      lineHeight: 1.6,
                    }}
                  >
                    We are a dedicated group of individuals who are passionate
                    about revitalizing our industry and ensuring a prosperous
                    future for all technology professionals.
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background: colors.accent,
                      color: colors.white,
                      px: 4,
                      py: 2,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      "&:hover": {
                        background: colors.accent,
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 25px rgba(245, 158, 11, 0.3)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    SEE OUR VISION
                    <ArrowForward sx={{ ml: 1 }} />
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src="/team/kranthi.png"
                    alt="Leadership"
                    sx={{
                      width: { xs: 300, md: 400 },
                      height: { xs: 300, md: 400 },
                      borderRadius: "50%",
                      border: `8px solid ${colors.white}`,
                      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Interactive Features Section */}
        <Box sx={{ py: 8, background: colors.light }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              {interactiveFeatures.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      textAlign: "center",
                      p: 3,
                      background: index === 2 ? colors.primary : colors.white,
                      color: index === 2 ? colors.white : colors.dark,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: index === 2 ? colors.white : colors.dark,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        opacity: index === 2 ? 0.9 : 0.7,
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* About Section */}
        <Box sx={{ py: 8 }}>
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative" }}>
                  <Box
                    component="img"
                    src="/team/kiran.png"
                    alt="About Leadership"
                    sx={{
                      width: "100%",
                      maxWidth: 400,
                      borderRadius: 2,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -20,
                      right: -20,
                      background: colors.primary,
                      color: colors.white,
                      p: 3,
                      borderRadius: 2,
                      maxWidth: 250,
                    }}
                  >
                    <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
                      "Their efforts to expand innovation and drive growth have
                      had a positive impact on countless individuals and
                      organizations. I trust them to continue fighting for a
                      technology landscape that works for everyone."
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      MINISTER OF DEFENCE
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.8 }}>
                      H. Ir. Cameron Williamson
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: colors.primary,
                      fontWeight: 600,
                      mb: 2,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    ABOUT INTELLECTT
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      mb: 3,
                      color: colors.dark,
                      lineHeight: 1.2,
                    }}
                  >
                    Get to Know Closer With Intellectt
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      fontSize: "1.1rem",
                      lineHeight: 1.7,
                      color: colors.gray,
                    }}
                  >
                    We firmly believe that when we come together, we can
                    overcome any challenge and achieve remarkable things. Our
                    company stands for unity, innovation, and excellence in
                    everything we do.
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      background: colors.primary,
                      color: colors.white,
                      px: 4,
                      py: 2,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      "&:hover": {
                        background: colors.primary,
                        transform: "translateY(-2px)",
                        boxShadow: "0 10px 25px rgba(37, 99, 235, 0.3)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    SEE THE ISSUES
                    <ArrowForward sx={{ ml: 1 }} />
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Leadership Team Section */}
        <Box sx={{ py: 8, background: colors.light }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h6"
                sx={{
                  color: colors.primary,
                  fontWeight: 600,
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                OUR LEADERSHIP
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: colors.dark,
                  lineHeight: 1.2,
                }}
              >
                Meet Our Visionary Leaders
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: 600,
                  mx: "auto",
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  color: colors.gray,
                }}
              >
                Our mission is to create a better future for our industry and
                its professionals. We are driven by a shared vision of progress,
                equality, and prosperity for all.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {Teams.slice(0, 6).map((leader, index) => (
                <Grid item xs={12} sm={6} md={4} key={leader.Id}>
                  <Card
                    sx={{
                      height: "100%",
                      textAlign: "center",
                      p: 3,
                      background: colors.white,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Avatar
                      src={leader.tImg}
                      alt={leader.name}
                      sx={{
                        width: 120,
                        height: 120,
                        mx: "auto",
                        mb: 3,
                        border: `4px solid ${colors.primary}`,
                        boxShadow: "0 8px 25px rgba(37, 99, 235, 0.2)",
                      }}
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: colors.dark,
                      }}
                    >
                      {leader.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: colors.primary,
                        fontWeight: 600,
                        mb: 2,
                      }}
                    >
                      {leader.title}
                    </Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "center", gap: 1 }}
                    >
                      <Star sx={{ color: colors.accent, fontSize: 20 }} />
                      <Star sx={{ color: colors.accent, fontSize: 20 }} />
                      <Star sx={{ color: colors.accent, fontSize: 20 }} />
                      <Star sx={{ color: colors.accent, fontSize: 20 }} />
                      <Star sx={{ color: colors.accent, fontSize: 20 }} />
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Mission & Vision Section */}
        <Box sx={{ py: 8 }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography
                variant="h6"
                sx={{
                  color: colors.primary,
                  fontWeight: 600,
                  mb: 2,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                OUR PRIORITY
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  color: colors.dark,
                  lineHeight: 1.2,
                }}
              >
                Our Mission & Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: 600,
                  mx: "auto",
                  fontSize: "1.1rem",
                  lineHeight: 1.7,
                  color: colors.gray,
                }}
              >
                Our mission is to create a better future for our industry and
                its professionals. We are driven by a shared vision of progress,
                equality, and prosperity for all.
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {keyPillars.map((pillar, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      textAlign: "center",
                      p: 4,
                      background: colors.white,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 3 }}>{pillar.icon}</Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: colors.dark,
                      }}
                    >
                      {pillar.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.7,
                        color: colors.gray,
                      }}
                    >
                      {pillar.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </div>
    </Fragment>
  );
};

export default LeaderShipTeam;
