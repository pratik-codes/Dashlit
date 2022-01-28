import { notification } from "antd";

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
