import React, { useState } from "react";
import { Box, Fab, Badge, Typography, Paper } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const CustomChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(1);

  const handleChatClick = () => {
    setIsOpen(!isOpen);
    if (notificationCount > 0) {
      setNotificationCount(0);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      {/* Chat Button */}
      <Badge badgeContent={notificationCount} color="error">
        <Fab
          color="primary"
          aria-label="chat"
          onClick={handleChatClick}
          sx={{
            width: 60,
            height: 60,
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          <SmartToyIcon sx={{ fontSize: 28, color: "white" }} />
        </Fab>
      </Badge>

      {/* Chat Window */}
      {isOpen && (
        <Paper
          elevation={8}
          sx={{
            position: "absolute",
            bottom: 80,
            right: 0,
            width: 350,
            height: 400,
            borderRadius: 2,
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          {/* Chat Header */}
          <Box
            sx={{
              backgroundColor: "#1976d2",
              color: "white",
              padding: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <SmartToyIcon />
            <Typography variant="h6">AI Assistant</Typography>
          </Box>

          {/* Chat Messages */}
          <Box
            sx={{
              height: 300,
              padding: 2,
              overflowY: "auto",
              backgroundColor: "#f5f5f5",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Hello! I'm your AI assistant. How can I help you today? 🤖
            </Typography>
          </Box>

          {/* Chat Input */}
          <Box
            sx={{
              padding: 2,
              borderTop: "1px solid #e0e0e0",
              backgroundColor: "white",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              Type your message here...
            </Typography>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default CustomChatWidget;
