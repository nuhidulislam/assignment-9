import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrdmrw09yOFKcKI4_85BDl69zeUdVQ4ak",
  authDomain: "career-counseling-ca7c6.firebaseapp.com",
  projectId: "career-counseling-ca7c6",
  storageBucket: "career-counseling-ca7c6.firebasestorage.app",
  messagingSenderId: "733586924147",
  appId: "1:733586924147:web:d7efc482459e5ac7840006",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
