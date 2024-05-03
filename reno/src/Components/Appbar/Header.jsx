import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tabs,
  Tab,
  Button,
  Divider,
  CardMedia,
  Container,
  Avatar,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { styled } from "@mui/system";
import Logo from "../../Images/Appbar/Logo.png";

const StyledAppBar = styled(AppBar)({
  backgroundColor: "black",
});

const StyledDiv = styled("div")({
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& > div": {
    display: "flex",
    alignItems: "center",
    // marginRight: "24px",
    "& > .MuiDivider-root": {
      marginLeft: "18px",
      marginRight: "18px",
      height: "40px",
      backgroundColor: "white",
      border: "2px solid #434039",
    },
    "& > *": {
      color: "#f9ef9f",
      marginRight: "8px",
    },
  },
});

const StyledToolbar = styled(Toolbar)({
  justifyContent: "space-between",
});

function MyAppBar() {
  return (
    <div>
      <StyledAppBar position="static">
        <Container>
          <Toolbar>
            <CardMedia
              component="img"
              src={Logo}
              alt="Your Logo"
              sx={{ maxWidth: "220px", maxHeight: "120px", mr: 10 }}
            />
            <StyledDiv>
              <div>
                <Avatar sx={{ bgcolor: "#8f6e45", marginRight: "8px" }}>
                  <PhoneIcon />
                </Avatar>
                <Typography variant="body1" sx={{ color: "grey" }}>
                  Call
                  <Typography variant="body1" sx={{ color: "white" }}>
                    647-606-9228
                    <br />
                    647-702-2132
                  </Typography>
                </Typography>
                <Divider orientation="vertical" />
              </div>

              <div>
                <Avatar sx={{ bgcolor: "#8f6e45", marginRight: "8px" }}>
                  <EmailIcon />
                </Avatar>
                <Typography variant="body1" sx={{ color: "grey" }}>
                  Email:
                  <Typography variant="body1" sx={{ color: "white" }}>
                    Fivelightsreno@hotmail.com
                  </Typography>
                </Typography>
                <Divider orientation="vertical" />
              </div>

              <div>
                <Avatar sx={{ bgcolor: "#8f6e45", marginRight: "8px" }}>
                  <LocationOnIcon />
                </Avatar>
                <Typography variant="body1" sx={{ color: "grey" }}>
                  Address:
                  <Typography variant="body1" sx={{ color: "white" }}>
                    1234 Street, City, Country
                  </Typography>
                </Typography>
              </div>
            </StyledDiv>
          </Toolbar>
        </Container>
      </StyledAppBar>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Container>
          <StyledToolbar>
            <Tabs value={0}>
              <Tab label="Home" />
              <Tab label="About Us" />
              <Tab label="Services" />
              <Tab label="Portfolio" />
              <Tab label="Blogs" />
              <Tab label="Contact Us" />
            </Tabs>
            <div>
              <IconButton>
                <InstagramIcon sx={{ color: "#8f6e45" }} />
              </IconButton>
              <IconButton>
                <FacebookIcon sx={{ color: "#8f6e45" }} />
              </IconButton>
              <IconButton>
                <PinterestIcon sx={{ color: "#8f6e45" }} />
              </IconButton>
              <Button
                color="inherit"
                variant="outlined"
                sx={{
                  color: "white",
                  backgroundColor: "#d9a95b",
                  borderRadius: "20px",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                Book Appointment
              </Button>
            </div>
          </StyledToolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default MyAppBar;
