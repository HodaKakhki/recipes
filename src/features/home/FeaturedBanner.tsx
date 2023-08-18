"use client";
import React from "react";
import { Banner } from "./Banner";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";

export const FeaturedBanner = () => {
  // eslint-disable-next-line react/jsx-key
  const slides = [<Banner />, <Banner />, <Banner />];

  if (slides.length < 2) return null;
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop
      grabCursor={true}
      touchRatio={1}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={`swiper-slide-${index}`}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};
