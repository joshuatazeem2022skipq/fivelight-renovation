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
import Contact from "./Components/Contact/Contact";
import BlogComponent from "./Components/Blogs/BlogComponent";
import { NavigationProvider } from "./Components/MyContextProvider";
import BlogDetails from "./Components/Blogs/BlogDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationProvider>
          <Routes>
            <Route path="/" element={<Main activePage={<Home />} />} />
            <Route
              path="/portfolio"
              element={<Main activePage={<PortfolioPage />} />}
            />
            <Route
              path="/services"
              element={<Main activePage={<Servicespage />} />}
            />
            <Route
              path="/contact"
              element={<Main activePage={<Contact></Contact>} />}
            />
            <Route
              path="/blogsdetail"
              element={<Main activePage={<BlogDetails></BlogDetails>} />}
            />
            <Route
              path="/blogs"
              element={<Main activePage={<BlogComponent></BlogComponent>} />}
            />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/reset" element={<Reset></Reset>} />
            <Route path="/forgot" element={<Forgot></Forgot>} />
            <Route path="/signup" element={<Signup></Signup>} />
            <Route path="*" element={<Error403Page />} />
          </Routes>
        </NavigationProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
