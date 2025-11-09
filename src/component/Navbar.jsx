import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  return (
    <div className="navbar bg-[#05332b] shadow-sm text-white p-6">
      <div className="flex justify-between items-center md:w-11/12 md:mx-auto">
        <div>
          <a className="cursor-pointer font-semibold md:text-2xl text-xl hover:text-[#ffc108]">
            Better
            <span className="text-[#ffc108] hover:text-white">Together</span>
          </a>
        </div>
        <div>
          <a
            href=""
            className="md:text-2xl hover:text-[#ffc108] hover:underline font-bold"
          >
            Upcoming Events
          </a>
        </div>
        <div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-50 rounded-full">
                <CgProfile className="w-50" />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between bg-[#05332b] mb-2 p-2">Profile</a>
              </li>
              <li>
                <a className="bg-[#05332b] mb-2 p-2">Settings</a>
              </li>
              <li>
                <a className="bg-[#05332b] p-2">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
