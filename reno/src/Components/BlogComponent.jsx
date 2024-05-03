import React from "react";
import {
  Box,
  Typography,
  Divider,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import B1 from "../Images/About/Blog/blog-v2-1-370x280.jpg";
import B2 from "../Images/About/Blog/blog-v2-2-370x280.jpg";
import B3 from "../Images/About/Blog/blog-v2-3-370x280.jpg";
import { styled } from "@mui/system";
import { Fade } from "react-awesome-reveal";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const StyledCard = styled(Card)({
  width: "90%",
  height: 200,
  overflow: "hidden",
  border: "none",
  marginTop: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "17px",
  borderRadius: "12px",
});

const StyledCardMedia = styled(CardMedia)({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
  border: "none",
  transition: "transform 0.3s ease, background-color 0.3s ease", // Added background-color transition
  "&:hover": {
    transform: "scale(1.1)",
    "&::after": {
      // Use ::after pseudo-element for the overlay
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.9)", // Black RGBA color
    },
  },
});

const blogData = [
  {
    id: 1,
    image: B1,
    title: "How to protect your damaged walls",
    date: "01/01/2023",
    description:
      "There are not many passages of lorem ipsum available alteration in",
  },
  {
    id: 2,
    image: B2,
    title: "Learn the right way to use wall sheets",
    date: "02/02/2023",
    description:
      "There are not many passages of lorem ipsum available alteration in",
  },
  {
    id: 3,
    image: B3,
    title: "Difference between wallpaper and sheets",
    date: "03/03/2023",
    description:
      "There are not many passages of lorem ipsum available alteration in",
  },
];

const BlogComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "100vh",
        mb: { md: 0, xs: 10 },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#f6f2eb",
          // width: { xs: "94.8%", sm: "94.8%", md: "60%", lg: "40%" },
          width: { xs: "100%", sm: "94.8%", md: "40%", lg: "40%" },

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: { xs: "10px", sm: "20px", md: "30px" },
        }}
      >
        <Typography variant="h6">News & Updates</Typography>
        <Divider
          sx={{
            width: "50%",
            marginY: "10px",
            border: "2px solid #d9a95b",
          }}
        />
        <Typography variant="h2" align="center" color="textPrimary">
          Recent Blog Posts
        </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "90%", md: "60%", sm: "90%" },
          padding: { md: "20px", xs: "20px", sm: "40px" },
          Height: "100%",
          overflowY: "auto",
          pt: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {blogData.map((blog) => (
            <Grid
              item
              key={blog.id}
              xs={12}
              sm={6}
              md={4}
              sx={{ mt: { md: 23, xs: 3 } }}
            >
              <Fade
                direction="up"
                duration={500 * blog.id}
                key={blog.id}
                triggerOnce
              >
                <Card
                  sx={{
                    width: "100%",
                    borderRadius: "12px",
                    marginBottom: "10px",
                    border: "1px solid #d9a95b",
                    background: "#1a1a1a",
                  }}
                >
                  <StyledCard>
                    <StyledCardMedia
                      component="img"
                      src={blog.image}
                      alt={blog.name}
                    />
                  </StyledCard>

                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 3,
                      }}
                    >
                      <span
                        style={{
                          color: "#d9a95b",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <AccountCircleOutlinedIcon
                          sx={{ marginRight: "5px", mt: -0.4 }}
                        />
                        by Admin
                      </span>

                      <Box
                        style={{
                          marginRight: "10px",
                          color: "white",
                          backgroundColor: "#d9a95b",
                          width: "36%",
                          border: "2px solid #d9a95b",
                          borderRadius: "15px",
                        }}
                      >
                        <Typography align="center">{blog.date}</Typography>
                      </Box>
                    </Typography>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{
                        border: "2px solid #d9a95b ",

                        borderRadius: "12px",
                        color: "white",
                        "&:hover": {
                          textShadow:
                            "0 0 12px #d9a95b, 0 0 25px #d9a95b, 0 0 35px #d9a95b, 0 0 45px #d9a95b",
                          transition: "text-shadow 0.3s ease",
                          cursor: "pointer",
                        },
                      }}
                    >
                      {blog.title}
                    </Typography>
                    <Typography variant="body1" color="HighlightText" mt={2}>
                      {blog.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BlogComponent;
