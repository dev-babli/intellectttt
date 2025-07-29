// src/components/HeroSlider.jsxx
import React from "react";
import Slider from "react-slick";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HighlightWord = ({ text, highlight, highlightStyle = {} }) => {
  const lines = text.split("\n"); // handle \n line breaks

  return (
    <>
      {lines.map((line, lineIndex) => {
        const parts = line.split(new RegExp(`(${highlight})`, "gi"));
        return (
          <React.Fragment key={lineIndex}>
            {parts.map((part, i) =>
              part.toLowerCase() === highlight.toLowerCase() ? (
                <Box
                  key={i}
                  component="span"
                  sx={{
                    color: "#ffffffff",
                    fontWeight: "bold",
                    // fontStyle: "italic",
                    ...highlightStyle,
                  }}
                >
                  {part}
                </Box>
              ) : (
                <Box key={i} component="span">
                  {part}
                </Box>
              )
            )}
            {lineIndex !== lines.length - 1 && <br />}
          </React.Fragment>
        );
      })}
    </>
  );
};

const sliderData = [
  {
    id: 1,
    title:
      "Grow with intelligent AI agents built to automate, \noptimize, and elevate your business.",
    highlight: "Unleash the Power \nof Agentic AI",
    highlightWord: "Agentic AI",
    image: "/sli-1.webp",
  },
  {
    id: 2,
    title:
      "Powerful generative intelligence designed \nto transform ideas into reality",
    highlight: "Generative AI\nThat Redefines Possibility",
    highlightWord: "Generative AI",
    image: "/slider-new2.webp",
  },
  {
    id: 3,
    title:
      "High-performance cloud and application solutions \ntailored to your business needs",
    highlight: "Scalable Cloud\n& Application Services",
    highlightWord: "Scalable Cloud",
    image: "/slider-new3.webp",
  },
];
const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {sliderData.map((slide) => (
        <Box
          key={slide.id}
          sx={{
            position: "relative",
            height: "calc(100vh - 100px)",
            // mt: { xs: "190px", md: "170px" },
            height: "98vh !important",
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Yellow overlay only on large screens */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: { xs: "100%", md: "60%" },
              backgroundColor: "transparent",
              clipPath: {
                xs: "none",
                md: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
              },
              zIndex: 1,
            }}
          />

          {/* Content wrapper */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              textAlign: { xs: "center", md: "left" },
              px: { xs: 2, sm: 4 },
            }}
          >
            <Box
              sx={{
                pl: { xs: 0, md: 8 },
                maxWidth: { xs: "100%", sm: "90%", md: 500, lg: 800 },
                color: "#fff",
              }}
            >
              {/* Highlight Heading */}
              <Typography
                variant="h3"
                fontWeight={700}
                sx={{
                  mt: 1,
                  mb: 2,
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1.5rem",
                    md: "1.7rem",
                    lg: "2.1rem",
                  },
                  lineHeight: 1.2,
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2.7rem" },
                  color: "#ffffff!important",
                }}
              >
                <HighlightWord
                  text={slide.highlight}
                  highlight={slide.highlightWord}
                />
              </Typography>

              {/* Title */}
              {slide.title.split("\n").map((line, index) => (
                <Typography
                  key={index}
                  variant="h5"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                    lineHeight: 1.5,
                    color: "#ffffff!important",
                  }}
                >
                  {line}
                </Typography>
              ))}

              {/* Button */}
              {/* <Button
                variant="contained"
                sx={{
                  mt: 4,
                  backgroundColor: "#ffffffff",
                  color: "#000",
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1, sm: 1.5 },
                  fontWeight: 600,
                  borderRadius: "30px",
                  textTransform: "none",
                  alignSelf: { xs: "center", md: "flex-start" },
                  "&:hover": {
                    backgroundColor: "#ffffffff",
                  },
                }}
                endIcon={<ArrowForwardIcon />}
              >
                LEARN MORE
              </Button> */}
            </Box>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default HeroSlider;
