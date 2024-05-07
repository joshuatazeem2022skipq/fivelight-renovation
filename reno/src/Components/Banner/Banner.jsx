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
import {useForm} from "react-hook-form";
import axios from "axios"

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#8f6e45",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#8f6e45",
  },
});

const Banner = () => {
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
                Five Lights Reno
              </Typography>
              <Typography variant="h2">
                Ignite the Brilliance Within: Award-Winning Home Transformations
              </Typography>
              <Typography variant="body1">
                Award-winning design + seamless execution = your dream home. Get
                a free consultation today!
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
              mt: { md: 5 },
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
              <form onSubmit={handleSubmit(saveQuote)}>
                
                <CustomTextField
                  label="Name"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  focused
                  InputLabelProps={{
                    style: { color: "#8f6e45" },
                  }}
                  {...register("name")}
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
                  {...register("email")}
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
                  {...register("phone")}
                  InputProps={{
                    style: {
                      color: "#8f6e45",
                      borderColor: "#8f6e45",
                    },
                  }}
                />
                <CustomTextField
                  label="Subject"
                  fullWidth
                  margin="normal"
                  focused
                  InputLabelProps={{
                    style: { color: "#8f6e45" },
                  }}
                  {...register("subject")}
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
                  {...register("description")}
                  InputProps={{
                    style: {
                      color: "#8f6e45",
                      borderColor: "#8f6e45",
                    },
                  }}
                />
                <Button
                type="submit"
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
