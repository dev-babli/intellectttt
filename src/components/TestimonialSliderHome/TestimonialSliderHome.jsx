import React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Stack,
  Rating,
  IconButton,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

// -------  Dummy data  ---------
const slides = [
  {
    headline: "Amazing software services",
    body: `The solutions they’re providing is helping our business run more
            smoothly. We’ve been able to make quick developments with them,
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
    body: `The solutions they’re providing is helping our business run more
            smoothly. We’ve been able to make quick developments with them,
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
    body: `The solutions they’re providing is helping our business run more
            smoothly. We’ve been able to make quick developments with them,
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
    body: `The solutions they’re providing is helping our business run more
            smoothly. We’ve been able to make quick developments with them,
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
    body: `The solutions they’re providing is helping our business run more
            smoothly. We’ve been able to make quick developments with them,
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
    body: `The solutions they’re providing is helping our business run more
            smoothly. We’ve been able to make quick developments with them,
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
  <Stack spacing={0.5} alignItems="center">
    <Avatar
      variant="square"
      src={src}
      alt="rating-site-logo"
      sx={{ width: 40, height: 40, borderRadius: 1 }}
    />
    <Rating value={5} readOnly size="small" />
    <Typography variant="caption" color="text.secondary">
      From {reviews}+ reviews
    </Typography>
  </Stack>
);

const TestimonialSliderHome = () => {
  return (
    <Box
      sx={{
        bgcolor: "#0199D3", // light background strip
        p: { xs: 2, md: 10 },
        borderRadius: 4,
        position: "relative",
        maxWidth: "90%",
        // margin: "100px auto",
        mx: "auto",
        mb: 15,
        
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
        spaceBetween={16}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <Grid container spacing={2}>
              {/* -------- Left card with stats -------- */}
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: 2,
                    p: 4,
                    height: "100%",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, color: "#003087", lineHeight: 1.1 }}
                  >
                    500+
                    <br />
                    customers
                    
                    trust
                    <br />
                    Intellectt
                  </Typography>

                  <Box sx={{ mt: 6, display: "flex", gap: 4 }}>
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

              {/* -------- Right testimonial card -------- */}
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: 2,
                    p: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: "#0056ff",
                        mb: 2,
                        lineHeight: 1.3,
                      }}
                    >
                      “{slide.headline}”
                    </Typography>

                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 4 }}
                    >
                      {slide.body}
                    </Typography>
                  </Box>

                  {/*  Avatar + meta row  */}
                  <Grid container alignItems="center">
                    <Grid item xs={12} md="auto">
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar
                          src={slide.customer.avatar}
                          alt={slide.customer.name}
                          sx={{ width: 64, height: 64 }}
                        />
                        <Box>
                          <Typography fontWeight={700}>
                            {slide.customer.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 0.5 }}
                          >
                            {slide.customer.title}
                          </Typography>
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                          >
                            <Avatar
                              src={slide.customer.flag}
                              alt=""
                              variant="square"
                              sx={{ width: 20, height: 15 }}
                            />
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {slide.customer.city}
                            </Typography>
                          </Stack>
                        </Box>
                      </Stack>
                    </Grid>

                    {/* Company logo on the right */}
                    {/* <Grid
                      item
                      xs={12}
                      md
                      sx={{
                        textAlign: { xs: "left", md: "right" },
                        mt: { xs: 2, md: 0 },
                      }}
                    >
                      <Box
                        component="img"
                        src={slide.companyLogo}
                        alt="company-logo"
                        sx={{ height: 36, maxWidth: 120 }}
                      />
                    </Grid> */}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ---------- custom nav buttons (absolute) -------- */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: "absolute",
          bottom: 24,
          right: 32,
          zIndex: 2,
        }}
      >
        <IconButton className="swiperPrevBtn" sx={{ bgcolor: "#fff" }}>
          <ChevronLeftRoundedIcon />
        </IconButton>
        <IconButton className="swiperNextBtn" sx={{ bgcolor: "#fff" }}>
          <ChevronRightRoundedIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default TestimonialSliderHome;
