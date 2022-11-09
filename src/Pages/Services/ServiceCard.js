import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";

const ServiceCard = ({ service }) => {
  const { img, price, title, rating, description } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{title}</h2>
        <div className='card-text fw-semibold mb-8'>
          {description.length > 100 ? (
            <>{description.slice(0, 98) + " ..."}</>
          ) : (
            <>{description}</>
          )}
        </div>
        <div className="justify-between absolute inset-x-3 bottom-1 card-actions ">
          <p className="my-auto">
            <span className="text-lg inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded">
              Price: {price} tk
            </span>
          </p>
          <button className="btn btn-primary">
            Details <BsInfoCircleFill className="ml-1 "></BsInfoCircleFill>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
