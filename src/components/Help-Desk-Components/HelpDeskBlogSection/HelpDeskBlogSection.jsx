import React from "react";
import blogs from "../../../api/blogs";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Chip, Button } from "@mui/material";
import { CalendarToday, AccessTime, ArrowForward } from "@mui/icons-material";
import "./HelpDeskBlogSection.css";

const HelpDeskBlogSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Box
      className="blog-section-container"
      sx={{
        backgroundColor: props.bg || "#f8fafc",
        py: 12,
        px: 3,
      }}
    >
      <Box sx={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
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
            Our{" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Blog
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#64748b",
              fontWeight: 400,
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Explore our latest insights, trends, and expert opinions on the ever-evolving world of technology and business. From in-depth articles to quick tips, our blog is your go-to resource for staying informed and inspired.
          </Typography>
        </Box>

        {/* Featured Blog Card */}
        <Box sx={{ mb: 8 }}>
          {blogs.slice(0, 1).map((blog, index) => (
            <Card
              key={index}
              className="blog-card"
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.1), 0 8px 20px rgba(0,0,0,0.08)",
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
                        label={blog.thumb}
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
                        {blog.description}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
                        <CalendarToday sx={{ fontSize: 16, color: "#94a3b8", mr: 1 }} />
                        <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                          {blog.create_at}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AccessTime sx={{ fontSize: 16, color: "#94a3b8", mr: 1 }} />
                        <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                          {blog.comment} comments
                        </Typography>
                      </Box>
                    </Box>
                    <Link
                      onClick={ClickHandler}
                      to="/insights/blog"
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        variant="contained"
                        className="blog-button"
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
        </Box>

        {/* Recent Blog Cards */}
        <Grid container spacing={4}>
          {blogs.slice(1, 4).map((blog, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                className="blog-card"
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  height: "100%",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)",
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
                    <Chip
                      label={blog.thumb}
                      sx={{
                        backgroundColor: "#f1f5f9",
                        color: "#475569",
                        fontWeight: 500,
                        fontSize: "0.7rem",
                        mb: 2,
                      }}
                    />
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
                    {blog.description}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
                      <CalendarToday sx={{ fontSize: 14, color: "#94a3b8", mr: 1 }} />
                      <Typography variant="body2" sx={{ color: "#94a3b8" }}>
                        {blog.create_at}
                      </Typography>
                    </Box>
                  </Box>
                  <Link
                    onClick={ClickHandler}
                    to="/insights/blog"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="text"
                      className="blog-button"
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
            </Grid>
          ))}
        </Grid>

        {/* View All Button */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Link
            onClick={ClickHandler}
            to="/insights/blog"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="outlined"
              className="blog-button"
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
        </Box>
      </Box>
    </Box>
  );
};

export default HelpDeskBlogSection;
