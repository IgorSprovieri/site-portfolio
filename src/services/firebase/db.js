import { getFirestore } from "firebase/firestore";
import { app } from ".";

export const db = getFirestore(app);
