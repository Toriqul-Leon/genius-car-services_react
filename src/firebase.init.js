// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi1uIdVEn75GktJwpsZ5Vx3u1RRe2oiRU",
  authDomain: "genius-car-services-92718.firebaseapp.com",
  projectId: "genius-car-services-92718",
  storageBucket: "genius-car-services-92718.appspot.com",
  messagingSenderId: "545342961201",
  appId: "1:545342961201:web:6adf91756dd9d45e620710",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
