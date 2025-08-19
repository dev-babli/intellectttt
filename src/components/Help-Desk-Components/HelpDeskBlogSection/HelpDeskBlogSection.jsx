import React from "react";
import blogs from "../../../api/blogs";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, Card, CardContent, CardMedia, Chip, Button } from "@mui/material";
import { CalendarToday, AccessTime, ArrowForward, Image } from "@mui/icons-material";
import "./HelpDeskBlogSection.css";

const HelpDeskBlogSection = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  // Default placeholder image component
  const ImagePlaceholder = ({ title, height, width = "100%" }) => (
    <Box
      sx={{
        height: height,
        width: width,
        backgroundColor: "#f1f5f9",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#64748b",
        border: "1px solid #e2e8f0",
      }}
    >
      <Image sx={{ fontSize: 48, mb: 2, color: "#94a3b8" }} />
      <Typography variant="body1" sx={{ mb: 1, textAlign: "center" }}>
        Image Not Available
      </Typography>
      <Typography variant="caption" sx={{ textAlign: "center", px: 2 }}>
        {title}
      </Typography>
    </Box>
  );

  return (
    <Box
      className="blog-section-container"
      sx={{
        backgroundColor: props.bg || "#ffffff",
        py: { xs: 4, md: 6 }, // Reduced from py: 12
        px: 2, // Reduced from px: 3
      }}
    >
      <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}> {/* Reduced from 1400px */}
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}> {/* Reduced from mb: 8 */}
          <Typography
            variant="overline"
            sx={{
              color: "#1e40af",
              fontWeight: 600,
              fontSize: "0.75rem", // Reduced from 0.875rem
              letterSpacing: "0.1em",
              mb: 1, // Reduced from mb: 2
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
              fontSize: { xs: "1.25rem", md: "1.5rem" }, // Reduced from 1.75rem, 2.25rem
              mb: 2, // Reduced from mb: 3
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
              maxWidth: "500px", // Reduced from 600px
              margin: "0 auto",
              lineHeight: 1.5, // Reduced from 1.6
              fontSize: { xs: "0.875rem", md: "1rem" }, // Reduced font size
            }}
          >
            Explore our latest insights, trends, and expert opinions on the ever-evolving world of technology and business.
          </Typography>
        </Box>

        {/* Featured Blog Card */}
        <Box sx={{ mb: { xs: 4, md: 5 } }}> {/* Reduced from mb: 8 */}
          {blogs.slice(0, 1).map((blog, index) => {
            console.log('Featured blog image:', blog.screens, 'for blog:', blog.title);
            return (
            <Card
              key={index}
              className="blog-card"
              sx={{
                borderRadius: 2, // Reduced from 4
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)", // Reduced shadow
              }}
            >
              <Grid container>
                <Grid item xs={12} md={6}>
                  <CardMedia
                    component="img"
                    image={blog.screens}
                    alt={blog.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                    sx={{
                      height: { xs: 200, md: 250 }, // Reduced from 300, 400
                      objectFit: "cover",
                    }}
                  />
                  {/* Fallback placeholder for missing images */}
                  <Box
                    sx={{
                      height: { xs: 200, md: 250 }, // Reduced from 300, 400
                      backgroundColor: "#f1f5f9",
                      display: "none",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      color: "#64748b",
                    }}
                  >
                    <ImagePlaceholder title={blog.title} height="100%" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <CardContent
                    sx={{
                      p: { xs: 3, md: 4 }, // Reduced from p: 6
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <Box sx={{ mb: 2 }}> {/* Reduced from mb: 3 */}
                      <Chip
                        label={blog.thumb}
                        sx={{
                          backgroundColor: "#1e40af",
                          color: "white",
                          fontWeight: 600,
                          fontSize: "0.7rem", // Reduced from 0.75rem
                          mb: 1.5, // Reduced from mb: 2
                        }}
                      />
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: 700,
                          color: "#0f172a",
                          mb: 1.5, // Reduced from mb: 2
                          lineHeight: 1.3,
                          fontSize: { xs: "1.1rem", md: "1.25rem" }, // Reduced font size
                        }}
                      >
                        {blog.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "#64748b",
                          mb: 2, // Reduced from mb: 3
                          lineHeight: 1.5, // Reduced from 1.6
                          fontSize: { xs: "0.8rem", md: "0.875rem" }, // Reduced font size
                        }}
                      >
                        {blog.description}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}> {/* Reduced from mb: 3 */}
                      <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}> {/* Reduced from mr: 3 */}
                        <CalendarToday sx={{ fontSize: 14, color: "#94a3b8", mr: 0.5 }} /> {/* Reduced from 16, mr: 1 */}
                        <Typography variant="body2" sx={{ color: "#94a3b8", fontSize: "0.75rem" }}> {/* Reduced font size */}
                          {blog.create_at}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <AccessTime sx={{ fontSize: 14, color: "#94a3b8", mr: 0.5 }} /> {/* Reduced from 16, mr: 1 */}
                        <Typography variant="body2" sx={{ color: "#94a3b8", fontSize: "0.75rem" }}> {/* Reduced font size */}
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
                          px: 3, // Reduced from px: 4
                          py: 1, // Reduced from py: 1.5
                          borderRadius: 1.5, // Reduced from 2
                          fontWeight: 600,
                          textTransform: "none",
                          fontSize: "0.875rem", // Reduced from 1rem
                          "&:hover": {
                            background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
                            boxShadow: "0 4px 16px rgba(30, 64, 175, 0.3)", // Reduced shadow
                          },
                        }}
                        endIcon={<ArrowForward sx={{ fontSize: 16 }} />}
                      >
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
            );
          })}
        </Box>

        {/* Recent Blog Cards */}
        <Grid container spacing={2}>
          {blogs.slice(1, 4).map((blog, index) => {
            console.log('Recent blog image:', blog.screens, 'for blog:', blog.title);
            return (
            <Grid item xs={12} md={4} key={index}>
              <Card
                className="blog-card"
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  height: "100%",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.04)",
                }}
              >
                <CardMedia
                  component="img"
                  image={blog.screens}
                  alt={blog.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                  sx={{
                    height: 140,
                    objectFit: "cover",
                  }}
                />
                {/* Fallback placeholder for missing images in recent cards */}
                <Box
                  sx={{
                    height: 140,
                    backgroundColor: "#f1f5f9",
                    display: "none",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "#64748b",
                    p: 1.5,
                  }}
                >
                  <ImagePlaceholder title={blog.title} height="100%" />
                </Box>
                <CardContent sx={{ p: 2.5 }}>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                    <Chip
                      label={blog.thumb}
                      sx={{
                        backgroundColor: "#f1f5f9",
                        color: "#475569",
                        fontWeight: 500,
                        fontSize: "0.65rem",
                        mb: 1.5,
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: "#0f172a",
                      mb: 1.5,
                      lineHeight: 1.4,
                      fontSize: "0.95rem",
                    }}
                  >
                    {blog.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      mb: 2,
                      lineHeight: 1.5,
                      fontSize: "0.75rem",
                    }}
                  >
                    {blog.description}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                      <CalendarToday sx={{ fontSize: 12, color: "#94a3b8", mr: 0.5 }} />
                      <Typography variant="body2" sx={{ color: "#94a3b8", fontSize: "0.7rem" }}>
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
                        fontSize: "0.8rem",
                        p: 0,
                        "&:hover": {
                          background: "transparent",
                          color: "#1e3a8a",
                        },
                      }}
                      endIcon={<ArrowForward sx={{ fontSize: 14 }} />}
                    >
                      Read Article
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            );
          })}
        </Grid>

        {/* View All Button */}
        <Box sx={{ textAlign: "center", mt: { xs: 4, md: 5 } }}> {/* Reduced from mt: 8 */}
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
                px: 4, // Reduced from px: 6
                py: 1.5, // Reduced from py: 2
                borderRadius: 2, // Reduced from 3
                fontWeight: 600,
                textTransform: "none",
                fontSize: "0.95rem", // Reduced from 1.1rem
                borderWidth: 1.5, // Reduced from 2
                "&:hover": {
                  borderColor: "#1e3a8a",
                  color: "#1e3a8a",
                  background: "rgba(30, 64, 175, 0.04)",
                  borderWidth: 1.5, // Reduced from 2
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
