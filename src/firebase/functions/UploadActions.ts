import { Console } from "console";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  listAll,
  getMetadata
} from "firebase/storage";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  setDoc
} from "firebase/firestore";
import { db, storage } from "../firebase-config";
import { getDataFromCollectionRef } from "./GenericFunctions";
import { triggerMessage } from "../../components/common/snackbar";

// global data used in the services
const userId = localStorage.getItem("user_uid");
// goinig inside userData and inside links
let BackgroundColRef: any;
let userDataRef: any;
if (userId) {
  userDataRef = doc(collection(db, "userData"), userId);
  BackgroundColRef = collection(userDataRef, "background");
} else {
  console.error("userId is not defined");
}

export const uploadBackgroundImage = async (file: File) => {
  const storageRef = ref(storage, `/files/${userId}/background/${file.name}`);
  const uploadTask = await uploadBytesResumable(storageRef, file);
  const fileUrl = await getDownloadURL(storageRef);
  const fileMetaData = await getMetadata(storageRef);

  await addDoc(BackgroundColRef, {
    name: fileMetaData.name,
    created_at: fileMetaData.timeCreated,
    url: fileUrl
  });

  if (fileUrl) return true;
  else return false;
};

export const getAllImages = async () => {
  const imagesData = await getDataFromCollectionRef(BackgroundColRef);
  return imagesData?.data;
};

// // // ====================== add a quote my quote fav  ==============================
// let docref: any;
// let FavColRef: any;
// if (userId) FavColRef = collection(docref, "favorite");

// // basic post function
// // function to add my quotes to the database
// export const addFavoriteServicePicture = async (
//   id: string,
//   url: string,
//   name: string,
//   created_at: string
// ): Promise<any> => {
//   try {
//     const isPresent = await checkIfPresentInFav(id);
//     console.log(isPresent);
//     if (isPresent) {
//       console.log("already present");
//       triggerMessage(
//         "This picture is already present in your favorite list.",
//         "fail"
//       );
//     } else {
//       setDoc(doc(FavColRef, id), {
//         id: id,
//         name: name,
//         url: url,
//         type: "picture",
//         created_at: new Date()
//       });
//       triggerMessage("Quote added to favourite.", "success");
//     }
//   } catch (error: any) {
//     return { error: error.message };
//   }
// };

// export const checkIfPresentInFav = async (id: string): Promise<any> => {
//   const docRef = doc(FavColRef, id);
//   let present = false;
//   try {
//     const doc = await getDoc(docRef);
//     if (doc.exists()) {
//       present = true;
//     }
//   } catch (error: any) {
//     console.log(error);
//   }
//   return present;
// };
