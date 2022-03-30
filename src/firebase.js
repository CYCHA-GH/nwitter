// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAufcPE3x-tZkjJzKnLY7l_bl-e5I8yoQQ",
  authDomain: "nwitter-a744f.firebaseapp.com",
  projectId: "nwitter-a744f",
  storageBucket: "nwitter-a744f.appspot.com",
  messagingSenderId: "1015954919564",
  appId: "1:1015954919564:web:26ca27010b759d7b8faba9",
  measurementId: "G-MNP0702SPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);