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
import AB from "../Images/About/AboutUs Page/pexels-taryn-elliott-4112233.jpg";
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


const services = [
    {
        icon: <CheckIcon sx={{ marginRight: 1, my: 1, color: '#8f6e45' }} />,
        heading: 'Professional & Certified Designers',
        description: 'Our team consists of professional and certified designers who have years of experience in interior design. We ensure top-notch design solutions tailored to your preferences and needs.',
    },
    {
        icon: <CheckIcon sx={{ marginRight: 1, my: 1, color: '#8f6e45' }} />,
        heading: 'Quality Material for Awesome Walls',
        description: 'We prioritize quality materials to transform your walls into stunning masterpieces. From paints to wallpapers, we guarantee durable and visually appealing solutions for your space.',
    },
];


const AboutUsComponent = () => {
    return (
        <>
            <Container sx={{ mt: 10 }}>
                <Grid container spacing={10} justifyContent="space-between">
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
                                        ml: { md: 0, xs: 28 },
                                        width: { md: "120px", xs: "120px" },
                                        height: { md: "120px", xs: "120px" },
                                        backgroundColor: "#8f6e45",
                                        borderRadius: "50%",
                                        zIndex: 1,
                                    }}
                                >
                                    <WallpaperIcon
                                        sx={{ fontSize: { md: 40, xs: 34 }, color: "white" }}
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
                                        ml: { xs: 0, md: 10 },
                                        position: 'relative',
                                        maxWidth: '84%',
                                        borderStyle: "double",
                                        borderRadius: "16px"
                                    }}
                                />

                            </Box>
                        </Bounce>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Fade triggerOnce cascade delay={400}>
                            <div>
                                <Typography variant="h6" color="#84827c" gutterBottom>
                                    Learn More About
                                </Typography>
                                <Divider
                                    sx={{
                                        backgroundColor: "#8f6e45",
                                        my: 1,
                                        width: { md: "31%", xs: "72%" },
                                        borderRadius: "3px",
                                        border: "2px solid #8f6e45",
                                    }}
                                />
                                <Typography
                                    variant="h3"
                                    color="black"
                                    my={4}
                                    sx={{ fontWeight: "bold" }}
                                    gutterBottom
                                >
                                    Get to Know About
                                </Typography>
                                <Box
                                    sx={{
                                        backgroundColor: '#f7f4ef',
                                        borderRadius: '10px',
                                        padding: '20px',
                                    }}>
                                    <Typography variant="h6" align="center" sx={{ fontWeight: "bold", color: "#daaa5e" }}>We have 30+ years of experiences</Typography>
                                </Box>
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    sx={{ mt: 4, color: "#84827c" }}
                                >
                                    There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some
                                    form, by injected humour, or randomised words which don't look
                                    even slightly believable.
                                </Typography>
                                <Box sx={{ my: 4 }}>
                                    <>
                                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                            {services.map((service, index) => (
                                                <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                                                    <Box sx={{ flexShrink: 0, marginRight: 2 }}>
                                                        {service.icon}
                                                    </Box>
                                                    <Box sx={{ flexGrow: 1 }}>
                                                        <Typography variant="h6" gutterBottom>
                                                            {service.heading}
                                                        </Typography>
                                                        <Typography variant="body1" gutterBottom sx={{ color: "#84827c" }}>
                                                            {service.description}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            ))}
                                        </Box>
                                    </>

                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography variant="h6" align="center" sx={{ fontWeight: 'bold' }}>
                                            Call Us Anytime
                                        </Typography>
                                        <Typography variant="h5" gutterBottom align="center" sx={{ mt: 1, color: '#daaa5e', ml: 2 }}>
                                            <strong>647-606-9228, 647-702-2132</strong>
                                        </Typography>
                                    </Box>
                                </Box>
                            </div>
                        </Fade>
                    </Grid>
                </Grid>
            </Container>

            <>
                <Box sx={{ position: "relative" }}>
                   
                    <img
                        src={Shape1}
                        alt="shape"
                        style={{
                            position: "absolute",
                            top: "-40em",
                            left: 0,
                            width: "250px",
                            height: "auto",
                            zIndex: -2,
                        }}
                    />
                </Box>

            </>
        </>
    );
};

export default AboutUsComponent;
