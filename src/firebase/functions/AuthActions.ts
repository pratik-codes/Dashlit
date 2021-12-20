import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
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
    createUserWithEmailAndPassword(auth, email, password).then(user => {
      setDoc(doc(db, "users", user.user.uid), {
        name: email,
        email: email,
        properties: {
          publicQuotes: true,
          showQuotes: true,
          publicPicture: true,
          showBookmarks: true,
          showClock: true,
          showDate: true,
          showWeather: true,
          showLinks: true,
          showSearch: true,
          showTodo: true
        }
      });
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("user_uid", user.user.uid);
    });
    return { success: true };
  } catch (error: any) {
    console.log({ error });
    return { error: error.message.split("Firebase:")[1] };
  }
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
