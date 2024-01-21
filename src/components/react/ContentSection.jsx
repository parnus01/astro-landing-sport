import React from "react";
import ContentHeading from "~/components/react/ContentHeading.jsx";

const themeConfig = {
  typical: {
    keyColor: "text-black",
    underlineColor: "border-purple",
    underlineBg: "bg-purple",
  },
  lightPurple: {
    keyColor: "text-black",
    underlineColor: "border-white",
    underlineBg: "bg-white",
  },
  darkPurple: {
    keyColor: "text-purple",
    underlineColor: "border-white",
    underlineBg: "bg-white",
  },
};

const alignStyle = {
  center: "mx-auto px-5 py-16",
  left: "mr-auto lg:py-[60px] md:py-[30px] lg:pl-[195px] md:pl-[30px] lg:w-[54%] lg:pl-[322px]",
  right: "ml-auto lg:py-[60px] md:py-[30px] lg:pr-[195px] md:pr-[30px]",
};

const ContentSection = ({
  heading,
  order,
  title,
  backgroundClass = "bg-white",
  alignSide,
  theme = "typical",
  children,
}) => {
  return (
    <section className={backgroundClass}>
      <div
        className={`md:w-[62%] md:pl-0 lg:w-1/2 lg:pl-12 ${alignStyle[alignSide]} md:h-auto`}
      >
        {heading && <ContentHeading heading={heading} />}
        <div className="mb-5 flex items-center gap-2.5 text-[#C2C2C2]">
          <div className="flex flex-col gap-1">
            <div
              className={`align-top ${themeConfig[theme].keyColor} text-lg leading-[21px] tracking-[1.5px]`}
            >
              {order}
            </div>
            <hr
              className={`h-[5px] w-[22px] border-2 border-solid ${themeConfig[theme].underlineColor} ${themeConfig[theme].underlineBg} rounded-lg`}
            />
          </div>
          <div className="break-all align-top leading-[42px] tracking-[1.5px] text-[#C2C2C2] sm:text-[28px] md:text-4xl md:leading-[42px]">
            {title}
          </div>
        </div>
        <div className="leading-7 text-black sm:min-h-[90px] sm:text-[15px] sm:leading-[17.58px] md:min-h-0 md:text-lg lg:text-xl">
          {children}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
