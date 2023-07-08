import triggerMessage from "components/common/SnackBar";
import { demoAppData } from "./data/demoapp.data";

export const isDemoApp = import.meta.env.VITE_DEMO_APP === 'true';

export const mutateDataHandler = (executeCallBack: any): any => {
  console.log({ isDemoApp });
  if (isDemoApp) {
    triggerMessage("This is a demo app. You cannot perform this action.", "info");
    return;
  }

  if (executeCallBack) executeCallBack();
}

export const loginDemoUser = async (): Promise<any> => {
  console.log("login demo user")
  try {
    console.log("sgin in demo user");
    demoAppData.map((data: any) => {
      localStorage.setItem(data.key, data.value);
    })
  } catch (error: any) {
    console.log("error while singing in demo user: ", { error })
  }
}
