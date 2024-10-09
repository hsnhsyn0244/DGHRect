import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDviCmvmTZhkjepoRKtcwkXdIqB2Ax7Oqo",
    authDomain: "fir-education-d33a2.firebaseapp.com",
    projectId: "fir-education-d33a2",
    storageBucket: "fir-education-d33a2.appspot.com",
    messagingSenderId: "1099418547984",
    appId: "1:1099418547984:web:67efda3c10101557031795"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);