import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import BgImage from "../Images/Banner/pexels-01.jpg";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const ServicesComponent = () => {
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
        alignItems: "flex-start",
        textAlign: "left",
      }}
    >
      <Box sx={{ ml: { md: 10, xs: 5 } }}>
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
              onClick={{ Homenavi }}
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
              Services
            </Typography>
          </Stack>
        </Slide>
        <Slide direction="up" duration={1000} triggerOnce>
          <Typography
            variant="h1"
            sx={{
              color: "#d9a95b",
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
            }}
          >
            Our Services
          </Typography>
        </Slide>
      </Box>
    </Box>
  );
};

export default ServicesComponent;
