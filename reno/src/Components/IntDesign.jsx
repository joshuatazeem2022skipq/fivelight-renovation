import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Divider,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Box,
  Container,
  CardActions,
} from "@mui/material";
import { Facebook, Instagram, Pinterest } from "@mui/icons-material";

import BG from "../Images/About/Design/interior-design-area-bg.jpg";
import W1 from "../Images/About/Design/wallpaper (1).png";
import W2 from "../Images/About/Design/wallpaper (2).png";
import M1 from "../Images/About/Design/material-1.png";
import P1 from "../Images/About/Design/project-v3-1.jpg";
import P2 from "../Images/About/Design/project-v3-2.jpg";
import t1 from "../Images/About/Design/team-v2-1.jpg";
import t2 from "../Images/About/Design/team-v2-2.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { styled } from "@mui/system";

const StyledCard = styled(Card)({
  width: 300,
  height: 200,
  overflow: "hidden",
  border: "none",
});

const StyledCardMedia = styled(CardMedia)({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  border: "none",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

const IntDesign = () => {
  const [displayContent, setDisplayContent] = useState("material");

  const handleButtonClick = (content) => {
    setDisplayContent(content);
  };

  const designers = [
    { name: "Jessica Brown", image: t1 },
    { name: "Mike Hardson", image: t2 },
  ];

  const [hovering, setHovering] = useState(null);

  const handleMouseEnter = (index) => {
    setHovering(index);
  };

  const handleMouseLeave = () => {
    setHovering(null);
  };

  const renderContent = () => {
    switch (displayContent) {
      case "material":
        return (
          <>
            <Box display="flex" alignItems="center" justifyContent="center">
              <img
                src={M1}
                alt="Quality Material"
                style={{ marginRight: "10px" }}
              />
              <Typography variant="body1" color="white">
                Build your dream on a foundation of quality. We source only the
                finest materials, ensuring exceptional performance and lasting
                beauty in every project. From enduring strength to luxurious
                finishes, our commitment to quality elevates your space in every
                way.
              </Typography>
            </Box>
          </>
        );
      // case "team":
      //   return (
      //     <>
      //       <Grid container spacing={2}>
      //         {designers.map((designer, index) => (
      //           <Grid item xs={6} key={index}>
      //             <Card
      //               onMouseEnter={() => handleMouseEnter(index)}
      //               onMouseLeave={handleMouseLeave}
      //               sx={{
      //                 position: "relative",
      //               }}
      //             >
      //               <StyledCard>
      //                 <StyledCardMedia
      //                   component="img"
      //                   src={designer.image}
      //                   alt={designer.name}
      //                 />
      //               </StyledCard>
      //               <CardActions
      //                 disableSpacing
      //                 style={{
      //                   display: "flex",
      //                   justifyContent: "center",
      //                   position: "absolute",
      //                   bottom: -7,
      //                   left: 0,
      //                   right: 0,
      //                   backgroundColor: "rgba(0, 0, 0, 0.5)",
      //                   transition: "opacity 0.3s",
      //                   opacity: hovering === index ? 1 : 0,
      //                 }}
      //               >
      //                 <IconButton>
      //                   <FacebookIcon />
      //                 </IconButton>
      //                 <IconButton>
      //                   <InstagramIcon />
      //                 </IconButton>
      //                 <IconButton>
      //                   <PinterestIcon />
      //                 </IconButton>
      //               </CardActions>
      //               <CardContent>
      //                 <Typography
      //                   variant="h6"
      //                   color="textPrimary"
      //                   align="center"
      //                 >
      //                   {designer.name}
      //                 </Typography>
      //                 <Typography
      //                   variant="subtitle2"
      //                   color="textSecondary"
      //                   gutterBottom
      //                   align="center"
      //                 >
      //                   Designer
      //                 </Typography>
      //               </CardContent>
      //             </Card>
      //           </Grid>
      //         ))}
      //       </Grid>
      //     </>
      //   );
      case "work":
        return (
          <>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Card
                  onMouseEnter={() => setHovering(1)}
                  onMouseLeave={() => setHovering(null)}
                  sx={{
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300px"
                    width="100%"
                    image={P1}
                    alt="Project 1"
                  />
                  {hovering === 1 && (
                    <CardContent
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        borderRadius: "10px",
                        textAlign: "center",
                        transition: "transform 0.3s",
                      }}
                    >
                      <Typography variant="h5" color="textPrimary">
                        Washroom wall design
                      </Typography>
                    </CardContent>
                  )}
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card
                  onMouseEnter={() => setHovering(2)}
                  onMouseLeave={() => setHovering(null)}
                  sx={{
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="300px"
                    width="100%"
                    image={P2}
                    alt="Project 2"
                  />
                  {hovering === 2 && (
                    <CardContent
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        borderRadius: "10px",
                        textAlign: "center",
                        transition: "transform 0.3s",
                      }}
                    >
                      <Typography variant="h5" color="textPrimary">
                        Washroom wall design
                      </Typography>
                    </CardContent>
                  )}
                </Card>
              </Grid>
            </Grid>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        minWidth: "100%",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url(${BG})`,
        color: "white",
        mt: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: { md: 10, xs: 10 },
            }}
          >
            <Typography variant="h5" align="left" sx={{ mt: { md: 2, xs: 0 } }}>
              Best Interior Design
            </Typography>
            <Divider
              sx={{
                mb: { md: 6, xs: 5 },
                width: { md: "37%", xs: "60%" },
                backgroundColor: "#daaa5e",
                border: "3px solid #daaa5e",
              }}
            />
            <Typography variant="h4" align="left" sx={{ mb: 5 }}>
              Quality Work That Meets Your Expectations
            </Typography>
            <Box display="flex" flexDirection="row">
              {["material", "work"].map((content) => (
                <Button
                  key={content}
                  onClick={() => handleButtonClick(content)}
                  fullWidth
                  variant={
                    displayContent === content ? "contained" : "outlined"
                  }
                  sx={{
                    mr: 1,
                    border: "none",
                    borderRadius: "16px",
                    bgcolor: displayContent === content ? "#daaa5e" : "white",
                    color: displayContent === content ? "white" : "black",
                    "&:hover": {
                      bgcolor: "#daaa5e",
                      color: "white",
                      border: "none",
                    },
                  }}
                >
                  {content === "material"
                    ? "Quality Material"
                    : content === "team"
                    ? "Expert Team"
                    : "Smart Work"}
                </Button>
              ))}
            </Box>
            <Box mt={6}>{renderContent()}</Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Box
                display="flex"
                alignItems="center"
                mb={2}
                sx={{ mt: { md: 10, xs: 10 } }}
              >
                <img
                  src={W1}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginTop: "-100px",
                  }}
                  alt="Innovative Wall Designs"
                />
                <Box>
                  <Typography
                    variant="h4"
                    align="left"
                    sx={{ marginLeft: "10px", color: "white" }}
                  >
                    Innovative Wall Designs
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    sx={{
                      marginLeft: "10px",
                      color: "GrayText",
                      width: { xs: "100%", md: "100%" },
                      mt: { xs: 3, md: 0 },
                    }}
                  >
                    Break the mold. Reimagine your space. Explore a world of
                    innovative wall designs that push boundaries and ignite your
                    creativity. We don't just paint walls, we create
                    experiences.
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Divider
              sx={{
                mb: { md: 10, xs: 5 },
                mt: { md: 10, xs: 5 },
                width: "70%",
                backgroundColor: "#daaa5e",
                mx: "auto",
              }}
            />
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Box
                display="flex"
                alignItems="center"
                mb={2}
                sx={{ mt: { xs: 3, md: 0 } }}
              >
                <img
                  src={W2}
                  style={{
                    width: "100px",
                    height: "100px",
                    marginTop: "-100px",
                  }}
                  alt="High Quality Wall Material"
                />
                <Box>
                  <Typography
                    variant="h4"
                    align="left"
                    sx={{ marginLeft: "10px", color: "white" }}
                  >
                    High Quality Wall Material
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    sx={{
                      marginLeft: "10px",
                      color: "GrayText",
                      width: { xs: "100%", md: "100%" },
                      mt: { xs: 3, md: 0 },
                    }}
                  >
                    Elevate your vision with enduring quality. We use only the
                    finest, most innovative wall materials to ensure your dream
                    space is not just beautiful, but built to last. Experience
                    the difference that premium materials make - from lasting
                    durability to stunning aesthetics.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IntDesign;
