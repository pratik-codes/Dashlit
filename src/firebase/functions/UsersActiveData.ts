import { collection, doc, setDoc } from "firebase/firestore";
import { triggerMessage } from "../../components/common/SnackBar";
import { db } from "../firebase-config";
import { getSingleDocFromCollectionRef } from "./GenericFunctions";

// global data used in the services
const userId = localStorage.getItem("user_uid");
let userDataRef: any;
if (userId) {
  userDataRef = doc(collection(db, "userData"), userId);
} else {
  console.error("userId is not defined");
}

export const getUserActiveData = () => {
  const activeDataRef = doc(collection(userDataRef, "activeData"), "data");
  const data = getSingleDocFromCollectionRef(activeDataRef);
  return data;
};

export const setUserActiveData = async (params: any, type: string) => {
  const old_data: any = await getUserActiveData();
  const activeDataRef = await doc(
    collection(userDataRef, "activeData"),
    "data"
  );

  if (params?.background_url)
    localStorage.setItem("latest_file_url", params?.background_url);
  if (params?.quote) {
    localStorage.setItem("latest_quote", params?.quote);
    localStorage.setItem("latest_author", params?.author_name);
  }

  const data = {
    ...old_data?.data,
    ...params
  };
  triggerMessage(`This ${type} has been set`, "success");
  try {
    await setDoc(activeDataRef, data);
  } catch (err) {
    console.log(err);
  }
};
