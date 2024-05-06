import React from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box,
    TextField,
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Grid,
    CardHeader,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
    ToggleButton,
    useMediaQuery,
    useTheme,
    Typography,
  } from "@mui/material";
  import BgImage from "./BG1.jpeg";
  import { Slide } from "react-awesome-reveal";
  import { flexbox, styled } from "@mui/system";
  import CheckCircleIcon from '@mui/icons-material/CheckCircle';
  import AddIcon from '@mui/icons-material/Add';
  import RemoveIcon from '@mui/icons-material/Remove';
  import { AccountCircle } from '@mui/icons-material';
  import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
function Contact() {
    const apiKey = 'AIzaSyDCEXgdYGPko3yQq9IfpQcWZvq_nQ7gdCM';
const center = { lat: 37.7749, lng: -122.4194 }; 
const theme = useTheme();
const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const ButtonStyled = styled(Button)({
        backgroundColor: "#d9a95b",
        marginTop: "8px",
        borderRadius: "25px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
      });
    const data = [
        {
            title: "Email",
            src: <CheckCircleIcon/>,
            desc: "loremjnv dvbh vbvh dv vj vfv hf v d c mam AKSMIiwnewfbe frehfrjer te rrrurei gg g ginfusnd sj hcfj erfeuryw hfr gh invundjv e f e cjdjcnieurewut rgdv hj dvs bcjkwndjkq"
        },
        {
            title: "Address",
            src: <AddIcon/>,
            desc: "loremjnv dvbh vbvh mdvj v vjdvj dclsjnidw dwbdwuwth ttb reterw xma  dwhfhe fef iud  wfbwh fhfeiFBUEYFui wfh wuqebdw fhH FHHFIDF  hd ghgdvdv hj dvs bcjkwndjkq"
        },
        {
            title: "Contact",
            src: <RemoveIcon/>,
            desc: "loremjnv dvbh vbvhhd vjd chjscbwb csncbnsbnb cwbxbbs xsaxscc e cnvb vbn  chej cd ce hc e dxhsdx w d wc cde dkw ehDUWJ CW dvdv hj dvs bcjkwndjkq"
        }

    ]
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
    <Slide direction="down" duration={4000} triggerOnce>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        alignItems="center"
        spacing={2}
      >
        <Typography variant="h2" color="inherit" sx={{ color: "white" }}>
          Home
        </Typography>
        <Typography variant="h2" color="inherit" sx={{ color: "white" }}>
          -
        </Typography>
        <Typography variant="h2" color="inherit" sx={{ color: "white" }}>
          Contact Us
        </Typography>
      </Stack>
    </Slide>
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
                  <CardMedia
                  component="div"
                  sx={{
                    height: 130,
                    width: 130,
                    borderRadius: '50%',
                    backgroundColor: '#d9a95b',
                    position: 'absolute',
                    mt: 4,
                    ml:12,
                    // left: 'calc(50% - 50px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box sx={{ fontSize: 48, color: 'white' }}>{image.src}</Box>
                </CardMedia>
                <CardContent sx={{mt:20}}>
                <Typography sx={{fontSize: 23}} fontWeight="bold" variant="body2" color="black" align="center">
                    {image.title}
                  </Typography>
                  <Typography sx={{mt:2 , fontSize: 16}}  variant="body2" color="gray" align="center">
                    {image.desc}
                  </Typography>
                </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

<Box sx={{m: 6}}>
    <Typography variant='h4' align='center' sx={{mt:2 ,textDecoration: "underline" , fontWeight: "bold"}}>
        Contact With Us
    </Typography>
    <Typography variant='h3' align='center' sx={{mt:2 , fontWeight: "bold"}}>
        Drop Us a Message
    </Typography>

</Box>

<Container
            sx={{
                position: "relative",
                width: "100%",
                maxWidth: 1060,
                ml: "auto",
                mr: "auto",
                mt: isSmallScreen ? -4:0,
                mb: 6,
                boxShadow: 8,
                bgcolor: "white",
                borderRadius: 4,
                overflow: "hidden",
            }}
        >
            <CardMedia
                component="img"
                src='https://wazors.smartdemowp.com/wp-content/uploads/contact-image.jpg'
                sx={{ width: "100%", height: 300, borderRadius: "4px 4px 0 0" }}
            />
            <Grid container spacing={2} sx={{ p: 3 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        sx={{ bgcolor: "#f6f2eb", width: "100%" }}
                        id="your-name"
                        label="Your Name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        sx={{ bgcolor: "#f6f2eb", width: "100%" }}
                        id="email-address"
                        label="Email Address"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        sx={{ bgcolor: "#f6f2eb", width: "100%" }}
                        id="subject"
                        label="Subject"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} md={8}>
                    <TextField
                        sx={{ bgcolor: "#f6f2eb", width: "100%" }}
                        id="write-message"
                        label="Write Message"
                        multiline
                        rows={6}
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12} md={4} sx={{ display: "flex", alignItems: "center" }}>
                    <ButtonStyled
                        variant="contained"
                        sx={{
                            width: "100%",
                            height: "100%",
                            bgcolor: "#d9a95b",
                            "&:hover": {
                                bgcolor: "#d9a95b",
                                color: "black",
                                fontWeight: "bold",
                            },
                        }}
                    >
                        Send Message
                    </ButtonStyled>
                </Grid>
            </Grid>
        </Container>



    <Box  sx={{   mt: isSmallScreen ? -4 : 0,zIndex: 3}}>

   
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{width: '100%', height: '400px' }}
        center={center}
        zoom={10}
        >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
          </Box>
  </div>



  )
}

export default Contact