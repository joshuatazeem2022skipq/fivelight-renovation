import React, { useEffect, useRef } from "react";
import { keyframes, styled } from "@mui/system";
import { Grid, Button, Card, CardMedia, Typography, Box } from "@mui/material";
import BG from "../Images/About/Discover/discover-area-bg.jpg";
import P1 from "../Images/About/Discover/discover-1.jpg";
import P2 from "../Images/About/Discover/discover-2.jpg";
import { Slide } from "react-awesome-reveal";
import A1 from "../Images/About/AboutUs Page/time-manager.png";

const changeColor = keyframes`
  from {
    background-color: #1a1a1a;
  }
  to {
    background-color: #d9a95b;
  }
`;

const RootContainer = styled("div")({
  flexGrow: 1,
  backgroundImage: `linear-gradient(rgba(217, 169, 91, 0.8), rgba(217, 169, 91, 0.9)), url(${BG})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: {md:"40vh", xs:"80vh"},
  padding: "24px",
  overflowX: "hidden",
  position: "relative",
  marginTop: "0px"
});


const ButtonStyled = styled(Button)({
  backgroundColor: "#1a1a1a",
  color: "white",
  width: "220px",
  height: "60px",
  borderRadius: "35px",
  "&:hover": {
    animation: `${changeColor} 0.5s forwards`,
  },
});



const ContactAbout = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxEffect = () => {
      if (parallaxRef.current) {
        const yOffset = window.pageYOffset;
        parallaxRef.current.style.backgroundPositionY = `${yOffset * 1}px`;
      }
    };

    window.addEventListener("scroll", parallaxEffect);

    return () => {
      window.removeEventListener("scroll", parallaxEffect);
    };
  }, []);

  return (
    <>
      <RootContainer ref={parallaxRef}>
        <Grid container spacing={2} sx={{mb: {md: 13, sm: 16}}}>
          <Grid item xs={10} sm={12} md={6} container justifyContent="center" alignItems="center">
            <Grid container alignItems="center" justifyContent="center">
              <Grid item>
                <CardMedia
                  component="img"
                  src={A1}
                  sx={{mt: {md:12, xs:5 , sm:9},height:"130px" }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h4"  sx={{mt: {md:12, xs:3 , sm:5,}, ml:{md:3, xs: 7}}}>Book your schedule</Typography>
                <Typography variant="h3" color={"HighlightText"} sx={{ml:{md:3, xs:6.5}}}>647-606-9228, 647-702-2132</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={9} md={4} container justifyContent="center" alignItems="center">
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <Typography variant="h4" color={"HighlightText"} sx={{mt: {md:12, xs:6 , sm:9,}, width:{md:"70%", xs: "90%", sm:"100%"}, ml:{xs:5, sm: 9}}}>
                  To book an appointment with an interior designer
                </Typography>
              </Grid>
              <Grid item>
                <ButtonStyled variant="contained" sx={{mt: {md:2, xs:5 , sm:3,}, ml:{md:8, xs:5, sm:9}}}>Discover More</ButtonStyled>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </RootContainer>
    </>
  );
};

export default ContactAbout;
