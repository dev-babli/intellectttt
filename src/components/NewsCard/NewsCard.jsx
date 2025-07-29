// src/components/NewsCard.jsx
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Grow,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NewsCard = ({ image, category, title, description, delay = 0 }) => {
  return (
    <Grow in timeout={500 + delay}>
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          borderRadius: 3,
          boxShadow: 3,
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: { xs: "100%", sm: 200 },
            height: { xs: 200, sm: "auto" },
            objectFit: "cover",
          }}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: 3,
          }}
        >
          <Typography
            variant="caption"
            color="primary"
            fontWeight={700}
            sx={{ letterSpacing: 1 }}
          >
            {category}
          </Typography>

          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ mt: 1, mb: 1 }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            {description}
          </Typography>

          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            size="small"
            sx={{
              alignSelf: "flex-start",
              textTransform: "none",
              borderRadius: "999px",
              px: 2.5,
              py: 1,
            }}
          >
            Read more
          </Button>
        </CardContent>
      </Card>
    </Grow>
  );
};

export default NewsCard;
