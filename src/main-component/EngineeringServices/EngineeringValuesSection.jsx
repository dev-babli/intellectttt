import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  Verified,
  School,
  Favorite,
  AutoAwesome,
  Security,
  CheckCircle,
  Star,
  EmojiEvents,
  Handshake,
  TrendingUp,
  Psychology,
  WorkspacePremium,
  Shield,
  Engineering,
  BusinessCenter,
  Public,
} from "@mui/icons-material";

const EngineeringValuesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const values = [
    {
      icon: <Handshake sx={{ fontSize: 40, color: "#10b981" }} />,
      title: "Integrity of Delivery",
      description: "We maintain the highest standards of integrity in every project delivery, ensuring transparency, reliability, and trust with our clients.",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    },
    {
      icon: <TrendingUp sx={{ fontSize: 40, color: "#3b82f6" }} />,
      title: "Relentless Learning",
      description: "We foster a culture of continuous learning and innovation, staying ahead of industry trends and emerging technologies.",
      color: "#3b82f6",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
    },
    {
      icon: <Psychology sx={{ fontSize: 40, color: "#ef4444" }} />,
      title: "Customer Intimacy",
      description: "We build deep, collaborative relationships with our clients, understanding their unique challenges and delivering tailored solutions.",
      color: "#ef4444",
      gradient: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
    },
    {
      icon: <WorkspacePremium sx={{ fontSize: 40, color: "#f59e0b" }} />,
      title: "Quality by Design",
      description: "Quality is embedded in every aspect of our engineering process, from initial concept to final delivery and beyond.",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    },
  ];

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management Systems",
      icon: <WorkspacePremium sx={{ fontSize: 24, color: "#3b82f6" }} />,
    },
    {
      name: "ISO 13485:2016",
      description: "Medical Devices - Quality Management Systems",
      icon: <Engineering sx={{ fontSize: 24, color: "#10b981" }} />,
    },
    {
      name: "IATF 16949",
      description: "Automotive Quality Management Systems",
      icon: <BusinessCenter sx={{ fontSize: 24, color: "#f59e0b" }} />,
    },
    {
      name: "AS9100",
      description: "Aerospace Quality Management Systems",
      icon: <Public sx={{ fontSize: 24, color: "#8b5cf6" }} />,
    },
    {
      name: "ISO/IEC 27001",
      description: "Information Security Management Systems",
      icon: <Shield sx={{ fontSize: 24, color: "#ef4444" }} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 10, md: 16 },
        px: { xs: 2, sm: 3, md: 4 },
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%)",
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Values Section */}
          <Box sx={{ mb: { xs: 10, md: 12 } }}>
            <Box sx={{ textAlign: "center", mb: { xs: 8, md: 10 } }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem", lg: "4rem" },
                    mb: 3,
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    color: "#0f172a",
                    background: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Our Values
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    lineHeight: 1.6,
                    fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.375rem" },
                    color: "#64748b",
                    maxWidth: "900px",
                    mx: "auto",
                    fontWeight: 400,
                  }}
                >
                  The core principles that guide our engineering excellence and client relationships
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={{ xs: 3, md: 4 }}>
              {values.map((value, index) => (
                <Grid item xs={12} sm={6} lg={3} key={index}>
                  <motion.div 
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      sx={{
                        height: { xs: "auto", md: "380px" },
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: 4,
                        overflow: "hidden",
                        background: "#ffffff",
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          height: "4px",
                          background: value.gradient,
                          zIndex: 1,
                        },
                        "&:hover": {
                          transform: "translateY(-12px)",
                          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
                          borderColor: value.color,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          p: 4,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minHeight: "140px",
                          background: `linear-gradient(135deg, ${value.color}15 0%, ${value.color}08 100%)`,
                          position: "relative",
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            background: value.gradient,
                            opacity: 0.1,
                            zIndex: 0,
                          },
                        }}
                      >
                        <Box sx={{ position: "relative", zIndex: 1 }}>
                          {React.cloneElement(value.icon, { 
                            sx: { 
                              fontSize: 48, 
                              color: value.color,
                              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
                            } 
                          })}
                        </Box>
                      </Box>

                      <CardContent sx={{ 
                        flexGrow: 1, 
                        p: 4, 
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 800,
                            mb: 3,
                            color: "#0f172a",
                            fontSize: { xs: "1.25rem", md: "1.375rem" },
                            lineHeight: 1.3,
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                          }}
                        >
                          {value.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          sx={{
                            color: "#64748b",
                            lineHeight: 1.7,
                            fontSize: "1rem",
                            fontWeight: 400,
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                            hyphens: "auto",
                          }}
                        >
                          {value.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Certifications Section */}
          <Box>
            <Box sx={{ textAlign: "center", mb: { xs: 8, md: 10 } }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem", lg: "4rem" },
                    mb: 3,
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    color: "#0f172a",
                    background: "linear-gradient(135deg, #0f172a 0%, #334155 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Certifications & Alliances
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    lineHeight: 1.6,
                    fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.375rem" },
                    color: "#64748b",
                    maxWidth: "900px",
                    mx: "auto",
                    fontWeight: 400,
                  }}
                >
                  Our commitment to quality and excellence is validated by internationally recognized certifications
                </Typography>
              </motion.div>
            </Box>

            <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
              {certifications.map((cert, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <motion.div 
                    variants={cardVariants}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card
                      sx={{
                        height: { xs: "auto", md: "240px" },
                        borderRadius: 4,
                        overflow: "hidden",
                        background: "#ffffff",
                        border: "1px solid rgba(0, 0, 0, 0.08)",
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        "&:hover": {
                          transform: "translateY(-8px)",
                          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
                          borderColor: "#3b82f6",
                        },
                      }}
                    >
                      <CardContent sx={{ 
                        p: 4, 
                        textAlign: "center",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                        <Box sx={{ 
                          mb: 3,
                          p: 2,
                          borderRadius: "50%",
                          background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "60px",
                          height: "60px",
                        }}>
                          {React.cloneElement(cert.icon, { 
                            sx: { 
                              fontSize: 28, 
                              color: "#3b82f6",
                            } 
                          })}
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 800,
                            mb: 2,
                            color: "#0f172a",
                            fontSize: { xs: "1.125rem", md: "1.25rem" },
                            lineHeight: 1.3,
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                          }}
                        >
                          {cert.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "#64748b",
                            fontSize: "0.9rem",
                            lineHeight: 1.6,
                            fontWeight: 400,
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                            hyphens: "auto",
                          }}
                        >
                          {cert.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {/* Additional Info */}
            <Box
              sx={{
                textAlign: "center",
                mt: { xs: 6, md: 8 },
                p: { xs: 4, md: 6 },
                borderRadius: 4,
                background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
                border: "1px solid #e2e8f0",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: "#0f172a",
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                }}
              >
                Founded by Domain Specialists
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#475569",
                  lineHeight: 1.6,
                  fontSize: "1.1rem",
                  maxWidth: "800px",
                  mx: "auto",
                }}
              >
                Founded by domain specialists from medical, automotive and software industries, 
                Intellectt Engineering was created to collapse the gap between concept and commercialization. 
                Over 300 engineers operate from ISO-9001 and ISO-17025 accredited design centers and labs 
                across North America and Asia.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default EngineeringValuesSection;
