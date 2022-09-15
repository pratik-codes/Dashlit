import { settings } from "firebase/analytics";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { user_setting } from "../../components/data/data";
import { auth, db } from "../firebase-config";

onAuthStateChanged(auth, currentUser => {
  if (currentUser) {
    localStorage.setItem("user", JSON.stringify(currentUser));
    localStorage.setItem("user_uid", currentUser.uid);
  } else {
    localStorage.removeItem("user");
    localStorage.removeItem("user_uid");
  }
});

export const signUpHandler = async (
  email: string,
  password: string,
  confirmPassword: string
): Promise<any> => {
  if (!email || !password || !confirmPassword) {
    return { error: "email or password is empty" };
  }
  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(
      async user => {
        console.log({ user_setting });
        await setDoc(doc(db, "users", user.user.uid), {
          name: email,
          email: email,
          settings: JSON.stringify(user_setting)
        });
        localStorage.setItem("user_uid", user.user.uid);
      }
    );
    return { success: true };
  } catch (error: any) {
    console.log({ error });
    return { error: error.message.split("Firebase:")[1] };
  }
};

const addSettings = async (userId: string) => {
  const docref = doc(collection(db, "users"), userId);
  const settingsColRef = collection(docref, "settings");
  user_setting.map(async setting => {
    await addDoc(settingsColRef, setting);
  });
};

export const signInHandler = async (
  email: string,
  password: string
): Promise<any> => {
  if (!email || !password) {
    return { error: "email or password is empty" };
  }
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("user_uid", user.user.uid);
    return { success: true };
  } catch (error: any) {
    return { error: error.message.split("Firebase:")[1] };
  }
};

export const logoutHandler = async () => {
  await signOut(auth);
};
