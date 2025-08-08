import React from "react";
import blogs from "../../../api/blogs";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Chip, Button } from "@mui/material";
import { CalendarToday, AccessTime, ArrowForward } from "@mui/icons-material";

const HelpDeskBlogSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Box
      sx={{
        backgroundColor: props.bg || "#f8fafc",
        py: 12,
        px: 3,
      }}
    >
      <Box sx={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Fade direction="down" triggerOnce={false} duration={1000} delay={9}>
            <Typography
              variant="overline"
              sx={{
                color: "#1e40af",
                fontWeight: 600,
                fontSize: "0.875rem",
                letterSpacing: "0.1em",
                mb: 2,
                display: "block",
              }}
            >
              LATEST INSIGHTS
            </Typography>
          </Fade>
          <Fade direction="down" triggerOnce={false} duration={1500} delay={9}>
            <Typography
              variant="h3"
              sx={{
                color: "#0f172a",
                fontWeight: 700,
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                mb: 3,
                lineHeight: 1.2,
              }}
            >
                             Blogs and{" "}
               <Box
                 component="span"
                 sx={{
                   background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
                   WebkitBackgroundClip: "text",
                   WebkitTextFillColor: "transparent",
                   backgroundClip: "text",
                 }}
               >
                 Case Studies
               </Box>
            </Typography>
          </Fade>
          <Fade direction="up" triggerOnce={false} duration={1500} delay={9}>
            <Typography
              variant="body1"
              sx={{
                color: "#64748b",
                fontWeight: 400,
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
                whiteSpace: "nowrap",
              }}
            >
              Stay updated with the latest trends, innovations, and insights from the world of technology and AI
            </Typography>
          </Fade>
        </Box>

        {/* Featured Blog Card */}
        <Box sx={{ mb: 8 }}>
          <Fade direction="up" triggerOnce={false} duration={1000} delay={200}>
            {blogs.slice(12, 13).map((blog, index) => (
              <Card
                key={index}
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.08)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 30px 80px rgba(0,0,0,0.15), 0 12px 30px rgba(0,0,0,0.1)",
                  },
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <CardMedia
                      component="img"
                      image={blog.screens}
                      alt={blog.title}
                      sx={{
                        height: { xs: 300, md: 400 },
                        objectFit: "cover",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CardContent
                      sx={{
                        p: 6,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <Box sx={{ mb: 3 }}>
                        <Chip
                          label="FEATURED"
                          sx={{
                            backgroundColor: "#1e40af",
                            color: "white",
                            fontWeight: 600,
                            fontSize: "0.75rem",
                            mb: 2,
                          }}
                        />
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            color: "#0f172a",
                            mb: 2,
                            lineHeight: 1.3,
                          }}
                        >
                          {blog.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#64748b",
                            mb: 3,
                            lineHeight: 1.6,
                          }}
                        >
                          Intellectt's AI-Support boosts efficiency and enhances customer service through cutting-edge automation and intelligent solutions.
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                        <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
                          <AccessTime sx={{ fontSize: 16, color: "#94a3b8", mr: 1 }} />
                          <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                            {blog.read}
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <CalendarToday sx={{ fontSize: 16, color: "#94a3b8", mr: 1 }} />
                          <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                            Dec 15, 2024
                          </Typography>
                        </Box>
                      </Box>
                      <Link
                        onClick={ClickHandler}
                        to={`/blog-single/${blog.slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
                            color: "white",
                            px: 4,
                            py: 1.5,
                            borderRadius: 2,
                            fontWeight: 600,
                            textTransform: "none",
                            fontSize: "1rem",
                            "&:hover": {
                              background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
                              transform: "translateY(-2px)",
                              boxShadow: "0 8px 25px rgba(30, 64, 175, 0.4)",
                            },
                          }}
                          endIcon={<ArrowForward />}
                        >
                          Read More
                        </Button>
                      </Link>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            ))}
          </Fade>
        </Box>

        {/* Recent Blog Cards */}
        <Grid container spacing={4}>
          {blogs.slice(13, 16).map((blog, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Fade direction="up" triggerOnce={false} duration={1000} delay={300 + index * 100}>
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    height: "100%",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 20px 50px rgba(0,0,0,0.12), 0 8px 20px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={blog.screens}
                    alt={blog.title}
                    sx={{
                      height: 200,
                      objectFit: "cover",
                    }}
                  />
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                      <AccessTime sx={{ fontSize: 14, color: "#94a3b8", mr: 1 }} />
                      <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                        {blog.read}
                      </Typography>
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        color: "#0f172a",
                        mb: 2,
                        lineHeight: 1.4,
                        fontSize: "1.1rem",
                      }}
                    >
                      {blog.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#64748b",
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      Discover how our latest innovations are transforming the industry and driving success for our clients.
                    </Typography>
                    <Link
                      onClick={ClickHandler}
                      to={`/blog-single/${blog.slug}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="text"
                        sx={{
                          color: "#1e40af",
                          fontWeight: 600,
                          textTransform: "none",
                          fontSize: "0.9rem",
                          p: 0,
                          "&:hover": {
                            background: "transparent",
                            color: "#1e3a8a",
                          },
                        }}
                        endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                      >
                        Read Article
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* View All Button */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Fade direction="up" triggerOnce={false} duration={1000} delay={600}>
            <Link
              onClick={ClickHandler}
              to="/blog"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#1e40af",
                  color: "#1e40af",
                  px: 6,
                  py: 2,
                  borderRadius: 3,
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "1.1rem",
                  borderWidth: 2,
                  "&:hover": {
                    borderColor: "#1e3a8a",
                    color: "#1e3a8a",
                    background: "rgba(30, 64, 175, 0.04)",
                    borderWidth: 2,
                  },
                }}
              >
                View All Articles
              </Button>
            </Link>
          </Fade>
        </Box>
      </Box>
    </Box>
  );
};

export default HelpDeskBlogSection;
