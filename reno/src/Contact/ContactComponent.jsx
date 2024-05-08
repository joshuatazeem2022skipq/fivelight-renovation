import React from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";
import axios from "axios"

import BgImage from "../Images/Contact/BG.jpg";
import { Slide } from "react-awesome-reveal";
import { styled } from "@mui/system";
import MailIcon from "@mui/icons-material/Mail";
import BusinessIcon from "@mui/icons-material/Business";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import BG2 from "../Images/About/Design/interior-design-area-bg.jpg";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";

const StyledCard = styled(Card)({
  width: "100%",
  height: 400,
  overflow: "hidden",
  border: "none",
  marginTop: "10px",
  borderRadius: "25px",
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

const ButtonStyled = styled(Button)({
  width: "100%",
  height: "100%",
  background: "#d9a95b",
  "&:hover": {
    background: "#d9a95b",
    color: "black",
    fontWeight: "bold",

  },
});

function ContactComponent() {
  const navigate = useNavigate();
  let { register, handleSubmit } = useForm();

  const saveQuote = (data) => {
   
    console.log(data)
        axios.post("http://localhost:6073/quote", data)
      .then(function (resp) {
        // move("/login")
        // NotificationManager.success("User Created");
        console.log(resp)
          // Handle the response
      })
      .catch(function (error) {
        // Handle errors
        console.error("Error:", error);
      });
        }
  const Homenavi = () => {
    navigate("/");
  };
  const apiKey = "AIzaSyDCEXgdYGPko3yQq9IfpQcWZvq_nQ7gdCM";
  const center = {
    lat: 43.8358,
    lng: -79.0908,
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const data = [
    {
      title: "Email",
      src: <MailIcon sx={{ width: "70px", height: "70px" }} />,
      desc: (
        <a
          href="mailto:Fivelightsreno@hotmail.com"
          style={{
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          Fivelightsreno@hotmail.com
        </a>
      ),
    },
    {
      title: "Address",
      src: <BusinessIcon sx={{ width: "70px", height: "70px" }} />,
      desc: "Pickering, ON, Canada",
    },
    {
      title: "Contact",
      src: <ContactPhoneIcon sx={{ width: "70px", height: "70px" }} />,
      desc: (
        <div>
          <p>
            <a href="tel:647-606-9228" style={{ cursor: "pointer" }}>
              Syed Humair 647-606-9228
            </a>
          </p>
          <p>
            <a href="tel:647-702-2132" style={{ cursor: "pointer" }}>
              Syed Daniyal 647-702-2132
            </a>
          </p>
        </div>
      ),
    },
  ];
  return (
    <div>
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
          px: { xs: 2, md: 20 },
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
                Contact Us
              </Typography>
            </Stack>
          </Slide>
          <Slide direction="up" duration={1000} triggerOnce>
            <Typography variant="h1" sx={{ color: "#d9a95b" }}>
              Contact Us
            </Typography>
          </Slide>
        </Box>
      </Box>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 3 }}
          justifyContent="center"
          sx={{ mt: { md: 0, xs: 10 }, mb: { md: 6, xs: 5 } }}
        >
          {data.map((image, index) => (
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
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 360,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  position: "relative",
                  borderStyle: "double",
                  border: "1px solid #a09c93",
                  transition: "box-shadow 0.3s ease",
                  "&:hover": {
                    boxShadow: "0px 0px 12px #d9a95b",
                  },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 130,
                    width: 130,
                    borderRadius: "50%",
                    backgroundColor: "#d9a95b",
                    position: "absolute",
                    top: 28,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ fontSize: 48, color: "white" }}>{image.src}</Box>
                </CardMedia>
                <CardContent sx={{ mt: 10 }}>
                  <Typography
                    fontWeight="bold"
                    variant="h5"
                    color="black"
                    align="center"
                  >
                    {image.title}
                  </Typography>
                  <Typography
                    sx={{ mt: 2 }}
                    variant="h6"
                    color="gray"
                    align="center"
                  >
                    {image.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ m: 6 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ mt: 2, textDecoration: "underline", fontWeight: "bold" }}
        >
          Contact With Us
        </Typography>
        <Typography
          variant="h3"
          align="center"
          sx={{ mt: 2, fontWeight: "bold" }}
        >
          Drop Us a Message
        </Typography>
      </Box>

      <Container
        sx={{
          position: "relative",
          width: "40%",
          margin: "auto",
          mt: isSmallScreen ? -4 : 0,
          mb: 6,
          boxShadow: 8,
          bgcolor: "white",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <Grid container spacing={2} sx={{ p: 3 }}>
          <StyledCard sx={{ ml: 2 }}>
            <StyledCardMedia component="img" src={BG2} />
          </StyledCard>

          <form style={{ width: "100%" }} onSubmit={handleSubmit(saveQuote)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ bgcolor: "#f6f2eb", width: "100%", mb: 2, mt: 3 }}
                  label="name"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#8f6e45" } }}
                  InputProps={{
                    style: { color: "#8f6e45", borderColor: "#8f6e45" },
                  }}
                  {...register("name")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ bgcolor: "#f6f2eb", width: "100%", mb: 2, mt: 3 }}
                  label="email"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#8f6e45" } }}
                  InputProps={{
                    style: { color: "#8f6e45", borderColor: "#8f6e45" },
                  }}
                  {...register("email")}
                />
              </Grid>
            </Grid>

            {/* Phone and Subject fields */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ bgcolor: "#f6f2eb", width: "100%", mb: 2, mt: 2 }}
                  label="phone"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#8f6e45" } }}
                  InputProps={{
                    style: { color: "#8f6e45", borderColor: "#8f6e45" },
                  }}
                  {...register("phone")}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ bgcolor: "#f6f2eb", width: "100%", mb: 2, mt: 2 }}
                  label="subject"
                  fullWidth
                  variant="outlined"
                  InputLabelProps={{ style: { color: "#8f6e45" } }}
                  InputProps={{
                    style: { color: "#8f6e45", borderColor: "#8f6e45" },
                  }}
                  {...register("subject")}
                />
              </Grid>
            </Grid>

            {/* Description field */}
            <Grid item xs={12}>
              <TextField
                sx={{ bgcolor: "#f6f2eb", width: "100%", mb: 2, mt: 2 }}
                label="description"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                InputLabelProps={{ style: { color: "#8f6e45" } }}
                InputProps={{
                  style: { color: "#8f6e45", borderColor: "#8f6e45" },
                }}
                {...register("description")}
              />
            </Grid>

            {/* Submit Button */}
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ButtonStyled type="submit" variant="contained">Send Message</ButtonStyled>
            </Grid>
          </form> 
        </Grid>
      </Container>

      <Box sx={{ mt: isSmallScreen ? -4 : 0, zIndex: 3 }}>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "400px" }}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </Box>
    </div>
  );
}

export default ContactComponent;
