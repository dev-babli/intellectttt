import { Box, Typography } from "@mui/material";

const OurStorySection = () => {
  return (
    <Box px={{ xs: 2, md: 10 }} py={8} bgcolor="#f9fbff" textAlign="center">
      {/* Small Title */}
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 500,
          color: "#212877",
          mb: 1,
          fontSize: "1.1rem",
        }}
      >
        Our Story So Far
      </Typography>

      {/* Main Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "#212877",
          mb: 4,
          fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2rem" },
        }}
      >
        Transforming Data Challenges Into <br /> Strategic Opportunities
      </Typography>

      {/* Paragraphs */}
      <Box
        maxWidth="900px"
        mx="auto"
        sx={{ color: "#333", fontSize: "1rem", lineHeight: 1.8 }}
      >
        <Typography paragraph>
          Intellectt’s journey began with a simple yet profound idea: to
          redefine how businesses navigate the complexities of modern data
          landscapes. What started as a spark of inspiration soon evolved into a
          transformative vision—a commitment to empowering enterprises through
          tailored solutions in data management, business analytics, and AI/ML.
          Guided by an unwavering drive for innovation, Intellectt quickly
          emerged as a trusted partner for organizations seeking to unlock the
          full potential of their data.
        </Typography>

        <Typography paragraph>
          The foundation of Intellectt was laid by two industry veterans, Kiran
          M and Kranthi Kiran, who brought decades of expertise from diverse
          roles across both services and product companies. United by a shared
          vision to bridge this divide, they set out to build a company
          dedicated to transforming raw data into actionable insights.
        </Typography>

        <Typography paragraph>
          Kiran M’s deep experience in driving operational excellence and
          Kranthi Kiran’s strategic focus on solution design created a powerful
          synergy. Together, they charted a roadmap to bring
          their vision to life.
        </Typography>
      </Box>
    </Box>
  );
};

export default OurStorySection;
