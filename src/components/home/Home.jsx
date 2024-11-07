import React from 'react';
import Header from "../layout/Header.jsx";
import Footer from "../layout/Footer.jsx";
import Banner from "./Banner.jsx";

const Home = () => {
    return (
        <div>
           <Header/>
            <Banner/>
            <Footer/>
        </div>
    );
};

export default Home;