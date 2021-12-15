import React from "react";

export interface signUpProps {
  setActiveView: any;
}

const SignUp: React.FC<signUpProps> = ({ setActiveView }) => {
  return (
    <>
      <div className="w-full">
        <form className="pt-6  mb-4">
          <h1 className="font-bold text-white text-3xl">Hi, Welcome!</h1>
          <p className="text-sm text-gray-400 text-opacity-60	">
            Best browser productivity dashboard!
          </p>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
              htmlFor="Email">
              Email
            </label>
            <input
              className="bg-gray-800 border-gray-800 shadow appearance-none border w-full p-3  mb-3 rounded-lg focus:outline-none focus:shadow-outline"
              id="Email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              className="bg-gray-800 border-gray-800 shadow appearance-none border w-full p-3 mb-3 rounded-lg focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
              htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="bg-gray-800  border-gray-800 shadow appearance-none border w-full p-3 mb-3 rounded-lg focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="confirmPassword"
              placeholder="******************"
            />
          </div>
          <br />
          <div className="flex flex-col">
            <button
              className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button">
              Sign Up
            </button>
            <p className="text-center text-gray-500 text-xs mt-4">
              Already have a account?{" "}
              <div onClick={() => setActiveView("signin")}>
                <a className="text-indigo-500 font-bold">Sign in</a>
              </div>
            </p>
          </div>
          <br />
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Dashlit. All rights reserved.
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUp;
