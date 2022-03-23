// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOriRDmDXw1-Nxx9ClbZ_acF1f5uFgon0",
  authDomain: "mobile-dev-89388.firebaseapp.com",
  projectId: "mobile-dev-89388",
  storageBucket: "mobile-dev-89388.appspot.com",
  messagingSenderId: "612892947987",
  appId: "1:612892947987:web:76c4390c21c1657eef71e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);