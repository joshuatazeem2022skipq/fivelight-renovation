import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import BgImage from "../Images/Banner/pexels-05.jpg";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {

  const navigate = useNavigate();

  const Homenavi = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${BgImage})`,
        height: "50vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start", // Align text to the left
        textAlign: "left", // Align children text to the left
      }}
    >
     <Box sx={{ ml: 10 }}>
        <Slide direction="down" duration={1000} triggerOnce>
          <Stack direction={"row"}>
            <Typography
              variant="h4"
              color="inherit"
              sx={{
                color: "white",
                cursor: "pointer",
                transition: "color 0.3s ease-in-out",
                "&:hover": {
                  color: "#d9a95b",
                },
              }}
              onClick={Homenavi}
            >
              Home
            </Typography>
            <Typography
              variant="h4"
              color="inherit"
              sx={{ color: "white", ml: 2, mr: 2 }}
            >
              -
            </Typography>
            <Typography variant="h4" color="inherit" sx={{ color: "white" }}>
            Portfolio
            </Typography>
          </Stack>
        </Slide>
        <Slide direction="up" duration={1000} triggerOnce>
          <Typography variant="h1" sx={{ color: "#d9a95b" }}>
          Our Portfolio
          </Typography>
        </Slide>
      </Box>
    </Box>
  );
};

export default Portfolio;
