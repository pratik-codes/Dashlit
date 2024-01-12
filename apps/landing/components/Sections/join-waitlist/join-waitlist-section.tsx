"use client";

import mixpanel from "mixpanel-browser";
import { useState } from "react";

import { Button, IconWrapper } from "../../button";
import { ChevronIcon } from "../../icons/chevron";
import { Toast } from "../../toast";

const JoinWaitListSection = () => {
  const [toastData, setToastData] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [email, setEmail] = useState<string>();

  function isValidEmail(email: any): boolean {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  }

  const updateToastData = (data: any) => {
    setToastData({ ...toastData, ...data });
  };

  const resetToast = () => {
    setTimeout(() => {
      setToastData({
        show: false,
        message: "",
        type: "",
      });
    }, 6000);
  };

  const onClickSubmitHandler = () => {
    if (!email || !isValidEmail(email)) {
      updateToastData({
        show: true,
        message: "Please enter a valid email",
        type: "error",
      });
      resetToast();
      return;
    }
    mixpanel.track("subscribe", {
      email: email,
    });
    updateToastData({
      show: true,
      message:
        "Thanks for joining the waitlist. We will get back to you shortly!",
      type: "success",
    });
    resetToast();
  };

  return (
    <section id="subscribe" className={"mt-[30rem]"}>
      <div className={`py-2`}>
        {toastData.show && (
          <Toast
            type={toastData.type}
            message={toastData.message}
            setIsToastVisible={updateToastData}
          />
        )}
        <section
          className={`mx-auto mt-[10rem] mb-[10rem] animate-fade-in text-center`}
        >
          <div className="z-10">
            <div className="mb-2 text-center text-5xl font-bold">
              Get Dashlit now!
            </div>
            <div className="mb-4 text-center text-lg text-grey">
              by signing up for dashlit now you will be a beta tester and get
              dashlit access for free!
            </div>
            <div className="flex justify-center space-x-1">
              <Button
                href="https://chrome.google.com/webstore/detail/dashlit/modghppmaijnnbhleacfecnbgcjhkcnk"
                target="__blank"
                className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
                variant="primary"
                size="large"
              >
                Get Dashlit
                <IconWrapper>
                  <ChevronIcon />
                </IconWrapper>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default JoinWaitListSection;
