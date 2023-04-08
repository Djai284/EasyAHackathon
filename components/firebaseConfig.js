// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCqAcb5LUMEj9KQj8539g-xXA-HVLjkl3M",

  authDomain: "solis-website.firebaseapp.com",

  projectId: "solis-website",

  storageBucket: "solis-website.appspot.com",

  messagingSenderId: "1088462045373",

  appId: "1:1088462045373:web:3cd8d09923d02c20eaf7d4"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;