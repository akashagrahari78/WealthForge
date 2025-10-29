import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { toast } from "react-toastify";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    // setIsLoading(true);

    // try {
    //   const { data } = await axios.post("/api/auth/signup", {
    //     name,
    //     email,
    //     password,
    //   });

    //   toast.success("Account created successfully!");
    //   // You can save token in localStorage or context
    //   // localStorage.setItem("token", data.token);
    //   navigate("/login"); // redirect to login page
    // } catch (error) {
    //   console.error(error);
    //   toast.error(
    //     error.response?.data?.message || "Something went wrong. Try again!"
    //   );
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-['Inter',_sans-serif]">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 m-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create an Account</h1>
          <p className="text-gray-500 mt-2">
            Get started by creating your account.
          </p>
        </div>

        <form onSubmit={onSubmitHandler}>
          {/* Full Name Input */}
          <InputField
            id="name"
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={name}
            setValue={setName}
          />

          {/* Email Input */}
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={email}
            setValue={setEmail}
          />

          {/* Password Input */}
          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            setValue={setPassword}
          />

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isLoading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-black text-white hover:bg-gray-800 focus:ring-black"
              }`}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </div>
        </form>

        {/* Divider */}
        <Divider />

        {/* Google Login Button */}
        <GoogleButton text="Sign up with Google" />

        {/* Sign In Link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-black hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

// Reusable InputField component
const InputField = ({ id, label, type, placeholder, value, setValue }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black text-gray-900 placeholder-gray-500"
    />
  </div>
);

// Divider component
const Divider = () => (
  <div className="flex items-center justify-center mb-6">
    <div className="border-t border-gray-300 w-full"></div>
    <div className="px-4 text-gray-500 text-sm">OR</div>
    <div className="border-t border-gray-300 w-full"></div>
  </div>
);

// Google Button component
const GoogleButton = ({ text }) => (
  <div className="mb-6">
    <button
      type="button"
      className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors duration-300"
    >
      <svg
        className="w-5 h-5 mr-3"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
      >
        <path
          fill="#FFC107"
          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
        />
        <path
          fill="#FF3D00"
          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
        />
        <path
          fill="#4CAF50"
          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
        />
        <path
          fill="#1976D2"
          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.02,35.15,44,30.025,44,24C44,22.659,43.862,21.35,43.611,20.083z"
        />
      </svg>
      <span className="font-semibold text-gray-800">{text}</span>
    </button>
  </div>
);

export default SignUp;
