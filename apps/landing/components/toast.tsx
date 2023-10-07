"use client";

import { SubmitButton } from "./button";
import Icons from "./icons/Icons";

interface SnackProps {
  message: string;
  type: string;
  setIsToastVisible: any;
}

export const Toast = ({ message, type, setIsToastVisible }: SnackProps) => {
  const closeToast = () => {
    setIsToastVisible({ show: false });
  };

  return (
    <div className="fixed right-[4rem] bottom-[4rem] z-40 flex w-[65rem] max-w-[95%] items-center rounded-[20px] border border-transparent-white p-8 text-[2rem] backdrop-blur-[12px]">
      <div className="space-x-3">
        <Icons
          name={type === "success" ? "success" : "error"}
          color={type === "success" ? "text-green" : "text-red"}
        />
      </div>
      <div className="ml-4">{message}</div>
      <div className="absolute right-0 m-5">
        <SubmitButton variant={"secondary"} onClick={closeToast}>
          ✕
        </SubmitButton>
      </div>
    </div>
  );
};
