import React, { useState } from "react";
import flames from "../assets/images/flames.jpg";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";

interface AuthProps {
  path: string;
}

const Auth: React.FC = () => {
  const [activeView, setActiveView] = useState("singin");

  return (
    <div className="h-screen flex justify-center flex-wrap content-center bg-gray-800">
      <div
        style={{ borderRadius: "25px", maxHeight: "95%" }}
        className="flex m-4 shadow-2xl w-10/12 p-5 bg-gray-900 border-gray-900 hover:border-indigo-600 border-2">
        <div className="w-5/12">
          <div className="w-8/12 mx-auto mt-10">
            <h1 className="text-xl text-white font-mono">Dashlit</h1>
            <br />
            {activeView === "signup" ? (
              <SignUp setActiveView={setActiveView} />
            ) : (
              <SignIn setActiveView={setActiveView} />
            )}
          </div>
        </div>

        <div className="w-7/12">
          <img
            style={{ borderRadius: "30px" }}
            src={flames}
            className="w-full h-full"
            alt="flames picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Auth;
