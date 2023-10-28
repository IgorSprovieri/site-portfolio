import { db } from "./db";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const simpleGet = async (table) => {
  try {
    const result = await getDocs(collection(db, table));

    const docs = result.docs.map((doc) => {
      return doc.data();
    });

    return docs;
  } catch (error) {
    console.log(error);
  }
};
