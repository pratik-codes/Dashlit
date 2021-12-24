import { v4 as uuidv4 } from "uuid";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  getDocs,
  deleteDoc
} from "firebase/firestore";
import { db } from "../firebase-config";
import { links } from "../../components/links/EditLinkDialog";
import { error } from "console";

// global data used in the services
const userId = localStorage.getItem("user_uid");
// goinig inside userData and inside links
let linksColRef: any;
let docref: any;
if (userId) {
  docref = doc(collection(db, "userData"), userId);
  linksColRef = collection(docref, "links");
} else {
  console.error("userId is not defined");
}

// ====================== create a link ==============================

// basic post function
// function to add links to the database
export const addLinksService = async (
  linkTitle: string,
  links: links[],
  type: string
): Promise<any> => {
  if (!linkTitle || links.length === 0 || !type) {
    return { error: "links title or data is empty is empty" };
  }
  try {
    if (userId) {
      await addDoc(linksColRef, {
        linkTitle: linkTitle,
        links: links,
        type: type
      });
      return { success: true };
    }
  } catch (error: any) {
    return { error: error.message };
  }
};

// ====================== get user link ==============================

// basic get function to get all user links
export const getUserLinksService = async (): Promise<any> => {
  try {
    const querySnapshot = await getDocs(linksColRef);
    const resData: any = [];
    querySnapshot.forEach(doc => {
      const data = {
        id: doc.id,
        data: doc.data()
      };
      resData.push(data);
    });

    return { success: true, data: resData };
  } catch (error: any) {
    return { error: error.message };
  }
};

// ====================== update user link ==============================

// basic patch api to update user link or folder
export const updateUserLinksService = async (
  id: string,
  data: {
    linkTitle: string;
    links: links[];
    type: string;
  }
): Promise<any> => {
  console.log(data);
  if (!data.linkTitle || data.links.length === 0) {
    return { error: "link title or data is empty" };
  }
  try {
    const linksDocRef = doc(linksColRef, id);
    await updateDoc(linksDocRef, data);
    return { success: true };
  } catch (err: any) {
    return { error: err.message };
  }
};

// ====================== delete user link ==============================

// basic delete api to delete user link or folder
export const deleteUserLinksService = async (id: string): Promise<any> => {
  if (!id) {
    console.log("user not found while deleteing link");
  }
  try {
    const linksDocRef = doc(linksColRef, id);
    await deleteDoc(linksDocRef);
    return { success: true };
  } catch (err: any) {
    return { error: err.message };
  }
};
