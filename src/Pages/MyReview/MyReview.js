import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewCard from "./MyReviewCard";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div>
      <h2 className="mt-6 text-2xl text-center text-primary underline underline-offset-4 font-bold ">
        You have total {reviews.length} review(s)
      </h2>
            <div className="overflow-x-auto lg:w-10/12 sm:12/12 mx-auto">
                <table className="table w-full">
                <thead>
                    <tr>
                    <th>Service</th>
                    <th>Review</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map((review) => (
                    <MyReviewCard
                        key={review._id}
                        review={review}
                    ></MyReviewCard>
                    ))}
                </tbody>
                </table>
            </div>
    </div>
  );
};

export default MyReview;