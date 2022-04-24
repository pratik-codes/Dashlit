import { notification } from "antd";
import { message } from "antd";

export const snackbar = (
  message: string,
  description: string,
  type: string
) => {
  const config = {
    message: message,
    description: description,
    duration: 2
  };
  if (type === "success") notification.success(config);
  if (type === "fail") notification.error(config);
};

export const triggerMessage = (text: string, type: string) => {
  console.log(text, type);
  if (type === "success") message.success(text);
  if (type === "fail") message.error(text);
  if (type === "info") message.info(text);
};
