import React, { useState } from "react";
import PropTypes from "prop-types";

import { signUpHandler } from "../../firebase/functions/AuthActions";
import SnackbarComponent from "../common/SnackbarComponent";
export interface signUpProps {
  setActiveView: any;
}

const SignUp: React.FC<signUpProps> = ({ setActiveView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [snackbar, setSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const clickHandler = async () => {
    const res = await signUpHandler(email, password, confirmPassword);
    console.log(res);
    if (res.success) {
      setMessage("Sign Up Successful");
      setColor("#1A202C");
      setSnackbar(true);
    } else {
      setMessage(res.error);
      setColor("#600709");
      setSnackbar(true);
    }
  };

  return (
    <>
      <div className="w-full">
        <SnackbarComponent
          message={message}
          color={color}
          setOpen={snackbar}
          setSnackbarOpen={setSnackbar}
        />
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
              className="text-gray-400 bg-gray-800 border-gray-800 shadow appearance-none border w-full p-3  mb-3 rounded-lg focus:outline-none focus:shadow-outline"
              id="Email"
              type="text"
              onChange={(e: any) => setEmail(e.target.value)}
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
              className="text-gray-400 bg-gray-800 border-gray-800 shadow appearance-none border w-full p-3 mb-3 rounded-lg focus:outline-none focus:shadow-outline"
              id="password"
              onChange={(e: any) => setPassword(e.target.value)}
              type="password"
              placeholder="******************"
            />
            <label
              className="block text-gray-400 text-sm font-bold mb-2"
              htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="text-gray-400 bg-gray-800  border-gray-800 shadow appearance-none border w-full p-3 mb-3 rounded-lg focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              onChange={(e: any) => setConfirmPassword(e.target.value)}
              placeholder="******************"
            />
          </div>
          <br />
          <div className="flex flex-col">
            <button
              onClick={clickHandler}
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

SignUp.propTypes = {
  setActiveView: PropTypes.string.isRequired
};
