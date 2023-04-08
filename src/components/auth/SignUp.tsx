import PropTypes from "prop-types";
import React, { useState } from "react";

import {
  signInHandler,
  signUpHandler
} from "../../firebase/functions/AuthActions";
import { triggerMessage } from "../common/SnackBar";
export interface signUpProps {
  setActiveView: any;
}

const SignUp: React.FC<signUpProps> = ({ setActiveView }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const clickHandler = async () => {
    const res = await signUpHandler(email, password, confirmPassword);
    if (res.success) {
      triggerMessage("Sign Up Successful", "success");
      signInHandler(email, password);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else {
      triggerMessage(res.error, "fail");
    }
  };

  return (
    <>
      <div className="w-full">
        <form className="pt-6  mb-4">
          <h1 className="font-bold text-white text-3xl">Hi, Welcome!</h1>
          <p className="text-sm text-white text-opacity-60	">
            Best browser productivity dashboard!
          </p>
          <br />
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="Email">
              Email
            </label>
            <input
              className="text-white border-grey shadow appearance-none border w-full p-3  mb-3 rounded-lg focus:outline-none focus:shadow-outline"
              id="Email"
              type="text"
              onChange={(e: any) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              className="text-white border-grey shadow appearance-none border w-full p-3 mb-3 rounded-lg focus:outline-none focus:shadow-outline"
              id="password"
              onChange={(e: any) => setPassword(e.target.value)}
              type="password"
              placeholder="******************"
            />
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="text-white border-grey shadow appearance-none border w-full p-3 mb-3 rounded-lg focus:outline-none focus:shadow-outline"
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
              className="bg-indigo hover:bg-metal text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button">
              Sign Up
            </button>
            <p className="text-center text-white text-xs mt-4">
              Already have a account?{" "}
              <div onClick={() => setActiveView("signin")}>
                <a className="text-indigo font-bold">Sign in</a>
              </div>
            </p>
          </div>
          <br />
          <p className="text-center text-white text-xs">
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
