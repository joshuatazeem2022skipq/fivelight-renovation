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
import BgImage from "../../Images/Blog/blog-v2-3-370x280.jpg";
import { useContext } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";

function BlogDetails() {
  let abc = useSelector((store) => store.BlogsSection.Blogs);
  const { currentBlogId } = useContext(NavigationContext);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const selectedBlog = abc.find((blog) => blog.id === currentBlogId);
  console.log(selectedBlog, "selectedBlog");

  const navigate = useNavigate();

  const Homenavi = () => {
    navigate("/");
  };

  if (!selectedBlog) {
    return <div>Not found</div>;
  }

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
        <Box sx={{ ml: 10 }}>
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
                onClick={Homenavi}
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
              <Typography variant="h4" color="inherit" sx={{ color: "white" }}>
                Blogs Details
              </Typography>
            </Stack>
          </Slide>
          <Slide direction="up" duration={1000} triggerOnce>
            <Typography variant="h1" sx={{ color: "#d9a95b" }}>
              Blogs Details
            </Typography>
          </Slide>
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Possimus perspiciatis dolorem ipsum soluta iusto! Quam aperiam
                  adipisci sit ratione ex dicta non aliquid veniam voluptate
                  dolor odit assumenda id saepe ipsum voluptatibus ipsa harum
                  magnam, sequi alias earum, repellendus optio nesciunt
                  cupiditate. Officiis eaque voluptas repellat sit, asperiores,
                  pariatur dolorem velit laboriosam nisi suscipit quibusdam iure
                  quia qui aspernatur, eos tempore porro nam soluta? Quo dolor
                  dolores iure ratione. Doloribus modi dignissimos accusantium
                  sunt ex doloremque, consectetur ipsa, adipisci, fugiat earum
                  dolorum. Repudiandae quo maxime ab aperiam aliquam facilis,
                  nam nisi natus dolorem sint rerum. Reprehenderit asperiores
                  sunt vel omnis, fugiat obcaecati aut quibusdam dolorem totam
                  necessitatibus. Unde dolores odit ullam distinctio! Porro,
                  assumenda? Obcaecati animi modi provident facere reprehenderit
                  molestias laborum possimus soluta, nulla debitis eos iure nisi
                  tenetur assumenda itaque ipsum aspernatur, saepe, quam
                  voluptates amet voluptatem. Accusantium enim labore velit
                  ratione culpa vero veniam tempora quo at. Sed fugit similique
                  repellendus optio dolores nulla culpa. Optio alias
                  consequuntur eum voluptatum, tempora exercitationem molestiae
                  vitae corrupti commodi perspiciatis, debitis voluptas quod!
                  Blanditiis, quaerat neque et eum consequatur quis eius nemo
                  nobis consequuntur veniam totam ut odit saepe voluptatem at
                  corporis dolorum qui itaque esse quisquam nihil perspiciatis
                  velit quae quam! Nulla rem nemo quas voluptate nostrum modi,
                  odit id aperiam accusantium sed tempora quisquam omnis
                  distinctio libero provident dolores, deleniti itaque
                  perferendis cupiditate minima facilis perspiciatis beatae fuga
                  quibusdam. Rem enim blanditiis magnam corporis, quos, a sint
                  autem itaque doloribus nam accusamus doloremque, magni
                  praesentium qui voluptatum at ea possimus beatae. Blanditiis,
                  fugit voluptatibus facilis ipsa obcaecati error iure? Et,
                  repellat, dolore odio natus libero eligendi praesentium beatae
                  rerum, doloremque odit esse sequi ipsa? Eligendi aliquam
                  ratione dolore debitis laborum, est blanditiis sint porro!
                  Deserunt quo enim nemo labore optio suscipit minus, sint
                  eveniet laborum dolorem. Tempore, rerum.
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
              sx={{
                height: isSmallScreen ? "100%" : "650px",
                boxShadow: "25px",
              }}
            >
              <Typography
                fontWeight="bold"
                variant="h5"
                sx={{ margin: "10px" }}
              >
                Popular Feeds
              </Typography>
              <Box sx={{ overflowY: "auto", padding: "10px" }}>
                {abc.map((blog) => (
                  <Box key={blog.id} display="flex" sx={{ margin: "15px" }}>
                    <CardMedia
                      component="img"
                      src={blog.image}
                      sx={{
                        borderRadius: "3px",
                        height: "100px",
                        width: "130px",
                      }}
                    />
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        paddingLeft: "15px",
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold">
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
