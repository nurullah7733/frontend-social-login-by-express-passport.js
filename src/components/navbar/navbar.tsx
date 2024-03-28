import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { sessionHelper } from "../../utils/sessionHelper/sessionHelper";
import axiosInstance from "../../utils/axios/axios";

const NavBar = () => {
  const logout = async () => {
    const res = await axiosInstance.get("/logout");
    if (res?.data?.status === "success") {
      sessionHelper.sessionDestroy();
      window.location.href = "/";
    }
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <nav className="">
          <div className="flex justify-between">
            <div>
              <Link to="/" className="flex">
                <img src={reactLogo} className="h-8" />
                <img src={viteLogo} className="h-8" />
              </Link>
            </div>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                {sessionHelper.getUserData() && (
                  <img
                    src={sessionHelper.getUserData()?.image}
                    className="h-8 w-8 rounded-full"
                  />
                )}
              </li>
              <li>
                {sessionHelper.getUserData() ? (
                  <button className="hover:text-gray-300" onClick={logout}>
                    Logout
                  </button>
                ) : (
                  <Link to="/login" className="hover:text-gray-300">
                    Login
                  </Link>
                )}
              </li>
              {/* Additional navbar items */}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
