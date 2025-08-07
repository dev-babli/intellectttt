import React, { useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const MotionBox = motion(Box);

const TeamIntroSection = ({
  imageSrc = "/t2.jpg",
  imageAlt = "Profile",
  testimonialText = "Their efforts to expand innovation and drive growth have had a positive impact on countless individuals and organizations. I trust them to continue fighting for a technology landscape that works for everyone.",
  testimonialName = "H. Ir. Cameron Williamson",
  testimonialTitle = "MINISTER OF DEFENCE",
  sectionOverline = "ABOUT US",
  sectionTitle = "Get to Know Closer\nWith Intellectt",
  sectionDescription = "We firmly believe that when we come together, we can overcome any challenge and achieve remarkable things. Our company stands for unity, innovation, and excellence in everything we do.",
  buttonText = "SEE THE ISSUES →",
  onButtonClick,
  reversed = false, // reverse layout if true
  textAlign = "left", // text alignment: "left", "center", "right"
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const TestimonialCard = (
    <MotionBox
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      sx={{
        backgroundColor: "#2563eb",
        color: "#fff",
        p: 2,
        borderRadius: "8px",
        width: { xs: "80%", md: 200 },
        // maxWidth: "100%",
        boxShadow: 4,
        mt: { xs: 1, md: 0 },
        mx: "auto",
      }}
    >
      <Typography fontSize={13} lineHeight={1.6}>
        "{testimonialText}"
      </Typography>
      <Typography mt={2} fontWeight={700} fontSize={13}>
        {testimonialTitle}
      </Typography>
      <Typography fontSize={12}>{testimonialName}</Typography>
    </MotionBox>
  );

  return (
    <Box
      ref={sectionRef}
      display="flex"
      flexDirection={{ xs: "column", md: reversed ? "row-reverse" : "row" }}
      alignItems="center"
      justifyContent="center"
      px={4}
      py={10}
      sx={{ backgroundColor: "#fff" }}
    >
      {/* LEFT: Image with card overlay */}
      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "35%" },
          mb: { xs: 4, md: 0 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={imageSrc}
          alt={imageAlt}
          sx={{
            width: "100%",
            maxWidth: 320,
            borderRadius: "12px",
            boxShadow: 3,
          }}
        />

        {/* Blue card on side (Only for md and up) */}
        <Box
          sx={{
            position: "absolute",
            top: "70%",
            [reversed ? "left" : "right"]: "-50px",
            transform: "translateY(-50%)",
            display: { xs: "none", md: "block" },
          }}
        >
          {TestimonialCard}
        </Box>
      </Box>

      {/* Blue card for small screens under image */}
      <Box sx={{ display: { xs: "block", md: "none" }, width: "100%" }}>
        {TestimonialCard}
      </Box>

      {/* RIGHT: Content section */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          pl: reversed ? 0 : { md: 10 },
          pr: reversed ? { md: 10 } : 0,
          textAlign: { xs: "center", md: textAlign },
        }}
      >
        <Typography
          variant="overline"
          sx={{ letterSpacing: 1.5, color: "#333", fontWeight: 500 }}
        >
          {sectionOverline}
        </Typography>

        <Typography
          variant="h4"
          fontWeight={700}
          lineHeight={1.3}
          mb={2}
          sx={{ fontSize: { xs: 28, md: 38 }, whiteSpace: "pre-line" }}
        >
          {sectionTitle}
        </Typography>

        <Typography
          variant="body1"
          mb={4}
          sx={{ color: "#555", fontSize: 16, maxWidth: 480 }}
        >
          {sectionDescription}
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#2563eb",
            fontWeight: 600,
            px: 4,
            py: 1.5,
            borderRadius: "8px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#1d4ed8",
            },
          }}
          onClick={onButtonClick}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default TeamIntroSection;
