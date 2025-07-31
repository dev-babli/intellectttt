import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icon1 from "../../images/shape/trangle-shape05.png";
import icon13 from "../../images/icon/sms-white-icon01.svg";
import logo from "../../images/logo/Intellectt-Logo.webp";

import MobileMenu from "../MobileMenu/MobileMenu";
import AnimatedDrawerMenu from "../Drower/AnimatedDrawerMenu";

import {
  Box,
  IconButton,
  Stack,
  Typography,
  Container,
  Button,
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";

const Header5 = (props) => {
  const [mobailActive, setMobailState] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (scrollTop > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    color: "#ffffff",
    borderRadius: "50%",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    width: 32,
    height: 32,
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    },
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(0, 0, 0, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
      }}
    >
      {/* Top Bar - Only visible when not scrolled */}
      {!scrolled && (
        <Box
          sx={{
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <Container maxWidth="xl">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                py: 1,
                px: { xs: 2, md: 0 },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "0.875rem",
                  fontWeight: 400,
                }}
              >
                Shaping the Future of Intelligence - Together
              </Typography>

              <Stack
                direction="row"
                spacing={1}
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                <IconButton
                  component="a"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={iconStyle}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={iconStyle}
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={iconStyle}
                >
                  <FacebookIcon fontSize="small" />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={iconStyle}
                >
                  <YouTubeIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Box>
          </Container>
        </Box>
      )}

      {/* Main Header */}
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: scrolled ? 1 : 2,
            px: { xs: 2, md: 0 },
          }}
        >
          {/* Logo */}
          <Link
            onClick={ClickHandler}
            to="/"
            style={{ textDecoration: "none" }}
          >
            <Box
              component="img"
              src={logo}
              alt="Intellectt"
              sx={{
                height: scrolled ? "40px" : "50px",
                transition: "all 0.3s ease",
                filter: "brightness(1) contrast(1)",
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 4,
            }}
          >
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={ClickHandler}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                }}
              >
                Who We Are
              </Typography>
            </Link>

            <Link
              to="/service"
              style={{ textDecoration: "none" }}
              onClick={ClickHandler}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                }}
              >
                What We Do
              </Typography>
            </Link>

            <Link
              to="/service"
              style={{ textDecoration: "none" }}
              onClick={ClickHandler}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                }}
              >
                Who We Work With
              </Typography>
            </Link>

            <Link
              to="/insights"
              style={{ textDecoration: "none" }}
              onClick={ClickHandler}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                }}
              >
                Insights
              </Typography>
            </Link>

            <Link
              to="/careers"
              style={{ textDecoration: "none" }}
              onClick={ClickHandler}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1rem",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "rgba(255, 255, 255, 0.8)",
                  },
                }}
              >
                Careers
              </Typography>
            </Link>
          </Box>

          {/* CTA Button */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              component={Link}
              to="/contact"
              onClick={ClickHandler}
              variant="contained"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                fontSize: "0.9rem",
                fontWeight: 600,
                padding: "0.75rem 1.5rem",
                borderRadius: "50px",
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.25)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                },
              }}
            >
              Lets Connect
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <Box
            sx={{
              display: { xs: "flex", lg: "none" },
              alignItems: "center",
            }}
          >
            <IconButton
              onClick={() => setMobailState(!mobailActive)}
              sx={{
                color: "#ffffff",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>

      {/* Mobile Menu */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          backdropFilter: "blur(20px)",
          zIndex: 1200,
          transform: mobailActive ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease",
          display: { xs: "block", lg: "none" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            p: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
            }}
          >
            <Link
              onClick={ClickHandler}
              to="/"
              style={{ textDecoration: "none" }}
            >
              <Box
                component="img"
                src={logo}
                alt="Intellectt"
                sx={{ height: "40px" }}
              />
            </Link>
            <IconButton
              onClick={() => setMobailState(!mobailActive)}
              sx={{ color: "#ffffff" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              flex: 1,
            }}
          >
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => setMobailState(false)}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  py: 1,
                }}
              >
                Who We Are
              </Typography>
            </Link>

            <Link
              to="/service"
              style={{ textDecoration: "none" }}
              onClick={() => setMobailState(false)}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  py: 1,
                }}
              >
                What We Do
              </Typography>
            </Link>

            <Link
              to="/service"
              style={{ textDecoration: "none" }}
              onClick={() => setMobailState(false)}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  py: 1,
                }}
              >
                Who We Work With
              </Typography>
            </Link>

            <Link
              to="/insights"
              style={{ textDecoration: "none" }}
              onClick={() => setMobailState(false)}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1.5.rem",
                  fontWeight: 500,
                  py: 1,
                }}
              >
                Insights
              </Typography>
            </Link>

            <Link
              to="/careers"
              style={{ textDecoration: "none" }}
              onClick={() => setMobailState(false)}
            >
              <Typography
                sx={{
                  color: "#ffffff",
                  fontSize: "1.5rem",
                  fontWeight: 500,
                  py: 1,
                }}
              >
                Careers
              </Typography>
            </Link>
          </Box>

          <Button
            component={Link}
            to="/contact"
            onClick={() => setMobailState(false)}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              fontSize: "1rem",
              fontWeight: 600,
              padding: "1rem",
              borderRadius: "50px",
              textTransform: "none",
              mt: 4,
            }}
          >
            Lets Connect
          </Button>
        </Box>
      </Box>

      {/* Animated Drawer Menu */}
      <AnimatedDrawerMenu
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </Box>
  );
};

export default Header5;
