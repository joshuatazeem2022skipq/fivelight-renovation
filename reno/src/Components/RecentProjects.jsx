import React from "react";
import { Box, Card, CardMedia, IconButton } from "@mui/material";

import SouthIcon from "@mui/icons-material/South";
import { useState } from "react";
import {useSelector} from "react-redux"
import CardDetail from "./CardDetail/CardDetail";


const RecentProjects = () => {
let abc = useSelector((store)=> store.ProductsSection.products)
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    const projectIndex = abc.find(p => p.id === projectId);
    setSelectedProject(projectIndex);
  };
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#daaa5e",
          padding: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          fontWeight: "bold",
          fontSize: "32px",
          position: "relative",
        }}
      >
        Our Recent Projects
        <Box
          sx={{
            position: "absolute",
            bottom: "-18px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "0",
            height: "0",
            borderTop: "solid 20px #daaa5e",
            borderLeft: "solid 20px transparent",
            borderRight: "solid 20px transparent",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          m: { md: 8, xs: 8, sm: 8 },
        }}
      >
        {abc.map((project) => (
          <Card
            key={project.id}
            sx={{
              marginBottom: "20px",
              position: "relative",
              mt: 5,
              overflow: "hidden",
              "&:hover .stripe": {
                height: "100%",
              },
              "&:hover .button": {
                transform: "translateY(-50%)",
                opacity: 1,
              },
            }}
            onClick={() => handleProjectClick(project.id)}

          >
            <CardMedia
              component="img"
              sx={{ height: "auto", width: "100%" }}
              image={
               project.imageSrc
              }
              alt={project}
            />
            <Box
              className="stripe"
              sx={{
                width: "100%",
                height: "0",
                backgroundColor: "rgba(218, 170, 94, 0.6)",
                position: "absolute",
                bottom: "0",
                left: "0",
                transition: "height 0.3s ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
                fontSize: "20px",
                padding: "20px",
                fontWeight: "bold",
                textAlign: "center",
                zIndex: 1,
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
                borderBottom: "none",
                "&:hover": { color: "white", fontSize: "24px" },
              }}
            >
              <span
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {project.name}
              </span>
            </Box>

            <IconButton
              className="button"
              sx={{
                position: "absolute",
                bottom: "0",
                left: "50%",
                transform: "translate(-50%, 50%)",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                opacity: 0,
                zIndex: 2,
                backgroundColor: "rgba(218, 170, 94, 0.9)",
              }}
            >
              <SouthIcon />
            </IconButton>
          </Card>
        ))}
      </Box>
      {selectedProject !== null && (
  <CardDetail
    project={selectedProject}
    onClose={() => setSelectedProject(null)}
  />
)}
    </div>
  );
};

export default RecentProjects;
