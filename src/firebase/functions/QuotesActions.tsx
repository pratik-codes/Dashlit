import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where
} from "firebase/firestore";
import { triggerMessage } from "../../components/common/SnackBar";
import { db } from "../firebase-config";

// global data used in the services
const userId = localStorage.getItem("user_uid");
// goinig inside userData and inside links
let docref: any;
let myQuotesColRef: any;

if (userId) {
  docref = doc(collection(db, "userData"), userId);
  myQuotesColRef = collection(docref, "my_quotes");
} else {
  console.error("userId is not defined");
}

// ====================== create a my quotes ==============================

// basic post function
// function to add my quotes to the database
export const addMyQuotesService = async (
  quote: string,
  author: string,
  favourite: boolean
): Promise<any> => {
  if (!quote) {
    return { error: "quotes or fav is empty is empty" };
  }
  console.log({
    quote: quote,
    author: author,
    favourite: favourite
  });
  try {
    if (userId) {
      const res: any = await addDoc(myQuotesColRef, {
        quote: quote,
        author: author,
        favourite: favourite,
        updated_at: new Date()
      });
      console.log(res._key.path.segments[3]);
      return { success: true };
    }
  } catch (error: any) {
    return { error: error.message };
  }
};

// // ====================== get user my quotes ==============================

// basic get function to get all user my quotes
export const getMyQuotesService = async (): Promise<any> => {
  try {
    const querySnapshot = await getDocs(myQuotesColRef);
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

// // ====================== update user my quotes ==============================

// // basic patch api to update user my quotes
export const updateMyQuotesService = async (
  id: string,
  data: {
    quote: string;
    author: string;
    favourite: boolean;
  },
  type = "my_quotes"
): Promise<any> => {
  console.log(data);
  try {
    const linksDocRef = doc(myQuotesColRef, id);
    await updateDoc(linksDocRef, data);
  } catch (err: any) {
    return { error: err.message };
  }
};

// // ====================== delete user my quotes ==============================

// basic delete api to delete user my quotes
export const deleteMyQuotesService = async (id: string): Promise<any> => {
  if (!id) {
    console.log("user not found while deleteing link");
  }
  try {
    const docref = doc(myQuotesColRef, id);
    await deleteDoc(docref);
    return { success: true };
  } catch (err: any) {
    return { error: err.message };
  }
};

// // ====================== get all public quotes ==============================

// going inside userData and inside links
let publicQuotesRef: any;
let allQuotes: any;
if (userId) {
  publicQuotesRef = doc(collection(db, "Admin"), "public_quotes");
  allQuotes = collection(publicQuotesRef, "quotes");
} else {
  console.error("userId is not defined");
}

export const getAllPublicQuotesService = async (): Promise<any> => {
  try {
    const querySnapshot = await getDocs(allQuotes);
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

// // ====================== add a quote my quote fav  ==============================

let FavColRef: any;
if (userId) FavColRef = collection(docref, "favorite");

// basic post function
// function to add my quotes to the database
export const addFavoriteService = async (
  id: string,
  quote: string,
  author: string
): Promise<any> => {
  try {
    const isPresent = await checkIfPresentInFav(id);

    if (isPresent) {
      console.log("already present");
      triggerMessage(
        "This quote is already present in your favorite list.",
        "fail"
      );
    } else {
      setDoc(doc(FavColRef, id), {
        id: id,
        quote: quote,
        author: author,
        type: "quote",
        created_at: new Date()
      });
      triggerMessage("Quote added to favourite.", "success");
    }
  } catch (error: any) {
    return { error: error.message };
  }
};

export const editFavoriteService = async (
  id: string,
  quote: string
): Promise<any> => {
  try {
    const isPresent = await checkIfPresentInFav(id);
    console.log(isPresent);
    if (isPresent) {
      setDoc(doc(FavColRef, id), {
        id: id,
        quote: quote,
        type: "quote",
        updated_at: new Date()
      });
    }
  } catch (error: any) {
    return { error: error.message };
  }
};

export const deleteFavoriteService = async (id: string): Promise<any> => {
  try {
    const docref = doc(FavColRef, id);
    await deleteDoc(docref);
    return { success: true };
  } catch (err: any) {
    return { error: err.message };
  }
};

export const getFavouriteService = async (): Promise<any> => {
  try {
    const querySnapshot = await query(FavColRef, where("type", "==", "quote"));
    const quoteData = await getDocs(querySnapshot);
    const resData: any = [];
    quoteData.forEach(doc => {
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

export const checkIfPresentInFav = async (id: string): Promise<any> => {
  const docRef = doc(FavColRef, id);
  let present = false;
  try {
    const doc = await getDoc(docRef);
    if (doc.exists()) {
      present = true;
    }
  } catch (error: any) {
    console.log(error);
  }
  return present;
};
