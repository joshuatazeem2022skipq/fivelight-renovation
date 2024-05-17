import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import Error403Page from "./Layout/Error403Page";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import ServicesPage from "./Pages/Servicespage";
import Reset from "./Components/Reset/Reset";
import Forgot from "./Forgot/Forgot";
import { NavigationProvider } from "./Components/MyContextProvider";
import BlogDetails from "./Components/Blogs/BlogDetails";
import ServiceMenuPage from "./Services/ServiceMenuPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactPage";
import BlogsPage from "./Pages/BlogsPage";
import ScrollToTop from "react-scroll-to-top";
import { ActiveTabProvider } from "./Layout/useActiveTab";

function App() {
  return (
    <>
      <BrowserRouter>
        <ActiveTabProvider>
          <ScrollToTop
            smooth
            style={{
              backgroundColor: "black",
            }}
            viewBox="-4 0 20 20"
            svgPath="M13.889,11.611c-0.17,0.17-0.443,0.17-0.612,0l-3.189-3.187l-3.363,3.36c-0.171,0.171-0.441,0.171-0.612,0c-0.172-0.169-0.172-0.443,0-0.611l3.667-3.669c0.17-0.17,0.445-0.172,0.614,0l3.496,3.493C14.058,11.167,14.061,11.443,13.889,11.611 M18.25,10c0,4.558-3.693,8.25-8.25,8.25c-4.557,0-8.25-3.692-8.25-8.25c0-4.557,3.693-8.25,8.25-8.25C14.557,1.75,18.25,5.443,18.25,10 M17.383,10c0-4.07-3.312-7.382-7.383-7.382S2.618,5.93,2.618,10S5.93,17.381,10,17.381S17.383,14.07,17.383,10"
            className="golden-svg"
          />
          <NavigationProvider>
            <Routes>
              <Route path="/" element={<Main activePage={<Home />} />} />
              <Route
                path="/aboutus"
                element={<Main activePage={<AboutUsPage />} />}
              />
              <Route
                path="/portfolio"
                element={<Main activePage={<PortfolioPage />} />}
              />
              <Route
                path="/services"
                element={<Main activePage={<ServicesPage />} />}
              />
              <Route
                path="/services/:serviceName"
                element={<Main activePage={<ServiceMenuPage />} />}
              />
              <Route
                path="/contact"
                element={<Main activePage={<ContactPage />} />}
              />
              <Route
                path="/blogsdetail"
                element={<Main activePage={<BlogDetails></BlogDetails>} />}
              />
              <Route
                path="/blogs"
                element={<Main activePage={<BlogsPage />} />}
              />
              <Route path="/admin/login" element={<Login></Login>} />
              <Route path="/reset" element={<Reset></Reset>} />
              <Route path="/forgot" element={<Forgot></Forgot>} />
              <Route path="/admin/signup" element={<Signup></Signup>} />
              <Route path="*" element={<Error403Page />} />
            </Routes>
          </NavigationProvider>
        </ActiveTabProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
