import React from "react";

const CustomButton = ({ children }) => {
  return (
    <div>
      <button className="text-black uppercase font-bold text-[16px] md:text-[18px] px-[24px] py-4 bg-[#febf00] font-ROBOTO">
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
