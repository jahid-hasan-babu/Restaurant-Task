import React from 'react';
import MaxWidthWrapper from "../ui/MaxWidthWrapper.jsx";
import CustomButton from "../ui/CustomButton.jsx";
import BannerImg from "../../assets/image/Banner.png";
import star from "../../assets/image/star.png";

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: "url('https://i.ibb.co/XFyk7gX/Screenshot-2024-11-06-164843.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="py-20 md:py-72 relative"
        >
            <MaxWidthWrapper>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="relative z-10 text-left">
                        <div
                            className="inline-block md:px-0"
                            style={{
                                background: "linear-gradient(90deg, rgba(189, 31, 23, 0) 32.88%, rgba(189, 31, 23, 0.7) 100%)",

                            }}
                        >
                            <h1 className="font-BEBAS font-bold py-2 pr-7 text-4xl md:text-6xl lg:text-[120px] text-white leading-tight md:leading-none">
                                Taste the authentic <br /> Saudi cuisine
                            </h1>
                        </div>
                        <p className="font-ROBOTO text-lg md:text-2xl text-white py-2 pb-7 max-w-md mx-auto md:mx-0">
                            Among the best Saudi chefs in the world, serving you something beyond flavor.
                        </p>
                        <CustomButton>Explore Menu</CustomButton>
                    </div>
                    <div className="relative mt-10 md:mt-0 md:absolute md:right-0 md:mr-[240px] md:top-1/2 transform md:-translate-y-1/2">

                        <img
                            src="https://i.ibb.co/ZThn3Zq/Frame-1707477993.png"
                            alt="new banner before md"
                            className="block md:hidden object-contain mx-auto"
                        />
                        <div className="hidden md:block">
                            <img src={star} alt="star" className="ml-[630px]" />
                            <img
                                src={BannerImg}
                                alt="banner"
                                className="h-auto w-auto 2xl:w-[700px] 2xl:h-[650px]"
                            />
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default Banner;
