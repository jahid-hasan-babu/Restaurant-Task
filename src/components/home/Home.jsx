import React from "react";
import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import Banner from "./Banner.jsx";
import About from "./About.jsx";
import ItemsTestimonial from "./ItemsTestimonial.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <ItemsTestimonial />
      <Footer />
    </div>
  );
};

export default Home;
