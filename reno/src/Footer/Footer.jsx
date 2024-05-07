import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Logo from "../Images/Appbar/Logo.png";
import F1 from "../Images/Footer/footer-shape-1.png";
import F2 from "../Images/Footer/footer-shape-2.png";
import F3 from "../Images/Footer/footer-shape-3.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css";
import { styled } from "@mui/system";


const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#8f6e45",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#8f6e45",
  },
});

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box position="relative" overflow="hidden" bgcolor="rgba(0,0,0,0.8)">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "72vh",
          minWidth: "100%",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${F1}), url(${F2}), url(${F3})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition:
            "center bottom, left top, right top, right bottom",
          backgroundSize: "100% auto, 600px 572px, 200px auto, 200px auto",
          color: "white",
        }}
      >
        <Box margin="50px auto">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={8} md={3} style={{ textAlign: "center" }}>
              <img
                src={Logo}
                alt="logo"
                style={{ width: "100%", marginTop: -50 }}
              />
              <Typography
                variant="body2"
                style={{
                  color: "#a09c93",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  marginTop: -40,
                }}
              >
                Expert Design, Flawless Execution: Five Lights Reno Makes it
                Easy
              </Typography>
              <Divider
                style={{
                  marginTop: 10,
                  marginBottom: 10,
                  backgroundColor: "grey",
                }}
              />
              {[
                {
                  icon: <PhoneIcon />,
                  text: (
                    <div>
                      <p>
                        <a
                          href="tel:647-606-9228"
                          style={{ cursor: "pointer" }}
                        >
                          Syed Humair 647-606-9228
                        </a>
                      </p>
                      <p>
                        <a
                          href="tel:647-702-2132"
                          style={{ cursor: "pointer" }}
                        >
                          Syed Daniyal 647-702-2132
                        </a>
                      </p>
                    </div>
                  ),
                },
                {
                  icon: <MailIcon />,
                  text: (
                    <a
                      href="mailto:Fivelightsreno@hotmail.com"
                      style={{
                        textDecoration: "none",
                        color: "#d9a95b",
                        cursor: "pointer",
                      }}
                    >
                      Fivelightsreno@hotmail.com
                    </a>
                  ),
                },
                { icon: <LocationOnIcon />, text: "Pickering, ON, Canada" },
              ].map((item, index) => (
                <Box
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 5,
                    marginTop: 30,
                  }}
                  sx={{ ml: { xs: 5, md: 0 }, color: "#d9a95b" }}
                >
                  {item.icon}
                  <Typography
                    variant="body1"
                    style={{ color: "#d9a95b", marginLeft: 20 }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Grid>

            {[
              {
                title: "Links",
                links: [
                  { name: "Home", path: "/" },
                  { name: "About Us", path: "/aboutus" },
                  { name: "Portfolio", path: "/portfolio" },
                  { name: "Blogs", path: "/blogs" },
                  { name: "Contact Us", path: "/contact" },
                ],
              },
              {
                title: "Services",
                links: [
                  { name: "Renovations", path: "/services/renovations" },
                  { name: "Legal Basement", path: "/services/Legal basement" },
                  { name: "Flooring", path: "/services/flooring" },
                  { name: "Kitchen", path: "/services/kitchen" },
                  {
                    name: "Drywall & Taping",
                    path: "/services/drywall & taping",
                  },
                  { name: "Tile", path: "/services/tile" },
                  { name: "Bath", path: "/services/bath" },
                  { name: "Painting", path: "/services/painting" },
                  { name: "Exterior Reno", path: "/services/exterior reno" },
                ],
              },
              {
                title: "Contact",
                text: "Sign up email to get our daily latest news & updates from us",
              },
            ].map((column, index) => (
              <Grid item xs={12} sm={8} md={3} key={index}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "white",
                    mt: 3,
                    ml: {
                      xs: 5,
                      md: column.title === "Links" ? 8 : 0,
                    },
                  }}
                >
                  {column.title}
                </Typography>
                <Divider
                  style={{
                    backgroundColor: "#d9a95b",
                    border: "2px solid #d9a95b",
                    width: "30%",
                  }}
                  sx={{ ml: { xs: 5, md: column.title === "Links" ? 8 : 0 } }}
                />
                {column.links ? (
                  column.links.map((link, idx) => (
                    <Typography
                      variant="inherit"
                      key={idx}
                      sx={{
                        color: "#a09c93",
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                        mb: 1,
                        mt: 2,
                        ml: { xs: 5, md: column.title === "Links" ? 8 : 0 },
                        transition: "color 0.3s ease",
                        "&:hover": {
                          color: "#d9a95b",
                        },
                      }}
                    >
                      <Link to={link.path} onClick={scrollToTop}>
                        {link.name}
                      </Link>
                    </Typography>
                  ))
                ) : (
                  <>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#a09c93",
                        fontFamily: "sans-serif",
                        fontWeight: "bold",
                        mb: 1,
                        mt: 2,
                        ml: { xs: 5, md: 0 },
                        width: { xs: "70%", md: "100%" },
                      }}
                    >
                      {column.text}
                    </Typography>
                    <Box display="flex" alignItems="center" mt={2}>
                      <CustomTextField
                        variant="outlined"
                        placeholder="Subscribe"
                        focused
                        sx={{
                          width: { md: "80%", xs: "60%" },
                          ml: { xs: 5, md: 0 },
                        }}
                        InputLabelProps={{
                          style: { color: "#8f6e45" },
                        }}
                        InputProps={{
                          style: {
                            color: "#8f6e45",
                            borderColor: "#8f6e45",
                            borderTopLeftRadius: "30px",
                            borderBottomLeftRadius: "30px",
                          },
                        }}
                      />
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "0 4px 4px 0",
                          marginLeft: "-4px",
                          backgroundColor: "#d9a95b",
                          color: "white",
                          borderTopRightRadius: "30px",
                          borderBottomRightRadius: "30px",
                          height: "56.5px",
                          "&:hover": {
                            backgroundColor: "#8f6e45",
                            color: "white",
                          },
                        }}
                      >
                        Go
                      </Button>
                    </Box>
                    <Box display="flex" sx={{ ml: { xs: 5, md: 0 }, mt: 3 }}>
                      <a
                        href="https://www.facebook.com/humair.kazmi/"
                        target="_blank"
                      >
                        <FacebookIcon
                          sx={{
                            cursor: "pointer",
                            "&:hover": {
                              color: "#d9a95b",
                              transition: "color 0.3s ease",
                              boxShadow:
                                "0px 0px 7px #d9a95b inset, 0px 0px 7px white ",
                            },
                          }}
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/fivelightsreno?igsh=MWtwbTFsMHA2ZzlhZQ=="
                        target="_blank"
                      >
                        <InstagramIcon
                          sx={{
                            cursor: "pointer",
                            ml: 3,
                            "&:hover": {
                              color: "#d9a95b",
                              transition: "color 0.3s ease",
                              boxShadow:
                                "0px 0px 7px #d9a95b inset, 0px 0px 7px white ",
                            },
                          }}
                        />
                      </a>
                      <a href="https://www.pinterest.com" target="_blank">
                        <PinterestIcon
                          sx={{
                            cursor: "pointer",
                            ml: 3,
                            "&:hover": {
                              color: "#d9a95b",
                              transition: "color 0.3s ease",
                              boxShadow:
                                "0px 0px 7px #d9a95b inset, 0px 0px 7px white ",
                            },
                          }}
                        />
                      </a>
                    </Box>
                  </>
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
