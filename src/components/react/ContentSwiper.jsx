import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import React from "react";
import ContentSection from "~/components/react/ContentSection.jsx";

const ContentSwiper = ({ children, type }) => {
  const swiperContent = {
    ATHLETES: {
      "01": "Connect with coaches directly, you can ping coaches to view profile.",
      "02": "Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
      "03": "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc",
    },
    PLAYERS: {
      "01": "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
      "02": "Work with recruiter to increase your chances of findingtalented athlete.",
      "03": "Save your time, recruit proper athlets for your team.",
    },
  };
  return (
    <Swiper
      className={"-top-[45px] -mb-[45px]"}
      pagination={{ enabled: true, clickable: true }}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <ContentSection
          backgroundClass="bg-[#F5F4F9]"
          alignSide="center"
          order="01"
          title="CONNECTION"
        >
          {swiperContent[type]["01"]}
        </ContentSection>
      </SwiperSlide>
      <SwiperSlide>
        <ContentSection
          backgroundClass="bg-[#F5F4F9]"
          alignSide="center"
          order="02"
          title="COLLABORATION"
        >
          {swiperContent[type]["02"]}
        </ContentSection>
      </SwiperSlide>
      <SwiperSlide>
        <ContentSection
          backgroundClass="bg-[#F5F4F9]"
          alignSide="center"
          order="03"
          title="GROWTH"
        >
          {swiperContent[type]["03"]}
        </ContentSection>
      </SwiperSlide>
    </Swiper>
  );
};

export default ContentSwiper;
