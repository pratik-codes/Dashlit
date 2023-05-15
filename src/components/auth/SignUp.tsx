import Button from "components/common/button/button";
import InputComponent from "components/common/InputComponent";
import PropTypes from "prop-types";
import React, { useState } from "react";

import {
  signInHandler,
  signUpHandler
} from "../../firebase/functions/AuthActions";
import triggerMessage from "../common/SnackBar";
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
          <h1 className="font-bold text-white text-2xl">Hi, Welcome!</h1>
          <p className="text-sm text-white text-opacity-60	">
            We are happy to have you here...
          </p>
          <br />
          <div className="mb-3">
            <InputComponent
            inputType="secondary"
              id="Email"
              type="text"
              onChange={(e: any) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <InputComponent
            inputType="secondary"
              id="password"
              onChange={(e: any) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
          />
          </div>
          <div className="mb-3">
            <InputComponent
              inputType="secondary"
              id="confirmPassword"
              type="password"
              onChange={(e: any) => setConfirmPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <br />
          <div className="flex flex-col">
            <Button
              onClick={clickHandler}
            >
              Sign Up
            </Button>
            <p className="text-center text-white text-xs mt-4 flex justify-center">
              Already have a account?{" "}
              <div onClick={() => setActiveView("signin")}>
                <a className="text-indigo font-bold ml-2">Sign in</a>
              </div>
            </p>
          </div>
          <br />
          <p className="text-center text-white text-xs mt-8">
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
