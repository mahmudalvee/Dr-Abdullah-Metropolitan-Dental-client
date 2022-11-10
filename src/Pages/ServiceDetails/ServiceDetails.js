import React, { useContext }  from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
  const { _id, img, price, title, rating, description } = useLoaderData();

  //review form
  const { user } = useContext(AuthContext);

  const handlePlaceReview = event => {
      event.preventDefault();
      const form = event.target;
      const name = form.Name.value;
      const email = user?.email || 'unregistered';
      const message = form.message.value;

      const review = {
          service: _id,
          serviceName: title,
          price,
          customer: name,
          email,
          message
      }

      fetch('http://localhost:5000/reviews', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(review)
      })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              if(data.acknowledged){
                  alert('review placed successfully')
                  form.reset();
              }
          })
          .catch(er => console.error(er));


  }
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

      <div className="my-6 lg:w-10/12 sm:11/12 mx-auto">
            <form onSubmit={handlePlaceReview}>
                <h2 className="text-3xl text-center text-primary">Share your review about {title} service</h2>
                <div className='mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="Name" type="text" placeholder="Your Name" className="input input-ghost w-full  input-bordered" />
                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                </div>
                <textarea name="message" className="my-3 textarea textarea-bordered h-24 w-full" placeholder="Your Review" required></textarea>

                <div className="text-center">
                <input className='btn' type="submit" value="Submit Review" />
                </div>
            </form>
        </div>
    </div>
  );
};

export default ServiceDetails;
