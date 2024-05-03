import React from "react";
import { Box, Typography, Button, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import bgImage from "../Images/Error403/1.jpg";
import bgGif from "../Images/Error403/2.gif";
import Logo from "../Images/Appbar/Logo.png";

const Error403Page = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImage}), url(${bgGif})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <CardMedia
        component="img"
        image={Logo}
        alt="Logo"
        sx={{ maxWidth: "220px", maxHeight: "110px" }}
      />
      <Box
        // className="text-box"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          padding: "30px",
          textAlign: "center",
          mt: { md: 20, xs: 0 },
        }}
      >
        <Typography
          variant="h3"
          color="error"
          gutterBottom
          sx={{ textShadow: "0 0 10px black" }}
        >
          Access Denied
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          You do not have permission to access this page.
        </Typography>
        <Button
          variant="contained"
          onClick={handleNavigate}
          sx={{
            marginTop: "20px",
            background: "#a1b8c0",
            color: "black",
            "&:hover": {
              background: "#d9a95b",
              color: "black",
            },
          }}
        >
          Go Back to Homepage
        </Button>
      </Box>
    </Box>
  );
};

export default Error403Page;
