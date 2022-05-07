// import { ref } from "firebase/storage";
import { Console } from "console";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  listAll,
  getMetadata
} from "firebase/storage";
import { storage } from "../firebase-config";

// global data used in the services
const userId = localStorage.getItem("user_uid");

export const uploadBackgroundImage = async (file: File) => {
  const storageRef = ref(storage, `/files/${userId}/background/${file.name}`);
  const uploadTask = await uploadBytesResumable(storageRef, file);
  const fileUrl = await getDownloadURL(storageRef);

  if (fileUrl) return true;
  else return false;
};

export const getAllImages = async () => {
  const listRef = ref(storage, `/files/${userId}/background/`);

  const fileList: any = [];
  // Find all the prefixes and items.
  const allRefs = await listAll(listRef);

  for (let i = 0; i < allRefs?.items.length; i++) {
    const fileUrl = await getDownloadURL(allRefs?.items[i]);
    const fileMetaData = await getMetadata(allRefs?.items[i]);

    fileList.push({ url: fileUrl, metaData: fileMetaData });
  }

  return fileList;
};
