import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Counter from "../counter/Counter";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar/NavBar";
import TopHeader from "../Header/TopHeader/TopHeader";
import ServiceCards from "../ServiceCards/ServiceCards";
import Slider from "../Slider/Slider";
import Testimonials from "../Testimonials/Testimonials";

const MainScreen = () => {
  return (
    <>
      <TopHeader />
      <NavBar />
      <Slider />
      <ServiceCards />
      <AboutUs />
      <Counter />
      <Testimonials />
      <Footer />
    </>
  );
};

export default MainScreen;
