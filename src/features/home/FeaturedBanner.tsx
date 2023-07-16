"use client";
import React, { CSSProperties } from "react";
import { SwiperOptions, Navigation, Autoplay } from "swiper";
import { Banner } from "./Banner";
import { Swiper, SwiperSlide } from "swiper/react";
const slideStyles: CSSProperties = {
  boxSizing: "border-box",
  maxWidth: "100%",
};
export const FeaturedBanner = () => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 10,
    slidesPerView: "auto",
    speed: 15,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  };
  return (
    <div
      style={{ width: "100%", height: "100%" }}
      data-flickity='{ "autoPlay": true }'
    >
      <Swiper {...sliderSettings}>
        <SwiperSlide style={slideStyles}>
          <Banner />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <Banner />
        </SwiperSlide>
        <SwiperSlide style={slideStyles}>
          <Banner />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
