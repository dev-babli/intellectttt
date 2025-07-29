import React, { useEffect, useRef } from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    title: "Healthcare and life sciences solutions",
    bgColor: "#0199D3",
    textColor: "#ffffffff",
    description:
      "Support patient care, research, and compliance with tailored analytics and tech solutions. Improve clinical workflows, ensure data security, and drive innovation with intelligent tools designed for modern healthcare environments.",
    link: "live chat reports",
    image: "/Healthcare.png",
  },
  {
    id: 2,
    title: "Manufacturing and automotive solutions",
    description:
      "Enhance productivity and streamline operations with real-time analytics and smart automation. Optimize supply chains, reduce downtime, and boost innovation through connected systems built to support industrial growth and evolving automotive technologies at scale.",
    bgColor: "#5a96f8",
    textColor: "#e1f5fe",
    link: "AI chatbots",
    image: "/Manufacturing-and-Automotive.png",
  },
  {
    id: 3,
    title: "Banking and finance solutions",
    description:
      "Drive smarter decisions and secure transactions with powerful analytics and automation. Improve customer experience, ensure compliance, and modernize legacy systems to stay agile in a rapidly evolving financial landscape powered by digital transformation.",
    bgColor: "#0199D3",
    textColor: "#FCE4EC",
    link: "user journey",
    image: "/Banking-and-Finance-new.png",
  },
  {
    id: 4,
    title: "Aerospace and defense solutions",
    description:
      "Boost mission readiness and operational efficiency with advanced analytics and secure systems. Streamline engineering, enhance supply chains, and ensure compliance while supporting innovation across complex aerospace programs and high-stakes defense environments.",
    bgColor: "#5a96f8",
    textColor: "#FCE4EC",
    link: "multi-channel inbox",
    image: "/Aerospace.png",
  },
];

const StackingCardsScroll = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top-=150 top",
          end: "+=3000",
          scrub: true,
          pin: true,
        },
      });

      cardRefs.current.forEach((card, index) => {
        if (index === 0) return;
        tl.fromTo(
          card,
          { yPercent: 150, zIndex: index },
          { yPercent: 0, zIndex: index, duration: 1 },
          "+=0.2"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        height: { xs: "100vh", sm: "100vh", md: "70vh" },
        position: "relative",
        overflow: "hidden",
        // background: "#ffffff",
      }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          ref={(el) => (cardRefs.current[index] = el)}
          style={{
            position: "absolute",
            inset: 0,
            margin: "auto",
            width: "85%",

            backgroundColor: card.bgColor,
            borderRadius: "24px",
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: card.textColor,
          }}
        >
          <Grid
            container
            spacing={4}
            alignItems="center"
            sx={{
              flexDirection: {
                xs: "column-reverse", // stack on small screens
                md: "row", // side-by-side on medium+
              },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Grid item xs={12} md={7}>
              <Typography
                variant="h5"
                component="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  color: "white !important",
                  fontSize: { xs: "1.2rem", md: "2rem" },
                }}
              >
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
                {card.description.split(card.link)[0]}
                <Link
                  href="#"
                  underline="hover"
                  sx={{ color: "white", fontWeight: 500 }}
                >
                  {card.link}
                </Link>
                {card.description.split(card.link)[1]}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                component="img"
                src={card.image}
                alt={card.title}
                sx={{
                  width: "100%",
                  maxWidth: { xs: 200, sm: 250, md: 300 },
                  height: "auto",
                  display: "block",
                  mx: "auto",
                }}
              />
            </Grid>
          </Grid>
        </motion.div>
      ))}
    </Box>
  );
};

export default StackingCardsScroll;
