import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import { Fade } from "react-awesome-reveal";
import BG from "../../Images/Banner/pexels-01.jpg";
import BG1 from "../../Images/Banner/pexels-02.jpg";

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#8f6e45",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#8f6e45",
  },
});

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          minWidth: "100%",
          minHeight: "100vh",
          backgroundSize: "100% 100%",
          boxShadow: "20px 20px 10px black",
          animation: "slider 12s linear infinite",
          filter: "brightness(70%)",
          position: "absolute",
          backgroundPosition: "center",
        }}
      />
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            className="text-box"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              padding: "30px",
              textAlign: "center",
              mt: { md: 20, xs: 0 },
            }}
          >
            <Fade direction="up" triggerOnce delay={800}>
              <Typography variant="h5" sx={{ color: "#8f6e45" }}>
                Renovation Company
              </Typography>
              <Typography variant="h2">Your Renovation Partner</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Fade>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: { md: 0, xs: "10px" },
          }}
        >
          <Card
            className="contact-form-card"
            sx={{
              maxWidth: 400,
              mt: { md: 16 },
              filter: "brightness(150%) grayscale(0%)",
              backgroundColor: "black",
              borderRadius: "12px",
              border: "3px solid #8f6e45",
            }}
          >
            <CardContent>
              <Typography
                variant="h5"
                align="center"
                sx={{ color: "#8f6e45", fontWeight: "bold" }}
              >
                Get Free Quote
              </Typography>
              <form>
                <CustomTextField
                  label="Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  focused
                  InputLabelProps={{
                    style: { color: "#8f6e45" },
                  }}
                  InputProps={{
                    style: {
                      color: "#8f6e45",
                      borderColor: "#8f6e45",
                    },
                  }}
                />
                <CustomTextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  focused
                  InputLabelProps={{
                    style: { color: "#8f6e45" },
                  }}
                  InputProps={{
                    style: {
                      color: "#8f6e45",
                      borderColor: "#8f6e45",
                    },
                  }}
                />
                <CustomTextField
                  label="Phone"
                  fullWidth
                  margin="normal"
                  focused
                  InputLabelProps={{
                    style: { color: "#8f6e45" },
                  }}
                  InputProps={{
                    style: {
                      color: "#8f6e45",
                      borderColor: "#8f6e45",
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
                    style: { color: "#8f6e45" },
                  }}
                  InputProps={{
                    style: {
                      color: "#8f6e45",
                      borderColor: "#8f6e45",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#8f6e45", color: "black" }}
                  fullWidth
                >
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;
