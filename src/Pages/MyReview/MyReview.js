import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewCard from "./MyReviewCard";
import toast, { Toaster } from 'react-hot-toast';
import useTitle from "../../hooks/useTitle";

const MyReview = () => {
    
    useTitle('My Reviews')
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myReviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure, you want to cancel this order');
    if(proceed){
        fetch(`http://localhost:5000/myReviews/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0){
                toast.success('Deleted successfully!');
                <Toaster />
                const remaining = reviews.filter(odr => odr._id !== id);
                setReviews(remaining);
            }
        })
    }
}

  return (
    <div>
      {
        reviews?.length ?
        <>
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
                        handleDelete={handleDelete}
                    ></MyReviewCard>
                    ))}
                </tbody>
                </table>
            </div>
        </>
        :
        <>
        <h2 className="mt-6 text-2xl text-center text-primary underline underline-offset-4 font-bold ">
        No reviews are added by You.
      </h2>
        </>
      }
    </div>
  );
};

export default MyReview;
