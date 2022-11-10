import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin2Fill } from "react-icons/ri";


const MyReviewCard = ({ review, handleDelete }) => {
  const { _id, service, serviceName, message } = review;
//   const [reviewService, setReviewService] = useState([]);

//   useEffect(() => {
//     fetch(`https://dentist-server-alpha.vercel.app/services/${service}`)
//       .then((res) => res.json())
//       .then((data) => setReviewService(data));
//   }, [service]);

  return (
    <tr>
      <td>
        <div>
          <div className="font-bold">{serviceName}</div>
        </div>
      </td>
      <td>
        <div className="text-sm opacity-80">{message}</div>
      </td>
      <td>
        <div className="text-md mx-auto">
          <button className="btn btn-outline btn-secondary">
            <AiFillEdit></AiFillEdit>
          </button>
        </div>
      </td>
      <td>
        <div className="text-md mx-auto">
          <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error">
            <RiDeleteBin2Fill></RiDeleteBin2Fill>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyReviewCard;
