import React from "react";

// Define the React component
const ContentHeading = ({ heading }) => {
  return (
    <div className="text-grey sm:hidden sm:p-5 sm:text-[50px] sm:leading-[56px] md:z-0 md:mb-[45px] md:block md:p-0 md:pt-[20px] md:text-[90px] md:leading-[105px] lg:mb-[70px] lg:pt-[40px] lg:text-[90px]">
      {heading}
    </div>
  );
};

export default ContentHeading;
