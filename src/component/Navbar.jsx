import React, { useContext } from "react";
import { Link } from "react-router";
import { MdAccountCircle } from "react-icons/md";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar bg-[#05332b] shadow-sm text-white p-6">
      <div className="flex flex-col md:flex-row justify-between items-center md:w-11/12 md:mx-auto w-full gap-4">
        <div>
          <Link
            to="/"
            className="cursor-pointer font-semibold md:text-2xl text-xl hover:text-[#ffc108]"
          >
            Better
            <span className="text-[#ffc108] hover:text-white">Together</span>
          </Link>
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

          {!user?.email && (
            <Link
              to="/auth/login"
              className="bg-[#ffc108] text-[#05332b] px-4 py-2 rounded hover:bg-yellow-400 transition"
            >
              Log In
            </Link>
          )}

          {user?.email && (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer btn-circle avatar tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link
                    className="justify-between bg-[#05332b] mb-2 p-2"
                    to="/create-event"
                  >
                    Create Event
                  </Link>
                </li>
                <li>
                  <Link className="bg-[#05332b] mb-2 p-2" to="/manage-events">
                    Manage Event
                  </Link>
                </li>
                <li>
                  <Link className="bg-[#05332b] p-2 mb-2" to="/joined-events">
                    Joined Event
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-[#05332b] p-2 w-full text-left"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
