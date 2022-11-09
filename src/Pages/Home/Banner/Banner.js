import React from "react";
import banner1 from "../../../dentist-assets/banner/off.gif";
import banner2 from "../../../dentist-assets/banner/Every Tooth Matters.gif";
import banner3 from "../../../dentist-assets/banner/Your Smile.gif";
import BannerItem from "./BannerItem";

const bannerData = [
  {
    image: banner1,
    prev: 3,
    id: 1,
    next: 2,
  },
  {
    image: banner2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: banner3,
    prev: 2,
    id: 3,
    next: 1,
  },
];

const Banner = () => {
  return (
    <div className="mx-auto sm:w-11/12 md:w-11/12 lg:w-10/12 ">
      <div className="carousel w-full">
        {bannerData.map((slide) => (
          <BannerItem key={slide.id} slide={slide}></BannerItem>
        ))}
      </div>
    </div>
  );
};

export default Banner;
