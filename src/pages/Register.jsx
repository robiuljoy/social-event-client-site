import React, { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import img from "../assets/gallery3.jpg";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, updateUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const showToast = (icon, title) => {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (
      !/(?=.*[a-z])/.test(password) ||
      !/(?=.*[A-Z])/.test(password) ||
      password.length < 6
    ) {
      return showToast(
        "error",
        "Password must be at least 6 characters and include uppercase & lowercase letters"
      );
    }

    createUser(email, password)
      .then(() => updateUser({ displayName: name, photoURL }))
      .then(() => {
        showToast("success", "Account created successfully");
        navigate("/");
      })
      .catch((err) => showToast("error", err.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        showToast("success", "Logged in successfully");
        navigate("/");
      })
      .catch((err) => showToast("error", err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#081613] via-[#062520] via-[#052c25] to-[#04342c]">
      <div className="flex w-[850px] bg-[#1E1A29] rounded-2xl overflow-hidden shadow-lg">
        <div className="w-1/2 relative hidden md:block left-part">
          <img src={img} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
          <div className="absolute top-6 left-6">
            <h1 className="text-white text-2xl font-bold tracking-wide">
              BetterTogether
            </h1>
          </div>
          <div className="absolute bottom-10 left-6 text-white">
            <h2 className="text-lg font-medium">Together We,</h2>
            <p className="text-sm opacity-90">Make a Difference</p>
          </div>
          <Link
            to="/"
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-1.5 rounded-lg transition"
          >
            Back to website →
          </Link>
        </div>

        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center right-part">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Create an account
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-purple-400 hover:underline">
              Log in
            </Link>
          </p>

          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-[#2B2636] border border-[#3D3750] rounded-md px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#2B2636] border border-[#3D3750] rounded-md px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              placeholder="Photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="bg-[#2B2636] border border-[#3D3750] rounded-md px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#2B2636] border border-[#3D3750] rounded-md px-3 py-2 text-gray-200 focus:outline-none focus:border-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-200 transition"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-400">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-purple-500" /> I
                agree to the terms & conditions
              </label>
            </div>

            <button
              type="submit"
              className="bg-white text-[#112e29] hover:bg-[#ffc108] transition-all ease-in-out font-semibold rounded-md py-2 mt-2 cursor-pointer"
            >
              Register
            </button>

            <div className="flex items-center my-4">
              <hr className="grow border-gray-600" />
              <span className="px-2 text-gray-400 text-sm">or</span>
              <hr className="grow border-gray-600" />
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2 bg-[#2B2636] hover:bg-[#3D3750] text-white py-2 rounded-md transition"
            >
              <FcGoogle size={22} /> Sign up with Google
            </button>

            <div className="mt-4 md:hidden text-center">
              <Link
                to="/"
                className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-1.5 rounded-lg transition inline-block"
              >
                Back to website →
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
