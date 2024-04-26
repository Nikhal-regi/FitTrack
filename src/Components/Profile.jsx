import React from "react";
import Stat from "./Stat";
const Profile = () => {
  return (
    <>
      <div className="avatar">
        <div className="w-24 mask mask-squircle">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className="relative">
        <div className="badge badge-info gap-2 absolute bottom-[2.8rem] left-[7.5rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-4 h-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          Morning Bird
        </div>
        <div className="badge badge-success gap-2 absolute bottom-[4.6rem] left-[7.5rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-4 h-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          Healthy
        </div>
        <div className="badge badge-warning gap-2 absolute bottom-[1.1rem] left-[7.5rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-4 h-4 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          Buring Passion
        </div>
      </div>
      <div className="indicator mt-4">
        <div className="card border">
          <div className="card-body w-[400px]">
            <h2 className="card-title text-black">Welcome Sara 👋</h2>
            <p className="text-black">
              Get ready to embark on a journey of health and wellness with us.🎉
              Whether you're a seasoned athlete or just starting out, we're here
              to support you every step of the way.
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          className="radial-progress text-primary absolute bottom-[4rem] right-9 text-center"
          style={{ "--value": 60 }}
          role="progressbar"
        >
          <p className="top-[2.19rem] left-[.1rem] relative">60%</p>
          <br />
          <p className="top-10 relative">
            Task <br /> complete
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="rating rating-lg rating-half absolute bottom-[16.5rem] right-[1.5rem]">
          <input type="radio" name="rating-10" className="rating-hidden" />
          <input
            type="radio"
            name="rating-10"
            className="bg-gold mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-gold mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-gold mask mask-star-2 mask-half-1"
            checked
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-gold mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-gold mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-gold mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-gold mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-gold mask mask-star-2 mask-half-2"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-gold mask mask-star-2 mask-half-1"
          />
          <input
            type="radio"
            name="rating-10"
            className="bg-gold mask mask-star-2 mask-half-2"
          />
        </div>
      </div>
      <Stat />
    </>
  );
};

export default Profile;
