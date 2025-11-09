import React from "react";
import { NavLink } from "react-router";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar bg-[#05332b] shadow-sm text-white p-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:w-11/12 md:mx-auto w-full gap-4">
        <div>
          <a className="cursor-pointer font-semibold md:text-2xl text-xl hover:text-[#ffc108]">
            Better
            <span className="text-[#ffc108] hover:text-white">Together</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center md:gap-12 w-full md:w-auto gap-2">
          <div>
            <a
              href=""
              className="md:text-xl text-sm hover:text-[#ffc108] hover:underline font-normal"
            >
              Upcoming Events
            </a>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="cursor-pointer hover:bg-amber-400 btn-circle avatar"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <MdAccountCircle className="w-full h-full " />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between bg-[#05332b] mb-2 p-2">
                  Create Event
                </a>
              </li>
              <li>
                <a className="bg-[#05332b] mb-2 p-2">Manage Event</a>
              </li>
              <li>
                <a className="bg-[#05332b] p-2 mb-2">Joined Event</a>
              </li>
              <li>
                <a className="bg-[#05332b] p-2">Log Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
