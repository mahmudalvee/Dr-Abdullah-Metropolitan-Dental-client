import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import noUser from '../../dentist-assets/user.png'

const ServiceReviewCard = ({review}) => {
    const {customer, message} = review;
    const { user } = useContext(AuthContext);
    return (
        <tr>
            <td>
            <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                user?.photoURL ?
                                <img src={user?.photoURL} alt="" />
                                :
                                <>
                                <img src={noUser} alt="" />
                                </>
                                }
                        </div>
                    </div>
            </td>
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