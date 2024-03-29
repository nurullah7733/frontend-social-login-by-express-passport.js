import React from "react";
import axiosInstance from "../../utils/axios/axios";
import { sessionHelper } from "../../utils/sessionHelper/sessionHelper";
import { Link } from "react-router-dom";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const localLogin = async () => {
    const res = await axiosInstance.post("/login", { email, password });
    if (res?.data?.status === "success") {
      sessionHelper.setUserData(res?.data?.data);
      window.location.href = "/";
    } else {
      alert(JSON.stringify(res.data.data));
      console.log(res.data.data);
    }
  };

  const googleSignIn = async (): Promise<void> => {
    // window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=${encodeURIComponent(
    //   url + "/auth/google/callback"
    // )}&scope=email profile&client_id=${googleClientId}`;
    window.location.href = `${backendUrl}/auth/google`;
  };

  const facebookSignIn = () => {
    window.location.href = `${backendUrl}/auth/facebook`;
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto ">
        <div className="flex justify-center items-center h-screen ">
          <div className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>
              <div className="flex items-center justify-center mb-2">
                <button
                  onClick={localLogin}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Sign In
                </button>
              </div>
              <div className="flex items-center justify-center mb-4">
                <Link to="/register" className="underline">
                  signup
                </Link>
              </div>
            </form>
            <div className="flex flex-col">
              <button
                onClick={googleSignIn}
                className="mb-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign in with Google
              </button>
              <button
                onClick={facebookSignIn}
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign in with Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
