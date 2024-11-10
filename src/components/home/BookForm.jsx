import React, { useState } from "react";
import MaxWidthWrapper from "./../ui/MaxWidthWrapper";
import DatePicker from "react-datepicker";
import { FaCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import CustomButton from "../ui/CustomButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [totalPeople, setTotalPeople] = useState("");
  const [message, setMessage] = useState("");

  const CustomInput = ({ value, onClick }) => (
    <div className="flex items-center ">
      <input
        value={value}
        onClick={onClick}
        placeholder="Reservation Date"
        className="font-ROBOTO placeholder-white text-[14px]  bg-transparent outline-none text-white "
      />
      <FaCalendarAlt
        onClick={onClick}
        className="text-white text-lg cursor-pointer ml-[113px] sm:ml-[200px] md:ml-[80px]"
      />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Name is required!");
      return;
    }

    const formData = {
      name,
      email,
      reservationDate: startDate,
      totalPeople,
      message,
    };

    localStorage.setItem("bookFormData", JSON.stringify(formData));

    toast.success("Form data has been saved!");

    setName("");
    setEmail("");
    setTotalPeople("");
    setMessage("");
    setStartDate(null);
  };

  return (
    <div
      style={{
        backgroundImage: "url('https://i.ibb.co.com/C0MMv4v/form-Image.png')",
        backgroundSize: "cover",
      }}
      className="h-auto w-auto py-20"
    >
      <MaxWidthWrapper>
        <div className="md:w-1/2">
          <div className="flex items-center gap-3">
            <div className="w-[10px] h-[10px] bg-[#BD1F17]"></div>
            <h3 className="text-[#BD1F17] text-[16px] md:text-[20px] font-bold font-ROBOTO">
              Book Now
            </h3>
          </div>
          <h1 className="font-BEBAS uppercase font-bold text-[40px] md:text-[62px] text-white">
            Book Your Table
          </h1>
          <p className="font-ROBOTO text-[16px] text-white">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            <br />
            molestie vel, ornare non id blandit netus.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="pt-10 pb-8">
          <div className="md:flex block items-center gap-7">
            <input
              type="text"
              placeholder="Your Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="font-ROBOTO placeholder-white text-[14px] p-3 bg-transparent border border-white outline-none text-white w-[100%] md:w-[22%]"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="font-ROBOTO mt-5 md:mt-0 placeholder-white text-[14px] p-3  bg-transparent border border-white outline-none text-white  w-[100%] md:w-[22%]"
            />
          </div>

          <div className="md:flex block items-center gap-7 pt-5">
            <div
              className="font-ROBOTO placeholder-white text-[14px] p-3  bg-transparent border
                border-white outline-none text-white  w-[100%] md:w-[22%] "
            >
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<CustomInput />}
              />
            </div>

            <input
              type="number"
              placeholder="Total People"
              value={totalPeople}
              onChange={(e) => setTotalPeople(e.target.value)}
              className="font-ROBOTO mt-5 md:mt-0 placeholder-white text-[14px] p-3  bg-transparent border border-white outline-none text-white  w-[100%] md:w-[22%]"
            />
          </div>
          <textarea
            name=""
            id=""
            placeholder="Message"
            cols="20"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="font-ROBOTO placeholder-white my-5 text-[14px] p-3  bg-transparent border
                border-white outline-none text-white  w-[100%] md:w-[46%] "
          ></textarea>
          <CustomButton type="submit">Book Now</CustomButton>
        </form>
      </MaxWidthWrapper>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default BookForm;
