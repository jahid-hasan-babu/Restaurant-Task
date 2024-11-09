import React, { useState } from "react";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import AboutImg from "../../assets/image/AboutImage.png";
import packageImg from "../../assets/image/package.png";
import medal from "../../assets/image/medal.png";
import bag from "../../assets/image/bag.png";
import CustomButton from "./../ui/CustomButton";
import { FaPhoneVolume } from "react-icons/fa6";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div id="about" className="py-10 md:py-20">
      <MaxWidthWrapper>
        <div className="md:flex flex-row  justify-between pb-16">
          <div>
            <img src={AboutImg} alt="AboutImg" className="h-auto w-auto" />
          </div>
          <div className="md:w-1/2 px-[6px] md:pt-0 pt-10">
            <div className="flex font-ROBOTO text-[14px] gap-4">
              <button
                className={`px-4 py-[6px] ${
                  activeTab === "about"
                    ? "bg-[#B52B1D] text-white"
                    : "bg-transparent"
                }`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>
              <button
                className={`px-4 py-[6px] ${
                  activeTab === "experience"
                    ? "bg-[#B52B1D] text-white"
                    : "bg-transparent "
                }`}
                onClick={() => setActiveTab("experience")}
              >
                Experience
              </button>
              <button
                className={`px-4 py-[6px] ${
                  activeTab === "contact"
                    ? "bg-[#B52B1D] text-white"
                    : "bg-transparent "
                }`}
                onClick={() => setActiveTab("contact")}
              >
                Contact
              </button>
            </div>
            <hr className="bg-[#B52B1D] h-[2px] w-full mt-[-1px]" />

            <div>
              {activeTab === "about" && (
                <div>
                  <h1 className="font-BEBAS uppercase font-bold text-[40px] leading-[48px] md:leading-[62px] lg:text-[62px] py-4">
                    Exceptional culinary experience and delicious food
                  </h1>
                  <p className="font-ROBOTO text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                    odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                    sit amet consectetur adipiscing elit do eiusmod tempor
                    incididunt ut labore et dolore magna minim veniam nostrud
                    exercitation.
                  </p>
                </div>
              )}

              {activeTab === "experience" && (
                <div>
                  <h1 className="font-BEBAS uppercase font-bold text-[40px] leading-[48px] md:leading-[62px] lg:text-[62px] py-4">
                    Our Experience and History of Excellence
                  </h1>
                  <p className="font-ROBOTO text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                    odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                    sit amet consectetur adipiscing elit do eiusmod tempor
                    incididunt ut labore et dolore magna minim veniam nostrud
                    exercitation.
                  </p>
                </div>
              )}

              {activeTab === "contact" && (
                <div>
                  <h1 className="font-BEBAS uppercase font-bold text-[40px] leading-[48px] md:leading-[62px] lg:text-[62px] py-4">
                    Contact Us
                  </h1>
                  <p className="font-ROBOTO text-[16px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                    odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                    sit amet consectetur adipiscing elit do eiusmod tempor
                    incididunt ut labore et dolore magna minim veniam nostrud
                    exercitation.
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-start gap-5 py-7">
              <CustomButton className="text-[10px]">About More</CustomButton>
              <div className="flex items-center gap-2">
                <FaPhoneVolume className="h-[18px] w-[18px] md:h-[20px] md:w-[20px] text-[#BD1F17]" />
                <p className="font-ROBOTO font-bold text-[14px] md:text-[18px]">
                  +88 3426 739 485
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex flex-row items-center justify-between">
          <div className="flex items-center justify-start gap-5">
            <div className="bg-white rounded-full p-5 shadow-2xl">
              <img
                src={packageImg}
                alt="packageImg"
                className="h-[32px] w-[32px] md:h-[40px] md:w-[40px]"
              />
            </div>
            <div>
              <h3 className="font-bold font-BEBAS md:text-[30px] text-2xl uppercase">
                Fast delivery
              </h3>
              <p className="font-ROBOTO text-[18px] md:text-[20px] ">
                Within 30 minutes
              </p>
            </div>
          </div>

          <div className="flex py-10 md:py-0 items-center justify-start gap-5">
            <div className="bg-white rounded-full p-5 shadow-2xl">
              <img
                src={medal}
                alt="medal"
                className="h-[32px] w-[32px] md:h-[40px] md:w-[40px]"
              />
            </div>
            <div>
              <h3 className="font-bold font-BEBAS md:text-[30px] text-2xl uppercase">
                Absolute Dining
              </h3>
              <p className="font-ROBOTO text-[18px] md:text-[20px] ">
                Best buffet restaurant
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start gap-5">
            <div className="bg-white rounded-full p-5 shadow-2xl">
              <img
                src={bag}
                alt="bagimage"
                className="h-[32px] w-[32px] md:h-[40px] md:w-[40px]"
              />
            </div>
            <div>
              <h3 className="font-bold font-BEBAS md:text-[30px] text-2xl uppercase">
                Pickup delivery
              </h3>
              <p className="font-ROBOTO text-[18px] md:text-[20px] ">
                Grab your food order
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default About;
