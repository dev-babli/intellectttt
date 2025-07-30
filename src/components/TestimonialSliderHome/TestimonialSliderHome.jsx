import React, { useEffect, useRef } from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Stack,
  Rating,
  IconButton,
  Container,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// -------  Dummy data  ---------
const slides = [
  {
    headline: "Amazing software services",
    body: `The solutions they're providing is helping our business run more
            smoothly. We've been able to make quick developments with them,
            meeting our product vision within the timeline we set up.
            Listen to them because they can give strong advice about how
            to build good products.`,
    customer: {
      name: "Maverick Phoenix",
      title: "Board Member, UNIQА",
      city: "Seattle, Ukraine",
      flag: "https://flagcdn.com/w20/ua.png",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Uniqa_Logo.svg",
  },
  {
    headline: "Amazing software services",
    body: `The solutions they're providing is helping our business run more
            smoothly. We've been able to make quick developments with them,
            meeting our product vision within the timeline we set up.
            Listen to them because they can give strong advice about how
            to build good products.`,
    customer: {
      name: "Maverick Phoenix",
      title: "Board Member, UNIQА",
      city: "Seattle, Ukraine",
      flag: "https://flagcdn.com/w20/ua.png",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Uniqa_Logo.svg",
  },
  {
    headline: "Amazing software services",
    body: `The solutions they're providing is helping our business run more
            smoothly. We've been able to make quick developments with them,
            meeting our product vision within the timeline we set up.
            Listen to them because they can give strong advice about how
            to build good products.`,
    customer: {
      name: "Maverick Phoenix",
      title: "Board Member, UNIQА",
      city: "Seattle, Ukraine",
      flag: "https://flagcdn.com/w20/ua.png",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Uniqa_Logo.svg",
  },
  {
    headline: "Amazing software services",
    body: `The solutions they're providing is helping our business run more
            smoothly. We've been able to make quick developments with them,
            meeting our product vision within the timeline we set up.
            Listen to them because they can give strong advice about how
            to build good products.`,
    customer: {
      name: "Maverick Phoenix",
      title: "Board Member, UNIQА",
      city: "Seattle, Ukraine",
      flag: "https://flagcdn.com/w20/ua.png",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Uniqa_Logo.svg",
  },
  {
    headline: "Amazing software services",
    body: `The solutions they're providing is helping our business run more
            smoothly. We've been able to make quick developments with them,
            meeting our product vision within the timeline we set up.
            Listen to them because they can give strong advice about how
            to build good products.`,
    customer: {
      name: "Maverick Phoenix",
      title: "Board Member, UNIQА",
      city: "Seattle, Ukraine",
      flag: "https://flagcdn.com/w20/ua.png",
      avatar: "https://i.pravatar.cc/80?img=12",
    },
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Uniqa_Logo.svg",
  },
];

const RatingBlock = ({ src, reviews }) => (
  <Stack direction="row" spacing={1} alignItems="center">
    <img
      src={src}
      alt="Rating Platform"
      style={{
        height: "20px",
        width: "auto",
        filter: "grayscale(100%)",
        opacity: 0.7,
      }}
    />
    <Typography
      variant="caption"
      sx={{
        color: "#6b7280",
        fontSize: "0.75rem",
        fontWeight: 500,
      }}
    >
      {reviews} reviews
    </Typography>
  </Stack>
);

const TestimonialSliderHome = () => {
  const componentRef = useRef(null);

  useEffect(() => {
    if (!componentRef.current) return;

    // Minimal component animation
    gsap.fromTo(
      componentRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Simple card animations
    const cards = componentRef.current?.querySelectorAll(".MuiGrid-item");
    if (cards) {
      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3,
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Box
      ref={componentRef}
      sx={{
        backgroundColor: "#f8fafc",
        padding: { xs: "4rem 0", md: "6rem 0" },
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", marginBottom: "4rem" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              color: "#1f2937",
              marginBottom: "1.5rem",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >
            What Our Clients Say
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              fontWeight: 400,
              color: "#6b7280",
              maxWidth: "800px",
              mx: "auto",
              lineHeight: 1.6,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Discover how we've helped organizations transform their digital
            landscape
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "20px",
            padding: { xs: "2rem", md: "3rem" },
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            border: "1px solid #f3f4f6",
          }}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".swiperPrevBtn",
              nextEl: ".swiperNextBtn",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <Grid container spacing={3}>
                  {/* Left Stats Card */}
                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        backgroundColor: "#f8fafc",
                        borderRadius: "16px",
                        padding: "2rem",
                        height: "100%",
                        border: "1px solid #e5e7eb",
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 700,
                          color: "#1f2937",
                          lineHeight: 1.1,
                          marginBottom: "2rem",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        500+
                        <br />
                        customers trust
                        <br />
                        Intellectt
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          flexDirection: "column",
                        }}
                      >
                        <RatingBlock
                          src="https://cdn.worldvectorlogo.com/logos/clutch.svg"
                          reviews={200}
                        />
                        <RatingBlock
                          src="https://cdn.worldvectorlogo.com/logos/g2-crowd-logo.svg"
                          reviews={300}
                        />
                      </Box>
                    </Box>
                  </Grid>

                  {/* Right Testimonial Card */}
                  <Grid item xs={12} md={8}>
                    <Box
                      sx={{
                        backgroundColor: "#ffffff",
                        borderRadius: "16px",
                        padding: "2rem",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        border: "1px solid #e5e7eb",
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            color: "#0199D3",
                            marginBottom: "1.5rem",
                            lineHeight: 1.3,
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          "{slide.headline}"
                        </Typography>

                        <Typography
                          variant="body1"
                          sx={{
                            color: "#6b7280",
                            marginBottom: "2rem",
                            fontSize: "1.1rem",
                            lineHeight: 1.7,
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {slide.body}
                        </Typography>
                      </Box>

                      {/* Customer Info */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          paddingTop: "1rem",
                          borderTop: "1px solid #e5e7eb",
                        }}
                      >
                        <Avatar
                          src={slide.customer.avatar}
                          sx={{
                            width: 56,
                            height: 56,
                            border: "3px solid #f3f4f6",
                          }}
                        />
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 600,
                              color: "#1f2937",
                              marginBottom: "0.25rem",
                              fontFamily: "'Inter', sans-serif",
                            }}
                          >
                            {slide.customer.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#6b7280",
                              fontFamily: "'Inter', sans-serif",
                            }}
                          >
                            {slide.customer.title}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            color: "#6b7280",
                          }}
                        >
                          <img
                            src={slide.customer.flag}
                            alt="Country Flag"
                            style={{ width: "20px", height: "auto" }}
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#6b7280",
                              fontFamily: "'Inter', sans-serif",
                            }}
                          >
                            {slide.customer.city}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginTop: "2rem",
            }}
          >
            <IconButton
              className="swiperPrevBtn"
              sx={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                "&:hover": {
                  backgroundColor: "#f8fafc",
                },
              }}
            >
              <ChevronLeftRoundedIcon />
            </IconButton>
            <IconButton
              className="swiperNextBtn"
              sx={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                "&:hover": {
                  backgroundColor: "#f8fafc",
                },
              }}
            >
              <ChevronRightRoundedIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSliderHome;
