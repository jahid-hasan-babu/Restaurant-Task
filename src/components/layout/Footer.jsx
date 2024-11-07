import React from 'react';
import MaxWidthWrapper from "../ui/MaxWidthWrapper.jsx";
import Clock from "../../assets/image/clock.png";
import Phone from "../../assets/image/phone.png";
import Email from "../../assets/image/email.png";
import Location from "../../assets/image/locaion.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import xiconimg from "../../assets/image/x.png";
import linkedin from "../../assets/image/linkedin.png";




const Footer = () => {
    return (
        <div
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://i.ibb.co/7Rz9c9y/download-1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className="relative overflow-hidden text-white py-20"
        >
            <MaxWidthWrapper className="relative h-full w-full">
                <h1 className="font-bold text-[40px] md:text-[60px] text-center uppercase font-BEBAS ">
                    We are ready to provide you with the best dining experiences
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 pt-20 pb-10">
                    <div className="flex flex-col items-center text-center mt-10">
                        <img src={Clock} alt="clock"/>
                        <h3 className="text-[24px] uppercase font-BEBAS font-bold py-4">Opening hours</h3>
                        <div className="text-[16px] font-ROBOTO">
                            <p>Monday - Sunday</p>
                            <p>9:00 AM to 11:30 PM</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center mt-10">
                        <img src={Phone} alt="phone"/>
                        <h3 className="text-[24px] uppercase font-BEBAS font-bold py-4">LET'S TALK</h3>
                        <div className="text-[16px] font-ROBOTO">
                            <p>Phone: 1-800-222-454</p>
                            <p>Fax: 1-800-222-4545</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center mt-10">
                        <img src={Email} alt="email"/>
                        <h3 className="text-[24px] uppercase font-BEBAS font-bold py-4">BOOK A TABLE</h3>
                        <div className="text-[16px] font-ROBOTO">
                            <p>Email: demo@website.com</p>
                            <p>Support: support@website.com</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center mt-10">
                        <img src={Location} alt="location"/>
                        <h3 className="text-[24px] uppercase font-BEBAS font-bold py-4">Our Address</h3>
                        <div className="text-[16px] font-ROBOTO">
                            <p>123 Stree New York City , United </p>
                            <p>States Of America.</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-6 pt-16">
                   <div className="rounded-full border border-amber-50 p-[14px]">
                       <FaFacebook className="md:text-[20px] text-[16px]"/>
                   </div>
                   <div className="rounded-full border border-amber-50 p-[14px]">
                       <FaInstagramSquare className="md:text-[20px] text-[16px]"/>
                   </div>
                    <div className="rounded-full border border-amber-50 p-[12px]">
                        <img src={xiconimg} alt="xicon" className="h-[18px] w-[18px] md:h-[23px] md:w-[23px]"/>
                    </div>
                    <div className="rounded-full border border-amber-50 p-[14px]">
                        <img src={linkedin} alt="linkedin"  className="h-[16px] w-[16px] md:h-[22px] md:w-[22px]"/>
                    </div>
                </div>
                <div className="text-[16px] md:text-[21px] text-center pt-5">
                    <h1>&copy; 2023 <span className="text-[#FEBF00]">Niomax</span> All Rights Reserved </h1>
                </div>
            </MaxWidthWrapper>
        </div>
    );
};

export default Footer;
