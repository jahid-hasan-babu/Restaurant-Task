import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import logo from "../../assets/image/Logo.png";
import MaxWidthWrapper from "../ui/MaxWidthWrapper.jsx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-shadow duration-300 ${
        hasShadow ? "shadow-md" : ""
      }`}
      style={{
        backgroundImage:
          "url('https://i.ibb.co/XFyk7gX/Screenshot-2024-11-06-164843.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative">
        <MaxWidthWrapper className="h-full w-full">
          <div className="flex items-center justify-between py-5">
            <div>
              <img src={logo} alt="logo" className="h-auto w-auto" />
            </div>
            <div className="hidden md:flex">
              <ul className="flex items-center space-x-8  text-white xl:ml-[50px] 2xl:ml-[-180px] text-[15px] font-RALEWAY">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About us</a>
                </li>
                <li>
                  <a href="#service">Service</a>
                </li>
                <li>
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
              </ul>
            </div>
            <div className="hidden md:block">
              <button className="text-black uppercase font-bold text-[16px] px-[24px] py-2.5 bg-[#febf00] font-ROBOTO">
                Book a Table
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {menuOpen ? "" : <FaBars className="text-white text-[24px]" />}
              </button>
            </div>
          </div>
        </MaxWidthWrapper>

        <div
          className={`absolute top-0 left-0 w-full h-screen bg-white shadow-lg z-10 flex flex-col gap-5 items-center md:hidden transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            backgroundImage:
              "url('https://i.ibb.co/XFyk7gX/Screenshot-2024-11-06-164843.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-start justify-between pt-8">
            <img src={logo} alt="logo" className="h-auto w-auto" />
            <button
              className="w-[40px] h-[40px]  flex justify-end items-center"
              onClick={toggleMenu}
            >
              <ImCross className="text-white text-[20px]" />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-2 m-0 mt-10 ">
            <ul className="space-y-8 text-center text-white  text-[15px] font-RALEWAY">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/service">Service</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
            </ul>
          </div>
          <div className=" pt-3">
            <button className="text-black uppercase font-bold text-[16px] px-[24px] py-2.5 bg-[#febf00] font-ROBOTO">
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
