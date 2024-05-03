import React from "react";
import {
  Grid,
  Typography,
  Divider,
  Card,
  CardMedia,
  Container,
  Box,
  CardContent,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import AB from "../Images/About/Component/about-1.png";
import Shape from "../Images/About/Component/shape-3.png";
import { Bounce, Fade } from "react-awesome-reveal";
import "../Styles/Banner.css";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import ChairIcon from "@mui/icons-material/Chair";
import a1 from "../Images/About/TimingComponent/featured-1.jpg";
import a2 from "../Images/About/TimingComponent/featured-2.jpg";
import a3 from "../Images/About/TimingComponent/featured-2.jpg";
import Shape1 from "../Images/About/TimingComponent/shape-5.png";
import Shape2 from "../Images/About/TimingComponent/shape-1.png";
import Icon from "../Images/About/TimingComponent/clock.png";

const images = [a1, a2, a3];

const AboutComponent = () => {
  return (
    <>
      <Container sx={{ mt: 10 }}>
        <Grid container spacing={10} justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Fade triggerOnce cascade delay={400}>
              <div>
                <Typography variant="h5" color="black" gutterBottom>
                  About Five Lights Reno
                </Typography>
                <Divider
                  sx={{
                    backgroundColor: "#8f6e45",
                    my: 1,
                    width: { md: "46%", xs: "72%" },
                    border: "2px solid #8f6e45",
                  }}
                />
                <Typography
                  variant="h2"
                  color="black"
                  my={4}
                  // sx={{ border: "1px solid black" }}
                  gutterBottom
                >
                  We’re Leader in Interior Design Market
                </Typography>
                <Typography
                  variant="body1"
                  gutterBottom
                  // sx={{ border: "1px solid black" }}
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
                </Typography>
                <Box sx={{ my: 4 }}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CheckIcon
                      sx={{ marginRight: 1, my: 1, color: "#8f6e45" }}
                    />
                    <Typography variant="body1" gutterBottom>
                      We’re professional and certified designers
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CheckIcon
                      sx={{ marginRight: 1, my: 1, color: "#8f6e45" }}
                    />
                    <Typography variant="body1" gutterBottom>
                      We use quality material to make your walls awesome
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CheckIcon
                      sx={{ marginRight: 1, my: 1, color: "#8f6e45" }}
                    />
                    <Typography variant="body1" gutterBottom>
                      We care about our customers' satisfaction
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <ChairIcon
                      sx={{
                        marginRight: 1,
                        my: 2,
                        color: "black",
                        height: "60px",
                        width: "60px",
                      }}
                    />
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ mt: 1, color: "#daaa5e" }}
                    >
                      <strong>
                        We have 4+ years of experience to give you better
                        quality results.
                      </strong>
                    </Typography>
                  </Box>
                </Box>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Bounce triggerOnce cascade damping={0.1} delay={600}>
              <Box
                sx={{
                  position: "relative",
                  overflow: "visible",
                  border: "none",
                }}
              >
                <Box
                  sx={{
                    overflow: "visible",
                    border: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    position: "absolute",
                    ml: { md: 23, xs: 10 },
                    width: { md: "170px", xs: "120px" },
                    height: { md: "170px", xs: "120px" },
                    backgroundColor: "#8f6e45",
                    borderRadius: "50%",
                    zIndex: 1,
                  }}
                >
                  <WallpaperIcon
                    sx={{ fontSize: { md: 48, xs: 34 }, color: "white" }}
                  />
                  <Typography variant="body1" color="white" align="center">
                    Founded in 2024
                  </Typography>
                </Box>
                <CardMedia
                  component="img"
                  image={AB}
                  alt="Interior Design"
                  sx={{
                    height: { xs: 350, sm: 570 },
                    position: "relative",
                    overflow: "visible",
                  }}
                />
                <img
                  src={Shape}
                  alt="Shape"
                  style={{
                    position: "absolute",
                    bottom: "25px",
                    right: "-30px",
                    width: "200px",
                    height: "auto",
                    zIndex: -1,
                    animation: "rotate-vert-left 5s linear infinite",
                  }}
                />
              </Box>
            </Bounce>
          </Grid>
        </Grid>
      </Container>

      <>
        <Box sx={{ position: "relative" }}>
          <img
            src={Shape2}
            alt="shape"
            style={{
              position: "absolute",
              top: "-38em",
              left: 0,
              width: "200px",
              height: "auto",
              zIndex: -1,
            }}
          />
          <img
            src={Shape1}
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
            spacing={{ xs: 2, sm: 2, md: 3 }}
            justifyContent="center"
            sx={{ mt: { md: 0, xs: 10 }, mb: { md: 6, xs: 5 } }}
          >
            {images.map((image, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{
                  p: { md: "20px", xs: 0 },
                  position: "relative",
                }}
              >
                <Card
                  sx={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: 400,
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: "10px",
                    // transition: "transform 0.5s ease", // Add transition for smoother effect
                    // "&:hover": {
                    //   transform: "scale(1.1)", // Zoom in effect on hover
                    // },
                  }}
                >
                  {index === 2 ? (
                    <CardContent
                      style={{
                        textAlign: "center",
                        color: "white",
                        background: "rgba(218, 170, 94, 0.9)",
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                        boxShadow: "0px 0px 10px rgba(255, 215, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        position: "relative",
                      }}
                    >
                      <img
                        src={Icon}
                        alt="clock"
                        style={{
                          position: "absolute",
                          top: "-25px",
                          right: "-10px",
                          width: "100px",
                          height: "auto",
                        }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          mr: 5,
                        }}
                      >
                        <Typography
                          variant="h4"
                          style={{ fontWeight: 900, marginBottom: "20px" }}
                        >
                          Timings
                        </Typography>
                        <Typography variant="h5" style={{ fontWeight: 900 }}>
                          Mon to Thur
                        </Typography>
                        <Typography variant="body1">9:00am - 6:00pm</Typography>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 900, mt: 2 }}
                        >
                          Fri to Sat
                        </Typography>
                        <Typography variant="body1">
                          10:00am - 4:00pm
                        </Typography>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 900, mt: 2 }}
                        >
                          Sun
                        </Typography>
                        <Typography variant="body1">Work Holiday</Typography>
                      </Box>
                    </CardContent>
                  ) : (
                    <CardContent
                      sx={{
                        textAlign: "center",
                        color: "black",
                        background: "rgba(255, 255, 255, 1)",
                        width: "65%",
                        margin: "auto",
                        position: "absolute",
                        bottom: { md: 18, xs: 0 },
                        left: "50%",
                        transform: "translateX(-50%)",
                        borderRadius: "10px",
                      }}
                    >
                      {index === 0 && (
                        <Typography
                          variant="h5"
                          align="centers"
                          sx={{
                            fontWeight: "bold",
                            "&:hover": {
                              color: "#daaa5e",
                              cursor: "pointer",
                            },
                          }}
                        >
                          Best Quality Standards
                        </Typography>
                      )}
                      {index === 1 && (
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            "&:hover": {
                              color: "#daaa5e",
                              cursor: "pointer",
                            },
                          }}
                        >
                          Smart & Unique Wall Work
                        </Typography>
                      )}
                    </CardContent>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    </>
  );
};

export default AboutComponent;
