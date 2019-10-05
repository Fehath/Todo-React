import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvVxuFGxoyuBsNyaG3O6l40PQy-_HoI8M",
  authDomain: "todoapp-3da60.firebaseapp.com",
  databaseURL: "https://todoapp-3da60.firebaseio.com",
  projectId: "todoapp-3da60",
  storageBucket: "",
  messagingSenderId: "82242615393",
  appId: "1:82242615393:web:8d55740557f0abd6e81220",
  measurementId: "G-NQ3702ZKFS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
