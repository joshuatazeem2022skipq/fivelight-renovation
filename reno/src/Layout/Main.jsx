import React from "react";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";
import Appbar from "../Components/Appbar/Appbar";
import Footer from "../Footer/Footer";

const Main = ({ activePage }) => {
  return (
    <>
      <Box position="relative">
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <Appbar />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            position: "relative",
            zIndex: 0,
          }}
        >
          {activePage}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Main;
