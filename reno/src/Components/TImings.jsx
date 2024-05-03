import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";
import a1 from "../Images/About/TimingComponent/featured-1.jpg";
import a2 from "../Images/About/TimingComponent/featured-2.jpg";
import a3 from "../Images/About/TimingComponent/featured-2.jpg";
import Shape from "../Images/About/TimingComponent/shape-5.png";
import Shape2 from "../Images/About/TimingComponent/shape-1.png";

const images = [a1, a2, a3];

const CardsRow = () => {
  return (
    <>
      <Box sx={{ position: "relative" }}>
        <img
          src={Shape2}
          alt="shape"
          style={{
            position: "absolute",
            top: "-38em",
            left: 0,
            width: "250px",
            height: "auto",
            zIndex: -1,
          }}
        />
        <img
          src={Shape}
          alt="shape"
          style={{
            position: "absolute",
            top: "-22em",
            left: 0,
            width: "250px",
            height: "auto",
            zIndex: -2,
          }}
        />
      </Box>
      <Container>
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
        >
          {images.map((image, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ p: { md: "20px", xs: 0 }, position: "relative" }}
            >
              <Card
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 400,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    background: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <Typography variant="h5">Card {index + 1}</Typography>
                  <Typography variant="body2">
                    Description of the card {index + 1}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CardsRow;

// const Services = [
//   {
//     id: 1,
//     title: "Renovations",
//     desc: "Enhance your living space with our renovation services",
//     image: Renovations,
//   },
//   {
//     id: 2,
//     title: "Basement",
//     desc: "Transform your basement into a functional and stylish space",
//     image: Basement,
//   },
//   {
//     id: 3,
//     title: "Flooring",
//     desc: "Upgrade your floors with our professional flooring solutions",
//     image: Flooring,
//   },
//   {
//     id: 4,
//     title: "Kitchen",
//     desc: "Revitalize your kitchen with our expert remodeling services",
//     image: Kitchen,
//   },
//   {
//     id: 5,
//     title: "Drywall & Taping",
//     desc: "Achieve smooth and flawless walls with our drywall services",
//     image: Drywall,
//   },
//   {
//     id: 6,
//     title: "Tile",
//     desc: "Add elegance and charm to your home with our tiling solutions",
//     image: Title,
//   },
//   {
//     id: 7,
//     title: "Bath",
//     desc: "Create a luxurious bathroom retreat with our renovation services",
//     image: Bath,
//   },
//   {
//     id: 8,
//     title: "Painting",
//     desc: "Refresh and renew your space with our professional painting services",
//     image: Painting,
//   },
//   {
//     id: 9,
//     title: "Exterior Reno",
//     desc: "Boost your home's curb appeal with our exterior renovation services",
//     image: Exterior,
//   },
// ];

// backgroundColor: "#f6f2eb",
// minHeight: "20vh",
// display: "flex",
// flexDirection: "column",
// alignItems: "center",
// justifyContent: "center",
