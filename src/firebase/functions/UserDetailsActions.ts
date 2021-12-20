import { db, auth } from "../firebase-config";
import { collection, doc, getDoc } from "firebase/firestore";

// global data used in the services
const userId = localStorage.getItem("user_uid");

export const getUserDetailsService = async (): Promise<any> => {
  if (userId) {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      localStorage.setItem("user_settings", JSON.stringify(docSnap.data()));
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
};
