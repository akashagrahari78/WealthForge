import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { toast } from 'react-toastify';
// import { userContext } from '../context/userContext'; //  Uncomment and use your context

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Context and Navigation
  // const { backendUrl, setToken } = useContext(userContext);
  const navigate = useNavigate();

  // ✅ Handle Login
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // setIsLoading(true);
    // try {
    //   const response = await axios.post(
    //     `${backendUrl}/api/user/login`,
    //     { email, password },
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   );

    //   if (response.data.success) {
    //     setToken(response.data.token);
    //     localStorage.setItem('token', response.data.token);
    //     toast.success('Login successful! Redirecting...');
    //     setTimeout(() => navigate('/'), 1500);
    //   } else {
    //     toast.error(response.data.message || 'Login failed');
    //   }
    // } catch (error) {
    //   console.error('Login error:', error);
    //   toast.error(
    //     error.response?.data?.message ||
    //       error.message ||
    //       'Login failed. Please try again.'
    //   );
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-['Inter',_sans-serif]">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 m-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Login to Your Account</h1>
          <p className="text-gray-500 mt-2">Welcome back! Please enter your details.</p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmitHandler}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black text-gray-900 placeholder-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-black focus:border-black text-gray-900 placeholder-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors duration-300 disabled:bg-gray-500"
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center mb-6">
          <div className="border-t border-gray-300 w-full"></div>
          <div className="px-4 text-gray-500 text-sm">OR</div>
          <div className="border-t border-gray-300 w-full"></div>
        </div>

        {/* Google Login Button */}
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
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                s8.955,20,20,20s20-8.955,20-20
                C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819
                C14.655,15.108,18.961,12,24,12
                c3.059,0,5.842,1.154,7.961,3.039
                l5.657-5.657
                C34.046,6.053,29.268,4,24,4
                C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44
                c5.166,0,9.86-1.977,13.409-5.192
                l-6.19-5.238
                C29.211,35.091,26.715,36,24,36
                c-5.222,0-9.619-3.317-11.283-7.946
                l-6.522,5.025
                C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303
                c-0.792,2.237-2.231,4.166-4.087,5.571
                l6.19,5.238
                C42.02,35.15,44,30.025,44,24
                C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <span className="font-semibold text-gray-800">Sign in with Google</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold text-black hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
