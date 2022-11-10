import React from "react";
import {AiFillEdit}  from 'react-icons/ai';
import {RiDeleteBin2Fill}  from 'react-icons/ri';

const MyReviewCard = ({ review }) => {
  const { serviceName, message } = review;
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
        <div className="text-md mx-auto"><button className="btn btn-outline btn-secondary"><AiFillEdit></AiFillEdit></button></div>
        </td>
        <td>
        <div className="text-md mx-auto"><button className="btn btn-outline btn-error"><RiDeleteBin2Fill></RiDeleteBin2Fill></button></div>
        </td>
      </tr>
  );
};

export default MyReviewCard;
