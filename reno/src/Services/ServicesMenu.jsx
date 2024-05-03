import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Avatar,
  CardContent,
  Divider,
} from "@mui/material";
import SouthIcon from "@mui/icons-material/South";
import { styled } from "@mui/system";
import Renovations from "../Images/About/Services/Renovations.jpeg";
import Basement from "../Images/About/Services/Basement.jpeg";
import Bath from "../Images/About/Services/Bath.jpeg";
import Drywall from "../Images/About/Services/Drywall & Taping.jpg";
import Exterior from "../Images/About/Services/Exterior Reno.jpg";
import Flooring from "../Images/About/Services/Flooring.jpeg";
import Painting from "../Images/About/Services/Painting.jpeg";
import Title from "../Images/About/Services/Title.jpeg";
import Kitchen from "../Images/About/Services/Kitchen.jpeg";
import { Fade } from "react-awesome-reveal";
import "../Styles/Banner.css";
import { Link } from "react-router-dom";

const Services = [
  {
    id: 1,
    title: "Renovations",
    desc: "Enhance your living space with our renovation services",
    image: Renovations,
  },
  {
    id: 2,
    title: "Basement",
    desc: "Transform your basement into a functional and stylish space",
    image: Basement,
  },
  {
    id: 3,
    title: "Flooring",
    desc: "Upgrade your floors with our professional flooring solutions",
    image: Flooring,
  },
  {
    id: 4,
    title: "Kitchen",
    desc: "Revitalize your kitchen with our expert remodeling services",
    image: Kitchen,
  },
  {
    id: 5,
    title: "Drywall & Taping",
    desc: "Achieve smooth and flawless walls with our drywall services",
    image: Drywall,
  },
  {
    id: 6,
    title: "Tile",
    desc: "Add elegance and charm to your home with our tiling solutions",
    image: Title,
  },
  {
    id: 7,
    title: "Bath",
    desc: "Create a luxurious bathroom retreat with our renovation services",
    image: Bath,
  },
  {
    id: 8,
    title: "Painting",
    desc: "Refresh and renew your space with our professional painting services",
    image: Painting,
  },
  {
    id: 9,
    title: "Exterior Reno",
    desc: "Boost your home's curb appeal with our exterior renovation services",
    image: Exterior,
  },
];

const StyledCard = styled(Card)({
  width: 300,
  height: 320,
  overflow: "hidden",
});

const StyledCardMedia = styled(CardMedia)({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  transition: "transform 0.3s ease",

  "&:hover": {
    transform: "scale(1.1)",
  },
});

const background = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  zIndex: "-2",
  display: "flex",
};

const rightSection = {
  width: "100%",
  transition: "0.5s",

  height: "100%",
  position: "relative",
  display: "flex",
};

const leftSection = {
  width: "100%",
  transition: "0.5s",

  height: "100%",
  position: "relative",
  display: "flex",
};

const ServicesMenu = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f6f2eb",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 10 }}>
        Our Services List
      </Typography>
      <Divider
        sx={{
          backgroundColor: "#8f6e45",
          my: 0,
          mt: -1,
          mb: 4,
          width: { md: "15%", xs: "72%" },
          border: "3px solid #8f6e45",
        }}
      />
      <Typography variant="h3" gutterBottom align="center">
        Services We’re Providing
      </Typography>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "80px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          {Services.map((service) => (
            <Fade
              direction="up"
              duration={150 * service.id}
              className={service}
              key={service.id}
              triggerOnce
            >
              <Card
                key={service.id}
                sx={{
                  width: "300px",
                  marginBottom: "20px",
                  position: "relative",
                }}
              >
                <StyledCard>
                  <StyledCardMedia
                    component="img"
                    src={service.image}
                    alt={service.title}
                  />
                  <Box className={background}>
                    <Box className={rightSection}>
                      <Box className={`rightbackground rightbackground1`}></Box>
                      <Box className={`leftbackground rightbackground1`}></Box>
                    </Box>
                    <Box className={leftSection}>
                      <Box className={`rightbackground rightbackground1`}></Box>
                      <Box className={`leftbackground rightbackground1`}></Box>
                    </Box>
                  </Box>
                </StyledCard>
                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    backgroundColor: "rgba(255,255,255,0.8)",
                    padding: "10px",
                  }}
                >
                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="left"
                    sx={{ width: "90%" }}
                  >
                    {service.desc}
                  </Typography>
                  <Box sx={{ textAlign: "center", marginTop: "auto" }}>
                  <Link to={`/services/${service.title.toLowerCase()}`}>
                    <Avatar sx={{ backgroundColor: "#daaa5e" }}>
                      <SouthIcon />
                    </Avatar>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Fade>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesMenu;


