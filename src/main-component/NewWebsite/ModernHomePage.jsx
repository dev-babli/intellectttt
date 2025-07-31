import React, { Fragment } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@emotion/styled";

// Color palette constants
const COLORS = {
  primary: "#003049",
  secondary: "#FDF0D5",
  accent: "#C1121F",
  tertiary: "#669BBC",
  dark: "#001E2B",
  cream: "#FDF0D5",
  navy: "#003049",
};

// Typography constants - Updated to match specifications
const TYPOGRAPHY = {
  h1: {
    fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "4rem" }, // 64px equivalent
    fontWeight: 700,
    lineHeight: 1.125, // 72px line height
    letterSpacing: "0.2px",
  },
  h2: {
    fontSize: { xs: "2rem", sm: "2.5rem", md: "2.5rem", lg: "2.5rem" }, // 40px equivalent
    fontWeight: 700,
    lineHeight: 1.2, // 48px line height
    letterSpacing: "0.2px",
  },
  h3: {
    fontSize: { xs: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "1.5rem" }, // 24px equivalent
    fontWeight: 600,
    lineHeight: 1.33, // 32px line height
    letterSpacing: "0.1px",
  },
  bodyLarge: {
    fontSize: { xs: "1rem", sm: "1.125rem", md: "1.125rem", lg: "1.125rem" }, // 18px equivalent
    fontWeight: 500,
    lineHeight: 1.56, // 28px line height
    letterSpacing: "0.1px",
  },
  bodySmall: {
    fontSize: {
      xs: "0.875rem",
      sm: "0.875rem",
      md: "0.875rem",
      lg: "0.875rem",
    }, // 14px equivalent
    fontWeight: 400,
    lineHeight: 1.57, // 22px line height
    letterSpacing: "0.1px",
  },
  button: {
    fontSize: "1rem", // 16px
    fontWeight: 600,
    lineHeight: 1.5, // 24px line height
    letterSpacing: "0.2px",
    textTransform: "uppercase",
  },
};

// Professional SVG Icons
const Icons = {
  ai: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#F0F4FF" />
      <path
        d="M24 12C17.373 12 12 17.373 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24C36 17.373 30.627 12 24 12ZM24 34C18.486 34 14 29.514 14 24C14 18.486 18.486 14 24 14C29.514 14 34 18.486 34 24C34 29.514 29.514 34 24 34Z"
        fill="#667EEA"
      />
      <path
        d="M24 16C19.589 16 16 19.589 16 24C16 28.411 19.589 32 24 32C28.411 32 32 28.411 32 24C32 19.589 28.411 16 24 16ZM24 30C20.691 30 18 27.309 18 24C18 20.691 20.691 18 24 18C27.309 18 30 20.691 30 24C30 27.309 27.309 30 24 30Z"
        fill="#667EEA"
      />
      <circle cx="24" cy="24" r="2" fill="#667EEA" />
    </svg>
  ),
  cloud: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#F0F4FF" />
      <path
        d="M32 20C31.469 20 30.961 20.211 30.586 20.586C30.211 20.961 30 21.469 30 22C30 22.531 30.211 23.039 30.586 23.414C30.961 23.789 31.469 24 32 24C32.531 24 33.039 23.789 33.414 23.414C33.789 23.039 34 22.531 34 22C34 21.469 33.789 20.961 33.414 20.586C33.039 20.211 32.531 20 32 20ZM24 20C23.469 20 22.961 20.211 22.586 20.586C22.211 20.961 22 21.469 22 22C22 22.531 22.211 23.039 22.586 23.414C22.961 23.789 23.469 24 24 24C24.531 24 25.039 23.789 25.414 23.414C25.789 23.039 26 22.531 26 22C26 21.469 25.789 20.961 25.414 20.586C25.039 20.211 24.531 20 24 20ZM16 20C15.469 20 14.961 20.211 14.586 20.586C14.211 20.961 14 21.469 14 22C14 22.531 14.211 23.039 14.586 23.414C14.961 23.789 15.469 24 16 24C16.531 24 17.039 23.789 17.414 23.414C17.789 23.039 18 22.531 18 22C18 21.469 17.789 20.961 17.414 20.586C17.039 20.211 16.531 20 16 20Z"
        fill="#667EEA"
      />
      <path
        d="M36 28C35.469 28 34.961 28.211 34.586 28.586C34.211 28.961 34 29.469 34 30C34 30.531 34.211 31.039 34.586 31.414C34.961 31.789 35.469 32 36 32C36.531 32 37.039 31.789 37.414 31.414C37.789 31.039 38 30.531 38 30C38 29.469 37.789 28.961 37.414 28.586C37.039 28.211 36.531 28 36 28ZM28 28C27.469 28 26.961 28.211 26.586 28.586C26.211 28.961 26 29.469 26 30C26 30.531 26.211 31.039 26.586 31.414C26.961 31.789 27.469 32 28 32C28.531 32 29.039 31.789 29.414 31.414C29.789 31.039 30 30.531 30 30C30 29.469 29.789 28.961 29.414 28.586C29.039 28.211 28.531 28 28 28ZM20 28C19.469 28 18.961 28.211 18.586 28.586C18.211 28.961 18 29.469 18 30C18 30.531 18.211 31.039 18.586 31.414C18.961 31.789 19.469 32 20 32C20.531 32 21.039 31.789 21.414 31.414C21.789 31.039 22 30.531 22 30C22 29.469 21.789 28.961 21.414 28.586C21.039 28.211 20.531 28 20 28ZM12 28C11.469 28 10.961 28.211 10.586 28.586C10.211 28.961 10 29.469 10 30C10 30.531 10.211 31.039 10.586 31.414C10.961 31.789 11.469 32 12 32C12.531 32 13.039 31.789 13.414 31.414C13.789 31.039 14 30.531 14 30C14 29.469 13.789 28.961 13.414 28.586C13.039 28.211 12.531 28 12 28Z"
        fill="#667EEA"
      />
    </svg>
  ),
  analytics: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#F0F4FF" />
      <path
        d="M8 40V20H12V40H8ZM20 40V8H24V40H20ZM32 40V28H36V40H32Z"
        fill="#667EEA"
      />
    </svg>
  ),
  engineering: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#F0F4FF" />
      <path
        d="M24 12L28 20H20L24 12ZM24 36L20 28H28L24 36ZM12 24L20 20V28L12 24ZM36 24L28 28V20L36 24Z"
        fill="#667EEA"
      />
      <circle cx="24" cy="24" r="4" fill="#667EEA" fillOpacity="0.3" />
    </svg>
  ),
  security: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#F0F4FF" />
      <path
        d="M24 12L36 18V24C36 30.627 30.627 36 24 36C17.373 36 12 30.627 12 24V18L24 12ZM24 34C29.514 34 34 29.514 34 24V19.5L24 15L14 19.5V24C14 29.514 18.486 34 24 34Z"
        fill="#667EEA"
      />
      <path
        d="M20 26L22 28L28 22"
        stroke="#667EEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  integration: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#F0F4FF" />
      <path
        d="M16 20H32V24H16V20ZM16 28H24V32H16V28ZM28 28H32V32H28V28Z"
        fill="#667EEA"
      />
      <circle cx="12" cy="22" r="2" fill="#667EEA" />
      <circle cx="12" cy="30" r="2" fill="#667EEA" />
      <circle cx="36" cy="22" r="2" fill="#667EEA" />
      <circle cx="36" cy="30" r="2" fill="#667EEA" />
    </svg>
  ),
  performance: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#F0F4FF" />
      <path
        d="M12 36V24H16V36H12ZM20 36V16H24V36H20ZM28 36V20H32V36H28ZM36 36V12H40V36H36Z"
        fill="#667EEA"
      />
    </svg>
  ),
  healthcare: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#F0F4FF" />
      <path
        d="M24 12L30 18V24C30 30.627 27.313 36 24 36C20.687 36 18 30.627 18 24V18L24 12ZM24 34C25.657 34 28 29.514 28 24V19.5L24 16L20 19.5V24C20 29.514 22.343 34 24 34Z"
        fill="#667EEA"
      />
      <path d="M22 26H26V30H22V26ZM20 22H28V26H20V22Z" fill="#667EEA" />
    </svg>
  ),
  manufacturing: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#F0F4FF" />
      <path
        d="M12 20H16V28H12V20ZM20 16H24V32H20V16ZM28 12H32V36H28V12ZM36 18H40V30H36V18Z"
        fill="#667EEA"
      />
    </svg>
  ),
  finance: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#F0F4FF" />
      <path
        d="M24 12L36 20V28L24 36L12 28V20L24 12ZM24 34L32 28V22L24 16L16 22V28L24 34Z"
        fill="#667EEA"
      />
      <path
        d="M20 24L24 28L28 20"
        stroke="#667EEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  automotive: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#F0F4FF" />
      <path
        d="M12 28H16V32H12V28ZM32 28H36V32H32V28ZM16 24H32V28H16V24ZM14 20H34V24H14V20Z"
        fill="#667EEA"
      />
      <circle cx="18" cy="30" r="2" fill="#667EEA" />
      <circle cx="30" cy="30" r="2" fill="#667EEA" />
    </svg>
  ),
  retail: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#F0F4FF" />
      <path
        d="M12 16H16V32H12V16ZM20 12H24V36H20V12ZM28 18H32V30H28V18ZM36 14H40V34H36V14Z"
        fill="#667EEA"
      />
    </svg>
  ),
  education: (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#F0F4FF" />
      <path
        d="M24 12L36 18V24C36 30.627 30.627 36 24 36C17.373 36 12 30.627 12 24V18L24 12ZM24 34C29.514 34 34 29.514 34 24V19.5L24 15L14 19.5V24C14 29.514 18.486 34 24 34Z"
        fill="#667EEA"
      />
      <path
        d="M20 26L24 30L28 26"
        stroke="#667EEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

// Styled Components
const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 64px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const Section = styled.section`
  padding: 96px 0;

  @media (max-width: 768px) {
    padding: 64px 0;
  }
`;

const HeroSection = styled(Section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(
    135deg,
    ${COLORS.primary} 0%,
    ${COLORS.dark} 100%
  );
  color: ${COLORS.cream};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/herosectionimages/engineers-brainstorming-ways-use-ai.jpg")
      center/cover;
    opacity: 0.3;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

const Button = styled.button`
  background: ${(props) =>
    props.variant === "secondary" ? "transparent" : COLORS.accent};
  color: ${(props) =>
    props.variant === "secondary" ? COLORS.cream : COLORS.cream};
  border: ${(props) =>
    props.variant === "secondary" ? `2px solid ${COLORS.cream}` : "none"};
  border-radius: 50px;
  padding: 12px 24px;
  font-size: ${TYPOGRAPHY.button.fontSize};
  font-weight: ${TYPOGRAPHY.button.fontWeight};
  line-height: ${TYPOGRAPHY.button.lineHeight};
  letter-spacing: ${TYPOGRAPHY.button.letterSpacing};
  text-transform: ${TYPOGRAPHY.button.textTransform};
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 8px;

  &:hover {
    background: ${(props) =>
      props.variant === "secondary" ? COLORS.cream : COLORS.accent};
    color: ${(props) =>
      props.variant === "secondary" ? COLORS.primary : COLORS.cream};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(193, 18, 31, 0.3);
  }
`;

const Card = styled(motion.div)`
  background: ${COLORS.cream};
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: 48px;
`;

const UseCaseCard = styled(motion.div)`
  background: ${COLORS.cream};
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    border-color: ${COLORS.accent};
  }
`;

const PlatformCard = styled(motion.div)`
  background: ${COLORS.primary};
  color: ${COLORS.cream};
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(193, 18, 31, 0.1) 0%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);

    &::before {
      opacity: 1;
    }
  }
`;

const StatCard = styled(motion.div)`
  background: ${COLORS.cream};
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  height: 64px;
`;

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <Fragment>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                ...TYPOGRAPHY.h1,
                marginBottom: "24px",
                color: COLORS.cream,
              }}
            >
              Generative AI That Redefines Possibility
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{
                ...TYPOGRAPHY.bodyLarge,
                marginBottom: "48px",
                color: COLORS.cream,
                opacity: 0.9,
              }}
            >
              Empowering businesses with cutting-edge technology solutions that
              drive innovation and accelerate digital transformation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button>Get Started</Button>
              <Button variant="secondary">Learn More</Button>
            </motion.div>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* What We Do Section */}
      <Section style={{ backgroundColor: COLORS.cream }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <h2
              style={{
                ...TYPOGRAPHY.h2,
                color: COLORS.primary,
                marginBottom: "24px",
              }}
            >
              What We Do
            </h2>
            <p
              style={{
                ...TYPOGRAPHY.bodyLarge,
                color: COLORS.primary,
                opacity: 0.8,
              }}
            >
              Comprehensive technology solutions designed to accelerate your
              digital transformation
            </p>
          </motion.div>

          <Grid>
            {[
              {
                icon: Icons.ai,
                title: "AI & Gen AI",
                description:
                  "Empower your business with next-generation AI and Generative AI solutions.",
              },
              {
                icon: Icons.cloud,
                title: "Cloud & Application",
                description:
                  "Modernize your IT landscape with scalable cloud platforms and custom applications.",
              },
              {
                icon: Icons.analytics,
                title: "Data & Analytics",
                description:
                  "Unlock actionable insights with advanced data engineering and real-time analytics.",
              },
              {
                icon: Icons.engineering,
                title: "Engineering & Manufacturing",
                description:
                  "Accelerate innovation with cutting-edge engineering and manufacturing solutions.",
              },
            ].map((card, index) => (
              <Card
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <IconWrapper>{card.icon}</IconWrapper>
                <h3
                  style={{
                    ...TYPOGRAPHY.h3,
                    color: COLORS.primary,
                    marginBottom: "16px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    ...TYPOGRAPHY.bodySmall,
                    color: COLORS.primary,
                    opacity: 0.9,
                  }}
                >
                  {card.description}
                </p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Solutions Section */}
      <Section style={{ backgroundColor: COLORS.primary, color: COLORS.cream }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <h2 style={{ ...TYPOGRAPHY.h2, marginBottom: "24px" }}>
              Our Solutions
            </h2>
            <p style={{ ...TYPOGRAPHY.bodyLarge, opacity: 0.9 }}>
              Comprehensive technology solutions designed to accelerate your
              digital transformation
            </p>
          </motion.div>

          <div style={{ display: "grid", gap: "64px" }}>
            {[
              {
                title: "AI & Gen AI Consulting",
                description:
                  "Empower your business with next-generation AI and Generative AI solutions. Accelerate innovation, unlock new revenue streams, and drive intelligent automation across your organization.",
                image: "/video/Ai.mp4",
                icon: Icons.ai,
              },
              {
                title: "Cloud & Application Services",
                description:
                  "Modernize your IT landscape with scalable cloud platforms, custom applications, seamless integrations, and agile delivery for faster business outcomes.",
                image: "/video/cld.mp4",
                icon: Icons.cloud,
              },
              {
                title: "Data & Analytics",
                description:
                  "Unlock actionable insights with advanced data engineering, real-time analytics, intelligent dashboards, and AI-powered decision-making capabilities.",
                image: "/video/data.mp4",
                icon: Icons.analytics,
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "64px",
                  alignItems: "center",
                  ...(index % 2 === 1 && { direction: "rtl" }),
                }}
              >
                <div style={{ direction: index % 2 === 1 ? "ltr" : "ltr" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "24px",
                    }}
                  >
                    <div style={{ marginRight: "16px" }}>{solution.icon}</div>
                    <h3 style={{ ...TYPOGRAPHY.h3 }}>{solution.title}</h3>
                  </div>
                  <p
                    style={{
                      ...TYPOGRAPHY.bodyLarge,
                      opacity: 0.95,
                      marginBottom: "32px",
                    }}
                  >
                    {solution.description}
                  </p>
                  <Button>Learn More</Button>
                </div>
                <div style={{ borderRadius: "16px", overflow: "hidden" }}>
                  <video
                    src={solution.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "16px",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Use Case Grid Section */}
      <Section style={{ backgroundColor: COLORS.cream }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <h2
              style={{
                ...TYPOGRAPHY.h2,
                color: COLORS.primary,
                marginBottom: "24px",
              }}
            >
              Use Cases
            </h2>
            <p
              style={{
                ...TYPOGRAPHY.bodyLarge,
                color: COLORS.primary,
                opacity: 0.8,
              }}
            >
              Discover how our solutions transform industries
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
              overflowX: "auto",
              padding: "16px 0",
            }}
          >
            {[
              {
                icon: Icons.healthcare,
                title: "Healthcare",
                description:
                  "AI-powered diagnostics and patient care optimization",
              },
              {
                icon: Icons.manufacturing,
                title: "Manufacturing",
                description:
                  "Smart factory automation and predictive maintenance",
              },
              {
                icon: Icons.finance,
                title: "Finance",
                description: "Risk assessment and fraud detection systems",
              },
              {
                icon: Icons.automotive,
                title: "Automotive",
                description:
                  "Connected vehicle solutions and autonomous systems",
              },
              {
                icon: Icons.retail,
                title: "Retail",
                description:
                  "Personalized shopping experiences and inventory management",
              },
              {
                icon: Icons.education,
                title: "Education",
                description:
                  "Adaptive learning platforms and student analytics",
              },
            ].map((useCase, index) => (
              <UseCaseCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <IconWrapper>{useCase.icon}</IconWrapper>
                <h3
                  style={{
                    ...TYPOGRAPHY.h3,
                    color: COLORS.primary,
                    marginBottom: "12px",
                  }}
                >
                  {useCase.title}
                </h3>
                <p
                  style={{
                    ...TYPOGRAPHY.bodySmall,
                    color: COLORS.primary,
                    opacity: 0.8,
                  }}
                >
                  {useCase.description}
                </p>
              </UseCaseCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Platform Features Section */}
      <Section style={{ backgroundColor: COLORS.primary, color: COLORS.cream }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <h2 style={{ ...TYPOGRAPHY.h2, marginBottom: "24px" }}>
              Platform Features
            </h2>
            <p style={{ ...TYPOGRAPHY.bodyLarge, opacity: 0.9 }}>
              Advanced capabilities that power your digital transformation
            </p>
          </motion.div>

          <Grid>
            {[
              {
                icon: Icons.performance,
                title: "Real-time Processing",
                description:
                  "Lightning-fast data processing and analytics for instant insights.",
              },
              {
                icon: Icons.security,
                title: "Enterprise Security",
                description:
                  "Bank-grade security with end-to-end encryption and compliance.",
              },
              {
                icon: Icons.analytics,
                title: "Scalable Architecture",
                description:
                  "Cloud-native solutions that grow with your business needs.",
              },
              {
                icon: Icons.integration,
                title: "Seamless Integration",
                description:
                  "Connect with existing systems and workflows effortlessly.",
              },
            ].map((feature, index) => (
              <PlatformCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <IconWrapper>{feature.icon}</IconWrapper>
                <h3 style={{ ...TYPOGRAPHY.h3, marginBottom: "16px" }}>
                  {feature.title}
                </h3>
                <p style={{ ...TYPOGRAPHY.bodySmall, opacity: 0.9 }}>
                  {feature.description}
                </p>
              </PlatformCard>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Stats Section */}
      <Section style={{ backgroundColor: COLORS.cream }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <h2
              style={{
                ...TYPOGRAPHY.h2,
                color: COLORS.primary,
                marginBottom: "24px",
              }}
            >
              Our Impact
            </h2>
            <p
              style={{
                ...TYPOGRAPHY.bodyLarge,
                color: COLORS.primary,
                opacity: 0.8,
              }}
            >
              Delivering measurable results across industries
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "32px",
            }}
          >
            {[
              {
                number: "500+",
                label: "Projects Delivered",
                icon: Icons.performance,
              },
              {
                number: "50+",
                label: "Enterprise Clients",
                icon: Icons.security,
              },
              {
                number: "99.9%",
                label: "Uptime Guarantee",
                icon: Icons.analytics,
              },
              {
                number: "24/7",
                label: "Support Available",
                icon: Icons.integration,
              },
            ].map((stat, index) => (
              <StatCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <IconWrapper>{stat.icon}</IconWrapper>
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: "700",
                    color: COLORS.accent,
                    marginBottom: "8px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {stat.number}
                </div>
                <p
                  style={{
                    ...TYPOGRAPHY.bodySmall,
                    color: COLORS.primary,
                    opacity: 0.8,
                    fontWeight: "500",
                  }}
                >
                  {stat.label}
                </p>
              </StatCard>
            ))}
          </div>
        </Container>
      </Section>

      {/* Clients Section */}
      <Section style={{ backgroundColor: COLORS.cream }}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <h2
              style={{
                ...TYPOGRAPHY.h2,
                color: COLORS.primary,
                marginBottom: "24px",
              }}
            >
              Trusted By
            </h2>
            <p
              style={{
                ...TYPOGRAPHY.bodyLarge,
                color: COLORS.primary,
                opacity: 0.8,
              }}
            >
              Leading organizations trust us to deliver innovative solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "48px",
              alignItems: "center",
              filter: "grayscale(100%)",
              opacity: 0.7,
            }}
          >
            {/* Add client logos here */}
            <div
              style={{
                textAlign: "center",
                fontSize: "2rem",
                color: COLORS.primary,
              }}
            >
              Client Logo 1
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "2rem",
                color: COLORS.primary,
              }}
            >
              Client Logo 2
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "2rem",
                color: COLORS.primary,
              }}
            >
              Client Logo 3
            </div>
            <div
              style={{
                textAlign: "center",
                fontSize: "2rem",
                color: COLORS.primary,
              }}
            >
              Client Logo 4
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section
        style={{
          backgroundColor: COLORS.accent,
          color: COLORS.cream,
          textAlign: "center",
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 style={{ ...TYPOGRAPHY.h2, marginBottom: "24px" }}>
              Ready to Transform Your Business?
            </h2>
            <p
              style={{
                ...TYPOGRAPHY.bodyLarge,
                marginBottom: "48px",
                opacity: 0.9,
              }}
            >
              Let's discuss how our solutions can accelerate your digital
              transformation
            </p>
            <Button style={{ background: COLORS.cream, color: COLORS.accent }}>
              Get Started Today
            </Button>
          </motion.div>
        </Container>
      </Section>
    </Fragment>
  );
};

export default HomePage;
