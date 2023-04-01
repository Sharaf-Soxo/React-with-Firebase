import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAztPzsILISLfDunUzvLv69uLhwncllCkE",
  authDomain: "login-78196.firebaseapp.com",
  projectId: "login-78196",
  storageBucket: "login-78196.appspot.com",
  messagingSenderId: "284670413661",
  appId: "1:284670413661:web:9a00f7daf4ffb0388d76b4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
