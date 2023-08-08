"use client";
import React from "react";
import { Banner } from "./Banner";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

export const FeaturedBanner = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop
    >
      <SwiperSlide>
        <Banner />
      </SwiperSlide>
      <SwiperSlide>
        <Banner />
      </SwiperSlide>
      <SwiperSlide>
        <Banner />
      </SwiperSlide>
    </Swiper>
  );
};
