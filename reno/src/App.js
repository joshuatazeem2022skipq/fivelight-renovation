import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import Error403Page from "./Layout/Error403Page";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Servicespage from "./Pages/Servicespage";
import Reset from "./Components/Reset/Reset";
import Forgot from "./Forgot/Forgot";
import { NavigationProvider } from "./Components/MyContextProvider";
import BlogDetails from "./Components/Blogs/BlogDetails";
import ServiceMenuPage from "./Services/ServiceMenuPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactPage from "./Pages/ContactPage";
import BlogsPage from "./Pages/BlogsPage";
function App() {
  return (
    <>
      <BrowserRouter>
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
              element={<Main activePage={<Servicespage />} />}
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
      </BrowserRouter>
    </>
  );
}

export default App;
