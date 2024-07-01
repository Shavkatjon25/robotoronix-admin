
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAWrqLWOgSb952ootM1b_QKrPyglxvAAuw",
  authDomain: "robbo-7faa4.firebaseapp.com",
  databaseURL: "https://robbo-7faa4-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "robbo-7faa4",
  storageBucket: "robbo-7faa4.appspot.com",
  messagingSenderId: "586823571725",
  appId: "1:586823571725:web:ca4c5194edf31994bc7844"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);