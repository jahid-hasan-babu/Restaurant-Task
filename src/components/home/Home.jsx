import React from "react";
import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import Banner from "./Banner.jsx";
import About from "./About.jsx";
import ItemsTestimonial from "./ItemsTestimonial.jsx";
import BookForm from "./BookForm.jsx";
import Feedback from "./Feedback.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <ItemsTestimonial />
      <BookForm />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Home;
