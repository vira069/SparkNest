import React from "react";
import { FaUser, FaLock, FaGithub, FaLinkedin, FaFacebook, FaGoogle } from "react-icons/fa"; // Importing icons
//import loginImage from "../../assets/temp/LoginImage.jpeg";

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Logging in:", { username, password });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="w-full md:w-1/2 h-1/2 bg-gradient-to-r from-blue-200 to-purple-100  md:h-full flex justify-center items-center">
        <img
         // src={loginImage}
          alt="Login Illustration"
          className="w-1/2 h-1/2"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gradient-to-r from-blue-300 to-purple-200 flex flex-col justify-center items-center p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">LOGIN</h1>
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          {/* Username Input with Icon */}
          <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
          <div className="mb-3 relative flex items-center">
            <FaUser className="absolute left-2 text-gray-500" /> {/* Username Icon */}
            <input
              className="shadow appearance-none border rounded-2xl w-full py-1.5 px-3 pl-8 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>

          {/* Password Input with Icon */}
          <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
          <div className="mb-3 relative flex items-center">
            <FaLock className="absolute left-2 text-gray-500" /> {/* Password Icon */}
            <input
              className="shadow appearance-none border rounded-2xl w-full py-1.5 px-3 pl-8 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                className="form-checkbox accent-blue-500 focus:ring-blue-500"
              />
              <span className="ml-1 text-gray-700 text-xs">Remember Me</span>
            </label>
            <a
              href="#"
              className="font-bold text-xs text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          <div className="mb-4">
            <button
              className="w-full rounded-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded text-sm focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>

          <div className="text-center">
            <a
              href="#"
              className="font-bold text-xs text-blue-500 hover:underline"
            >
              Create Account?
            </a>
          </div>
          <p className="mt-2 text-center text-gray-600 text-xs">
            By creating this account, you agree to our{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Privacy Policy
            </a>{" "}
            &{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Cookie Policy
            </a>
            .
          </p>
        </form>

        <div className="mt-4 w-full max-w-sm">
        <p className="text-gray-700 text-xs text-center mb-3">--- or ---</p>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-2xl text-xs focus:outline-none focus:shadow-outline">
            <FaGoogle className="inline mr-2" /> Google
            </button>
            <button className="bg-blue-800 hover:bg-blue-600 text-white py-1 px-2 rounded-2xl text-xs focus:outline-none focus:shadow-outline">
            <FaFacebook className="inline mr-2" /> Facebook
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-2 rounded-2xl text-xs focus:outline-none focus:shadow-outline">
            <FaLinkedin className="inline mr-2" /> LinkedIn
            </button>
            <button className="bg-gray-700 hover:bg-gray-900 text-white py-1 px-2 rounded-2xl text-xs focus:outline-none focus:shadow-outline">
            <FaGithub className="inline mr-2" /> GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
