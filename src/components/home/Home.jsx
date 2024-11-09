import React from "react";
import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import Banner from "./Banner.jsx";
import About from "./About.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
