import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import burger from "../../assets/image/burger.png";
import pizza from "../../assets/image/pizza.png";
import frenchFries from "../../assets/image/french-fries.png";
import chicken from "../../assets/image/chicken.png";
import itemImage from "../../assets/image/itemsImage.png";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="w-[60px] h-[60px] rounded-full shadow-2xl md:float-end mt-[20px] ml-[70px] md:mt-[-430px] flex items-center justify-center bg-white hover:text-[#BD1F17] transition duration-300 ease-in-out"
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
      className="w-[60px] absolute md:static h-[60px] rounded-full shadow-2xl  md:float-end md:mr-[80px] ml-[150px]  mt-[353px] md:mt-[-100px] flex items-center justify-center bg-white hover:text-[#BD1F17] transition duration-300 ease-in-out"
    >
      <IoIosArrowBack className="text-[18px] font-bold" />
    </button>
  );
}

const ItemsTestimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
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
        src={itemImage}
        alt="itemImage"
        className="absolute mt-20 hidden md:block"
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
                POPULAR FOOD ITEMS
              </h2>
            </div>
          </div>
          <Slider {...settings}>
            {[
              {
                img: burger,
                title: "Vegetables Burger",
                desc: "Barbecue Italian cuisine pizza",
              },
              {
                img: pizza,
                title: "Special Pizza",
                desc: "Barbecue Italian cuisine pizza",
              },
              {
                img: frenchFries,
                title: "Spacial French fries ",
                desc: "Barbecue Italian cuisine",
              },
              {
                img: chicken,
                title: "Cuisine Chicken",
                desc: "Japanese Cuisine Chicken",
              },
            ].map((item, index) => (
              <div key={index} className="p-4">
                <div className="bg-white w-[306px] h-[300px] p-6 text-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-auto w-auto mx-auto"
                  />
                  <hr className="w-14 h-1 bg-[#BD1F17] my-4 mx-auto" />
                  <h3 className="uppercase text-[24px] font-bold text-xl font-BEBAS">
                    {item.title}
                  </h3>
                  <p className="text-[16px] font-ROBOTO">{item.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ItemsTestimonial;
