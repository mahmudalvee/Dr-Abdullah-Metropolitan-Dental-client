import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { _id, img, price, title, rating, description } = service;
  return (
    <div className="card card-compact w-96 shadow-xl bg-cyan-200">
      <figure>
      <PhotoProvider>
        <PhotoView src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-secondary text-2xl">{title}</h2>
        <div className='card-text fw-semibold mb-8'>
          {description.length > 70 ? (
            <>{description.slice(0, 70) + " ..."}</>
          ) : (
            <>{description}</>
          )}
        </div>
        <div className="justify-between absolute inset-x-3 bottom-1 card-actions ">
          <p className="my-auto">
            <span className="text-lg inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded">
              Price: {price} TK
            </span>
          </p>
          <Link to={`/services/${_id}`}>
          <button className="btn btn glass bg-primary text-black">
            Details <FaInfoCircle className="ml-1 "></FaInfoCircle>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
