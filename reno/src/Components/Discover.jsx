import React, { useEffect, useRef } from "react";
import { keyframes, styled } from "@mui/system";
import { Grid, Button, Card, CardMedia, Typography, Box } from "@mui/material";
import BG from "../Images/About/Discover/discover-area-bg.jpg";
import P1 from "../Images/About/Discover/discover-1.jpg";
import P2 from "../Images/About/Discover/discover-2.jpg";
import { Slide } from "react-awesome-reveal";

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
  height: "auto",
  padding: "24px",
  overflowX: "hidden",
  position: "relative",
});

const TextContainer = styled("div")({
  textAlign: "left",
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

const CardContainer = styled("div")({
  // position: "relative",
  marginBottom: "16px",
  width: {md: "40%", xs:"70%"}, 
  overflow: "hidden",
});

const CardMediaStyled = styled(CardMedia)({
  height: "280px",
  width: "100%", 
  overflow: "hidden",
});

const OverlapContainer = styled(Grid)({
  position: "relative",
});

const Discover = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxEffect = () => {
      if (parallaxRef.current) {
        const yOffset = window.pageYOffset;
        parallaxRef.current.style.backgroundPositionY = `${yOffset * 3}px`;
      }
    };

    window.addEventListener("scroll", parallaxEffect);

    return () => {
      window.removeEventListener("scroll", parallaxEffect);
    };
  }, []);

  return (
    <RootContainer ref={parallaxRef}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} component={TextContainer}>
          <Box sx={{ mt: { md: 17, xs: 10 } }}>
            <Typography variant="h3" gutterBottom color="HighlightText" sx={{width:"80%"}}> 
              We Pay Attention to Every Detail to Make your Room Wall Stunning
            </Typography>
          </Box>
          <ButtonStyled variant="contained">Discover More</ButtonStyled>
        </Grid>
        <Grid item xs={12} sm={6} component={OverlapContainer}>
          <Slide direction="right" duration={3000} triggerOnce>
            <CardContainer sx={{ zIndex: 2, mt:-2, left: "27%", position: "absolute" }}
            >
              <Card>
                <CardMediaStyled component="img" image={P1} />
              </Card>
            </CardContainer>
          </Slide>
          <CardContainer>
            <Card sx={{width:"280px"}}>
              <CardMediaStyled component="img" image={P2} />
            </Card>
          </CardContainer>
        </Grid>
      </Grid>
    </RootContainer>
  );
};

export default Discover;
