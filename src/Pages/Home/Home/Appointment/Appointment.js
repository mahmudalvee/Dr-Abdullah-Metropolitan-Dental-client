import React from "react";

const Appointment = () => {
  return (
    <div className="hero py-8 bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold">Get Appointment!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="phone number"
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text">Reason for Appointment</span>
                </label>
                <textarea className="textarea textarea-secondary" placeholder="Reason"></textarea>
                
                <label className="label">
                  <span className="label-text">Date for Appointment</span>
                </label>
                <input
                  type="date"
                  placeholder="Date"
                  className="input input-bordered"
                />
              
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline btn-primary btn-xs btn-md btn glass">Book Appointment</button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
