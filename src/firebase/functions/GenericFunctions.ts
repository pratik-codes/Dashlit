import { getDoc, getDocs } from "firebase/firestore";

export const getDataFromCollectionRef = async (ColRef: any) => {
  try {
    const querySnapshot = await getDocs(ColRef);
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

export const getSingleDocFromCollectionRef = async (ColRef: any) => {
  try {
    const querySnapshot = await getDoc(ColRef);
    if (querySnapshot.exists()) {
      return { success: true, data: querySnapshot.data() };
    } else {
      console.log("No such document!");
    }
    console.log({ querySnapshot });
  } catch (error: any) {
    return { error: error.message };
  }
};
