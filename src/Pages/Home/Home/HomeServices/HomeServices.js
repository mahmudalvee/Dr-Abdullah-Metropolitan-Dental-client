import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "../../../Services/ServiceCard";
import  { MdMedicalServices }  from "react-icons/md";
import { Link } from "react-router-dom";

const HomeServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/homeServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-6">
      <div className="text-center mb-4">
        <h2 className="text-3xl text-primary font-semibold">
          Our Special Services
        </h2>
        <p className="lg:w-8/12 mx-auto mt-6">
          We provide general dental examination and treatment for adults to
          children, e.g. dental consultation on dental health care, emergency
          dental treatment, and dental hygiene at low cost.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center my-6 ">
        <Link to='/services'>
        <button className="btn btn glass bg-warning text-black text-xl btn-wide btn-lg rounded-lg">
        <MdMedicalServices className="mr-2"></MdMedicalServices><span className="underline underline-offset-2">All Services</span> 
        </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
