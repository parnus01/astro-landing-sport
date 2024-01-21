import React from 'react';

// Define the React component
const ContentHeading = ({ heading }) => {
    return (
        <div className="sm:hidden md:block text-grey lg:mb-[70px] md:mb-[45px] lg:pt-[40px] md:pt-[20px] sm:p-5 md:p-0 md:leading-[105px] sm:leading-[56px] sm:text-[50px] lg:text-[90px] md:text-[90px]">
            {heading}
        </div>
    );
};

export default ContentHeading;
