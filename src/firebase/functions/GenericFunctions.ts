import { getDocs } from "firebase/firestore";

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
