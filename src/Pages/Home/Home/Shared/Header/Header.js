import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../../dentist-assets/logo.png";
import { RiUserSharedFill, RiUserUnfollowFill } from 'react-icons/ri';
import { AuthContext } from "../../../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const {user}= useContext(AuthContext);
  const menuItems = (
    <>
      <li className="font-semibold text-blue-700">
        <Link to="/">Home</Link>
      </li>
      {
        user?.email ?
        <li className="font-semibold text-blue-700">
        <Link to="/myReviews">My Reviews</Link>
        </li>
        :
        <></>
      }
    </>
  );

  return (
    <div className="navbar h-24 pt-3 mb-8 bg-base-100 lg:p-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="text-xl">
          <img style={{ height: "5rem" }} src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {
          user?.email ?
          <Link to='/login'><button className="btn btn glass bg-error text-black btn-xs btn-md"><RiUserUnfollowFill/> Logout</button></Link>
          :
          <Link to='/login'><button className="btn btn glass bg-primary text-black btn-xs btn-md"><RiUserSharedFill/> Login</button></Link>
        }
      </div>
    </div>
  );
};

export default Header;
