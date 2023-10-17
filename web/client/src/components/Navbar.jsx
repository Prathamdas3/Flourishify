import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../assets/Images/profile.jpg';

export default function Navbar() {
  return (
    <nav className="flex items-center mx-auto w-[90%] p-2 min-h-16  bg-base-100 ">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold">
          Flourshify
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end ">
          <label
            tabIndex={0}
            htmlFor="profile"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img src={Profile} alt="profile" />
            </div>
          </label>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <h5>Profile</h5>
            </li>
            <li>
              <h5>Settings</h5>
            </li>
            <li>
              <h5>Logout</h5>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
