import React from "react";
import { Grid, Box, Typography, Divider, Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import R1 from "../Images/About/Reviews/team-1.jpeg";
import R2 from "../Images/About/Reviews/team-2.jpeg";
import R3 from "../Images/About/Reviews/team-3.jpeg";
import R4 from "../Images/About/Reviews/team-4.jpeg";
import BG1 from "../Images/About/Reviews/testimonial-style1-pattern.png";
import BG from "../Images/About/Reviews/tes-style2-image-box-bg.jpg";

const testimonialsData = [
  {
    image: R1,
    name: "John Doe",
    designation: "CEO",
    description:
      "I have just had two of the most productive work weeks I have had in years. Ben was perfectly matched to my temperament, and has been taking all the backlogged work off my plate and finishing it. I'm really impressed.",
  },
  {
    image: R2,
    name: "Jane Smith",
    designation: "Designer",
    description:
      "Over the past couple of weeks, I've experienced a surge in productivity unlike anything I've seen in years.",
  },
  {
    image: R3,
    name: "Alice Johnson",
    designation: "Co-founder",
    description:
      "Ben's compatibility with my work style has been exceptional, efficiently tackling all pending tasks and clearing my workload.",
  },
  {
    image: R4,
    name: "Bob Brown",
    designation: "CFO",
    description:
      "His ability to swiftly handle my backlog and deliver results has left a lasting impression on me.",
  },
];

const Testimonials = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          backgroundImage: `url(${BG1})`,
          color: "#fff",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            mt: { md: "10em", xs: "5em" },
            ml: { md: "11em", sm: 0, xs: 0 },
          }}
        >
          <Typography variant="h5">Client Testimonials</Typography>
          <Divider
            style={{
              backgroundColor: "#d9a95b",
              marginBottom: "10px",
              width: "25%",
              border: "2px solid #d9a95b",
            }}
          />
          <Typography
            variant="h3"
            sx={{ width: { md: "80%", xs: "100%", sm: "80%" }, mt: 3 }}
          >
            What They’re Saying About Our Work
          </Typography>
        </Container>
        <Box sx={{ mt: 10 }}>
          <Carousel autoPlay={true} interval={3000}>
            {testimonialsData.map((item, index) => (
              <Container
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "300px",
                  width: "500px",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{
                    color: "GrayText",
                    width: { md: "100%", xs: "70%" },
                    ml: { md: 0, xs: -17 },
                  }}
                >
                  {item.description}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    ml: "-17.5em",
                    mt: 2,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <div>
                    <Typography variant="h6" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                      {item.designation}
                    </Typography>
                  </div>
                </Box>
              </Container>
            ))}
          </Carousel>
        </Box>
      </Grid>
      <Grid item xs={12} md={0.8}>
        <Box
          bgcolor="#d9a95b"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          position="relative"
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "white",
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: { md: "rotate(0deg)", xs: "rotate(270deg)" },
              fontWeight: "bold",
            }}
          >
            Customer Reviews
            <Box
              sx={{
                position: "absolute",
                bottom: "130px",
                right: { md: 68, lg: 60 },
                width: "0",
                height: "0",
                borderTop: "solid 20px #d9a95b",
                borderLeft: "solid 20px transparent",
                borderRight: "solid 20px transparent",
                transform: { md: "rotate(90deg)", xs: "rotate(90deg)" },
              }}
            />
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={5.2}
        sx={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      ></Grid>
    </Grid>
  );
};

export default Testimonials;
