import React from 'react';

const ServiceReviewCard = ({review}) => {
    const {customer, message} = review;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="font-bold">{customer}</div>
                    </div>
                </div>
            </td>
            <td>
            <div className="text-sm opacity-80">{message}</div>
            </td>
        </tr>
    );
};

export default ServiceReviewCard;