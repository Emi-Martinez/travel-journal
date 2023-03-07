import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAV4nb5yywo9SVtOn3rej_gtJgCsmORNAM",
  authDomain: "travel-journal-f0167.firebaseapp.com",
  projectId: "travel-journal-f0167",
  storageBucket: "travel-journal-f0167.appspot.com",
  messagingSenderId: "662762726335",
  appId: "1:662762726335:web:c82f963be24e70867e370a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);