import React from "react";
import Banner from "../Components/Banner/Banner";
import AboutComponent from "../Components/AboutComponent";
import IntDesign from "../Components/IntDesign";
import RecentProjects from "../Components/RecentProjects simple";
import ServicesList from "../Components/ServicesList";
import Testimonials from "../Components/ClientReviews";
import BlogComponent from "../Components/BlogComponent";
import Discover from "../Components/Discover";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutComponent />
      <IntDesign />
      <RecentProjects />
      <ServicesList />
      <Testimonials />
      <BlogComponent />
      <Discover />
    </>
  );
};

export default Home;
