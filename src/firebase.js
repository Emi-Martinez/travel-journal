import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {

  // Here goes your firebase api keys
  
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);