import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { getSingleDocFromCollectionRef, replaceOrAddSetting } from "./GenericFunctions";

// global data used in the services
const userId: any = localStorage.getItem("user_uid");
let liveRef: any;
if (userId) {
  liveRef = doc(collection(db, "Admin"), "live");
} else {
  console.error("userId is not defined");
}

export const getUserDetailsService = async (): Promise<any> => {
  if (userId) {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    localStorage.setItem("user-settings", JSON.stringify(docSnap.data()));

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
};

export const updateUserDetailsService = async (data: any): Promise<any> => {
  if (userId) {
    try {
      const docRef = doc(db, "users", userId);
      const docSnap = await setDoc(docRef, data);
    } catch (error) {
      console.log("Error setting document:", error);
    }
  }
};

export const getLiveDetails = () => {
  const data = getSingleDocFromCollectionRef(liveRef);
  return data;
};

export const markUserAsAuthenticated = async () => {
  console.log("ran markUserAsAuthenticated")
  // get reference to user uid doc from user collections
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const settings = docSnap.data()?.settings;
    const newSettings = replaceOrAddSetting(settings, {
      type: 'calendar-settings',
      name: 'Show calendar',
      description: 'Disable if you dont want to see google calendar on the home screen',
      isToggled: true,
      isAuthenticated: true
    });
    await updateDoc(docRef, {
      settings: newSettings
    })
    getUserDetailsService();
    setTimeout(() => {
      window.location.reload();
    }, 2000)
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }


}
