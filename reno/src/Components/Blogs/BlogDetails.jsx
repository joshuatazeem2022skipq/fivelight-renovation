import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
  CardMedia,
  Slide,
  Stack,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { NavigationContext } from "../MyContextProvider";
import { useSelector } from "react-redux";
import BgImage from "../Blogs/pexels-02.jpg";
import { useState, useContext } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";

function BlogDetails() {
  let abc = useSelector((store) => store.BlogsSection.Blogs);
  const { currentBlogId } = useContext(NavigationContext);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedBlog, setSelectedBlog] = useState(() =>
    abc.find((blog) => blog.id === currentBlogId)
  );
  console.log(selectedBlog, "selectedBlog");

  const navigate = useNavigate();

  const Homenavi = () => {
    navigate("/");
  };

  if (!selectedBlog) {
    return <div>Not found</div>;
  }
  const handleBlogClick = (id) => {
    const blog = abc.find((blog) => blog.id === id);
    setSelectedBlog(blog);
    console.log(selectedBlog);
  };

  return (
    <Box>
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
        <Box sx={{ ml: { md: 10, xs: 5 } }}>
          {/* <Slide direction="down" duration={1000} triggerOnce> */}
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
              onClick={Homenavi}
            >
              Home
            </Typography>
          </Stack>
          <Typography
            variant="h3"
            sx={{
              color: "#d9a95b",
              fontSize: { xs: "3rem", sm: "4rem", md: "5rem" },
            }}
          >
            Check out our latest blog posts for helpful tips and tricks!
          </Typography>
        </Box>
      </Box>
      <Container>
        <Grid container marginTop="10px" spacing={isSmallScreen ? 2 : 4}>
          <Grid item xs={12} md={8}>
            <Card sx={{ marginBottom: "25px", boxShadow: "25px" }}>
              <CardMedia
                component="img"
                src={selectedBlog.image}
                sx={{ height: "400px", borderRadius: "10px" }}
              />
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "15px",
                }}
              >
                <Box sx={{ display: "flex", marginBottom: "10px" }}>
                  <Box
                    sx={{
                      color: "#d9a95b",
                      display: "flex",
                      alignItems: "center",
                      marginRight: "20px",
                    }}
                  >
                    <AccountCircleOutlinedIcon
                      sx={{ marginRight: "5px", mt: -0.4 }}
                    />
                    by Admin
                  </Box>
                  <Box
                    sx={{
                      color: "#d9a95b",
                      display: "flex",
                      alignItems: "center",
                      marginRight: "20px",
                    }}
                  >
                    <AccountCircleOutlinedIcon
                      sx={{ marginRight: "5px", mt: -0.4 }}
                    />
                    3 comments
                  </Box>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    fontSize: isSmallScreen ? "16px" : "20px",
                  }}
                >
                  {selectedBlog.title}
                </Typography>
                <Typography
                  color="grey"
                  sx={{
                    margin: "15px",
                    fontWeight: "bold",
                    fontSize: isSmallScreen ? "14px" : "16px",
                  }}
                >
                  {selectedBlog.Paragraph}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            sx={{ marginBottom: isSmallScreen ? "10px" : "2px" }}
            item
            xs={12}
            md={4}
          >
            <Card
              cursor="pointer"
              sx={{
                height: isSmallScreen ? "100%" : "650px",
                boxShadow: "25px",
              }}
            >
              <Typography
                fontWeight="bold"
                variant="h5"
                sx={{ margin: "13px" }}
              >
                Popular Feeds
              </Typography>
              <Box sx={{ overflowY: "auto", padding: "10px" }}>
                {abc.map((blog) => (
                  <Box
                    cursor="pointer"
                    onClick={() => handleBlogClick(blog.id)}
                    key={blog.id}
                    display="flex"
                    sx={{ margin: "15px" }}
                  >
                    <CardMedia
                      component="img"
                      src={blog.image}
                      sx={{
                        borderRadius: "3px",
                        height: "100px",
                        width: "130px",
                        mt: "25px",
                      }}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: "15px",
                      }}
                    >
                      <Typography
                        sx={{ cursor: "pointer", mt: 1 }}
                        variant="body1"
                        fontWeight="bold"
                      >
                        {blog.title}
                      </Typography>
                      <Typography color="#d9a95b">{blog.date}</Typography>
                    </CardContent>
                  </Box>
                ))}
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default BlogDetails;
