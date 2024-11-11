import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlay } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import tomato from "../../assets/image/tomato.png";
import alovera from "../../assets/image/alovera.png";
import vedio from "../../assets/image/vedio.png";
import comma from "../../assets/image/Coma.png";
import customer from "../../assets/image/customer.png";
import vectorStar from "../../assets/image/VectorStar.png";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="w-[60px] h-[60px] md:absolute static rounded-full shadow-2xl  mt-[20px] ml-[180px] md:ml-[1150px] md:mt-[-720px] flex items-center justify-center bg-white hover:text-[#BD1F17] transition duration-300 ease-in-out"
    >
      <IoIosArrowForward className="text-[18px] font-bold" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="w-[60px] absolute md:static h-[60px] rounded-full shadow-2xl  md:float-end md:mr-[10px] mt-[755px] md:mt-[-95px] ml-[70px] flex items-center justify-center bg-white hover:text-[#BD1F17] transition duration-300 ease-in-out"
    >
      <IoIosArrowBack className="text-[18px] font-bold" />
    </button>
  );
}

const Feedback = () => {
  const [videoVisible, setVideoVisible] = useState(false);
  const handlePlayButtonClick = () => {
    setVideoVisible(true);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section className="bg-[#FBF7F2]" id="portfolio">
      <img
        src={tomato}
        alt="tomato"
        className="absolute h-auto w-auto mt-20 hidden md:block"
      />
      <MaxWidthWrapper>
        <div className="md:py-[90px] py-[50px]">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-[10px] h-[10px] bg-[#BD1F17]"></div>
                <h3 className="text-[#BD1F17] text-[16px] md:text-[20px] font-bold font-ROBOTO">
                  Crispy, Every Bite Taste
                </h3>
              </div>
              <h2 className="text-black text-[40px] md:text-[62px] font-bold font-BEBAS">
                What Some of my Customers Say
              </h2>
            </div>
          </div>
          <Slider {...settings}>
            {[...Array(4)].map((_, index) => (
              <div key={index}>
                <div className="md:flex md:flex-row flex-col justify-between items-center py-10">
                  <div className="md:w-[55%] md:h-[55vh] h-full w-full relative order-1 md:order-2 ">
                    {!videoVisible && (
                      <div className="relative">
                        <img
                          src={vedio}
                          alt="video thumbnail"
                          className="w-full h-auto md:h-[55vh]"
                        />
                        <button
                          onClick={handlePlayButtonClick}
                          className="w-[50px] h-[50px] bg-[#FEBF00] rounded-full absolute inset-0 m-auto flex justify-center items-center"
                          style={{
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <FaPlay className="text-black text-xl" />
                        </button>
                      </div>
                    )}
                    {videoVisible && (
                      <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/KPjrYdkOOEI?autoplay=1"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="YouTube video"
                      ></iframe>
                    )}
                  </div>

                  <div className="bg-[#FEBF00] p-10 md:p-20 md:w-[45%] md:h-[55vh] h-full w-full order-2 md:order-1">
                    <p className="font-ROBOTO text-[18px] md:text-[20px] leading-[28px] md:leading-[34px]">
                      <span>
                        <img
                          src={comma}
                          alt="comma"
                          className="h-auto w-auto ml-[-25px]"
                        />
                      </span>{" "}
                      You can't go wrong with Chicken Mandi, I had it twice. The
                      chicken was cooked perfectly, juicy & soft (usually mandi
                      chicken is a bit dry). I would defiantly recommend it.
                    </p>
                    <div className="flex items-center justify-between pt-40 pb-5">
                      <div>
                        <h3 className="uppercase font-bold font-BEBAS text-[18px]">
                          Khalid Al Dawsry
                        </h3>
                        <p className="font-ROBOTO text-[14px]">Jeddah, Saudi</p>
                      </div>
                      <img
                        src={customer}
                        alt="customer"
                        className="h-auto w-auto rounded-full"
                      />
                    </div>
                    <hr className="bg-black h-[2px] w-full border-t-0 " />
                    <img
                      src={vectorStar}
                      alt="vectorStar"
                      className="md:ml-[-80px] ml-[-40px] mt-[-78px] hidden md:block"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </MaxWidthWrapper>
      <img
        src={alovera}
        alt="alovera"
        className="float-end mt-[-650px] h-auto w-auto hidden md:block"
      />
    </section>
  );
};

export default Feedback;
