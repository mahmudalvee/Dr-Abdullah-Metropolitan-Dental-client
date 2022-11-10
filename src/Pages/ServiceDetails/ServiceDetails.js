import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { FcRating } from "react-icons/fc";

const ServiceDetails = () => {
  const { _id, img, price, title, rating, description } = useLoaderData();
  return (
    <div>
      <div className="mx-auto card card-compact lg:w-8/12 sm:w-10/12 shadow-xl">
        <figure className="w-full">
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt="" className="rounded-lg"/>
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-secondary text-2xl">{title}</h2>
          <div className="card-text fw-semibold mb-8">{description}</div>
          <div className="justify-between absolute inset-x-3 bottom-1 card-actions ">
            
          <div className="my-auto">
              <p className="flex text-xl inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-yellow-600 text-white rounded">
                <FcRating></FcRating> Rating: {rating}/5
              </p>
            </div>
            <div className="my-auto">
              <p className="text-xl inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-secondary text-white rounded">
                Price: {price} TK
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Review</h2>
      </div>
    </div>
  );
};

export default ServiceDetails;
