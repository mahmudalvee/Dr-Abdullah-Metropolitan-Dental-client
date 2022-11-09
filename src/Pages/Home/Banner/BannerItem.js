import React from "react";

const BannerItem = ({ slide }) => {
  const { image, id, next, prev } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full ">
      <img src={image} alt="" className="w-full rounded-xl" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle btn-ghost">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle btn-ghost">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
