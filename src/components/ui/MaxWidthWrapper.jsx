// MaxWidthWrapper.jsx
import React from 'react';

const MaxWidthWrapper = ({ children }) => {
    return (
        <div className="h-full w-full max-w-screen-[1320px] mx-auto px-[15px] md:px-[20px] lg:px-[80px] xl:px-[200px] 2xl:px-[300px]">
            {children}
        </div>
    );
};

export default MaxWidthWrapper;
