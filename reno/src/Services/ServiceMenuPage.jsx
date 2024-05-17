import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
  Stack,
  TextField,
  ToggleButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BgImage from "../Images/Banner/pexels-03.jpg";
import { Slide } from "react-awesome-reveal";
import { styled } from "@mui/system";
import B1 from "../Images/Banner/pexels-02.jpg";
import I1 from "../Images/services/customer-service.png";
import I2 from "../Images/services/quotation-mark.png";
import I3 from "../Images/services/Service inside/service-details-v1-2.jpg";
import I4 from "../Images/services/Service inside/service-details-v1-3.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link, useNavigate, useParams } from "react-router-dom";
import categories from "./ServicesData";
import { useForm } from "react-hook-form";
import axios from "axios";

const CategoryCard = styled(Card)({
  backgroundColor: "#F6F2EB",
  padding: "16px",
});

const DividerWithMargin = styled(Divider)({
  marginTop: "1px",
  marginBottom: "16px",
  borderWidth: "2px",
});

const ContactCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "200px",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  backgroundColor: "#d9a95b",
  color: "#fff",
  [theme.breakpoints.up("md")]: {
    minHeight: "220px",
  },
}));

const ButtonStyled = styled(Button)({
  backgroundColor: "#000",
  color: "#fff",
  marginTop: "8px",
  borderRadius: "25px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
});

const RenovationSection = styled("div")({
  textAlign: "center",
});
const RenovationCard = styled(Card)({
  backgroundColor: "#F6F2EB",
  position: "relative",
});

const TextOverlay = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "#fff",
});

const initialExpandedState = "panel0";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#8f6e45",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#8f6e45",
  },
});

const ServiceMenuPage = () => {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  const selectedService = categories.find(
    (service) => service.title.toLowerCase() === serviceName.toLowerCase()
  );
  const [selectedCategory, setSelectedCategory] = useState(serviceName);

  const handleNavigation = (path) => {
    navigate(path);
    scrollToTop();
    setSelectedCategory(path);
  };

  const [expanded, setExpanded] = React.useState(initialExpandedState);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const Homenavi = () => {
    navigate("/");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  let { register, handleSubmit } = useForm();
  const saveQuote = (data) => {
    console.log(data, "this is the data");
    axios
      .post("http://localhost:6073/quote", data)
      .then((res) => {
        console.log(res, "response received");
      })
      .catch((error) => {
        console.error("Error occurred while submitting the form:", error);
      });
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleFreeEstimateClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (data) => {
    // Handle form submission logic
    console.log(data);
    // Example: Close the dialog after form submission
    handleClose();
  };

  let serviceContent;
  if (selectedService) {
    serviceContent = (
      <>
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
            px: { xs: 2, md: 10 },
          }}
        >
          <Box sx={{ ml: { md: 10, xs: 5 } }}>
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
                  onClick={() => {
                    Homenavi();
                    scrollToTop();
                  }}
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
                <Typography
                  variant="h4"
                  color="inherit"
                  sx={{ color: "white" }}
                >
                  {selectedService.title}
                </Typography>
              </Stack>
            </Slide>
            <Slide direction="up" duration={1000} triggerOnce>
              <Typography
                variant="h1"
                sx={{
                  color: "#d9a95b",
                  fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
                }}
              >
                {selectedService.title}
              </Typography>
            </Slide>
          </Box>
        </Box>
        <Container sx={{ mt: 4, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <CategoryCard>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Categories
                  </Typography>
                  <DividerWithMargin sx={{ borderColor: "#d9a95b" }} />
                  {categories.map((category, index) => (
                    <Grid item key={index} xs={12}>
                      <ToggleButton
                        variant="contained"
                        color="primary"
                        sx={{
                          marginBottom: "8px",
                          width: "100%",
                          height: "34px",
                          backgroundColor:
                            selectedCategory === category.path
                              ? "black"
                              : "#d9a95b",
                          color:
                            selectedCategory === category.path
                              ? "white"
                              : "black",
                          textAlign: "left",
                          justifyContent: "flex-start",
                          paddingLeft: "10px",
                          transition:
                            "color 0.3s ease-in-out, background-color 0.3s ease-in-out",
                          borderRadius: "4px",
                          "&:hover": {
                            backgroundColor:
                              selectedCategory === category.path
                                ? "#d9a95b"
                                : "black",
                            color:
                              selectedCategory === category.path
                                ? "black"
                                : "white",
                            fontWeight: "bold",
                          },
                        }}
                        onClick={() => handleNavigation(category.path)}
                      >
                        {category.title}
                      </ToggleButton>
                    </Grid>
                  ))}
                </CardContent>
              </CategoryCard>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Card>
                <CardMedia
                  component="img"
                  sx={{ height: { sm: "50vh", md: "62.5vh" } }}
                  image={selectedService.image}
                  alt="Placeholder Image"
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  } else {
    serviceContent = (
      <Typography variant="h4" align="center">
        Service not found
      </Typography>
    );
  }

  return (
    <>
      <>
        {serviceContent}
        <Container sx={{ mt: 4, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ContactCard>
                <CardContent>
                  <Avatar
                    sx={{
                      width: "130px",
                      height: "130px",
                      bgcolor: "#fff",
                      mt: 3,
                      color: "#d9a95b",
                      marginBottom: "12px",
                      marginLeft: "auto",
                      marginRight: "auto",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={I1}
                      sx={{ height: "60px", width: "60px" }}
                      alt="Placeholder Image"
                    />
                  </Avatar>

                  <Typography variant="h4" align="center" sx={{ mt: 5 }}>
                    647-606-9228
                  </Typography>
                  <Typography variant="h5" align="center" sx={{ mt: 1 }}>
                    Let’s Make a Call For Your Home Interior Designing
                  </Typography>
                  <Link to="/contact">
                    <ButtonStyled
                      variant="contained"
                      sx={{
                        mt: 6,
                        width: "220px",
                        height: "45px",
                        "&:hover": {
                          background: "#d9a95b",
                          color: "black",
                          fontWeight: "bold",
                        },
                      }}
                      onClick={handleOpen}
                    >
                      Free estimate
                    </ButtonStyled>
                  </Link>
                </CardContent>
              </ContactCard>
              <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
                sx={{ backdropFilter: "blur(3px) sepia(5%)" }}
              >
                <DialogTitle>Free out</DialogTitle>
                <DialogContent>
                  <Card
                    className="contact-form-card"
                    sx={{
                      position: "absolute",
                      // top: "50%",
                      // left: "50%",
                      // transform: "translate(-50%, -50%)",
                      maxWidth: 400,
                      mt: { md: 5 },
                      filter: "brightness(150%) grayscale(0%)",
                      backgroundColor: "black",
                      borderRadius: "12px",
                      border: "3px solid #8F6E45",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h5"
                        align="center"
                        sx={{ color: "#8F6E45", fontWeight: "bold" }}
                      >
                        Get Free Quote
                      </Typography>
                      <form onSubmit={handleSubmit(handleFormSubmit)}>
                        <Card
                          className="contact-form-card"
                          sx={{
                            maxWidth: 400,
                            mt: { md: 5 },
                            filter: "brightness(150%) grayscale(0%)",
                            backgroundColor: "black",
                            borderRadius: "12px",
                            border: "3px solid #8F6E45",
                          }}
                        >
                          <CardContent>
                            <form onSubmit={handleSubmit(saveQuote)}>
                              <CustomTextField
                                label="Name"
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                focused
                                InputLabelProps={{
                                  style: { color: "#8F6E45" },
                                }}
                                {...register("name")}
                                InputProps={{
                                  style: {
                                    color: "#8F6E45",
                                    borderColor: "#8F6E45",
                                  },
                                }}
                              />
                              <CustomTextField
                                label="Email"
                                fullWidth
                                margin="normal"
                                focused
                                InputLabelProps={{
                                  style: { color: "#8F6E45" },
                                }}
                                {...register("email")}
                                InputProps={{
                                  style: {
                                    color: "#8F6E45",
                                    borderColor: "#8F6E45",
                                  },
                                }}
                              />
                              <CustomTextField
                                label="Phone"
                                fullWidth
                                margin="normal"
                                focused
                                InputLabelProps={{
                                  style: { color: "#8F6E45" },
                                }}
                                {...register("phone")}
                                InputProps={{
                                  style: {
                                    color: "#8F6E45",
                                    borderColor: "#8F6E45",
                                  },
                                }}
                              />
                              <CustomTextField
                                label="Subject"
                                fullWidth
                                margin="normal"
                                focused
                                InputLabelProps={{
                                  style: { color: "#8F6E45" },
                                }}
                                {...register("subject")}
                                InputProps={{
                                  style: {
                                    color: "#8F6E45",
                                    borderColor: "#8F6E45",
                                  },
                                }}
                              />
                              <CustomTextField
                                label="Description"
                                fullWidth
                                multiline
                                rows={4}
                                margin="normal"
                                focused
                                InputLabelProps={{
                                  style: { color: "#8F6E45" },
                                }}
                                {...register("description")}
                                InputProps={{
                                  style: {
                                    color: "#8F6E45",
                                    borderColor: "#8F6E45",
                                  },
                                }}
                              />
                              <Button
                                type="submit"
                                variant="contained"
                                style={{
                                  backgroundColor: "#8F6E45",
                                  color: "black",
                                }}
                                fullWidth
                              >
                                Submit
                              </Button>
                            </form>
                          </CardContent>
                        </Card>
                      </form>
                    </CardContent>
                  </Card>
                </DialogContent>
              </Dialog>
            </Grid>

            <Grid item xs={12} md={8}>
              <RenovationSection>
                <Typography variant="h3" align="left">
                  {selectedService.Heading}
                </Typography>
                <Typography
                  variant="body1"
                  align="left"
                  sx={{
                    display: "block",
                    unicodeBidi: "isolate",
                    lineHeight: "34px",
                    fontWeight: "bold",
                    color: "#8D8B87",
                  }}
                >
                  {selectedService.Paragraph}
                  <br />
                  {selectedService.subParagrah}
                </Typography>
              </RenovationSection>
            </Grid>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={8} sx={{ position: "relative" }}>
              <RenovationCard
                sx={{ height: { md: "200px", xs: "350px", sm: "200px" } }}
              >
                <CardContent>
                  <CardMedia
                    component="img"
                    image={I2}
                    alt="Quotation Mark"
                    sx={{ width: "150px", height: "auto", marginRight: "auto" }}
                  />
                  <TextOverlay>
                    <Typography
                      variant="body1"
                      align="center"
                      sx={{
                        color: "black",
                        // fontStyle: "italic",
                        fontFamily: "revert-layer",
                      }}
                    >
                      {selectedService.quote}
                    </Typography>
                  </TextOverlay>
                </CardContent>
              </RenovationCard>
            </Grid>

            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={8}>
              <RenovationSection>
                <Typography
                  variant="body1"
                  align="left"
                  sx={{
                    display: "block",
                    unicodeBidi: "isolate",
                    lineHeight: "34px",
                    fontWeight: "bold",
                    color: "#8D8B87",
                  }}
                >
                  {selectedService.Paragraph1}
                </Typography>
              </RenovationSection>
            </Grid>

            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" style={{ color: "#d9a95b" }}>
                Why You Should Work With Us?
              </Typography>
              {selectedService.points.map((point, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckCircleIcon style={{ color: "#d9a95b" }} />
                  </ListItemIcon>
                  <ListItemText primary={point} />
                </ListItem>
              ))}
            </Grid>
            <Grid item xs={12} md={4}>
              <CardMedia
                component="img"
                image={I3}
                alt="Service Image 1"
                sx={{ mb: 3 }}
              />
              <CardMedia component="img" image={I4} alt="Service Image 2" />
            </Grid>
            <Grid item xs={12} md={4}></Grid>

            <Grid item xs={12} md={8}>
              <div>
                {selectedService.FAQ.map((item, faqIndex) => (
                  <Accordion
                    key={faqIndex}
                    expanded={expanded === `panel${faqIndex}`}
                    onChange={handleChange(`panel${faqIndex}`)}
                    defaultExpanded={expanded === `panel${faqIndex}`}
                    sx={{ background: "#F6F2EB" }}
                  >
                    <AccordionSummary
                      expandIcon={
                        expanded === `panel${faqIndex}` ? (
                          <RemoveIcon style={{ color: "#d9a95b" }} />
                        ) : (
                          <AddIcon style={{ color: "black" }} />
                        )
                      }
                      aria-controls={`panel${faqIndex}-content`}
                      id={`panel${faqIndex}-header`}
                    >
                      <Typography
                        variant="body1"
                        style={{
                          color:
                            expanded === `panel${faqIndex}`
                              ? "#d9a95b"
                              : "black",
                        }}
                      >
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{ color: "#8D8B87" }}>
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
      </>
    </>
  );
};

export default ServiceMenuPage;
