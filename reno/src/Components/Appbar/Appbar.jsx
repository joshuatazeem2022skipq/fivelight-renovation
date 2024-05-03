import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CardMedia,
  useMediaQuery,
  useTheme,
  Drawer,
  Tab,
  Tabs,
  Box,
  Divider,
  Button,
  Avatar,
  Container,
} from "@mui/material";
import {
  Menu as MenuIcon,
  MailOutline as MailOutlineIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";
import Logo from "../../Images/Appbar/Logo.png";
import CancelIcon from "@mui/icons-material/Cancel";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "../../Styles/Banner.css";
import { useNavigate } from "react-router-dom";

const buttons = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Us", path: "/aboutus" },
  { id: 3, title: "Services", path: "/services" },
  { id: 4, title: "Portfolio", path: "/portfolio" },
  { id: 5, title: "Blogs", path: "/blogs" },
  { id: 6, title: "Contact Us", path: "/contact" },
  { id: 7, title: "Login", path: "/login" },
  { id: 7, title: "Signup", path: "/signup" },
];

const AppBarWithTabs = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(
    localStorage.getItem("activeTab") || "/"
  );

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleTabChange = (newValue) => {
    setActiveTab(newValue);
    localStorage.setItem("activeTab", newValue);
  };
  const [showAppBar, setShowAppBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      if (currentPosition > 100) {
        setShowAppBar(true);
      } else {
        setShowAppBar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "black", height: "100px" }}
      >
        <Toolbar sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            {!isMobile && !isTablet && (
              <>
                <IconButton
                  color="inherit"
                  aria-label="Phone"
                  onClick={() => console.log("Phone clicked")}
                >
                  <PhoneIcon style={{ color: "#8f6e45", fontSize: "28px" }} />
                </IconButton>
                <Typography
                  variant="body1"
                  sx={{
                    marginLeft: "5px",
                    color: "#8f6e45",
                    fontSize: "18px",
                  }}
                >
                  <span className="hoverEffect">647-606-9228, </span>
                  <span className="hoverEffect">647-702-2132</span>
                </Typography>
              </>
            )}

            <Box sx={{ flexGrow: 1 }}>
              <CardMedia
                component="img"
                image={Logo}
                alt="Logo"
                sx={{ maxWidth: "220px", maxHeight: "110px", margin: "auto" }}
              />
            </Box>
            {!isMobile && !isTablet && (
              <div
                style={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: "#8f6e45",
                    "&:hover .MuiSvgIcon-root": {
                      color: "white",
                      transition: "color 0.3s ease",
                      boxShadow: "0px 0px 7px white inset, 0px 0px 7px white ",
                    },
                  }}
                >
                  <InstagramIcon sx={{ color: "black" }} />
                </Avatar>
                <Divider
                  orientation="vertical"
                  sx={{
                    backgroundColor: "#8f6e45",
                    border: "2px solid #8f6e45",
                    mx: 3,
                  }}
                />
                <Avatar
                  sx={{
                    bgcolor: "#8f6e45",
                    "&:hover .MuiSvgIcon-root": {
                      color: "white",
                      transition: "color 0.3s ease",
                      boxShadow: "0px 0px 7px white inset, 0px 0px 7px white ",
                    },
                  }}
                >
                  <FacebookIcon sx={{ color: "black" }} />
                </Avatar>
                <Divider
                  orientation="vertical"
                  sx={{
                    backgroundColor: "#8f6e45",
                    border: "2px solid #8f6e45",
                    mx: 3,
                  }}
                />
                <Avatar
                  sx={{
                    bgcolor: "#8f6e45",
                    "&:hover .MuiSvgIcon-root": {
                      color: "white",
                      transition: "color 0.3s ease",
                      boxShadow: "0px 0px 7px white inset, 0px 0px 7px white ",
                    },
                  }}
                >
                  <PinterestIcon sx={{ color: "black" }} />
                </Avatar>
              </div>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {isMobile || isTablet ? (
        <>
          <AppBar position="static" color="inherit">
            <Toolbar>
              <IconButton
                aria-label="Menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer}
                color="inherit"
              >
                <MenuIcon style={{ color: "#8f6e45", fontSize: "37px" }} />
              </IconButton>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Button
                  color="inherit"
                  variant="outlined"
                  sx={{
                    color: "white",
                    backgroundColor: "#d9a95b",
                    borderRadius: "26px",
                    mx: { md: 8, xs: 0 },
                    height: { md: "30px", xs: "50px" },
                    "&:hover": { backgroundColor: "black" },
                  }}
                >
                  Book Appointment
                </Button>
              </Box>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer}
            variant="temporary"
          >
            <Box
              sx={{
                width: 250,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "black",
                height: "100%",
              }}
            >
              <CardMedia
                component="img"
                src={Logo}
                sx={{ maxWidth: "180px", ml: "auto", mt: 0, mb: 0, mr: "auto" }}
              />
              <IconButton
                edge="end"
                color="inherit"
                onClick={toggleDrawer}
                sx={{ position: "absolute", top: "0px", right: "13px" }}
              >
                <CancelIcon sx={{ color: "#8f6e45" }} />
              </IconButton>
              {buttons.map((button) => (
                <div key={button.id}>
                  <Button
                    onClick={() => {
                      toggleDrawer();
                      handleTabChange(button.path);
                    }}
                    sx={{ my: 1, color: "#8f6e45" }}
                  >
                    {button.title}
                  </Button>
                  <Divider sx={{ backgroundColor: "#8f6e45" }} />
                </div>
              ))}
            </Box>
          </Drawer>
        </>
      ) : (
        <AppBar position="static" color="inherit">
          <Toolbar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Tabs
                value={activeTab}
                onChange={(event, newValue) => handleTabChange(newValue)}
                sx={{
                  "& .MuiTabs-flexContainer": { color: "#9ba6bd" },
                  "& .MuiTab-root": { fontWeight: 900 },
                  display: { xs: "none", md: "flex" },
                }}
              >
                {buttons.map((button) => (
                  <Tab
                    key={button.id}
                    label={button.title}
                    value={button.path}
                    component="a"
                    onClick={() => navigate(button.path)}
                    style={{ fontSize: "14px", marginLeft: "15px" }}
                  />
                ))}
              </Tabs>
              <Box sx={{ display: "flex", alignItems: "center", mx: 3 }}>
                {!isMobile && !isTablet && (
                  <>
                    <IconButton
                      color="inherit"
                      aria-label="Mail"
                      onClick={() => console.log("Mail clicked")}
                    >
                      <MailOutlineIcon
                        style={{ color: "#8f6e45", fontSize: "28px" }}
                      />
                    </IconButton>
                    <Typography
                      variant="body1"
                      style={{
                        marginLeft: "5px",
                        color: "#8f6e45",
                        fontSize: "18px",
                      }}
                    >
                      Fivelightsreno@hotmail.com
                    </Typography>
                  </>
                )}
                <Button
                  color="inherit"
                  variant="outlined"
                  sx={{
                    color: "white",
                    backgroundColor: "#d9a95b",
                    borderRadius: "26px",
                    mx: { md: 3, xs: 1 },
                    height: "3em",
                    "&:hover": { backgroundColor: "black" },
                  }}
                >
                  Book Appointment
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      )}
      {!isMobile && !isTablet && (
        <AppBar
          position="fixed"
          style={{
            backgroundColor: "black",
            height: "100px",
            top: showAppBar ? 0 : -100,
            transition: "top 0.5s",
          }}
        >
          <Container>
            <Toolbar
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <CardMedia
                  component="img"
                  image={Logo}
                  alt="Logo"
                  sx={{
                    maxWidth: "240px",
                    maxHeight: "110px",
                    margin: "auto",
                  }}
                />
              </div>

              <Tabs
                value={activeTab}
                onChange={(event, newValue) => handleTabChange(newValue)}
                sx={{
                  "& .MuiTabs-flexContainer": { color: "#8f6e45" },
                  "& .MuiTab-root": { fontWeight: 900 },
                }}
              >
                {buttons.map((button) => (
                  <Tab
                    key={button.id}
                    label={button.title}
                    value={button.path}
                    onClick={() => navigate(button.path)}
                    style={{ fontSize: "14px", color: "#8f6e45" }}
                  />
                ))}
              </Tabs>
            </Toolbar>
          </Container>
        </AppBar>
      )}
    </>
  );
};

export default AppBarWithTabs;
