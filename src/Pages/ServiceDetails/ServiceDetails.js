import React, { useContext, useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ServiceReviewCard from "./ServiceReviewCard";
import toast, { Toaster } from "react-hot-toast";
import { RiUserSharedFill, RiUserUnfollowFill } from "react-icons/ri";

const ServiceDetails = () => {
  const { _id, img, price, title, rating, description } = useLoaderData();

  //all reviews
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

  console.log(reviews);
  //add review form
  const { user } = useContext(AuthContext);

  const handlePlaceReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.Name.value;
    const email = user?.email || "unregistered";
    const message = form.message.value;

    const review = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      message,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review added successfully!");
          <Toaster />;
          form.reset();
          window.location.reload();
        }
      })
      .catch((er) => console.error(er));
    //review
  };
  return (
    <div>
      <div className="mx-auto card card-compact lg:w-8/12 sm:w-10/12 shadow-xl">
        <figure className="w-full">
          <PhotoProvider>
            <PhotoView src={img}>
              <img src={img} alt="" className="rounded-lg" />
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

      <>
        {user?.email ? (
          <div className="my-12  mx-auto lg:w-10/12 sm:w-9/12">
            <form onSubmit={handlePlaceReview}>
              <h2 className="text-3xl text-center text-primary">
                Share your review about {title} service
              </h2>
              <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input
                  name="Name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-ghost w-full  input-bordered"
                />
                <input
                  name="email"
                  type="text"
                  placeholder="Your email"
                  defaultValue={user?.email}
                  className="input input-ghost w-full  input-bordered"
                  readOnly
                />
              </div>
              <textarea
                name="message"
                className="my-3 textarea textarea-bordered h-24 w-full"
                placeholder="Your Review"
                required
              ></textarea>

              <div className="text-center">
                <input className="btn" type="submit" value="Submit Review" />
              </div>
            </form>
          </div>
        ) : (
          <>
            <h2 className="text-2xl mt-12 text-center text-primary">
              Login to add a review
            </h2>
            <div className="text-center">
            <Link to="/login">
              <button className="btn btn glass bg-primary text-black btn-xs btn-md">
                <RiUserSharedFill /> Login
              </button>
            </Link>
            </div>
          </>
        )}
      </>

      <div>
        <h2 className="mt-6 text-3xl text-center text-primary underline underline-offset-4 font-bold">
          User Reviews
        </h2>
        <div className="overflow-x-auto w-full mx-auto">
          <table className="table lg:w-8/12 sm:w-10/12 mx-auto">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <ServiceReviewCard
                  key={review._id}
                  review={review}
                ></ServiceReviewCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
