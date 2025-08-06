import React, { Fragment } from "react";
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const InsightsPage = () => {
  const insightsCategories = [
    {
      title: "Blogs & Articles",
      description: "Explore our latest insights, trends, and expert opinions on technology and business transformation",
      color: "#1e40af",
      gradient: "linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)",
      url: "/insights/blog",
      features: ["AI & Machine Learning", "Cloud & DevOps", "Data Analytics", "Digital Transformation"],
      count: "50+ Articles",
      badge: "Popular"
    },
    {
      title: "Whitepapers & Case Studies",
      description: "In-depth research and real-world case studies showcasing our expertise and success stories",
      color: "#be123c",
      gradient: "linear-gradient(135deg, #be123c 0%, #e11d48 100%)",
      url: "/insights/whitepapers-and-case-studies",
      features: ["Industry Research", "Success Stories", "Technical Deep Dives", "Best Practices"],
      count: "25+ Studies",
      badge: "Premium"
    },
    {
      title: "News & Announcements",
      description: "Stay updated with our latest company news, product updates, and industry events",
      color: "#10b981",
      gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
      url: "/insights/news-and-announcements",
      features: ["Company Updates", "Product Launches", "Industry Events", "Team News"],
      count: "100+ Updates",
      badge: "Latest"
    },
    {
      title: "Trending Topics",
      description: "Hot topics and emerging trends in technology and business innovation",
      color: "#f59e0b",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
      url: "/insights/blog",
      features: ["Emerging Tech", "Market Trends", "Innovation Insights", "Future Predictions"],
      count: "30+ Topics",
      badge: "Trending"
    }
  ];

  const stats = [
    { number: "500+", label: "Articles Published" },
    { number: "50K+", label: "Monthly Readers" },
    { number: "25+", label: "Industry Experts" },
    { number: "100+", label: "Case Studies" }
  ];

  const featuredInsights = [
    {
      title: "The Future of AI in Enterprise",
      excerpt: "Discover how artificial intelligence is reshaping business operations and decision-making processes.",
      category: "AI & ML",
      readTime: "5 min read",
      date: "2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop"
    },
    {
      title: "Cloud Migration Best Practices",
      excerpt: "Learn the essential strategies for successful cloud migration and digital transformation.",
      category: "Cloud & DevOps",
      readTime: "8 min read",
      date: "2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop"
    },
    {
      title: "Data-Driven Decision Making",
      excerpt: "How to leverage analytics and insights to drive strategic business decisions.",
      category: "Data Analytics",
      readTime: "6 min read",
      date: "2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
    }
  ];

  return (
    <Fragment>
      <div className="body_wrap sco_agency">
        {/* Hero Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
            color: "white",
            py: { xs: 12, md: 20 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "3rem", md: "5rem" },
                    mb: 4,
                    lineHeight: 1.1,
                    background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Insights & Knowledge
                </Typography>
                
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 400,
                    mb: 8,
                    maxWidth: "900px",
                    margin: "0 auto",
                    opacity: 0.9,
                    lineHeight: 1.6,
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                    letterSpacing: "0.01em",
                  }}
                >
                  Stay ahead of the curve with our latest insights, research, and expert perspectives 
                  on technology, business, and innovation.
                </Typography>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <Grid container spacing={4} sx={{ mt: 8, justifyContent: "center" }}>
                    {stats.map((stat, index) => (
                      <Grid item xs={6} md={3} key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                        >
                          <Box sx={{ textAlign: "center" }}>
                            <Typography
                              variant="h2"
                              sx={{
                                fontWeight: 800,
                                color: "#3b82f6",
                                mb: 1,
                                fontSize: { xs: "2rem", md: "3rem" },
                              }}
                            >
                              {stat.number}
                            </Typography>
                            <Typography
                              variant="body1"
                              sx={{
                                color: "#cbd5e1",
                                fontWeight: 500,
                                fontSize: { xs: "0.9rem", md: "1rem" },
                              }}
                            >
                              {stat.label}
                            </Typography>
                          </Box>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Featured Insights */}
        <Box sx={{ py: { xs: 10, md: 16 }, background: "#ffffff" }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: "center", mb: 10 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    color: "#0f172a",
                    mb: 3,
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    letterSpacing: "-0.02em",
                  }}
                >
                  Featured Insights
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#64748b",
                    maxWidth: "600px",
                    margin: "0 auto",
                    lineHeight: 1.6,
                    fontSize: "1.1rem",
                  }}
                >
                  Discover our most popular and trending content
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {featuredInsights.map((insight, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: 4,
                          overflow: "hidden",
                          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                          transition: "all 0.4s ease",
                          position: "relative",
                          "&:hover": {
                            transform: "translateY(-8px)",
                            boxShadow: "0 30px 80px rgba(0,0,0,0.12)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            height: 200,
                            background: `url(${insight.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "relative",
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              top: 16,
                              left: 16,
                              background: "rgba(0,0,0,0.7)",
                              color: "white",
                              px: 2,
                              py: 0.5,
                              borderRadius: 2,
                              fontSize: "0.8rem",
                              fontWeight: 600,
                            }}
                          >
                            {insight.category}
                          </Box>
                        </Box>
                        
                        <CardContent sx={{ p: 4 }}>
                          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                            <Typography
                              variant="body2"
                              sx={{
                                color: "#64748b",
                                fontSize: "0.8rem",
                                fontWeight: 500,
                              }}
                            >
                              {insight.date} • {insight.readTime}
                            </Typography>
                          </Box>

                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              color: "#0f172a",
                              mb: 2,
                              lineHeight: 1.3,
                            }}
                          >
                            {insight.title}
                          </Typography>

                          <Typography
                            variant="body1"
                            sx={{
                              color: "#64748b",
                              mb: 3,
                              lineHeight: 1.6,
                            }}
                          >
                            {insight.excerpt}
                          </Typography>

                          <Button
                            component={Link}
                            to="/insights/blog"
                            variant="text"
                            sx={{
                              color: "#3b82f6",
                              fontWeight: 600,
                              textTransform: "none",
                              p: 0,
                              "&:hover": {
                                background: "transparent",
                                color: "#1e40af",
                              },
                            }}
                          >
                            Read More →
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Insights Categories */}
        <Box sx={{ py: { xs: 10, md: 16 }, background: "#f8fafc" }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: "center", mb: 10 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    color: "#0f172a",
                    mb: 3,
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    letterSpacing: "-0.02em",
                  }}
                >
                  Explore Our Insights
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: "#64748b",
                    maxWidth: "600px",
                    margin: "0 auto",
                    lineHeight: 1.6,
                    fontSize: "1.1rem",
                  }}
                >
                  Discover valuable knowledge across different formats and topics
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {insightsCategories.map((category, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: 4,
                          overflow: "hidden",
                          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                          transition: "all 0.4s ease",
                          position: "relative",
                          "&:hover": {
                            transform: "translateY(-12px)",
                            boxShadow: "0 30px 80px rgba(0,0,0,0.15)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            height: 160,
                            background: category.gradient,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          <Box
                            sx={{
                              position: "absolute",
                              top: -30,
                              right: -30,
                              width: 120,
                              height: 120,
                              borderRadius: "50%",
                              background: "rgba(255,255,255,0.1)",
                            }}
                          />
                          <Typography
                            variant="h1"
                            sx={{
                              color: "white",
                              fontSize: "3rem",
                              fontWeight: 700,
                              zIndex: 2,
                            }}
                          >
                            {category.title.charAt(0)}
                          </Typography>
                        </Box>
                        
                        <CardContent sx={{ p: 5 }}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 3 }}>
                            <Typography
                              variant="h4"
                              sx={{
                                fontWeight: 700,
                                color: "#0f172a",
                                flex: 1,
                              }}
                            >
                              {category.title}
                            </Typography>
                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 1 }}>
                              <Chip
                                label={category.count}
                                size="small"
                                sx={{
                                  background: category.color,
                                  color: "white",
                                  fontWeight: 600,
                                  fontSize: "0.75rem",
                                }}
                              />
                              <Chip
                                label={category.badge}
                                size="small"
                                sx={{
                                  background: "rgba(59, 130, 246, 0.1)",
                                  color: "#3b82f6",
                                  fontWeight: 600,
                                  fontSize: "0.7rem",
                                }}
                              />
                            </Box>
                          </Box>

                          <Typography
                            variant="body1"
                            sx={{
                              color: "#64748b",
                              mb: 4,
                              lineHeight: 1.6,
                              fontSize: "1.1rem",
                            }}
                          >
                            {category.description}
                          </Typography>

                          {/* Features */}
                          <Box sx={{ mb: 4 }}>
                            {category.features.map((feature, featureIndex) => (
                              <Chip
                                key={featureIndex}
                                label={feature}
                                size="small"
                                sx={{
                                  mr: 1,
                                  mb: 1,
                                  background: "#f1f5f9",
                                  color: "#334155",
                                  fontWeight: 500,
                                  fontSize: "0.8rem",
                                }}
                              />
                            ))}
                          </Box>

                          <Button
                            component={Link}
                            to={category.url}
                            variant="contained"
                            size="large"
                            sx={{
                              background: category.gradient,
                              px: 4,
                              py: 1.5,
                              borderRadius: 3,
                              fontWeight: 600,
                              fontSize: "1rem",
                              textTransform: "none",
                              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                              "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                              },
                            }}
                          >
                            Explore {category.title}
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            color: "white",
            py: { xs: 12, md: 16 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    mb: 4,
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    letterSpacing: "-0.02em",
                  }}
                >
                  Stay Connected
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 6,
                    opacity: 0.9,
                    maxWidth: "700px",
                    margin: "0 auto",
                    lineHeight: 1.6,
                    fontSize: "1.2rem",
                  }}
                >
                  Subscribe to our newsletter to receive the latest insights, 
                  research, and updates directly in your inbox.
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)",
                    px: 6,
                    py: 2.5,
                    borderRadius: 3,
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    textTransform: "none",
                    boxShadow: "0 8px 30px rgba(59, 130, 246, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 40px rgba(59, 130, 246, 0.4)",
                    },
                  }}
                >
                  Subscribe to Newsletter
                </Button>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </div>
    </Fragment>
  );
};

export default InsightsPage; 